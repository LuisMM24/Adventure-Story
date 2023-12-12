import TextField from "@/components/TextField";
import UploadField from "@/components/UploadField";
import { useChat } from "ai/react";
import React from "react";

type Props = {};

function Chat(props: Props) {
    const { messages, input, handleSubmit, handleInputChange } = useChat({
        api: "/api/chat/story",
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
