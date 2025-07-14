import { cn } from "@/lib/utils";
import React from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
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
  const id = Math.floor(Math.random() * 100 + 1).toString();
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
          return <a {...props} className="underline text-gray-400" />;
        },
        code: ({ node, children, className, ...props }) => {
          const match = /language-(\w+)/.exec(className || "");
          if (match?.length) {
            //!todo: do something... might do this later

            let Icon = TerminalSquareIcon;
            const id = Math.floor(Math.random() * 100 + 1).toString();
            console.log(id);
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
                  <CopyButton id={id} />
                </div>

                <div className="overflow-x-auto w-full">
                  <div className="p-5" id={id}>
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
      }}
      rehypePlugins={[rehypeHighlight]}
    >
      {content}
    </Markdown>
  );
}

export default MarkdownPreview;
