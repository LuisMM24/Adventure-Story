import { useAudio } from "@/hooks/useAudio";
import React, { PropsWithChildren } from "react";
const audioUrl = "audio/button-pop.mp3";

type Props = { onClick?: () => void };

export const Button = (props: PropsWithChildren<Props>) => {
  const audio = useAudio(audioUrl);

  const handleClick = () => {
    if (audio && audio.paused) {
      audio.play();
    }

    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-[10px] w-button h-button shadow-button  bg-white text-xl text-white relative"
    >
      <div className="rounded-[8px] bg-button shadow-inner-button w-inner-button h-inner-button absolute top-[3px] right-[3px] font-Digitalt flex items-center justify-center">
        {props.children}
      </div>
    </button>
  );
};
