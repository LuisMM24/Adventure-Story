import React, { PropsWithChildren } from "react";

type Props = { onClick?: () => void };

export const Button = (props: PropsWithChildren<Props>) => {
  return (
    <button
      onClick={props.onClick}
      className="rounded-[10px] w-button h-button shadow-button  bg-white text-xl text-white relative"
    >
      <div className="rounded-[8px] bg-button shadow-inner-button w-inner-button h-inner-button absolute top-[3px] right-[3px] font-Digitalt flex items-center justify-center">
        {props.children}
      </div>
    </button>
  );
};
