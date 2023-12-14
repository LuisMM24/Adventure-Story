import React, { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

export const StoryBox = (props: PropsWithChildren<Props>) => {
  return (
    <div
      className={` ${props.className} before:shadow-inner-box relative  rounded-[40px] border-2 border-white bg-[#EAD5A4] px-[50px] py-[30px] shadow-button before:absolute before:bottom-[6px] before:left-1/2 before:h-full before:w-full before:-translate-x-1/2 before:transform before:rounded-[38px]`}
    >
      <div
        className="
          flex flex-col items-center justify-center
          "
      >
        {props.children}
      </div>
    </div>
  );
};
