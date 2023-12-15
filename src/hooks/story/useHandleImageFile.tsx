import { useUser } from "@/context/userReducer";
import { AxiosService } from "@/utils/axios";
import { ReaderService } from "@/features/story/services/ReaderService";
import { Message } from "ai";
import { useRouter } from "next/router";
import { useState } from "react";
import { CompressorService } from "@/features/story/services/CompressorService";
import { usePreviewImageFile } from "./usePreviewImageFile";

export const useHandleImageFile = (inputFile: File) => {
  const router = useRouter();

  const { file, imagePreview, handleSubmitTakePicture } =
    usePreviewImageFile(inputFile);

  const [statusMessage, setStatusMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const levelId = Number(router.query.level_id);

  const { user, dispatch } = useUser();
  const currentLevel = user.jungleStory.levels.find((i) => i.id === levelId);

  const CompressorServiceInstance = CompressorService(file);

  const handleUploadFile = () => {
    if (file) {
      setIsLoading(true);
      // STEP 2: Compress the file
      CompressorServiceInstance.compress({
        onSuccess: (compressedFile) => {
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
        onError: (err) => {
          setIsLoading(false);
          setStatusMessage(err.message);
        },
      });
    }
  };

  return {
    handleUploadFile,
    isLoading,
    imagePreview,
    statusMessage,
    handleSubmitTakePicture,
    file,
  };
};
