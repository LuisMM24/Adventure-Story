import { AxiosService } from "@/utils/axios";
import { ReaderService } from "@/utils/reader";

export const useHandleImageFile = () => {
  const handleImageFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (file) {
        ReaderService({
          file,
          onload: async (event) => {
            if (event.target && typeof event.target.result === "string") {
              const fileData = event.target.result;

              const response = await AxiosService({
                endpoint: "chat/image",
                data: JSON.stringify(fileData),
                method: "post",
              });
              //TODO save the response in story API
              console.log("file upload response", response);
            }
          },
        });
      }
    }
  };

  return { handleImageFile };
};
