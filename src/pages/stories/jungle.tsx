import React, { useEffect } from "react";
import ContentContainer from "@/shared/components/organisms/ContentContainer";
import ElDoradoTitleSVG from "@/assets/images/el-dorado-title.svg";
import ElDoradoMapSVG from "@/assets/images/story-levels/el-dorado-map.svg";

import {
  Level,
  LevelEllipse,
} from "@/features/story/presentation/components/LevelEllipse";
import { LevelCategoryEnum } from "@/features/story/presentation/components/LevelCategory";
import { useBackgroundAudioContext } from "@/context/backgroundAudioReducer";
import { useUser } from "@/context/userReducer";

type Props = {};

const audioUrl = "../audio/el-dorado.mp3";

const levels: Omit<Level, "playable">[] = [
  {
    position: "top-[31%] left-[-2%]",
    level: 1,
    type: LevelCategoryEnum.Build,
  },
  { position: "top-[88%] left-[27%]", level: 2, type: LevelCategoryEnum.Build },
  { position: "top-[50%] left-[46%]", level: 3, type: LevelCategoryEnum.Build },
  { position: "top-[-5%] left-[52%]", level: 4, type: LevelCategoryEnum.Build },
  { position: "top-[34%] left-[70%]", level: 5, type: LevelCategoryEnum.Build },
  {
    position: "top-[36%] right-[-2%]",
    level: 6,
    type: LevelCategoryEnum.Build,
  },
];

function Jungle(props: Props) {
  const { user } = useUser();
  const backgroundAudioContext = useBackgroundAudioContext();

  useEffect(() => {
    backgroundAudioContext.dispatch({ type: "SET_AUDIO", url: audioUrl });
  }, []);

  return (
    <ContentContainer
      gapSpacing="gap-[50px]"
      parentClassName="bg-blurry-temple bg-cover"
    >
      <ElDoradoTitleSVG />
      <div className="relative flex items-center justify-center">
        <ElDoradoMapSVG className="w-[80vw]" />
        {levels.map((level, index) => {
          const currentLevelData = user.jungleStory.levels.find(
            (i) => i.id === level.level,
          );
          const previousLevelData = user.jungleStory.levels.find(
            (i) => i.id === level.level - 1,
          );

          const isPlayable =
            previousLevelData?.success || level.level === 1 ? true : false;

          return (
            <LevelEllipse
              key={index}
              playable={isPlayable}
              {...level}
              completed={currentLevelData?.success}
            />
          );
        })}
      </div>
    </ContentContainer>
  );
}

export default Jungle;
