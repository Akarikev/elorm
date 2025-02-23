import RoastPages from "@/components/roast-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "roaast me 💀  by elorm",
  description: "get roaaasted - no hard feelings! generate your roast",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  applicationName: "roaast me 💀",
  keywords: [
    "roast",
    "roast generator",
    "roast app",
    "nextjs app",
    "jokes app",
  ],
  twitter: {
    card: "summary_large_image",
    title: "roaast me 💀 by elorm ",
    description: "get roaaasted - no hard feelings! generate your roast",
    creator: "@elorm_elom",
    images: ["https://elorm.xyz/roast_og.png"],
  },

  openGraph: {
    images: "https://elorm.xyz/roast_og.png",
    title: "roaast me 💀 by elorm",
    description: "get roaaasted - no hard feelings! generate your roast",
  },
};

function RoastPage() {
  return (
    <div className="flex flex-col min-h-screen mt-5 px-6 md:p-10 lg:px-40 md:px-32 md:mx-10 lg:mx-40">
      <RoastPages />
    </div>
  );
}

export default RoastPage;
