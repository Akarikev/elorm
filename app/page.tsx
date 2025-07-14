import {
  CircleDot,
  Hand,
  IceCream,
  Code,
  Coffee,
  Sparkles,
  Github,
  Twitter,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { featuredContent } from "@/lib/content";
import { getCategorizedBlogs } from "@/lib/articles";
import BlogList from "@/components/blog-list";
import { MarqueeDemo } from "@/components/marquee-component";
import ElormAi from "@/components/elorm-ai";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const blogs = getCategorizedBlogs();
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <main className="container mx-auto px-6 md:px-32 lg:px-40">
        {/* Hero Section */}
        <section className="py-20 md:py-24 lg:py-32">
          <div className="text-center space-y-8">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-full text-green-700 dark:text-green-300">
              <Hand className="h-4 w-4 animate-wave" />
              <span className="text-sm font-medium">Hey! いらっしゃいませ</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground">
                elorm is so{" "}
                <span className="inline-flex items-center gap-3">
                  <span className="relative inline-block transform -rotate-2 bg-green-500 text-white px-4 py-2 border-2 border-green-600 shadow-lg">
                    <span className="relative z-10">cool!</span>
                    <div className="absolute inset-0 bg-green-400 opacity-50 transform skew-x-6"></div>
                  </span>
                  <IceCream className="h-12 w-12 md:h-16 md:w-16 text-green-400 animate-pulse" />
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Hey there, it&apos;s elorm. I&apos;m a creative soul diving
                headfirst into all the cool stuff that catches my eye –
                <span className="text-foreground font-medium">
                  {" "}
                  code, music, drawing, writing
                </span>{" "}
                – you name it! ✨
              </p>
            </div>

            {/* Description & CTA */}
            <div className="space-y-6">
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                I&apos;m a self-taught{" "}
                <span className="text-foreground font-semibold underline decoration-green-400 underline-offset-4">
                  software engineer
                </span>{" "}
                at All Labs, working on AI for African languages, and a{" "}
                <span className="text-blue-500 font-semibold underline decoration-blue-400 underline-offset-4">
                  computer science grad!
                </span>
                👨‍🎓
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="group">
                  <Link href="/about">
                    Get to know me
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="group">
                  <Link href="/projects">
                    View my work
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  </Link>
                </Button>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 justify-center mt-8">
                <Badge variant="secondary" className="text-xs">
                  React
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Next.js
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  TypeScript
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Tailwind CSS
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  Node.js
                </Badge>
              </div>
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="mt-16 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative">
                <Image
                  src="/guy.webp"
                  width={300}
                  height={300}
                  alt="elorm - frontend developer"
                  className="rounded-2xl border-2 border-border shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-medium">pov: me every night</p>
                  <p className="text-xs opacity-80">コーディングが大好きです</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Featured Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Here are some of the projects I&apos;m most proud of. Each one
                represents a unique challenge and learning experience.
              </p>
            </div>

            {/* Status Legend */}
            <div className="flex gap-6 justify-center">
              <div className="flex items-center gap-2">
                <CircleDot className="h-4 w-4 text-green-400 animate-pulse" />
                <span className="text-sm text-muted-foreground">
                  Live & Active
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CircleDot className="h-4 w-4 text-yellow-400 animate-pulse" />
                <span className="text-sm text-muted-foreground">
                  Inactive / Maintenance
                </span>
              </div>
            </div>

            {/* Featured Projects Marquee */}
            <div className="mt-12">
              <MarqueeDemo />
            </div>

            <div className="text-center">
              <Button asChild variant="outline" className="group">
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Latest Blog Posts Section */}
        <section className="py-16">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Latest Thoughts
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I write about development, design, and the intersection of
                technology and creativity.
              </p>
            </div>

            <div className="grid gap-6">
              {blogs !== null &&
                Object.keys(blogs).map((blog) => (
                  <BlogList category={blog} blogs={blogs[blog]} key={blog} />
                ))}
            </div>

            <div className="text-center">
              <Button asChild variant="outline" className="group">
                <Link href="/blog">
                  Read All Posts
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Fun Projects Section */}
        <section className="py-16">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Fun Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Some playful experiments and interactive experiences I&apos;ve
                built for fun!
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              <Card className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border/50 hover:border-pink-400/50 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/10 dark:to-rose-950/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <IceCream className="h-5 w-5 text-pink-500" />
                    Candies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    A sweet collection of music recommendations and artists I
                    love sharing.
                  </CardDescription>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="group/btn"
                  >
                    <Link href="/candies">
                      <Sparkles className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Explore Candies
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border/50 hover:border-orange-400/50 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/10 dark:to-amber-950/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Code className="h-5 w-5 text-orange-500" />
                    Roaast Me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Get a fun, AI-generated roast! No hard feelings, just good
                    laughs.
                  </CardDescription>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="group/btn"
                  >
                    <Link href="/roaastme">
                      <Sparkles className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Get Roasted
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Fun Fact Section */}
        <section className="py-16">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/10 dark:to-blue-950/10 border-none">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <Sparkles className="h-5 w-5 text-yellow-500" />
                Fun Fact
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg">
                Also a 10x certified YouTube University frontend engineer, trust
                me bro 😄
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Self-taught and proud of it!
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
