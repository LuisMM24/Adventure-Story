import TextField from "@/components/TextField";
import { useChat } from "ai/react";
import { useState } from "react";

export default function Home() {
    const { messages, input, handleSubmit, handleInputChange } = useChat({ api: "/api/chat/story" });

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
        </div>
    );
}
