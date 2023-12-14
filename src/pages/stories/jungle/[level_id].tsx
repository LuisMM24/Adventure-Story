import ContentContainer from "@/components/ContentContainer";
import ImageUploadField from "@/components/ImageUploadField";
import { StoryBox } from "@/components/StoryBox";
import { useUser } from "@/context/userReducer";
import { Message, useChat } from "ai/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Capture from "../../../components/Capture";

type Props = {};

function Chat(props: Props) {
  const router = useRouter();
  const levelId = Number(router.query.level_id);

  const { user, dispatch } = useUser();

  const [file, setFile] = useState<File | null>(null);

  const currentLevel = user.jungleStory.levels.find((i) => i.id === levelId);
  const currentLevelAIMessage = currentLevel?.aiMessage;
  const lastLevel = user.jungleStory.levels.find((i) => i.id === levelId - 1);

  const messageHistory = user.jungleStory.levels
    .map((i) => [i.aiMessage, i.answerMessage])
    .flat()
    .filter(Boolean) as Message[];

  const { messages, append } = useChat({
    api: "/api/story/start",
    initialMessages: messageHistory.slice(0, -1),
    onFinish(message) {
      // Add message to current level state
      const updatedLevels = [
        ...user.jungleStory.levels.filter((i) => i.id !== levelId),
        {
          id: levelId,
          aiMessage: message,
          answerMessage: null,
          success: false,
        },
      ].sort((a, b) => a.id - b.id);
      dispatch({
        type: "SET_USER",
        userData: { name: user.name, jungleStory: { levels: updatedLevels } },
      });
    },
  });

  const handleImageSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      console.log("set image");
      setFile(event.target.files[0]);
    }
  };

  useEffect(() => {
    if (levelId && !currentLevelAIMessage) {
      // TODO: Add append message logic for other levels
      switch (levelId) {
        case 1: {
          append({
            id: `${levelId}`,
            role: "user",
            content:
              "Create a story about finding a hidden treasure in a jungle. Remember to stop generating after posing a challenge!",
          });
          break;
        }
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: {
          if (lastLevel?.answerMessage) {
            append(lastLevel?.answerMessage);
          }

          break;
        }
        default: {
          console.log("No AI logic for level defined.");
          break;
        }
      }
    }
  }, [levelId]);

  return (
    <ContentContainer
      position={file ? "center" : "bottom"}
      parentClassName="bg-el-dorado-level-background bg-cover"
    >
      <StoryBox className="mb-4 h-min min-h-[350px] w-full max-w-[1200px]">
        {file ? (
          <Capture file={file} />
        ) : (
          <>
            <p className="text-shadow-white font-Poppins text-[20px] font-bold text-black">
              {currentLevelAIMessage
                ? currentLevelAIMessage.content
                : messages.length > 0 && messages[messages.length - 1].content}
            </p>
            {currentLevelAIMessage && !currentLevel.answerMessage && (
              <div className="mt-8 flex w-full items-center justify-center">
                <ImageUploadField handleSubmit={handleImageSubmit} />
              </div>
            )}
          </>
        )}
      </StoryBox>
    </ContentContainer>
  );
}

export default Chat;
