import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { featuredContent } from "@/lib/content";
import { Link } from "next-view-transitions";
import { CircleDot } from "lucide-react";
// const reviews = [
//   {
//     name: "Jack",
//     username: "@jack",
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: "https://avatar.vercel.sh/jack",
//   },
//   {
//     name: "Jill",
//     username: "@jill",
//     body: "I don't know what to say. I'm speechless. This is amazing.",
//     img: "https://avatar.vercel.sh/jill",
//   },
//   {
//     name: "John",
//     username: "@john",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/john",
//   },
//   {
//     name: "Jane",
//     username: "@jane",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/jane",
//   },
//   {
//     name: "Jenny",
//     username: "@jenny",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/jenny",
//   },
//   {
//     name: "James",
//     username: "@james",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/james",
//   },
// ];

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
  return (
    <Link
      href={contentLink}
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-2",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* <img className="rounded-full" width="32" height="32" alt="" src={img} /> */}
        <div className="flex flex-col ">
          <figcaption className="text-sm font-medium dark:text-white">
            <div className="inline-flex justify-center items-center gap-3 dark:bg-gray-800/70 bg-slate-400/10 rounded-md px-1 py-0.5">
              {isLive === true ? (
                <CircleDot className="text-green-400 animate-pulse w-4 h-4" />
              ) : (
                <CircleDot className="text-yellow-200 animate-pulse w-4 h-4" />
              )}
              {contentName}
            </div>
          </figcaption>
          <p className="text-xs underline font-medium dark:text-white/40">
            {contentLink}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{contentDescription}</blockquote>
    </Link>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex  -mt-1 h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background dark:md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((content) => (
          <MarqueeCard key={content.contentName} {...content} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((content) => (
          <MarqueeCard key={content.contentLink} {...content} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
