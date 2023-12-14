import ImageUploadField from "@/components/ImageUploadField";
import { useUser } from "@/context/userReducer";
import { AxiosService } from "@/utils/axios";
import { ReaderService } from "@/utils/reader";
import { Message } from "ai";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Compressor from "compressorjs";

type Props = {};

function Capture(props: Props) {
    const router = useRouter();
    const levelId = Number(router.query.level_id);

    const { user, dispatch } = useUser();
    const currentLevel = user.jungleStory.levels.find((i) => i.id === levelId);

    const [statusMessage, setStatusMessage] = useState<string>("");

    return (
        <div>
            <h2>Take a photo of your idea!</h2>
            <button>Capture</button>

            <ImageUploadField handleSubmit={handleImageSubmit} />

            <p>{statusMessage}</p>
        </div>
    );

    function handleImageSubmit(event: React.ChangeEvent<HTMLInputElement>) {
        // STEP 1: Get level answer from image
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            if (file) {
                // STEP 2: Compress the file
                new Compressor(file, {
                    quality: 0.2,
                    convertSize: 5,
                    success(compressedFile) {
                        console.log("Compressed from", file.size, "to", compressedFile.size);
                        ReaderService({
                            file: compressedFile as File,
                            onload: async (event) => {
                                if (event.target && typeof event.target.result === "string") {
                                    const fileData = event.target.result;

                                    const response = await AxiosService({
                                        endpoint: "story/answer",
                                        data: JSON.stringify(fileData),
                                        method: "post",
                                    });

                                    const levelAnswer: string = response.data;

                                    // STEP 3: Save level answer to user state
                                    const answerMessage: Message = {
                                        id: `${currentLevel?.id}-answer`,
                                        role: "user",
                                        content: `The solution to the last challenge is: ${levelAnswer}`,
                                    };
                                    const updatedLevels = [
                                        ...user.jungleStory.levels.filter((i) => i.id !== levelId),
                                        { id: levelId, aiMessage: currentLevel?.aiMessage ?? null, answerMessage: answerMessage, success: true },
                                    ].sort((a, b) => a.id - b.id);

                                    dispatch({ type: "SET_USER", userData: { name: user.name, jungleStory: { levels: updatedLevels } } });

                                    console.log(`Answer for level ${levelId} saved: ${levelAnswer}`);

                                    setStatusMessage(`Answer for level ${levelId} saved: ${levelAnswer}`);
                                }
                            },
                        });
                    },
                    error(err) {
                        console.log(err.message);
                    },
                });
            }
        }
    }
}

export default Capture;
