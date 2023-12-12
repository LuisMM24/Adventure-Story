import React from "react";
import axios from "axios";
import { ReaderService } from "@/utils/reader";
import { useHandleImageFile } from "@/hooks/useHandleImageFile";
type Props = {};

function UploadField({}: Props) {
  const { handleImageFile } = useHandleImageFile();

  return (
    <>
      <label htmlFor="file">Take a picture</label>
      <input
        id="file"
        type="file"
        name="file"
        accept="image/*"
        onChange={handleImageFile}
        style={{ visibility: "hidden" }}
        className="invisible"
      />
    </>
  );
}

export default UploadField;
