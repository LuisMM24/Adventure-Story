import React, { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

function ContentContainer(props: PropsWithChildren<Props>) {
  return (
    <div className={`my-0 mx-auto py-0 px-12px max-w-6xl ${props.className}`}>
      {props.children}
    </div>
  );
}

export default ContentContainer;
