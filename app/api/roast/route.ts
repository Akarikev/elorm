import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { name } = await request.json();

    const prompt = name
      ? `Generate a creative, witty, and humorous roast for someone named "${name}". Make it playful and funny, not mean-spirited. Keep it to 1-2 sentences. Be creative and original.`
      : `Generate a creative, witty, and humorous roast. Make it playful and funny, not mean-spirited. Keep it to 1-2 sentences. Be creative and original.`;

    const response = await anthropic.messages.create({
      model: "claude-opus-4-0",
      max_tokens: 150,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const textContent = response.content.find((block) => block.type === "text");
    const roast = textContent && "text" in textContent ? textContent.text : "";

    return new Response(JSON.stringify({ roast }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error generating roast:", error);
    return new Response(
      JSON.stringify({ error: "Failed to generate roast" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
