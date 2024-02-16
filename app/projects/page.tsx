import { featuredContent } from "@/lib/content";
import { CircleDot } from "lucide-react";
import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col mt-5 px-6 md:p-10 lg:px-40 md:px-32 md:mx-10 lg:mx-40">
      <div className="mt-10">
        <div>
          {/* Title */}
          <h1>Projects</h1>

          {/* intro */}
          <div className="text-gray-400 ">
            <p className="tracking-wide mt-2">
              I have built several projects, but these are the ones I could
              showcase _: just proud of them tbh
            </p>
          </div>

          {/* projects */}

          <div>
            <div>
              {featuredContent.map((content) => {
                return (
                  <div
                    className="border-b mt-5 border-neutral-800 bg-gradient-to-b  backdrop-blur-2xl bg-zinc-800/30 from-inherit p-4 rounded-md"
                    key={content.id}
                  >
                    <div>
                      <div className="border px-2 w-fit rounded-lg border-none gap-x-1 bg-gray-900 flex items-center justify-center cursor-pointer align-middle">
                        {content.isLive === true ? (
                          <CircleDot className="text-green-400 animate-pulse w-4 h-4" />
                        ) : (
                          <CircleDot className="text-yellow-200 animate-pulse w-4 h-4" />
                        )}

                        <p className="text-green-400 text-center ">
                          {content.contentName}
                        </p>
                      </div>

                      <p className="text-gray-400 mt-2">
                        {content.contentDescription}
                      </p>

                      <Link
                        href={`${content.contentLink}`}
                        className="underline text-base"
                      >
                        {content.contentLink}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
