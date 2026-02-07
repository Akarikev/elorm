

import { Suspense } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { getCategorizedBlogs } from "@/lib/articles";
import BlogList from "@/components/blog-list";
import { Button } from "@/components/ui/button";
import { MarqueeDemo } from "@/components/marquee-component";

export default async function Home() {
  const blogs = await getCategorizedBlogs();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <main className="container mx-auto px-6 md:px-32 lg:px-40">
        {/* Hero Section */}
        <section className="py-24 md:py-32 lg:py-40">
          <div className="space-y-10">
            {/* Minimal Greeting */}
            <div className="animate-fade-in">
              <span className="font-mono text-sm text-muted-foreground tracking-wider uppercase">
                hello, I am elorm 
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight leading-[0.9] text-foreground">
              Creative <br className="hidden md:block" />
              <span className="italic opacity-80">Software</span> Engineer
              <span className="text-primary text-6xl md:text-8xl">.</span>
            </h1>

            {/* Intro Text */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              I build accessible, pixel-perfect, and performant web experiences.
              Currently engineering AI solutions for African languages at{" "}
              <span className="text-foreground font-normal border-b border-muted-foreground/30 pb-0.5">
                All Labs
              </span>
              .
            </p>

            {/* CTA Buttons - Minimal */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Link
                href="/projects"
                className="group flex items-center gap-2 text-lg font-medium border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
              >
                View Selected Works
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                More about me
              </Link>
            </div>
          </div>
        </section>

        {/* Selected Projects - Minimal List */}
        <section className="py-20 border-t border-border/40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <h2 className="font-serif text-4xl md:text-5xl">Selected Works</h2>
            <Link
              href="/projects"
              className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              See all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12">
             <MarqueeDemo /> 
          </div>
        </section>

        {/* Latest Thoughts */}
        <section className="py-20 border-t border-border/40">
          <div className="mb-12">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Writing</h2>
            <p className="text-muted-foreground text-lg">
              Thoughts on technology, design, and everything in between.
            </p>
          </div>
          
          <div className="grid gap-8">
             {blogs !== null &&
                Object.keys(blogs).map((blog) => (
                  <Suspense key={blog} fallback={<div className="h-32 animate-pulse bg-muted rounded-lg" />}>
                     {/* Just showing one category or flattening could be better for minimal look, but keeping functionality */}
                    <BlogList category={blog} blogs={blogs[blog]} />
                  </Suspense>
                ))}
          </div>
          
          <div className="mt-10">
             <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              Read all posts
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* Contact */}
        <section className="py-24 border-t border-border/40">
            <h2 className="font-serif text-4xl md:text-6xl mb-8">Let's work together.</h2>
            <Link 
                href="mailto:princeelorm17@gmail.com" 
                className="text-2xl md:text-3xl text-muted-foreground hover:text-foreground transition-colors border-b border-transparent hover:border-foreground pb-1"
            >
                Get in touch
            </Link>
        </section>
      </main>
    </div>
  );
}

function BlogListPreview() {
    return <div>Blog List Placeholder</div>
}
