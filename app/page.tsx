import { buttonVariants } from "@/components/ui/button";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { CircleDot, IceCream } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { featuredContent } from "@/lib/content";

export default function Home() {
  return (
    <div className="">
      <main className="flex antialiased  flex-col  ">
        <div className="px-6 md:p-10 lg:px-40 md:px-32 md:mx-10 lg:mx-40 ">
          <div className="border px-2 mt-20 w-fit rounded-lg border-none gap-x-1 bg-gray-900 flex items-center justify-center cursor-pointer align-middle">
            <HeartFilledIcon className="text-green-400 animate-pulse" />
            <p className="text-green-400 text-center  animate">welcome</p>
          </div>

          <div className="">
            <h1 className="uppercase md:text-3xl mt-5 text-xl max-w-full antialiased font-bold tracking-wider flex gap-2">
              elorm is so cool ! <IceCream className="w-8 h-8 text-green-300" />
            </h1>

            <p className="text-gray-400 tracking-wide ">
              hey there, it&#39;s Prince Elorm, or just elorm if you&#39;re
              feeling chill. Friends like to spice things up and call me Kev! 🚀
              I&#39;m a creative soul diving headfirst into all the cool stuff
              that catches my eye – code, music, drawing, writing – you name it!
              🎨🎶✨
            </p>

            <div>
              <p className="text-gray-400 tracking-wide mt-5">
                am a self taught{" "}
                <span className=" text-white">frontend engineer</span> and a{" "}
                <span className=" text-white">
                  computer science grad!🎉 {""}
                </span>
                wanna get to know me more check
                <Link
                  href={"/about"}
                  className="ml-1 text-white underline"
                  // className={buttonVariants({
                  //   variant: "link",

                  //   className: " text-white ",
                  // })}
                >
                  about.
                </Link>
                or{" "}
                <Link
                  href={"/projects"}
                  className="ml-1 text-white underline"
                  // className={buttonVariants({
                  //   variant: "link",

                  //   className: " text-white ",
                  // })}
                >
                  stuffs am working on or already worked on
                </Link>
              </p>

              <div className="mt-4 text-gray-400">
                <div className="ml-2">
                  i use tools such as{" "}
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
                  :: i mean everyone loves tailwind
                </div>
              </div>
            </div>

            {/* featured */}

            <div>
              <h1 className="font-bold text-xl mt-10 ">Featured</h1>
              <>
                <div className="mt-5 flex gap-4">
                  <div>
                    <CircleDot className="text-green-400 animate-pulse w-4 h-4" />
                    <p>Active</p>
                  </div>
                  <div>
                    <CircleDot className="text-yellow-200 animate-pulse w-4 h-4" />
                    <p>Inactive / Suspended</p>
                  </div>
                </div>
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
              </>
            </div>

            <div className="mt-8">
              <Link href="/projects" className="underline">
                check out some of my other projects
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
