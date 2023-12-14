import { openAI } from "@/utils/openai";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const base64Image = req.body;

  const response = await openAI.chat.completions.create({
    model: "gpt-4-vision-preview",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "What does this lego build show in one word?" },
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
