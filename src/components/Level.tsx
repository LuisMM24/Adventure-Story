import Image from "next/image";
import Link from "next/link";
import React from "react";
import LevelEllipse from "@/assets/images/level-ellipse.svg";
import { LevelCategory, LevelCategoryEnum } from "./LevelCategory";

export type Level = {
    position: string;
    level: number;
    type: LevelCategoryEnum;
    playable: boolean;
};

type Props = Level;
export const Level = (props: Props) => {
    return (
        <div className={`absolute ${props.position}`}>
            <Link aria-disabled={!props.playable} className={`flex justify-center items-center relative ${!props.playable && "pointer-events-none cursor-not-allowed"}`} href={`/stories/jungle/${props.level}`}>
                <LevelEllipse />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-shadow-yellow font-medium font-Digitalt text-level">{props.level}</div>
                <div className="absolute bottom-[-15%] right-[-5%]">
                    <LevelCategory type={props.type} />
                </div>
            </Link>
        </div>
    );
};
