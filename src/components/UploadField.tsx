import React, { useState } from "react";
import axios from "axios";
type Props = {};

function UploadField({}: Props) {
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();

        reader.onload = async (event) => {
          if (event.target && typeof event.target.result === "string") {
            const fileData = event.target.result;

            const response = await axios.post(
              "/api/chat/image",
              JSON.stringify(fileData)
            );

            console.log("file upload response", response);
          }
        };

        reader.readAsDataURL(file);
      }
    }
  };
  return (
    <>
      <label htmlFor="file">Take a picture</label>
      <input
        id="file"
        type="file"
        name="file"
        accept="image/*"
        onChange={handleUpload}
        style={{ visibility: "hidden" }}
        className="invisible"
      />
    </>
  );
}

export default UploadField;
