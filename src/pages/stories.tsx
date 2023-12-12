import ContentContainer from "@/components/ContentContainer";
import Link from "next/link";
import React from "react";

type Props = {};

const storyNames: string[] = [
  "Jungle",
  "Space",
  "Ocean",
  "Desert",
  "Forest",
  "Castle",
];

function Stories(props: Props) {
  return (
    <ContentContainer>
      <div className="flex justify-center items-center sm:h-screen max-sm:p-6">
        <div className="grid grid-cols-2 gap-6 w-full sm:grid-cols-3">
          {storyNames.map((storyName, index) => {
            const storyUrl = storyName === "Jungle" ? "/stories/jungle" : "";
            return (
              <Link
                key={index}
                href={storyUrl}
                className="bg-lightGray rounded-[40px] aspect-square flex justify-center items-center font-medium text-4xl font-Manrope"
              >
                {storyName}
              </Link>
            );
          })}
        </div>
      </div>
    </ContentContainer>
  );
}

export default Stories;
