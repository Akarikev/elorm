import Image from "next/image";
import type { Metadata } from "next";
import {
  Code,
  Palette,
  Music,
  PenTool,
  Coffee,
  Heart,
  Sparkles,
  Globe,
  Terminal,
  Gamepad2,
  BookOpen,
  Camera,
  Headphones,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "next-view-transitions";

export const metadata: Metadata = {
  title: "About Prince Elorm",
  description:
    "Get to know Prince Elorm - A creative frontend developer from Ghana, currently working as a software engineer at All Labs building AI solutions for African languages. Passionate about React, Next.js, and modern web technologies.",

  openGraph: {
    title: "About Prince Elorm",
    description:
      "Get to know Prince Elorm - A creative frontend developer from Ghana, currently working as a software engineer at All Labs building AI solutions for African languages.",
    url: "https://elorm.xyz/about",
    images: [
      {
        url: "/api/og?title=About Prince Elorm&description=Creative Developer from Ghana&type=about",
        width: 1200,
        height: 630,
        alt: "About Prince Elorm - Creative Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Prince Elorm",
    description:
      "Get to know Prince Elorm - A creative frontend developer from Ghana, currently working as a software engineer at All Labs building AI solutions for African languages.",
    images: [
      "/api/og?title=About Prince Elorm&description=Creative Developer from Ghana&type=about",
    ],
  },

  keywords: [
    "Prince Elorm",
    "About elorm",
    "Ghana developer",
    "All Labs",
    "African AI solutions",
    "Frontend developer Ghana",
    "Creative developer",
    "Software engineer",
    "React developer Ghana",
    "Next.js developer",
    "African tech talent",
    "Machine learning Africa",
  ],
};

function page() {
  const skills = [
    { name: "Frontend Development", icon: Code, level: "Expert" },
    { name: "UI/UX Design", icon: Palette, level: "Advanced" },
    { name: "Music Production", icon: Music, level: "Intermediate" },
    { name: "Digital Art", icon: PenTool, level: "Intermediate" },
    { name: "Writing", icon: BookOpen, level: "Hobbyist" },
    { name: "Photography", icon: Camera, level: "Hobbyist" },
  ];

  const interests = [
    { name: "Coffee", icon: Coffee, description: "Fuel for coding sessions" },
    { name: "Gaming", icon: Gamepad2, description: "Strategy & indie games" },
    {
      name: "Music",
      icon: Headphones,
      description: "pop, country, folk, hip-hop",
    },
    { name: "Tech", icon: Terminal, description: "Always learning new things" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-6 md:px-32 lg:px-40 py-12">
        {/* Hero Section */}
        <section className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-full text-blue-700 dark:text-blue-300">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Super Creative</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
              Meet{" "}
              <span className="relative inline-block transform -rotate-1 bg-green-500 text-white px-4 py-2 border-2 border-green-600 shadow-lg">
                <span className="relative z-10">elorm.tsx</span>
                <div className="absolute inset-0 bg-green-400 opacity-50 transform skew-x-6"></div>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I&apos;m from Ghana, a beautiful country in West Africa. Currently
              working as a{" "}
              <span className="text-foreground font-semibold underline decoration-green-400 underline-offset-4">
                software engineer at All Labs
              </span>{" "}
              where we&apos;re building enterprise-grade AI solutions for
              African languages. I&apos;ve been lucky enough to have some
              amazing experiences and encounters that have{" "}
              <span className="text-foreground font-semibold underline decoration-green-400 underline-offset-4">
                helped shape me into the person I am today.
              </span>{" "}
              🔥
            </p>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center mt-12">
            <div className="relative group">
              <div className="absolute -inset-2 bg-green-400/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative">
                <Image
                  src="/yow.png"
                  width={280}
                  height={280}
                  alt="elorm - creative developer"
                  className="rounded-2xl border-2 border-border shadow-xl"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-2 text-white text-center">
                  <p className="text-sm font-medium">よー、冷やし続けてね！</p>
                  <p className="text-xs opacity-80">yow keep chilling！</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="space-y-8 mb-16">
          <Card className="border-none bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/10 dark:to-blue-950/10">
            <CardContent className="p-8">
              <p className="text-lg text-center text-muted-foreground italic">
                I&apos;m motivated to learn anything that looks cool to me!
                Always diving headfirst into creative challenges and emerging
                technologies.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Work Section */}
        <section className="space-y-8 mb-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              What I Do
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Currently building the future of AI for African languages
            </p>
          </div>

          <Card className="border border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Software Engineer</CardTitle>
                  <CardDescription className="text-base">
                    All Labs - African Languages Lab
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Working on enterprise-grade AI solutions that unlock
                opportunities for African languages. We&apos;re building
                powerful machine translation systems, custom model training
                platforms, and the largest multimodal datasets for African
                languages.
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Machine Translation Systems</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Custom Model Training</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Multimodal Datasets</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Enterprise Solutions</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="space-y-8 mb-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A diverse set of skills that fuel my creativity and technical
              abilities.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border/50 hover:border-primary/50"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{skill.name}</CardTitle>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {skill.level}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Interests Section */}
        <section className="space-y-8 mb-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Interests & Hobbies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              When I&apos;m not coding, you&apos;ll find me exploring these
              passions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {interests.map((interest, index) => (
              <Card
                key={index}
                className="group text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border/50 hover:border-primary/50"
              >
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <interest.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{interest.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {interest.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="text-center py-16">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/10 dark:to-pink-950/10 border-none max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Heart className="h-6 w-6 text-pink-500" />
                My Philosophy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <blockquote className="text-lg italic text-muted-foreground">
                &quot;Do what you like most, stay motivated, be your own
                motivation!&quot;
              </blockquote>
              <p className="text-sm text-muted-foreground">
                This mindset drives everything I do - from learning new
                technologies to creating meaningful projects.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Let's Talk Section */}
        <section className="text-center py-16">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/10 dark:to-blue-950/10 border-none max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Coffee className="h-6 w-6 text-green-500" />
                Let&apos;s Talk!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Got an interesting project idea? Want to collaborate? Or just
                want to say hi? I&apos;d love to hear from you!
              </p>
              <Button asChild size="lg" className="group">
                <Link
                  href="mailto:princeelorm17@gmail.com?subject=Let's Talk!&body=Hi Elorm,%0A%0A"
                  className="inline-flex items-center gap-2"
                >
                  <Coffee className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  Send me an email
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground">
                princeelorm17@gmail.com
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Fun Facts */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/10 dark:to-cyan-950/10 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Globe className="h-5 w-5 text-blue-500" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Based in beautiful Ghana 🇬🇭</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/10 dark:to-emerald-950/10 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Code className="h-5 w-5 text-green-500" />
                Learning Style
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Self-taught & proud of it! 📚</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/10 dark:to-violet-950/10 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Sparkles className="h-5 w-5 text-purple-500" />
                Fun Fact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">I speak multiple languages! 🗣️</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

export default page;
