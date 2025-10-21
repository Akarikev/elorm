import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    return new Response(apiKey);
  } catch (error) {
    console.error("Error getting API Key:", error);
    return new Response("Failed to get Key", {
      status: 500,
    });
  }
}
