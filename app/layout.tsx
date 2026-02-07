import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
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
// Compute the current year at runtime. Using a constant here ensures
// that the copyright automatically updates each year without manual
// intervention. This avoids hard‑coding a specific year in the footer.
const currentYear = new Date().getFullYear();


const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elorm.xyz"),
  title: {
    default: "elorm.tsx - Creative Software Engineer",
    template: "%s | elorm.tsx",
  },
  description:
    "elorm - Creative Software Engineer, it feels good when the code works! 😭",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  applicationName: "elorm.tsx Portfolio",
  authors: [{ name: "Prince D. Elorm", url: "https://elorm.xyz" }],
  creator: "Prince D. Elorm",
  publisher: "Prince D. Elorm",

  keywords: [
    "Prince D. Elorm",
    "elorm.tsx",
    "software engineer",
    "software engineer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "All Labs engineer",
    "Ghana developer",
    "African tech",
    "AI solutions",
    "web developer portfolio",
    "hire software engineer",
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
    title: "elorm.tsx - Creative Software Engineer",
    description:
      "elorm - Creative Software Engineer, it feels good when the code works! 😭",
    siteName: "elorm",
    images: [
      {
        url: "/og-image.png", 
        alt: "elorm - Creative Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "elorm.tsx - Creative Software Engineer",
    description:
      "elorm - Creative Software Engineer, it feels good when the code works! 😭",
    creator: "@elorm_elom",
    site: "@elorm_elom",
    images: ["/og-image.png"],
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
    name: "Prince D. Elorm",
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
      url: "https://africanlanguageslab.com",
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
      "Creative Software Engineer, it feels good when the code works! 😭",
  };

  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
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
            instrumentSerif.variable
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

            {/* Minimal Footer */}
            <footer className="border-t border-border/40 mt-20 bg-background">
              <div className="container mx-auto px-6 md:px-32 lg:px-40 py-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 text-sm">
                  
                  <div className="space-y-2">
                    <span className="font-serif text-xl font-medium tracking-tight">elorm.tsx</span>
                    <p className="text-muted-foreground flex items-center gap-1">
                      © {currentYear} • Built with <Heart className="h-3 w-3 text-red-500 fill-current" /> in Ghana
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-8 text-muted-foreground">
                    <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
                    <Link href="/projects" className="hover:text-foreground transition-colors">Projects</Link>
                    <Link href="/blog" className="hover:text-foreground transition-colors">Writing</Link>
                    <Link href="mailto:princeelorm17@gmail.com" className="hover:text-foreground transition-colors">Contact</Link>
                  </div>

                  <div className="flex items-center gap-4">
                     <Link
                        href="https://github.com/Akarikev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <GitHubLogoIcon className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                      <Link
                        href="https://twitter.com/elorm_elom"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <TwitterLogoIcon className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Link>
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
