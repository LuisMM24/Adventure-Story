import React from "react";

type Props = {
    children: React.ReactNode;
};

function ContentContainer(props: Props) {
    return <div className="my-0 mx-auto py-0 px-12px max-w-6xl">{props.children}</div>;
}

export default ContentContainer;
