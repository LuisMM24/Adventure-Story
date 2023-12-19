import React from "react";
import RedoSVG from "@/assets/images/redo.svg";

type Props = {
  handleSubmit: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rounded?: boolean;
};

function ImageUploadField(props: Props) {
  return (
    <>
      <label
        className={
          props.rounded
            ? "before:shadow-inner-rounded-button-danger relative flex h-[60px] w-[66px] cursor-pointer items-center justify-center rounded-[100px] border-2 border-white bg-[#FE4D4D] px-4 text-headline font-medium text-white shadow-button before:absolute before:bottom-[6px] before:left-1/2 before:h-full before:w-full before:-translate-x-1/2 before:transform before:rounded-[98px]"
            : "text-shadow-button bg-primary-button relative flex h-button w-fit cursor-pointer items-center justify-center rounded-[8px]  border-2 border-white px-4 text-center text-headline font-medium text-white shadow-button before:absolute before:bottom-[6px] before:left-1/2 before:h-full before:w-full before:-translate-x-1/2 before:transform before:rounded-[6px] before:shadow-inner-button"
        }
        htmlFor="file"
      >
        {props.rounded ? (
          <RedoSVG />
        ) : (
          <div className="mb-1 font-Digitalt">Take a picture</div>
        )}
      </label>
      <input
        id="file"
        type="file"
        name="file"
        accept="image/*"
        onChange={props.handleSubmit}
        className="hidden"
      />
    </>
  );
}

export default ImageUploadField;
