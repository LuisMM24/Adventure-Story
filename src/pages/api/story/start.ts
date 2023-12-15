import { OpenAIStream, StreamingTextResponse } from "ai";
import { openAI } from "@/features/openai/domain/openai";
import { storyTellerSetupMessages } from "@/features/story/domain/StoryTeller";
import { OpenAIModelsEnum } from "@/features/openai/domain/openai";

export const runtime = "edge";

export default async function handler(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await openAI.chat.completions.create({
      model: OpenAIModelsEnum.Language,
      stream: true,
      messages: [...storyTellerSetupMessages, ...messages],
    });

    const responseStream = OpenAIStream(response);

    return new StreamingTextResponse(responseStream);
  } catch (error) {
    console.log(error);
  }
}
