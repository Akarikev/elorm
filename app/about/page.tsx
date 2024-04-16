import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Mail } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { Link } from 'next-view-transitions'

export const metadata: Metadata = {
  title: "elorm ⚡ | about",
  description: "this is elorm.tsx! - everything you need to know  👺",
};

function page() {
  return (
    <div className="flex flex-col min-h-screen mt-5 px-6 md:p-10 lg:px-40 md:px-32 md:mx-10 lg:mx-40">
      <div>
        <div>
          <h1 className="text-xl text-bold font-semibold mt-10 mb-2">
            Elorm.tsx
          </h1>
          <small className=" text-gray-400">Super Creative 👺</small>

          <p className="">
            Born in Ghana, a small country in the West of Africa. A lot of
            things have shaped me, and{" "}
            <span className="font-bold underline">inspired me</span> 🔥
          </p>

          <p className="mt-4">
            {" "}
            i&apos;m motivated to learn anything that looks cool to me!
          </p>

          {/* Image */}

          {/* Image  */}

          <div className="flex justify-center items-center mt-10">
            <div>
              <div className="flex justify-center items-center">
                {/* <h1 className="rounded-md p-1 mb-2 bg-zinc-800 w-fit">
                  🏆 Image of the week
                </h1> */}
              </div>

              <Image
                src="/yow.png"
                width={230}
                height={230}
                alt="elorm pic of the day"
                className="object-fit rounded-md"
              />

              {/* <p className="mt-2 text-center text-gray-400">
                Image by{" "}
                <span className="text-white underline">Cat Sticker Studio</span>
              </p> */}

              <p className="mt-2 text-center text-gray-400 font-medium">
                よー、冷やし続けてね！
              </p>
              <p className="mt-2 text-center text-gray-400">
                yow keep chilling！
              </p>

              {/* <small className="mt-5 text-center text-gray-400">
                  <p className="italic">
                    okay <span className="text-white underline">notgr</span> ,
                    am game
                  </p>
                </small> */}
            </div>
          </div>
          <div className="mt-20">
            <p className="italic text-gray-400 tracking-wide">
              &quot;do what you like most, stay motivated, be your own
              motivation!&quot;
            </p>
            {/* <p className="text-right"> - i made it up</p> */}
          </div>

          <div className="mt-10 bg-green-950 p-4 rounded-md shadow-md">
            <div>
              <div className="flex justify-between">
                <h1 className="font-bold text-xl underline">
                  Frontend Engineer / Developer ?
                </h1>
                <InfoCircledIcon className="w-6 h-6 font-bold" />
              </div>

              <p className="">
                hey there! So, why am I into frontend engineering? honestly, I
                just love seeing those stunning web designs out there on the
                internet! 🌟
                <br />
                <br />
                People sometimes think being a frontend engineer means just
                tweaking a bit of CSS, but there&apos;s actually a whole lot
                more to it! 😄
                <br />
                <br />
                i don&apos;t just stick to the frontend either; i like to dabble
                in the backend too. 💻 In fact, most of my projects are
                full-stack applications! 🚀
                <br />
                <br />
                So, when I say I&apos;m a frontend engineer, don&apos;t take it
                too literally. There&apos;s always more than meets the eye! 😉
              </p>
            </div>
          </div>

          <div className="mt-10">
            <span>Wanna talk, send me an email: </span>
            <Link
              href="mailto:hello@elorm.site"
              className="underline text-gray-200"
            >
              hello@elorm.site
              {/* <Mail /> */}
            </Link>

            <br />
            <br />

            <span className=" bg-yellow-900 ">
              am not only a frontend dev, ive got some hobbies too...
              <br />
              Like music. check out some of music on all streaming platforms{" "}
              <Link
                href={"https://linktr.ee/princeemuse"}
                className="underline"
              >
                here
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
