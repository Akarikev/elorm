import { AITools, devTools, featuredContent } from "@/lib/projects";
import {
  CircleDot,
  ExternalLink,
  Github,
  Globe,
  Code,
  Zap,
  Bot,
} from "lucide-react";
import { Link } from "next-view-transitions";
import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Projects by Prince Elorm",
  description:
    "Explore innovative projects by Prince Elorm including Bonsai (state management library), Tune Tribe (Spotify community app), Tiny-Reminders (React Native app), and more creative web applications.",

  openGraph: {
    title: "Projects by Prince Elorm",
    description:
      "Explore innovative projects by Prince Elorm including Bonsai (state management library), Tune Tribe (Spotify community app), Tiny-Reminders (React Native app), and more creative web applications.",
    url: "https://elorm.xyz/projects",
    images: [
      {
        url: "/api/og?title=Projects by Prince Elorm&description=Innovative Web Applications&type=project",
        width: 1200,
        height: 630,
        alt: "Projects by Prince Elorm - Frontend Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Projects by Prince Elorm",
    description:
      "Explore innovative projects by Prince Elorm including Bonsai (state management library), Tune Tribe (Spotify community app), Tiny-Reminders (React Native app), and more creative web applications.",
    images: [
      "/api/og?title=Projects by Prince Elorm&description=Innovative Web Applications&type=project",
    ],
  },

  keywords: [
    "Prince Elorm projects",
    "React projects",
    "Next.js projects",
    "Bonsai state management",
    "Tune Tribe Spotify",
    "Tiny-Reminders React Native",
    "Web applications",
    "JavaScript projects",
    "TypeScript projects",
    "Frontend portfolio",
    "Developer projects Ghana",
    "Open source projects",
    "Creative web apps",
    "Modern web development",
  ],
};

function ProjectCard({ project, icon: Icon }: { project: any; icon: any }) {
  const isInDevelopment =
    project.contentName === "Tiny - Reminders" ||
    project.contentName === "Tune Tribe";
  const hasLink = !isInDevelopment;

  return (
    <Card className="group h-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 border-border/50 hover:border-primary/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <CardHeader className="relative z-10">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {project.contentName}
              </CardTitle>
              <div className="flex items-center gap-2 mt-1">
                {isInDevelopment ? (
                  <Badge
                    variant="secondary"
                    className="text-xs bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300 border-orange-200 dark:border-orange-800"
                  >
                    <CircleDot className="h-3 w-3 mr-1 animate-pulse" />
                    In Dev
                  </Badge>
                ) : project.isLive ? (
                  <Badge
                    variant="default"
                    className="text-xs bg-green-600 hover:bg-green-700"
                  >
                    <CircleDot className="h-3 w-3 mr-1 animate-pulse" />
                    Live & Active
                  </Badge>
                ) : (
                  <Badge
                    variant="secondary"
                    className="text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800"
                  >
                    <CircleDot className="h-3 w-3 mr-1 animate-pulse" />
                    Inactive / Maintenance
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative z-10">
        <CardDescription className="text-sm leading-relaxed">
          {project.contentDescription}
        </CardDescription>
      </CardContent>

      <CardFooter className="relative z-10 flex justify-between items-center">
        {isInDevelopment ? (
          <Button asChild variant="outline" size="sm" className="group/btn">
            <Link
              href={`mailto:princeelorm17@gmail.com?subject=Exclusive Access Request for ${project.contentName}&body=Hi Elorm,%0A%0AI would like to request exclusive access to ${project.contentName}.%0A%0AThanks!`}
            >
              <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
              Get Exclusive Access
            </Link>
          </Button>
        ) : (
          <Button asChild variant="outline" size="sm" className="group/btn">
            <Link
              href={project.contentLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
              View Project
            </Link>
          </Button>
        )}

        {hasLink && (
          <span className="text-xs text-muted-foreground truncate max-w-[120px]">
            {new URL(project.contentLink).hostname}
          </span>
        )}
        {isInDevelopment && (
          <span className="text-xs text-muted-foreground">
            Email for access
          </span>
        )}
      </CardFooter>
    </Card>
  );
}

function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-6 md:px-32 lg:px-40 py-12">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
              My{" "}
              <span className="relative inline-block transform -rotate-1 bg-green-500 text-white px-4 py-2 border-2 border-green-600 shadow-lg">
                <span className="relative z-10">Projects</span>
                <div className="absolute inset-0 bg-green-400 opacity-50 transform skew-x-6"></div>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I&apos;ve built several projects, but these are the ones I could
              showcase 😁 just proud of them tbh
            </p>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <p className="text-base text-muted-foreground">
              Built with modern technologies like{" "}
              <Link
                href="https://nextjs.org"
                className="text-foreground font-semibold underline decoration-blue-400 underline-offset-4 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js
              </Link>
              ,{" "}
              <Link
                href="https://vitejs.dev"
                className="text-pink-600 font-semibold underline decoration-pink-400 underline-offset-4 hover:text-pink-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vite
              </Link>
              , and{" "}
              <Link
                href="https://tailwindcss.com"
                className="text-blue-600 font-semibold underline decoration-blue-400 underline-offset-4 hover:text-blue-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tailwind CSS
              </Link>
            </p>
            <p className="text-sm text-muted-foreground">
              Because everyone loves Tailwind CSS 💙
            </p>
          </div>
        </div>

        {/* Status Legend */}
        <div className="flex gap-6 justify-center mb-12">
          <div className="flex items-center gap-2">
            <CircleDot className="h-4 w-4 text-green-400 animate-pulse" />
            <span className="text-sm text-muted-foreground">Live & Active</span>
          </div>
          <div className="flex items-center gap-2">
            <CircleDot className="h-4 w-4 text-orange-400 animate-pulse" />
            <span className="text-sm text-muted-foreground">
              In Development
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CircleDot className="h-4 w-4 text-yellow-400 animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Inactive / Maintenance
            </span>
          </div>
        </div>

        {/* Apps Section */}
        <section className="space-y-8 mb-16">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-950/20 rounded-lg">
              <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Web Applications
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredContent.map((project) => (
              <ProjectCard key={project.id} project={project} icon={Globe} />
            ))}
          </div>
        </section>

        {/* Dev Packages Section */}
        <section className="space-y-8 mb-16">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-green-100 dark:bg-green-950/20 rounded-lg">
              <Code className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Developer Packages
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {devTools.map((project) => (
              <ProjectCard key={project.id} project={project} icon={Code} />
            ))}
          </div>
        </section>

        {/* AI Tools Section */}
        <section className="space-y-8 mb-16">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-purple-100 dark:bg-purple-950/20 rounded-lg">
              <Bot className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              AI Applications
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {AITools.map((project) => (
              <ProjectCard key={project.id} project={project} icon={Bot} />
            ))}
          </div>
        </section>

        {/* GitHub CTA */}
        <section className="text-center py-16">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/10 dark:to-blue-950/10 border-none max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Github className="h-6 w-6" />
                More on GitHub
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Want to see more? Check out my GitHub for additional projects,
                experiments, and open source contributions.
              </p>
              <Button asChild size="lg" className="group">
                <Link
                  href="https://github.com/Akarikev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Visit GitHub Profile
                  <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

export default page;
