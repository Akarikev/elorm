import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { Dosis, Inter as FontSans } from "next/font/google";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "next-view-transitions";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import ElormAi from "@/components/elorm-ai";

const dosis = Dosis({
  subsets: ["latin"],
  weight: "500",
});

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Hey👋🏾 => elorm ⚡ ",
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
    "elorm's site",
    "web developer portfolio",
    "elorm developer",
    "elorm dev",
  ],
  twitter: {
    card: "summary_large_image",
    title: "elorm ⚡ dev ",
    description: "hey, elorm is awesome! - super creative 👺 frontend dev",
    creator: "@elorm_elom",
    images: ["https://elorm.xyz/elorm_og.png"],
  },

  openGraph: {
    images: "https://elorm.xyz/elorm_og.png",
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
    <ViewTransitions>
      <html lang="en">
        <head>
          <script
            async
            src="https://0.observe.so/script.js"
            data-app="clwyye4yd003811f43qvdxvhf"
          ></script>
        </head>
        <body
          className={cn(
            " text-[14px] lg:text-[15.5px] antialiased font-sans relative",
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />

            {/* <PendingUI /> */}
            {children}
            <ElormAi />
            <footer className="border-t mt-10      p-4">
              <div className="text-sm   md:px-32 md:mx-10 lg:mx-40">
                <h1>&copy; 2024, elorm.tsx</h1>
                <p>Develps Inc</p>
                <p>proudly Ghanaian(❁´◡`❁)</p>
                <p>All rights reserved</p>
                <p className="text-green-500 font-bold rounded-lg  w-fit ">
                  version 1.1.1a(rose🌹)
                </p>

                <p>{"/|/."}</p>

                <div className=" bg-gray-400/10 w-fit p-0.5 mt-1 rounded-md">
                  design inspired by:
                  <Link
                    href={"https://degreat.co.uk"}
                    className="underline text-sm ml-1"
                  >
                    degreat - GR
                  </Link>
                </div>

                <div className="flex items-center gap-4 mt-3">
                  <Link href={"https://github.com/Akarikev"}>
                    <GitHubLogoIcon className="w-6 h-6  " />
                  </Link>

                  <Badge variant={"default"} className="text-xs">
                    elorm.tsx
                  </Badge>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
