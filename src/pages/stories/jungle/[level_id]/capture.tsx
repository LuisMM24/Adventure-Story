import ImageUploadField from "@/components/ImageUploadField";
import { useUser } from "@/context/userReducer";
import { AxiosService } from "@/utils/axios";
import { ReaderService } from "@/utils/reader";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

function Capture(props: Props) {
    const router = useRouter();
    const levelId = Number(router.query.level_id);

    const { user, dispatch } = useUser();
    const currentLevel = user.jungleStory.levels.find((i) => i.id === levelId);

    return (
        <div>
            <h2>Take a photo of your idea!</h2>
            <button>Capture</button>

            <ImageUploadField handleSubmit={handleImageSubmit} />
        </div>
    );

    function handleImageSubmit(event: React.ChangeEvent<HTMLInputElement>) {
        // STEP 1: Get level answer from image
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            if (file) {
                ReaderService({
                    file,
                    onload: async (event) => {
                        if (event.target && typeof event.target.result === "string") {
                            const fileData = event.target.result;

                            const response = await AxiosService({
                                endpoint: "story/answer",
                                data: JSON.stringify(fileData),
                                method: "post",
                            });

                            const levelAnswer: string = response.data;

                            // STEP 2: Save level answer to user state
                            const updatedLevels = [
                                ...user.jungleStory.levels.filter((i) => i.id !== levelId),
                                { id: levelId, message: currentLevel?.message ?? null, answer: levelAnswer, success: true },
                            ];

                            dispatch({ type: "SET_USER", userData: { name: user.name, jungleStory: { levels: updatedLevels } } });

                            console.log(`Answer for level ${levelId} saved: ${levelAnswer}`);
                        }
                    },
                });
            }
        }
    }
}

export default Capture;