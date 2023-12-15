import { ChatCompletionContentPartText } from "ai/prompts";

export const imageInterpreterSetupMessages: ChatCompletionContentPartText[] = [
  {
    type: "text",
    text: "What does this lego build show in two word?",
  },
];
