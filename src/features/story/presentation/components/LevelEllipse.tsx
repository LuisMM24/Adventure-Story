import Link from "next/link";
import React from "react";
import LevelEllipseSVG from "@/assets/images/level-ellipse.svg";
import LevelEllipseSuccessSVG from "@/assets/images/level-ellipse-success.svg";
import Star from "@/assets/images/star.svg";
import { LevelCategory, LevelCategoryEnum } from "./LevelCategory";

export type Level = {
  position: string;
  level: number;
  type: LevelCategoryEnum;
  playable: boolean;
  completed?: boolean;
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
        {props.completed ? <LevelEllipseSuccessSVG /> : <LevelEllipseSVG />}
        <div className="text-shadow-yellow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform font-Digitalt text-level font-medium text-white">
          {props.completed ? <Star /> : props.level}
        </div>
        <div className="absolute bottom-[-15%] right-[-5%]">
          <LevelCategory type={props.type} />
        </div>
      </Link>
    </div>
  );
};
