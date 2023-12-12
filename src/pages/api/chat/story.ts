import { OpenAIStream, StreamingTextResponse } from "ai";
import { openAI } from "@/utils/openai";

export const runtime = "edge";

export default async function handler(req: Request) {
    try {
        const { messages } = await req.json();

        const response = await openAI.chat.completions.create({
            model: "gpt-4",
            stream: true,
            messages: [
                {
                    role: "system",
                    content: "You are a children story teller.",
                },
                {
                    role: "user",
                    content:
                        "You tell interactive stories for children. In your stories you should incorporate challenges that require creative LEGO brick solutions. Between each challenge write 5-10 sentences. Whenever you pose a challenge, wait for the child to respond as they will build a solution with LEGO bricks and let you know what they built. Based on the response continue telling the story. An example would be: The challenge is that the character needs to cross a river. The child would then build a boat and tell you the character should use it. Then continue telling the story by saying that the character crosses the river by boat. Never suggest solutions, but rather encourage the child to be creative. The child talking with you is not the character but should help the character with the challenges.",
                },
                {
                    role: "assistant",
                    content: "Ok I will do that.",
                },
                {
                    role: "user",
                    content: "Create a story about finding a hidden treasure in a jungle. Remember to stop generating after posing a challenge!",
                },
                ...messages,
            ],
        });

        const responseStream = OpenAIStream(response);

        return new StreamingTextResponse(responseStream);
    } catch (error) {
        console.log(error);
    }
}
