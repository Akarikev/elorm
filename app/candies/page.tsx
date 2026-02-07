import {
  FileWarning,
  Lollipop,
  Music,
  Users,
  Wrench,
  ExternalLink,
  Heart,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import React from "react";
import Image from "next/image";
import { CandyMusicPeople, candyPeople } from "@/lib/people";
import { Link } from "next-view-transitions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Candies | elorm.tsx",
  description:
    "Discover awesome music recommendations, creative tools, and inspiring individuals curated by Prince Elorm.",
};

function page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-32 lg:px-40 py-24 md:py-32">
        {/* Header */}
        <header className="mb-20 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <h1 className="font-serif text-6xl md:text-8xl font-medium tracking-tight">
              Candies<span className="text-primary">.</span>
            </h1>
            <Lollipop className="w-8 h-8 text-primary/80 animate-pulse hidden md:block" />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
            Small digital treasures and awesome individuals I've stumbled upon.
          </p>
        </header>

        <div className="space-y-24">
          
          {/* Gojo Section - Minimal Feature */}
          <section className="flex items-start gap-6 p-6 bg-muted/20 rounded-xl border border-border/40 backdrop-blur-sm max-w-xl">
             <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                  src="/gojo.jpg"
                  fill
                  alt="gojo"
                  className="object-cover"
                />
             </div>
             <div className="space-y-1">
                <p className="font-serif text-xl">私は非常に興奮しています！</p>
                <p className="text-sm text-muted-foreground font-mono">gojo is excited!</p>
             </div>
          </section>

          {/* People Section */}
          <section>
             <div className="flex items-baseline gap-4 mb-10 border-b border-border/40 pb-4">
               <h2 className="font-serif text-4xl md:text-5xl font-medium">People</h2>
               <span className="text-muted-foreground font-light italic">Inspiring creators</span>
             </div>

             <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
                {/* Music People */}
                {CandyMusicPeople.map((people) => (
                  <div key={people.candyId} className="group space-y-2">
                     <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium group-hover:text-primary transition-colors">{people.candyName}</h3>
                        <Music className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                     </div>
                     <p className="text-muted-foreground font-light text-sm">{people.candyDesc}</p>
                     <Link
                       href={people.candyLink?.candyLin!}
                       target="_blank"
                       className="inline-flex items-center gap-1 text-sm font-mono text-primary hover:underline underline-offset-4 decoration-1 mt-1"
                     >
                       {people.candyLink.candyLinkName} <ArrowUpRight className="w-3 h-3" />
                     </Link>
                  </div>
                ))}

                {/* Other People */}
                {candyPeople.map((people) => (
                  <div key={people.candyId} className="group space-y-2">
                     <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium group-hover:text-primary transition-colors">{people.candyName}</h3>
                        <span className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">{people.candyType}</span>
                     </div>
                     <p className="text-muted-foreground font-light text-sm">{people.candyDesc}</p>
                     <Link
                       href={people.candyLinknr}
                       target="_blank"
                       className="inline-flex items-center gap-1 text-sm font-mono text-primary hover:underline underline-offset-4 decoration-1 mt-1"
                     >
                       Link <ArrowUpRight className="w-3 h-3" />
                     </Link>
                  </div>
                ))}
             </div>
          </section>

          {/* Music Section */}
          <section>
            <div className="flex items-baseline gap-4 mb-10 border-b border-border/40 pb-4">
               <h2 className="font-serif text-4xl md:text-5xl font-medium">Playlist</h2>
               <span className="text-muted-foreground font-light italic">On repeat</span>
             </div>
             
             <div className="grid md:grid-cols-2 gap-8 items-start">
               <div className="space-y-4">
                  <p className="text-lg font-light leading-relaxed">
                    This is my go-to playlist. I tried to be as unbiased as possible.
                  </p>
                  <p className="text-sm font-mono text-muted-foreground">このプレイリストが大好きです</p>
               </div>
               <div className="overflow-hidden rounded-xl border border-border/40 bg-card shadow-sm">
                 <iframe
                   src="https://open.spotify.com/embed/playlist/7fJtQd3BvnDW1hOtVGweeM?utm_source=generator"
                   width="100%"
                   height="352"
                   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                   loading="lazy"
                   className="w-full"
                 />
               </div>
             </div>
          </section>

          {/* Tools Section */}
          <section>
            <div className="flex items-baseline gap-4 mb-10 border-b border-border/40 pb-4">
               <h2 className="font-serif text-4xl md:text-5xl font-medium">Tools</h2>
               <span className="text-muted-foreground font-light italic">Daily drivers</span>
             </div>

             <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-muted/10 border border-border/40 rounded-xl p-6 flex flex-col items-center text-center space-y-4">
                   <div className="relative w-40 h-40 overflow-hidden rounded-lg">
                     <Image
                       src="/chibi.gif"
                       fill
                       alt="elorm pic"
                       className="object-cover"
                     />
                   </div>
                   <p className="text-sm text-muted-foreground font-mono">うーん、ごめんなさい友達</p>
                </div>

                <div className="flex items-center p-6 border border-red-200/30 bg-red-50/50 dark:bg-red-950/10 rounded-xl">
                   <div className="space-y-2">
                      <div className="flex items-center gap-2 text-red-500 font-medium">
                        <FileWarning className="w-4 h-4" />
                        <span>Work in Progress</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        I use a lot of tools, and listing them all might take a while. 
                        I'll compile the ones I use frequently soon.
                      </p>
                      <p className="text-xs font-mono text-muted-foreground alpha">ごめん！</p>
                   </div>
                </div>
             </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default page;
