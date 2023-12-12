import React, { PropsWithChildren } from "react";

type Props = { onClick?: () => void };

export const Button = (props: PropsWithChildren<Props>) => {
  return (
    <button
      onClick={props.onClick}
      className="rounded-[20px] px-[72px] py-[12px] w-button h-button shadow-button  bg-white text-xl text-white relative"
    >
      <div className="rounded-[20px] px-[72px] py-[12px] bg-button shadow-inner-button w-inner-button h-inner-button absolute top-[2px] right-[2px] font-Digitalt">
        {props.children}
      </div>
    </button>
  );
};
