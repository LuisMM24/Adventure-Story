import ImageUploadField from "@/features/story/presentation/components/ImageUploadField";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import { Loading } from "@/shared/components/atoms";
import { Button } from "@/shared/components/molecules";
import Link from "next/link";
import { useHandleImageFile } from "@/hooks/story/useHandleImageFile";
import { ConfirmButton } from "./ConfirmButton";

type Props = {
  file: File;
};

function Capture(props: Props) {
  const router = useRouter();
  const levelId = Number(router.query.level_id);

  const {
    handleSubmitTakePicture,
    isLoading,
    imagePreview,
    handleUploadFile,
    statusMessage,
  } = useHandleImageFile(props.file);

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
            <ConfirmButton onClick={handleUploadFile} />
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
}

export default Capture;
