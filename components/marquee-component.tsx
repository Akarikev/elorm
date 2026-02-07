"use client";

import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { featuredContent } from "@/lib/content";
import { Link } from "next-view-transitions";
import { CircleDot, ExternalLink, Star, LayoutList, LayoutGrid, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const firstRow = featuredContent.slice(0, featuredContent.length / 2);
const secondRow = featuredContent.slice(featuredContent.length / 2);

import { ProjectListItem, StatusBadge } from "@/components/project-list-item";

const MarqueeCard = ({
  contentName,
  isLive,
  contentLink,
  contentDescription,
  className,
}: {
  id: number;
  contentName: string;
  contentLink: string;
  contentDescription: string;
  isLive: boolean;
  className?: string;
}) => {
  const isInDevelopment =
    contentName === "Tiny - Reminders" || contentName === "Tune Tribe";
  const hasValidLink = !isInDevelopment;

  const cardContent = (
    <>
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

      <div className="relative z-10 space-y-3">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <StatusBadge isLive={isLive} isInDevelopment={isInDevelopment} />
            </div>

            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
              {contentName}
            </h3>
          </div>

          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all flex-shrink-0" />
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 group-hover:text-foreground transition-colors">
          {contentDescription}
        </p>

        {/* URL or Email indicator */}
        <div className="pt-2 border-t border-border/50">
          {hasValidLink ? (
            <p className="text-xs text-muted-foreground font-mono truncate">
              {new URL(contentLink).hostname}
            </p>
          ) : (
            <p className="text-xs text-muted-foreground">
              Email for exclusive access
            </p>
          )}
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </>
  );

  const baseStyles = cn(
    "group relative cursor-pointer overflow-hidden rounded-xl border p-4 transition-all duration-300 hover:scale-[1.02]",
    // light styles
    "border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card hover:shadow-lg",
    // dark styles
    "dark:border-border/30 dark:bg-card/30 dark:hover:bg-card/80",
    isInDevelopment 
      ? "hover:border-orange-400/50 dark:hover:border-orange-400/30" 
      : "hover:border-primary/50 dark:hover:border-primary/30",
    className
  );

  if (isInDevelopment) {
    return (
      <Link
        href={`mailto:princeelorm17@gmail.com?subject=Exclusive Access Request for ${contentName}&body=Hi Elorm,%0A%0AI would like to request exclusive access to ${contentName}.%0A%0AThanks!`}
        className={baseStyles}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <Link
      href={contentLink}
      target="_blank"
      rel="noopener noreferrer"
      className={baseStyles}
    >
      {cardContent}
    </Link>
  );
};

export function MarqueeDemo() {
  const [isListView, setIsListView] = useState(true);

  return (
    <div className={cn(
      "relative flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-muted/20 to-background border border-border/50",
      isListView ? "h-auto min-h-[500px]" : "h-[600px]"
    )}>
      {/* Header */}
      <div className={cn(
        "absolute left-6 right-6 z-20 flex items-center justify-between",
        isListView ? "top-6" : "top-6"
      )}>
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-500" />
          <span className="text-sm font-medium text-muted-foreground">
            Featured Projects
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs hidden md:flex">
            {featuredContent.length} projects
          </Badge>
          
          <div className="flex items-center gap-1 bg-muted/50 p-1 rounded-lg border border-border/50">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-6 w-6 rounded-md transition-all",
                isListView ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setIsListView(true)}
            >
              <LayoutList className="h-3.5 w-3.5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-6 w-6 rounded-md transition-all",
                !isListView ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setIsListView(false)}
            >
              <LayoutGrid className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>

      {isListView ? (
        <div className="w-full pt-20 pb-8 px-4 md:px-8 flex flex-col gap-2 overflow-y-auto max-h-[800px] scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
          {featuredContent.map((content) => (
            <ProjectListItem 
              key={content.id} 
              {...content}
            />
          ))}
        </div>
      ) : (
        <>
          {/* First Row */}
          <Marquee pauseOnHover className="[--duration:25s] mb-4 mt-20">
            {firstRow.map((content) => (
              <MarqueeCard key={content.id} {...content} className="w-80" />
            ))}
          </Marquee>

          {/* Second Row */}
          <Marquee reverse pauseOnHover className="[--duration:25s]">
            {secondRow.map((content) => (
              <MarqueeCard key={content.id} {...content} className="w-80" />
            ))}
          </Marquee>

          {/* Fade Gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background via-background/80 to-transparent"></div>

          {/* Top and bottom fade */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background/80 to-transparent"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/80 to-transparent"></div>
        </>
      )}
    </div>
  );
}
