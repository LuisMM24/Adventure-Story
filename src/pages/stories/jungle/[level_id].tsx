import { useUser } from "@/context/userReducer";
import { Message, useChat } from "ai/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {};

function Chat(props: Props) {
    const router = useRouter();
    const levelId = Number(router.query.level_id);

    const { user, dispatch } = useUser();

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
            const updatedLevels = [...user.jungleStory.levels.filter((i) => i.id !== levelId), { id: levelId, aiMessage: message, answerMessage: null, success: false }].sort((a, b) => a.id - b.id);
            dispatch({ type: "SET_USER", userData: { name: user.name, jungleStory: { levels: updatedLevels } } });
        },
    });

    useEffect(() => {
        if (levelId && !currentLevelAIMessage) {
            console.log(`Request for level: ${levelId}`);
            // TODO: Add append message logic for other levels
            switch (levelId) {
                case 1: {
                    append({ id: `${levelId}`, role: "user", content: "Create a story about finding a hidden treasure in a jungle. Remember to stop generating after posing a challenge!" });
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

        return () => {
            // Cleanup logic here
        };
    }, [levelId]);

    return (
        <div>
            <p>Level ID is {levelId}</p>

            <p>{currentLevelAIMessage ? currentLevelAIMessage.content : messages.length > 0 && messages[messages.length - 1].content}</p>

            {currentLevelAIMessage && <Link href={`/stories/jungle/${levelId}/capture`}>Take a picture</Link>}
        </div>
    );
}

export default Chat;
