import { Button } from "@/components/Button";
import ContentContainer from "@/components/ContentContainer";
import { useBackgroundAudioContext } from "@/context/backgroundAudioReducer";
import Link from "next/link";
import React, { useEffect } from "react";

type Props = {};

const storyNames: { name: string; imageClassName: string }[] = [
  { name: "The Quest for El Dorado", imageClassName: "bg-temple" },
  { name: "a trip across the ocean", imageClassName: "bg-boat" },
  { name: "The Wild wild west", imageClassName: "bg-wild-west" },
  { name: "The Wild wild Space", imageClassName: "bg-wild-space" },
  { name: "up the beanstalk", imageClassName: "bg-village" },
  { name: "hiking Viking adventure", imageClassName: "bg-viking" },
];

const audioUrl = "../audio/intro.mp3";

function Stories(props: Props) {
  const backgroundAudioContext = useBackgroundAudioContext();

  useEffect(() => {
    backgroundAudioContext.dispatch({ type: "SET_AUDIO", url: audioUrl });
  }, []);

  return (
    <ContentContainer parentClassName="bg-menu bg-cover bg-center">
      <div className="font-Digitalt text-title text-center text-white line-clamp-2 font-medium letter-spacing tracking-[3.84px] leading-[77px] text-shadow-black-opacity">
        Choose your adventure
      </div>
      <div className="overflow-hidden w-screen pl-4">
        <div className="flex items-start justify-between gap-6 max-sm:p-6 overflow-x-scroll scrollbar-hide">
          {storyNames.map((story, index) => {
            const storyUrl =
              story.name === "The Quest for El Dorado" ? "/stories/jungle" : "";
            return (
              <div
                key={index}
                className={`pb-[24px] bg-lightGray h-[328px] rounded-[40px] aspect-square flex flex-col justify-end items-center font-medium text-4xl border-4 border-white text-white ${story.imageClassName} bg-cover bg-center`}
              >
                <div className="font-Digitalt text-center">{story.name}</div>
                <Link key={index} href={storyUrl}>
                  <Button>Start</Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </ContentContainer>
  );
}

export default Stories;
