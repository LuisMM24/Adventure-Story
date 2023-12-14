import React, { PropsWithChildren } from "react";

type Props = {
  parentClassName?: string;
  gapSpacing?: string;
  position?: "top" | "center" | "bottom";
};

function ContentContainer(props: PropsWithChildren<Props>) {
  const elementsPosition = {
    top: "justify-start",
    center: "justify-center",
    bottom: "justify-end",
  };
  return (
    <div className={props.parentClassName}>
      <div
        className={`mx-auto my-0 flex h-screen max-w-6xl flex-col items-center px-[12px] py-0 ${
          props.gapSpacing ?? "gap-40"
        } ${elementsPosition[props.position ?? "center"]}`}
      >
        {props.children}
      </div>
    </div>
  );
}

export default ContentContainer;
