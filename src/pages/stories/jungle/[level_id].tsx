import { useUser } from "@/context/userReducer";
import { useChat } from "ai/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {};

function Chat(props: Props) {
    const router = useRouter();
    const levelId = Number(router.query.level_id);

    const { user, dispatch } = useUser();
    const currentLevel = user.jungleStory.levels.find((i) => i.id === levelId);
    const existingMessage = currentLevel?.message;

    const { messages, append } = useChat({
        api: "/api/chat/story",
        initialMessages: existingMessage ? [existingMessage] : undefined,
        onResponse(response) {
            console.log(response);
        },
        onFinish(message) {
            // Add message to current level via dispatch
            const updatedLevels = [...user.jungleStory.levels.filter((i) => i.id !== levelId), { id: levelId, message: message, success: false }];
            dispatch({ type: "SET_USER", userData: { name: user.name, jungleStory: { levels: updatedLevels } } });
        },
    });

    useEffect(() => {
        return () => {
            console.log("useEffect");
            if (router.isReady && !existingMessage) {
                // Only for 1st level! Add other append methods via switch statement
                // TODO: Add append message logic for other levels
                append({ role: "assistant", content: "Create a story about finding a hidden treasure in a jungle. Remember to stop generating after posing a challenge!" });
            }
        };
    }, [router.isReady]);

    return (
        <div>
            <p>Level ID is {levelId}</p>

            {messages.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item.content}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Chat;
