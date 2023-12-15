import React, { PropsWithChildren } from "react";

type Props = {
  onClick?: () => void;
  type?: "primary" | "secondary" | "disabled";
};

export const RoundedButton = (props: PropsWithChildren<Props>) => {
  const colorTypeClassName = {
    primary: "bg-[#67EB00] before:shadow-inner-rounded-button-primary",
    secondary: "bg-[#BC9EFF] before:shadow-inner-rounded-button-secondary",
    disabled: "bg-[#818181] before:shadow-inner-rounded-button-disabled",
    danger: "bg-[#FE4D4D] before:shadow-inner-rounded-button-danger",
  };

  return (
    <button
      onClick={props.onClick}
      className={`${
        colorTypeClassName[props.type ?? "primary"]
      } before:shadow-inner-rounded-button relative flex h-[60px] items-center justify-center rounded-[100px] border-2 border-white px-4 text-headline font-medium text-white shadow-button before:absolute before:bottom-[6px] before:left-1/2 before:h-full before:w-full before:-translate-x-1/2 before:transform before:rounded-[98px]`}
    >
      <div className="mb-1">{props.children}</div>
    </button>
  );
};
