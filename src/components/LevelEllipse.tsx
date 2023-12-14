import Link from "next/link";
import React from "react";
import LevelEllipseSVG from "@/assets/images/level-ellipse.svg";
import { LevelCategory, LevelCategoryEnum } from "./LevelCategory";

export type Level = {
  position: string;
  level: number;
  type: LevelCategoryEnum;
  playable: boolean;
};

type Props = Level;
export const LevelEllipse = (props: Props) => {
  return (
    <div className={`absolute ${props.position}`}>
      <Link
        aria-disabled={!props.playable}
        className={` relative flex items-center justify-center  ${
          !props.playable && "pointer-events-none cursor-not-allowed"
        }`}
        href={`/stories/jungle/${props.level}`}
      >
        <LevelEllipseSVG />
        <div className="text-shadow-yellow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform font-Digitalt text-level font-medium text-white">
          {props.level}
        </div>
      </Link>
    </div>
  );
};
