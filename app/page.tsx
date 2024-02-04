import { buttonVariants } from "@/components/ui/button";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { IceCream } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex antialiased  flex-col  ">
      <div className="px-6 md:p-10 lg:px-40 md:px-32  ">
        <div className="border px-2 mt-20 w-fit rounded-lg border-none gap-x-1 bg-gray-900 flex items-center justify-center cursor-pointer align-middle">
          <HeartFilledIcon className="text-green-400" />
          <p className="text-green-400 text-center ">welcome</p>
        </div>

        <div>
          <h1 className="uppercase md:text-3xl mt-5 text-xl max-w-full antialiased font-bold tracking-wider flex gap-2">
            elorm is so cool ! <IceCream className="w-8 h-8 text-green-300" />
          </h1>

          <p className="text-gray-400 tracking-wide ">
            hey i&#39;m prince elorm; you can call me elorm, some of my friends
            call me kev. i&#39;m a creative trying every and anything that
            spikes my interest. code, music, drawing, writing...
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
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
