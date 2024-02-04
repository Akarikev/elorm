import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { Dosis } from "next/font/google";

const dosis = Dosis({
  subsets: ["latin"],
  weight: "500",
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
          "min-h-screen bg-black antialiased text-white",
          dosis.className
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
