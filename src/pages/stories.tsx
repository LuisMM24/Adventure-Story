import { Button } from "@/components/Button";
import ContentContainer from "@/components/ContentContainer";
import Link from "next/link";
import React from "react";

type Props = {};

const storyNames: { name: string; imageClassName: string }[] = [
  { name: "The Quest for El Dorado", imageClassName: "bg-temple" },
  { name: "a trip across the ocean", imageClassName: "bg-boat" },
  { name: "The Wild wild west", imageClassName: "bg-wild-west" },
  { name: "The Wild wild Space", imageClassName: "bg-wild-space" },
  { name: "up the beanstalk", imageClassName: "bg-village" },
  { name: "hiking Viking adventure", imageClassName: "bg-viking" },
];

function Stories(props: Props) {
  return (
    <ContentContainer parentClassName="bg-menu bg-cover bg-center">
      <div className="flex flex-col justify-center gap-[50px] h-full">
        <div className="font-Digitalt text-title text-center text-white line-clamp-2 font-medium letter-spacing tracking-[3.84px] leading-[77px] text-shadow-black-opacity">
          Choose your adventure
        </div>
        <div className="flex justify-between items-center gap-6 max-sm:p-6 overflow-x-scroll scrollbar-hide">
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
