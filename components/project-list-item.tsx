"use client";

import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";
import { CircleDot, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const StatusBadge = ({ isLive, isInDevelopment }: { isLive: boolean; isInDevelopment: boolean }) => (
  <Badge
    variant="secondary"
    className={cn(
      "text-xs font-medium w-fit shrink-0",
      isInDevelopment
        ? "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-950/20 dark:text-orange-300 dark:border-orange-800"
        : isLive
        ? "bg-green-100 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800"
        : "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800"
    )}
  >
    <CircleDot
      className={cn(
        "h-1.5 w-1.5 mr-1.5 animate-pulse",
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
      ? "Live"
      : "Inactive"}
  </Badge>
);

export const ProjectListItem = ({
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
    contentName === "Tiny - Reminders" || contentName === "Tune Tribe" || contentName === "Kira chat";
  
  const content = (
    <div className="flex items-center gap-4 w-full">
      {/* Icon/Image Placeholder - optional, using first letter for now or just layout */}
      <div className="h-10 w-10 shrink-0 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground font-semibold">
        {contentName.charAt(0)}
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 flex-1 min-w-0">
        <div className="flex items-center gap-3 min-w-[200px]">
          <h3 className="font-medium text-foreground truncate">{contentName}</h3>
          <StatusBadge isLive={isLive} isInDevelopment={isInDevelopment} />
        </div>
        
        <p className="text-sm text-muted-foreground truncate flex-1 hidden md:block">
          {contentDescription}
        </p>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <span className="text-xs text-muted-foreground font-mono hidden sm:block">
          {!isInDevelopment ? new URL(contentLink).hostname : "Request Access"}
        </span>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary transition-colors" />
      </div>
    </div>
  );

  const baseStyles = cn(
    "group flex items-center p-3 rounded-xl border border-transparent hover:border-border/50 hover:bg-muted/30 transition-all duration-200 w-full"
  );

  if (isInDevelopment) {
    return (
      <Link
        href={`mailto:princeelorm17@gmail.com?subject=Exclusive Access Request for ${contentName}&body=Hi Elorm,%0A%0AI would like to request exclusive access to ${contentName}.%0A%0AThanks!`}
        className={baseStyles}
      >
        {content}
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
      {content}
    </Link>
  );
};
