import { NextApiRequest, NextApiResponse } from "next";
import { createCanvas } from "canvas";
import Jimp from "jimp";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const text = req.query.text as string;
  const canvas = createCanvas(800, 600); // adjust dimensions as needed
  const ctx = canvas.getContext("2d");

  // Set background color (optional)
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Set text properties
  ctx.font = "bold 48px Arial";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(text, 100, 100); // adjust position as needed

  // Convert canvas to buffer
  const buffer = canvas.toBuffer("image/png");

  // Use Jimp to optimize the image
  const image = await Jimp.read(buffer);
  image.resize(800, 600); // adjust dimensions as needed
  image.quality(80); // set JPEG quality
  const optimizedBuffer = await image.getBufferAsync(Jimp.MIME_PNG);

  res.setHeader("Content-Type", "image/png");
  res.setHeader("Content-Disposition", 'attachment; filename="image.png"');
  res.send(optimizedBuffer);
}
