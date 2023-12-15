import { OpenAIModelsEnum } from "@/features/openai/domain/openai";
import { imageInterpreterSetupMessages } from "@/features/story/domain/ImageInterpreter";
import { openAI } from "@/features/openai/domain/openai";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const base64Image = req.body;

  const response = await openAI.chat.completions.create({
    model: OpenAIModelsEnum.ImageInterpreter,
    messages: [
      {
        role: "user",
        content: [
          ...imageInterpreterSetupMessages,
          {
            type: "image_url",
            image_url: {
              url: base64Image,
            },
          },
        ],
      },
    ],
  });

  return res.status(200).json(response.choices[0].message.content);
}
