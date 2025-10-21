import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { Geist, Geist_Mono } from "next/font/google";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Link } from "next-view-transitions";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import ElormAi from "@/components/elorm-ai";
import {
  Heart,
  MapPin,
  Coffee,
  IceCream,
  Sparkles,
  Leaf,
  ExternalLink,
} from "lucide-react";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elorm.xyz"),
  title: {
    default: "elorm.tsx - Creative Frontend Developer",
    template: "%s | elorm.tsx",
  },
  description:
    "Prince Elorm - Creative frontend developer specializing in React, Next.js, and modern web technologies. Software engineer at All Labs building AI solutions for African languages.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  applicationName: "elorm.tsx Portfolio",
  authors: [{ name: "Prince Elorm", url: "https://elorm.xyz" }],
  creator: "Prince Elorm",
  publisher: "Prince Elorm",

  keywords: [
    "Prince Elorm",
    "elorm.tsx",
    "frontend developer",
    "software engineer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "All Labs engineer",
    "Ghana developer",
    "African tech",
    "AI solutions",
    "web developer portfolio",
    "hire frontend developer",
    "creative developer",
    "full stack developer",
    "JavaScript developer",
    "Tailwind CSS",
    "Node.js developer",
    "tech blog",
    "programming tutorials",
    "developer jobs",
    "remote developer",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elorm.xyz",
    title: "elorm.tsx - Creative Frontend Developer",
    description:
      "Prince Elorm - Creative frontend developer specializing in React, Next.js, and modern web technologies. Software engineer at All Labs building AI solutions for African languages.",
    siteName: "elorm.tsx",
    images: [
      {
        url: "/api/og?title=elorm.tsx&description=Creative Frontend Developer&type=default",
        width: 1200,
        height: 630,
        alt: "elorm.tsx - Creative Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "elorm.tsx - Creative Frontend Developer",
    description:
      "Prince Elorm - Creative frontend developer specializing in React, Next.js, and modern web technologies. Software engineer at All Labs building AI solutions for African languages.",
    creator: "@elorm_elom",
    site: "@elorm_elom",
    images: [
      "/api/og?title=elorm.tsx&description=Creative Frontend Developer&type=default",
    ],
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
  classification: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Prince Elorm",
    alternateName: "elorm.tsx",
    url: "https://elorm.xyz",
    image: "https://elorm.xyz/guy.webp",
    sameAs: [
      "https://twitter.com/elorm_elom",
      "https://github.com/Akarikev",
      "https://linkedin.com/in/prince-elorm",
    ],
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "All Labs",
      url: "https://all-labs.com",
    },
    alumniOf: {
      "@type": "Country",
      name: "Ghana",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Web Development",
      "AI Solutions",
      "Machine Learning",
    ],
    description:
      "Creative frontend developer specializing in React, Next.js, and modern web technologies. Software engineer at All Labs building AI solutions for African languages.",
  };

  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            geistSans.variable,
            geistMono.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <ElormAi />

            {/* Modern Footer */}
            <footer className="border-t bg-muted/30 mt-20">
              <div className="container mx-auto px-6 md:px-32 lg:px-40 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Brand Section */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <span className="relative inline-block transform -rotate-1 bg-green-500 text-white px-3 py-1 border-2 border-green-600 shadow-md text-lg font-bold font-mono">
                        <span className="relative z-10">elorm.tsx</span>
                        <div className="absolute inset-0 bg-green-400 opacity-50 transform skew-x-6"></div>
                      </span>
                      <p className="flex items-center gap-1 text-xs">
                        <Leaf className="h-3 w-3 text-green-500" />
                        {"c-bonsai"}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Super creative frontend developer passionate about
                      building beautiful, functional experiences.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Proudly Ghanaian</span>
                      <span className="text-pink-500">(❁´◡`❁)</span>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold">Quick Links</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href="/about"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        About
                      </Link>
                      <Link
                        href="/projects"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Projects
                      </Link>
                      <Link
                        href="/blog"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Blog
                      </Link>
                      <Link
                        href="https://www.africanlanguageslab.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                      >
                        All Labs
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>

                  {/* Fun Projects */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold">Fun Projects</h4>
                    <div className="flex flex-col space-y-3">
                      <Link
                        href="/candies"
                        className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-pink-100 dark:bg-pink-950/20 text-pink-600 dark:text-pink-400 rounded-full text-xs font-medium">
                          <IceCream className="h-3 w-3" />
                          Candies
                        </span>
                      </Link>
                      <Link
                        href="/roaastme"
                        className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400 rounded-full text-xs font-medium">
                          <Sparkles className="h-3 w-3" />
                          Roaast Me
                        </span>
                      </Link>
                    </div>
                  </div>

                  {/* Connect & Credits */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold">Connect</h4>
                    <div className="flex space-x-4">
                      <Link
                        href="https://github.com/Akarikev"
                        className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHubLogoIcon className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                      <Link
                        href="https://twitter.com/elorm_elom"
                        className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TwitterLogoIcon className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      &copy; 2025 Develps Inc. All rights reserved.
                      <span className="inline-flex items-center gap-1">
                        Made with{" "}
                        <Heart
                          className="h-3 w-3 text-red-500"
                          fill="currentColor"
                        />{" "}
                        and <Coffee className="h-3 w-3 text-amber-600" />
                      </span>
                    </p>
                  </div>

                  <div className="text-xs text-muted-foreground font-mono">
                    <p className="flex items-center gap-1">
                      <Leaf className="h-3 w-3 text-green-500" />
                      {"camry bonsai v1.1a"}
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
