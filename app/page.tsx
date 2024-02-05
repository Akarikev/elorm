import { buttonVariants } from "@/components/ui/button";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { CircleDot, IceCream } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type contentType = {
  id: number;
  contentName: string;
  contentLink: string;
  contentDescription: string;
  isLive: boolean;
}[];

export default function Home() {
  const featuredContent: contentType = [
    {
      id: 1,
      contentName: "reuseonline",
      contentLink: "http://reuseonline.vercel.app",
      contentDescription:
        "React custom hook that checks the online status of a user's device",
      isLive: true,
    },
    {
      id: 2,
      contentName: "reuseonline",
      contentLink: "http://reuseonline.vercel.app",
      contentDescription:
        "React custom hook that checks the online status of a user's device",
      isLive: false,
    },
    {
      id: 3,
      contentName: "reuseonline",
      contentDescription:
        "React custom hook that checks the online status of a user's device",
      contentLink: "http://reuseonline.vercel.app",
      isLive: false,
    },
  ];
  return (
    <div className="min-h-screen">
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
                <span className="font-semibold text-white">
                  frontend engineer
                </span>{" "}
                and a{" "}
                <span className="font-bold text-white">
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
            </div>

            {/* featured */}

            <div>
              <h1 className="font-bold text-xl mt-10 ">Featured</h1>
              {featuredContent.map((content) => {
                return (
                  <div
                    className="border-b mt-5 border-neutral-800 bg-gradient-to-b  backdrop-blur-2xl bg-zinc-800/30 from-inherit p-4 rounded-md"
                    key={content.id}
                  >
                    <div>
                      <div className="border px-2 w-fit rounded-lg border-none gap-x-1 bg-gray-900 flex items-center justify-center cursor-pointer align-middle">
                        <CircleDot className="text-green-400 animate-pulse w-4 h-4" />
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
      </main>

      <footer className="border-t mt-10 border-neutral-800 bg-gradient-to-b  backdrop-blur-2xl bg-zinc-800/30  from-inherit p-4">
        <div className="font-light  lg:px-40 md:px-32 md:mx-10 lg:mx-40">
          <h1>&copy; 2024, elorm.tsx</h1>
          <p>Develps Inc</p>
          <p>proudly made in ghana(❁´◡`❁)</p>
          <p>All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
