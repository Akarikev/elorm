import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { featuredContent } from "@/lib/content";
import { Link } from "next-view-transitions";
import { CircleDot, ExternalLink, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const firstRow = featuredContent.slice(0, featuredContent.length / 2);
const secondRow = featuredContent.slice(featuredContent.length / 2);

const MarqueeCard = ({
  contentName,
  isLive,
  contentLink,
  contentDescription,
}: {
  id: number;
  contentName: string;
  contentLink: string;
  contentDescription: string;
  isLive: boolean;
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
              <Badge
                variant="secondary"
                className={cn(
                  "text-xs font-medium",
                  isInDevelopment
                    ? "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-950/20 dark:text-orange-300 dark:border-orange-800"
                    : isLive
                    ? "bg-green-100 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800"
                    : "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800"
                )}
              >
                <CircleDot
                  className={cn(
                    "h-2 w-2 mr-1 animate-pulse",
                    isInDevelopment
                      ? "text-orange-500"
                      : isLive
                      ? "text-green-500"
                      : "text-yellow-500"
                  )}
                />
                {isInDevelopment
                  ? "In Dev"
                  : isLive
                  ? "Live & Active"
                  : "Inactive / Maintenance"}
              </Badge>
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

  if (isInDevelopment) {
    return (
      <Link
        href={`mailto:princeelorm17@gmail.com?subject=Exclusive Access Request for ${contentName}&body=Hi Elorm,%0A%0AI would like to request exclusive access to ${contentName}.%0A%0AThanks!`}
        className={cn(
          "group relative w-80 cursor-pointer overflow-hidden rounded-xl border p-4 transition-all duration-300 hover:scale-105",
          // light styles
          "border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card hover:shadow-lg hover:border-orange-400/50",
          // dark styles
          "dark:border-border/30 dark:bg-card/30 dark:hover:bg-card/80 dark:hover:border-orange-400/30"
        )}
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
      className={cn(
        "group relative w-80 cursor-pointer overflow-hidden rounded-xl border p-4 transition-all duration-300 hover:scale-105",
        // light styles
        "border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card hover:shadow-lg hover:border-primary/50",
        // dark styles
        "dark:border-border/30 dark:bg-card/30 dark:hover:bg-card/80 dark:hover:border-primary/30"
      )}
    >
      {cardContent}
    </Link>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-muted/20 to-background border border-border/50">
      {/* Header */}
      <div className="absolute top-6 left-6 right-6 z-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            <span className="text-sm font-medium text-muted-foreground">
              Featured Projects
            </span>
          </div>
          <Badge variant="outline" className="text-xs">
            {featuredContent.length} projects
          </Badge>
        </div>
      </div>

      {/* First Row */}
      <Marquee pauseOnHover className="[--duration:25s] mb-4">
        {firstRow.map((content) => (
          <MarqueeCard key={content.id} {...content} />
        ))}
      </Marquee>

      {/* Second Row */}
      <Marquee reverse pauseOnHover className="[--duration:25s]">
        {secondRow.map((content) => (
          <MarqueeCard key={content.id} {...content} />
        ))}
      </Marquee>

      {/* Fade Gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background via-background/80 to-transparent"></div>

      {/* Top and bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background/80 to-transparent"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/80 to-transparent"></div>
    </div>
  );
}
