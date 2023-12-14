import { Button } from "@/components/Button";
import ContentContainer from "@/components/ContentContainer";
import { StoryBox } from "@/components/StoryBox";
import { useUser } from "@/context/userReducer";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

function Completed({}: Props) {
  const router = useRouter();
  const levelId = Number(router.query.level_id);

  const { user } = useUser();

  const nextLevel = user.jungleStory.levels.find((i) => i.id === levelId + 1)
    ?.id;

  return (
    <ContentContainer parentClassName="bg-el-dorado-level-background bg-cover bg-center">
      <StoryBox>
        <p className="font-Digitalt text-4xl">COMPLETED</p>
        {nextLevel && (
          <Link className="mt-8" href={`/stories/jungle/${nextLevel}`}>
            <Button>Next chapter</Button>
          </Link>
        )}
        <Link className="mt-8" href="/stories/jungle">
          <Button>Go back to map</Button>
        </Link>
      </StoryBox>
    </ContentContainer>
  );
}

export default Completed;
