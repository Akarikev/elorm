import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { Dosis } from "next/font/google";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const dosis = Dosis({
  subsets: ["latin"],
  // weight: "500",
});

export const metadata: Metadata = {
  title: "elorm ⚡",
  description: "hey, elorm is awesome!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          " bg-black antialiased text-white min-h-screen",
          dosis.className
        )}
      >
        <Navbar />
        {children}

        <footer className="border-t mt-10 border-neutral-800 bg-gradient-to-b  backdrop-blur-2xl bg-zinc-800/30  from-inherit p-4">
          <div className="font-light  lg:px-40 md:px-32 md:mx-10 lg:mx-40">
            <h1>&copy; 2024, elorm.tsx</h1>
            <p>Develps Inc</p>
            <p>proudly made in ghana(❁´◡`❁)</p>
            <p>All rights reserved</p>

            <div>
              <Link href={"https://github.com/Akarikev"}>
                <GitHubLogoIcon className="w-6 h-6 mt-3 " />
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
