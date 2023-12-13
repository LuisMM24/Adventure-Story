import React from "react";
import ContentContainer from "@/components/ContentContainer";
import ElDoradoTitleSVG from "@/assets/images/el-dorado-title.svg";
import ElDoradoMapSVG from "@/assets/images/story-levels/el-dorado-map.svg";

import { Level } from "@/components/Level";
import { LevelCategoryEnum } from "@/components/LevelCategory";

type Props = {};

const levels: Level[] = [
  {
    position: "top-[31%] left-[-2%]",
    level: 1,
    type: LevelCategoryEnum.Question,
  },
  { position: "top-[88%] left-[27%]", level: 2, type: LevelCategoryEnum.Build },
  { position: "top-[50%] left-[46%]", level: 3, type: LevelCategoryEnum.Book },
  { position: "top-[-5%] left-[52%]", level: 4, type: LevelCategoryEnum.Build },
  { position: "top-[34%] left-[70%]", level: 5, type: LevelCategoryEnum.Build },
  {
    position: "top-[36%] right-[-2%]",
    level: 6,
    type: LevelCategoryEnum.Build,
  },
];

function Jungle(props: Props) {
  return (
    <ContentContainer
      gapSpacing="gap-[100px]"
      parentClassName="bg-blurry-temple bg-cover"
    >
      <ElDoradoTitleSVG />
      <div className="relative flex justify-center items-center max-w-[100%] max-h-[100%]">
        <ElDoradoMapSVG />
        {levels.map((level, index) => {
          return <Level key={index} {...level} />;
        })}
      </div>
    </ContentContainer>
  );
}

export default Jungle;
