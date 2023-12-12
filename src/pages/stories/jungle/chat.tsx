import TextField from "@/components/TextField";
import UploadField from "@/components/UploadField";
import { useChat } from "ai/react";
import React, { useEffect } from "react";

type Props = {};

function Chat(props: Props) {
    const { messages, input, handleSubmit, handleInputChange, append } = useChat({
        api: "/api/chat/story",
        onResponse(response) {
            console.log(response);
        },
    });

    useEffect(() => {
        return () => {
            append({ role: "assistant", content: "Create a story about finding a hidden treasure in a jungle. Remember to stop generating after posing a challenge!" });
        };
    });

    return (
        <div>
            {messages.map((m) => (
                <div key={m.id} className="whitespace-pre-wrap">
                    {m.role === "user" ? "User: " : "AI: "}
                    {m.content}
                </div>
            ))}

            <form onSubmit={handleSubmit}>
                <TextField name="message" placeholder="Type your message here..." value={input} handleInputChange={handleInputChange} />
            </form>
            <UploadField />
        </div>
    );
}

export default Chat;
