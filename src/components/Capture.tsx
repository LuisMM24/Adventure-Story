import ImageUploadField from "@/components/ImageUploadField";
import { useUser } from "@/context/userReducer";
import { AxiosService } from "@/utils/axios";
import { ReaderService } from "@/utils/reader";
import { Message } from "ai";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Compressor from "compressorjs";

import CheckSVG from "@/assets/images/check.svg";
import Image from "next/image";
import { Loading } from "@/components/Loading";
import { Button } from "@/components/Button";
import Link from "next/link";
import { RoundedButton } from "./RoundedButton";

type Props = {
  file: File;
};

function Capture(props: Props) {
  const router = useRouter();
  const levelId = Number(router.query.level_id);

  const { user, dispatch } = useUser();
  const currentLevel = user.jungleStory.levels.find((i) => i.id === levelId);

  const [statusMessage, setStatusMessage] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string>("");
  const [file, setFile] = useState<File>(props.file);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmitTakePicture = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  useEffect(() => {
    new Compressor(file, {
      quality: 0.2,
      convertSize: 5,
      success(compressedFile) {
        console.log(
          "Compressed from",
          props.file.size,
          "to",
          compressedFile.size,
        );
        ReaderService({
          file: compressedFile as File,
          onload: async (event) => {
            if (event.target && typeof event.target.result === "string") {
              const fileData = event.target.result;
              setImagePreview(fileData);
            }
          },
        });
      },
    });
  }, [file, props.file]);

  return (
    <div className="flex flex-col items-center gap-8 p-8">
      {imagePreview ? (
        <div className="overflow-hidden rounded-[40px]">
          <Image
            width={800}
            height={400}
            src={imagePreview}
            alt="picture preview"
          />
        </div>
      ) : (
        <Loading />
      )}

      {!statusMessage && (
        <div className="flex flex-col gap-4">
          <p className="text-shadow-white font-Poppins text-lg font-extrabold text-black">
            What an amazing sculpture! Do you want to continue or redo?
          </p>
          <div className="flex w-full justify-center gap-8">
            <ImageUploadField handleSubmit={handleSubmitTakePicture} rounded />
            <RoundedButton onClick={handleImageSubmit}>
              <CheckSVG />
            </RoundedButton>
          </div>
        </div>
      )}

      {isLoading && <Loading />}
      {statusMessage && (
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="text-shadow-white font-Poppins text-lg font-extrabold text-black">
            {statusMessage}
          </p>
          <Link href={`/stories/jungle/${levelId}/completed`}>
            <Button>Continue</Button>
          </Link>
        </div>
      )}
    </div>
  );

  function handleImageSubmit() {
    // STEP 1: Get level answer from image
    if (file) {
      setIsLoading(true);
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
                  {
                    id: levelId,
                    aiMessage: currentLevel?.aiMessage ?? null,
                    answerMessage: answerMessage,
                    success: true,
                  },
                ].sort((a, b) => a.id - b.id);

                dispatch({
                  type: "SET_USER",
                  userData: {
                    name: user.name,
                    jungleStory: { levels: updatedLevels },
                  },
                });
                setIsLoading(false);
                setStatusMessage(
                  `Amazing! your answer for level ${levelId} was: ${levelAnswer}`,
                );
              }
            },
          });
        },
        error(err) {
          setIsLoading(false);
          console.log(err.message);
        },
      });
    }
  }
}

export default Capture;
