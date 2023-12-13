import React, { PropsWithChildren } from "react";

type Props = {
  parentClassName?: string;
};

function ContentContainer(props: PropsWithChildren<Props>) {
  return (
    <div className={props.parentClassName}>
      <div className={`my-0 mx-auto py-0 px-[12px] max-w-6xl h-screen`}>
        {props.children}
      </div>
    </div>
  );
}

export default ContentContainer;
