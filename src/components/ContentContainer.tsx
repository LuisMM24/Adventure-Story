import React, { PropsWithChildren } from "react";
import { RoundedButton } from "./RoundedButton";
import ArrowLeft from "@/assets/images/arrow-left.svg";
import Cross from "@/assets/images/cross.svg";
import { useRouter } from "next/router";

type Props = {
  parentClassName?: string;
  gapSpacing?: string;
  position?: "top" | "center" | "bottom";
  hasExit?: boolean;
  hasPrevious?: boolean;
};

function ContentContainer(props: PropsWithChildren<Props>) {
  const router = useRouter();

  const elementsPosition = {
    top: "justify-start",
    center: "justify-center",
    bottom: "justify-end",
  };

  const handleGoPreviousPage = () => {
    const paths = router.pathname.split("/");
    router.replace(router.pathname.replace(paths[paths.length - 1], ""));
  };

  return (
    <div className={`${props.parentClassName} relative h-screen`}>
      {router.pathname !== "/" && !router.pathname.includes("[level_id]") && (
        <div className="absolute left-8 top-8">
          <RoundedButton type="secondary" onClick={handleGoPreviousPage}>
            <ArrowLeft />
          </RoundedButton>
        </div>
      )}

      {router.pathname.includes("[level_id]") && (
        <div className="absolute right-8 top-8">
          <RoundedButton
            type="secondary"
            onClick={() => router.replace("/stories/jungle")}
          >
            <Cross />
          </RoundedButton>
        </div>
      )}

      <div
        className={`mx-auto my-0 flex h-full max-w-6xl flex-col items-center px-[12px] py-0 ${
          props.gapSpacing ?? "gap-40"
        } ${elementsPosition[props.position ?? "center"]}`}
      >
        {props.children}
      </div>
    </div>
  );
}

export default ContentContainer;
