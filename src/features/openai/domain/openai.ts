import OpenAI from "openai";

export enum OpenAIModelsEnum {
  ImageInterpreter = "gpt-4-vision-preview",
  Language = "gpt-4",
}

export const openAI = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
