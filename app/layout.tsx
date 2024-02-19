import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { Dosis } from "next/font/google";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { PendingUI } from "@/components/ui/pending-ui";
import Image from "next/image";

const dosis = Dosis({
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "elorm ⚡",
  description: "hey, elorm is awesome! - super creative 👺 frontend dev",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  applicationName: "elorm's cool portfolio🎉",
  keywords: [
    "web developer",
    "elorm.tsx",
    "frontend engineer",
    "app developer",
    "hiring jobs developer",
    "web app developer",
    "developer portfolio",
    "Nextjs developer",
    "react developer",
    "hire web developer",
    "frontend developer",
    "prince elorm developer",
    "web developer portfolio",
    "elorm developer",
  ],
  twitter: {
    card: "summary_large_image",
    title: "elorm ⚡ dev ",
    description: "hey, elorm is awesome! - super creative 👺 frontend dev",
    creator: "@elorm_elom",
    images: ["https://elorm.vercel.app/elorm-logo/default.png"],
  },

  openGraph: {
    images: "https://elorm.vercel.app/elorm-logo/default.png",
    title: "elorm ⚡ dev ",
    description: "hey, elorm is awesome! - super creative 👺 frontend dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(" bg-zinc-900 antialiased text-white ", dosis.className)}
      >
        <Navbar />
        {/* <PendingUI /> */}
        {children}

        <footer className="border-t mt-10 border-neutral-800 bg-gradient-to-b  backdrop-blur-2xl bg-zinc-800/30  from-inherit p-4">
          <div className="font-light  lg:px-40 md:px-32 md:mx-10 lg:mx-40">
            <h1>&copy; 2024, elorm.tsx</h1>
            <p>Develps Inc</p>
            <p>proudly Ghanaian(❁´◡`❁)</p>
            <p>All rights reserved</p>
            <p className="text-green-500 font-bold rounded-lg  w-fit ">
              version 1.1.0
            </p>

            <p>{"/|/."}</p>

            <div className="flex gap-4">
              <Link href={"https://github.com/Akarikev"}>
                <GitHubLogoIcon className="w-6 h-6 mt-3 " />
              </Link>

              <Image
                src={"/elorm-logo/vector/default-monochrome-white.svg"}
                width={90}
                height={90}
                alt="elorm-logo"
                className=" w-12 h-12 "
              />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
