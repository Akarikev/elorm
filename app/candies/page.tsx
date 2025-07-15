import {
  FileWarning,
  Lollipop,
  Music,
  Users,
  Wrench,
  ExternalLink,
  Heart,
  Sparkles,
} from "lucide-react";
import React from "react";
import Image from "next/image";
import { CandyMusicPeople, candyPeople } from "@/lib/people";
import { Link } from "next-view-transitions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Candies by Prince Elorm",
  description:
    "Discover awesome music recommendations, creative tools, and inspiring individuals curated by Prince Elorm. A collection of digital treasures and creative discoveries.",
  openGraph: {
    title: "Candies by Prince Elorm",
    description:
      "Discover awesome music recommendations, creative tools, and inspiring individuals curated by Prince Elorm. A collection of digital treasures and creative discoveries.",
    url: "https://elorm.xyz/candies",
    images: [
      {
        url: "/api/og?title=Candies by Prince Elorm&description=Creative Discoveries & Recommendations&type=default",
        width: 1200,
        height: 630,
        alt: "Candies by Prince Elorm - Creative Discoveries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Candies by Prince Elorm",
    description:
      "Discover awesome music recommendations, creative tools, and inspiring individuals curated by Prince Elorm.",
    creator: "@elorm_elom",
    site: "@elorm_elom",
    images: [
      "/api/og?title=Candies by Prince Elorm&description=Creative Discoveries & Recommendations&type=default",
    ],
  },
  keywords: [
    "Prince Elorm candies",
    "Music recommendations",
    "Creative tools",
    "Developer recommendations",
    "Music discovery",
    "Creative inspiration",
    "Curated content",
    "Digital treasures",
    "Creative discoveries",
  ],
};

function page() {
  return (
    <div className="min-h-screen px-4 md:px-10 lg:px-40 py-10 bg-background">
      <div className="w-full max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight font-mono">
              Candies
            </h1>
            <Lollipop className="w-6 h-6 text-primary animate-pulse" />
          </div>
          <p className="text-muted-foreground text-base font-light max-w-2xl mx-auto">
            Small treasures of things and awesome individuals I&apos;ve stumbled
            upon online and am excited to share with all of you.
          </p>
        </header>

        {/* Gojo Section */}
        <div className="flex flex-col items-center space-y-4 bg-muted/30 rounded-xl p-6 border border-border">
          <Image
            src="/gojo.jpg"
            width={200}
            height={200}
            alt="gojo"
            className="rounded-lg object-cover shadow-sm"
          />
          <div className="text-center space-y-2">
            <p className="text-lg font-mono">私は非常に興奮しています！</p>
            <p className="text-sm text-muted-foreground">gojo is excited!</p>
          </div>
        </div>

        {/* People Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-mono">
              People
            </h2>
          </div>
          <p className="text-muted-foreground italic">
            Here are some cool people
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Music People */}
            {CandyMusicPeople.map((people) => (
              <div
                key={people.candyId}
                className="bg-card/50 rounded-lg p-4 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg font-mono">
                    {people.candyName}
                  </h3>
                  <Music className="w-4 h-4 text-green-600 animate-pulse" />
                </div>
                <p className="text-muted-foreground mb-3">{people.candyDesc}</p>
                <Link
                  href={people.candyLink?.candyLin!}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  {people.candyLink.candyLinkName}
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            ))}

            {/* Other People */}
            {candyPeople.map((people) => (
              <div
                key={people.candyId}
                className="bg-card/50 rounded-lg p-4 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg font-mono">
                    {people.candyName}
                  </h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md font-mono">
                    {people.candyType}
                  </span>
                </div>
                <p className="text-muted-foreground mb-3">{people.candyDesc}</p>
                <Link
                  href={people.candyLinknr}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  {people.candyLinknr}
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Music Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-mono">
              Music
            </h2>
          </div>
          <div className="space-y-3">
            <p className="text-muted-foreground">
              This is my go-to playlist.
              <br />
              <span className="font-mono">このプレイリストが大好きです</span>
            </p>
            <p className="text-xs text-muted-foreground">
              I tried to be unbiased as possible but...
            </p>
          </div>

          <div className="bg-card/30 rounded-xl p-4 border border-border">
            <iframe
              className="rounded-lg w-full"
              src="https://open.spotify.com/embed/playlist/7fJtQd3BvnDW1hOtVGweeM?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </section>

        {/* Tools Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Wrench className="w-5 h-5 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-mono">
              Tools
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Here are some tools I use in my development process
              <br />
              <span className="font-mono">これらのツールは素晴らしいです!</span>
            </p>

            <div className="flex flex-col items-center space-y-4 bg-muted/30 rounded-xl p-6 border border-border">
              <Image
                src="/chibi.gif"
                width={200}
                height={200}
                alt="elorm pic of the day"
                className="rounded-lg object-cover shadow-sm"
              />
              <p className="text-sm text-muted-foreground font-mono">
                うーん、ごめんなさい友達
              </p>
            </div>

            <div className="bg-red-400/10 border border-red-200/20 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <FileWarning className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div className="space-y-2">
                  <p className="text-sm">
                    Well... the thing is I use a lotta tools, that I think I
                    might exhaust the list... will compile the ones I use
                    frequently soon....
                  </p>
                  <p className="text-sm font-mono text-muted-foreground">
                    ごめん！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default page;
