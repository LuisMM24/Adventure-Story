import { CompressorService } from "@/features/story/services/CompressorService";
import { ReaderService } from "@/features/story/services/ReaderService";
import { useEffect, useState } from "react";

export const usePreviewImageFile = (inputFile: File) => {
  const [file, setFile] = useState<File>(inputFile);
  const [imagePreview, setImagePreview] = useState<string>("");

  const CompressorServiceInstance = CompressorService(file);
  const handleSubmitTakePicture = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  useEffect(() => {
    CompressorServiceInstance.compress({
      onSuccess: (compressedFile) => {
        console.log("Compressed from", file.size, "to", compressedFile.size);
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
      onError: (error) => {
        console.log("error updating preview", error.message);
      },
    });
  }, [file, inputFile]);

  return { file, imagePreview, handleSubmitTakePicture };
};
