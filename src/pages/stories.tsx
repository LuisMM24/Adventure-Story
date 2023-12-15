import { Button } from "@/components/Button";
import ContentContainer from "@/components/ContentContainer";
import { useBackgroundAudioContext } from "@/context/backgroundAudioReducer";
import Link from "next/link";
import React, { useEffect } from "react";
import Ellipse from "@/assets/images/ellipse-small.svg";

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
    <ContentContainer
      gapSpacing="gap-20"
      parentClassName="bg-menu bg-cover bg-center"
    >
      <div className="letter-spacing text-shadow-black-opacity line-clamp-2 text-center font-Digitalt text-title font-medium leading-[77px] tracking-[3.84px] text-white">
        Choose your adventure
      </div>
      <div className="w-screen overflow-hidden pl-4">
        <div className="scrollbar-hide flex items-start justify-between gap-6 overflow-x-scroll max-sm:p-6">
          {storyNames.map((story, index) => {
            const storyUrl =
              story.name === "The Quest for El Dorado" ? "/stories/jungle" : "";
            return (
              <div
                key={index}
                className={`flex aspect-square h-[328px] flex-col items-center justify-end rounded-[40px] border-4 border-white bg-lightGray pb-[24px] text-4xl font-medium text-white ${story.imageClassName} bg-cover bg-center`}
              >
                <div className="text-center font-Digitalt">{story.name}</div>
                <Link key={index} href={storyUrl}>
                  <Button>Start</Button>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex gap-3">
          {storyNames.map((story) => (
            <Ellipse
              width="24"
              height="28"
              viewBox="0 0 24 28"
              key={story.name}
              color={story.name === storyNames[0].name ? "#67EB00" : "#FDF36D"}
            />
          ))}
        </div>
      </div>
    </ContentContainer>
  );
}

export default Stories;
