import { useAudio } from "@/hooks/useAudio";
import React, { PropsWithChildren } from "react";
const audioUrl = "/audio/button-pop.mp3";

type Props = { onClick?: () => void; type?: "primary" | "secondary" };

export const Button = (props: PropsWithChildren<Props>) => {
  const audio = useAudio(audioUrl);

  const colorTypeClassName = {
    primary: "bg-primary-button",
    secondary: "bg-secondary-button",
  };

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
      className={`text-shadow-button relative flex h-button w-fit items-center justify-center rounded-[8px] border-2 border-white ${
        colorTypeClassName[props.type ?? "primary"]
      } px-4 text-headline font-medium text-white shadow-button before:absolute before:bottom-[6px] before:left-1/2 before:h-full before:w-full before:-translate-x-1/2 before:transform before:rounded-[6px] before:shadow-inner-button`}
    >
      <div className="mb-1 font-Digitalt">{props.children}</div>
    </button>
  );
};
