"use client";
import { cn } from "@/lib/utils";
import React, { useId } from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { AudioPlayer } from "@/components/ui/audio-player";
// import hljs from "highlight.js/lib/core";
// import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/atom-one-dark.min.css";
import { TerminalSquareIcon } from "lucide-react";
import CopyButton from "../ui/copy-button";
function MarkdownPreview({
  content,
  className,
}: {
  content: string;

  className?: string;
}) {
  //   const geLang = hljs.registerLanguage("javascript", javascript);
  const baseId = useId();
  return (
    <Markdown
      className={cn("space-y-6", className)}
      components={{
        h1: ({ node, ...props }) => {
          return (
            <h1
              {...props}
              className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight"
            />
          );
        },
        h2: ({ node, ...props }) => {
          return (
            <h2
              {...props}
              className="text-xl md:text-xl lg:text-2xl font-semibold tracking-tight"
            />
          );
        },
        h3: ({ node, ...props }) => {
          return <h3 {...props} className="text-xl" />;
        },
        a: ({ node, ...props }) => {
          return (
            <a 
              {...props} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-medium underline decoration-blue-400/30 underline-offset-2 text-blue-600 dark:text-blue-400 hover:decoration-blue-600 dark:hover:decoration-blue-400 transition-all duration-200" 
            />
          );
        },
        code: ({ node, children, className, ...props }) => {
          const match = /language-(\w+)/.exec(className || "");
          if (match?.length) {
            //!todo: do something... might do this later

            let Icon = TerminalSquareIcon;
            const uniqueId = `${baseId}-${node?.position?.start.offset || "code"}`;
            return (
              <div className=" border-2 rounded-md">
                <div className="px-5 py-2 border-b flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Icon />

                    <span>
                      {
                        //@ts-ignore

                        node?.data?.meta
                      }
                    </span>
                  </div>
                  <CopyButton id={uniqueId} />
                </div>

                <div className="overflow-x-auto w-full">
                  <div className="p-5" id={uniqueId}>
                    {children}
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <code className="bg-gray-800 text-white rounded-sm w-fit px-2">
                {children}
              </code>
            );
          }
        },
        img: ({ node, ...props }) => {
          return (
            <img 
              {...props} 
              className="rounded-lg w-full h-auto my-8" 
              loading="lazy"
            />
          );
        },
        audio: ({ node, ...props }) => {
          // Extract src from children (source elements)
          const sourceElement = node?.children?.find(
            (child: any) => child.tagName === 'source'
          );
          // Type guard: ensure sourceElement is an Element (has properties) not Text
          const src = (sourceElement && 'properties' in sourceElement) 
            ? sourceElement.properties?.src 
            : props.src || '';
          
          return <AudioPlayer src={src as string} title="Listen to this article" />;
        },
      }}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeHighlight]}
    >
      {content}
    </Markdown>
  );
}

export default MarkdownPreview;
