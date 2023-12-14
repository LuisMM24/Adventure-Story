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
      className="relative h-button w-full max-w-full rounded-[8px] border-2 border-white bg-white bg-button px-4 text-center text-xl  text-white shadow-button before:absolute before:bottom-[6px] before:left-1/2 before:h-full before:w-full before:-translate-x-1/2 before:transform before:rounded-[6px] before:shadow-inner-button"
    >
      <div className="mb-1 font-Digitalt">{props.children}</div>
    </button>
  );
};
{
  /* <div className="rounded-[8px] bg-button shadow-inner-button w-inner-button h-inner-button absolute top-[3px] right-[3px] font-Digitalt flex items-center justify-center">
       
       </div> */
}
