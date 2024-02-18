import { AITools, devTools, featuredContent } from "@/lib/projects";
import { CircleDot } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "elorm ⚡ | Projects",
  description: "hey, elorm's Projects!",
};

function page() {
  return (
    <div className="flex flex-col min-h-screen mt-5 px-6 md:p-10 lg:px-40 md:px-32 md:mx-10 lg:mx-40">
      <div className="mt-10">
        <div>
          {/* Title */}
          <h1 className="text-xl">Projects</h1>

          {/* intro */}
          <div className="text-gray-400 ">
            <p className="tracking-wider mt-2">
              I&#39;ve built several projects, but these are the ones I could
              showcase _: just proud of them tbh
            </p>
          </div>

          {/* tools used */}
          <div className="mt-4 text-gray-400">
            <div className="">
              I use tools such as{" "}
              <Link
                href={`https://nextjs.org`}
                className="underline text-white ml-1"
              >
                Nextjs,
              </Link>
              <Link
                href={`https://vitejs.dev`}
                className="underline text-white ml-1 mr-1"
              >
                Vitejs,
              </Link>
              and
              <Link
                href={`https://tailwindcss.com`}
                className="underline text-white ml-1"
              >
                tailwind,
              </Link>
              <span></span> :: i mean everyone loves tailwind
            </div>
          </div>

          {/* projects */}

          <div>
            <div>
              <h1 className="text-xl mt-10">Apps</h1>
              {featuredContent.map((content) => {
                return (
                  <div
                    className="border-b mt-5 border-neutral-800 bg-gradient-to-b  backdrop-blur-2xl bg-zinc-800/30 from-inherit p-4 rounded-md"
                    key={content.id}
                  >
                    <div>
                      <div className="border px-2 w-fit rounded-lg border-none gap-x-1 bg-gray-800 flex items-center justify-center cursor-pointer align-middle">
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

            {/* dev packages */}
            <div className="mt-10">
              <h1 className="text-xl mt-6 ">Dev Packages</h1>

              {devTools.map((devTool) => {
                return (
                  <div
                    className="border-b mt-5 border-neutral-800 bg-gradient-to-b  backdrop-blur-2xl bg-zinc-800/30 from-inherit p-4 rounded-md"
                    key={devTool.id}
                  >
                    <div>
                      <div className="border px-2 w-fit rounded-lg border-none gap-x-1 bg-gray-900 flex items-center justify-center cursor-pointer align-middle">
                        {devTool.isLive === true ? (
                          <CircleDot className="text-green-400 animate-pulse w-4 h-4" />
                        ) : (
                          <CircleDot className="text-yellow-200 animate-pulse w-4 h-4" />
                        )}

                        <p className="text-green-400 text-center ">
                          {devTool.contentName}
                        </p>
                      </div>

                      <p className="text-gray-400 mt-2">
                        {devTool.contentDescription}
                      </p>

                      <Link
                        href={`${devTool.contentLink}`}
                        className="underline text-base"
                      >
                        {devTool.contentLink}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* AI Tools */}

          <div>
            <h1 className="text-xl mt-10">AI Apps</h1>
            {AITools.map((content) => {
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

          <div className="mt-10 text-gray-400">
            <div>
              check my{" "}
              <span>
                <Link
                  href="https://github.com/Akarikev"
                  className="underline text-white"
                >
                  github
                </Link>
              </span>{" "}
              to see other cool stuffs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
