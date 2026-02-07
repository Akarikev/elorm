import { AITools, devTools, featuredContent } from "@/lib/projects";
import { Link } from "next-view-transitions";
import type { Metadata } from "next";
import { ProjectsSection } from "@/components/projects-layout";
import { Globe, Code, Bot, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects by Prince Elorm",
  description:
    "Explore innovative projects by Prince Elorm including Bonsai (state management library), Tune Tribe (Spotify community app), Tiny-Reminders (React Native app), and more creative web applications.",
};

export default function page() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <main className="container mx-auto px-6 md:px-32 lg:px-40 py-24 md:py-32">
        {/* Header Section */}
        <div className="space-y-6 mb-20 animate-fade-in">
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground">
              Selected <br /> Projects<span className="text-primary">.</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              A collection of web applications, developer tools, and AI experiments I've built.
            </p>
        </div>

        {/* Web Applications */}
        <ProjectsSection 
            title="Web Applications" 
            projects={featuredContent} 
            iconName="globe" 
        />

        {/* Developer Tools */}
        <ProjectsSection 
            title="Developer Tools" 
            projects={devTools} 
            iconName="code" 
        />

        {/* AI Experiments */}
        <ProjectsSection 
            title="AI Experiments" 
            projects={AITools} 
            iconName="bot" 
        />

        {/* GitHub CTA */}
        <section className="py-12 border-t border-border/40 text-center">
             <Link
                href="https://github.com/Akarikev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-2xl font-serif hover:underline underline-offset-4 decoration-1 transition-all"
            >
                More on GitHub <ExternalLink className="h-5 w-5" />
            </Link>
        </section>
      </main>
    </div>
  );
}


