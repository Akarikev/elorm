import Image from "next/image";
import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import { ArrowUpRight, Github, Twitter, Linkedin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "About | elorm.tsx",
  description: "Creative software engineer from Ghana, building AI solutions for African languages.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-32 lg:px-40 py-24 md:py-32">
        {/* Header */}
        <header className="mb-20 max-w-3xl">
          <h1 className="font-serif text-6xl md:text-8xl font-medium tracking-tight mb-8">
            About<span className="text-primary">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
            I'm Prince Elorm, a software engineer involved in the African AI ecosystem. 
            I craft accessible, pixel-perfect web experiences and build tools for the future.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Main Content */}
          <div className="lg:col-span-12 space-y-20">
            
            {/* Intro */}
            <section className="space-y-8">
               <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground font-light">
                 <p>
                   I'm from Ghana, working as a <strong className="text-foreground font-medium">Software Engineer at All Labs</strong>. 
                   We are building enterprise-grade AI solutions to unlock opportunities for African languages.
                 </p>
                 <p>
                   My journey has been defined by a curiosity to learn anything that looks cool. 
                   From UI/UX design to music production, I believe in being your own motivation.
                 </p>
               </div>
            </section>

            {/* Experience / What I do */}
            <section>
              <h2 className="font-serif text-3xl md:text-4xl mb-8">What I Do</h2>
              <div className="border-t border-border/40">
                <div className="py-6 flex flex-col md:flex-row md:items-start justify-between gap-4 group">
                   <div className="md:w-1/3">
                      <h3 className="text-lg font-medium">All Labs</h3>
                      <span className="text-sm text-muted-foreground font-mono">2024 — Present</span>
                   </div>
                   <div className="md:w-2/3 space-y-2">
                      <h4 className="text-xl font-medium">Software Engineer</h4>
                      <p className="text-muted-foreground font-light">
                        Building machine translation systems and multimodal datasets for African languages.
                      </p>
                   </div>
                </div>
              </div>
            </section>

            {/* Simple Skills List */}
            <section>
               <h2 className="font-serif text-3xl md:text-4xl mb-8">Toolbox</h2>
               <div className="flex flex-wrap gap-x-12 gap-y-4 text-muted-foreground text-lg">
                  <span>React / Next.js</span>
                  <span>React Native / Expo</span>
                  <span>TypeScript</span>
                  <span>Tailwind CSS</span>
                  <span>Node.js</span>
                  <span>UI/UX Design</span>
                  <span>AI/ML Integration</span>
               </div>
            </section>

            {/* Connect */}
             <section className="pt-8">
               <h2 className="font-serif text-3xl md:text-4xl mb-8">Connect</h2>
               <div className="flex flex-wrap gap-6">
                  <Link href="mailto:princeelorm17@gmail.com" className="flex items-center gap-2 text-lg hover:underline underline-offset-4 decoration-1">
                    Email <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                  <Link href="https://github.com/Akarikev" target="_blank" className="flex items-center gap-2 text-lg hover:underline underline-offset-4 decoration-1">
                    GitHub <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                  <Link href="https://twitter.com/elorm_elom" target="_blank" className="flex items-center gap-2 text-lg hover:underline underline-offset-4 decoration-1">
                    Twitter <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
               </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
