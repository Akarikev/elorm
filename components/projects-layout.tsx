"use client";

import { useState } from "react";
import { LayoutGrid, LayoutList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ProjectListItem } from "@/components/project-list-item";
import { Link } from "next-view-transitions";
import { ExternalLink } from "lucide-react";
import { Globe, Code, Bot } from "lucide-react";

const ICON_MAP = {
  globe: Globe,
  code: Code,
  bot: Bot,
};

export type IconName = keyof typeof ICON_MAP;

export function ProjectCard({ project, iconName }: { project: any; iconName: IconName }) {
  const isInDevelopment =
    project.contentName === "Tiny - Reminders" ||
    project.contentName === "Tune Tribe" ||
    project.contentName === "Kira chat";

  const Icon = ICON_MAP[iconName] || Globe;

  return (
    <Link
      href={
        isInDevelopment
          ? `mailto:hi@elorm.xyz?subject=Request Access to ${project.contentName}&body=Hi Elorm,%0D%0A%0D%0AI'm interested in trying out ${project.contentName}. could you please grant me access?%0D%0A%0D%0AThanks!`
          : project.contentLink
      }
      target={isInDevelopment ? undefined : "_blank"}
      className={cn(
        "group block p-6 h-full border border-border/40 hover:border-foreground/20 bg-card hover:bg-muted/30 transition-all duration-300 rounded-lg",
        isInDevelopment && "cursor-pointer"
      )}
    >
      <div className="flex flex-col h-full space-y-4">
        <div className="flex items-start justify-between">
          <div className="p-2 bg-muted rounded-md group-hover:bg-background transition-colors">
            <Icon className="h-5 w-5 text-foreground" />
          </div>
          <div className="flex items-center gap-2">
             {isInDevelopment && (
                <span className="flex h-2 w-2 rounded-full bg-orange-400" title="In Development" />
             )}
             {project.isLive && (
                <span className="flex h-2 w-2 rounded-full bg-green-500" title="Live" />
             )}
              {!project.isLive && !isInDevelopment && (
                <span className="flex h-2 w-2 rounded-full bg-yellow-400" title="Maintenance" />
             )}
          </div>
        </div>
        
        <div className="space-y-2">
            <h3 className="font-serif text-xl font-medium group-hover:underline decoration-1 underline-offset-4">
                {project.contentName}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {project.contentDescription}
            </p>
        </div>

        <div className="mt-auto pt-4 flex items-center text-xs text-muted-foreground font-medium uppercase tracking-wider">
            {isInDevelopment ? (
                <span>In Development</span>
            ) : (
                <span className="flex items-center gap-1 group-hover:text-foreground transition-colors">
                    View Project <ExternalLink className="h-3 w-3" />
                </span>
            )}
        </div>
      </div>
    </Link>
  );
}

export function ProjectsSection({ 
    title, 
    projects, 
    iconName 
}: { 
    title: string; 
    projects: any[]; 
    iconName: IconName 
}) {
    const [isListView, setIsListView] = useState(false); // Default to Cards (false)

    return (
        <section className="space-y-6 mb-24 animate-fade-in">
            <div className="flex items-center justify-between border-b border-border/40 pb-4">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                    {title}
                </h2>
                
                <div className="flex items-center gap-1 bg-muted/50 p-1 rounded-lg border border-border/50">
                    <Button
                        variant="ghost"
                        size="icon"
                        className={cn(
                            "h-8 w-8 rounded-md transition-all",
                            isListView ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
                        )}
                        onClick={() => setIsListView(true)}
                    >
                        <LayoutList className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className={cn(
                            "h-8 w-8 rounded-md transition-all",
                            !isListView ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
                        )}
                        onClick={() => setIsListView(false)}
                    >
                        <LayoutGrid className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {isListView ? (
                <div className="flex flex-col gap-2">
                    {projects.map((project) => (
                        <ProjectListItem key={project.id} {...project} />
                    ))}
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} iconName={iconName} />
                    ))}
                </div>
            )}
        </section>
    );
}
