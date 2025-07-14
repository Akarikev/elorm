import { FileWarning, Lollipop, Music } from "lucide-react";
import React from "react";
import Image from "next/image";
import { CandyMusicPeople, candyPeople } from "@/lib/people";
import { Link } from "next-view-transitions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Candies by Prince Elorm",
  description:
    "Discover awesome music recommendations, creative tools, and inspiring individuals curated by Prince Elorm. A collection of digital treasures and creative discoveries.",

  openGraph: {
    title: "Candies by Prince Elorm",
    description:
      "Discover awesome music recommendations, creative tools, and inspiring individuals curated by Prince Elorm. A collection of digital treasures and creative discoveries.",
    url: "https://elorm.xyz/candies",
    images: [
      {
        url: "/api/og?title=Candies by Prince Elorm&description=Creative Discoveries & Recommendations&type=default",
        width: 1200,
        height: 630,
        alt: "Candies by Prince Elorm - Creative Discoveries",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Candies by Prince Elorm",
    description:
      "Discover awesome music recommendations, creative tools, and inspiring individuals curated by Prince Elorm.",
    creator: "@elorm_elom",
    site: "@elorm_elom",
    images: [
      "/api/og?title=Candies by Prince Elorm&description=Creative Discoveries & Recommendations&type=default",
    ],
  },

  keywords: [
    "Prince Elorm candies",
    "Music recommendations",
    "Creative tools",
    "Developer recommendations",
    "Music discovery",
    "Creative inspiration",
    "Curated content",
    "Digital treasures",
    "Creative discoveries",
  ],
};

function page() {
  return (
    <div className="px-6 md:p-10 lg:px-40 md:px-32 md:mx-10 lg:mx-40 min-h-screen mt-16">
      <div>
        <h1 className="font-bold inline-flex items-center gap-2  text-xl tracking-tight md:tracking-tight md:text-3xl">
          Candies <Lollipop className="w-8 h-8 text-red-500" />
        </h1>

        <p className="mt-1 ">
          candies are small treasures of things and awesome individuals
          I&apos;ve stumbled upon online and am excited to share with all of
          you.
        </p>

        {/* chibi image over here */}

        <Image
          src="/gojo.jpg"
          width={230}
          height={230}
          alt="gojo"
          className="object-fit rounded-md object-center mt-6"
        />
        <p className="mt-5">私は非常に興奮しています！</p>
        <small className="mt-1 underline"> gojo is excited!</small>
      </div>

      {/* Candies start here */}
      <div>
        <h1 className=" mt-6 font-bold text-xl tracking-tight md:text-2xl md:tracking-tighter">
          People
        </h1>
        <p className="italic ">here are some cool people</p>

        {/* Candy People */}
        <div>
          {CandyMusicPeople.map((people) => {
            return (
              <div key={people.candyId}>
                <h1 className="font-bold mt-4 inline-flex items-center gap-2 justify-center">
                  {people.candyName}

                  <Music className="w-6 h-6 bg-green-600/10 p-1.5 rounded-md  animate-pulse " />
                </h1>
                <p className="">{people.candyDesc}</p>

                <Link
                  href={`${people.candyLink?.candyLin!}`}
                  target="_blank"
                  className="underline text-sm mt-3 text-slate-600 "
                >
                  <p className="text-sm">{people.candyLink.candyLinkName}</p>
                </Link>
              </div>
            );
          })}

          {/* candy other people */}
          <div>
            {candyPeople.map((people) => {
              return (
                <div key={people.candyId}>
                  <h1 className="font-bold mt-4 inline-flex items-center gap-2 justify-center">
                    {people.candyName}

                    <small className="no-underline bg-blue-600 px-1.5 rounded-md">
                      {people.candyType}
                    </small>
                  </h1>
                  <p className="">{people.candyDesc}</p>

                  <Link
                    href={`${people.candyLinknr}`}
                    target="_blank"
                    className="underline text-sm mt-3 text-slate-500"
                  >
                    {people.candyLinknr}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Music Candy */}
          <div className="mt-16">
            <h1 className=" mt-6 font-bold text-xl tracking-tight md:text-2xl md:tracking-tighter">
              Music
            </h1>
            <p className="mt-2 ">
              this is my go to playlist.
              <br />
              このプレイリストが大好きです
            </p>

            <small className="">
              i tried to be unbiased as possible but...{" "}
            </small>
            <iframe
              className="rounded-2xl mt-6"
              src="https://open.spotify.com/embed/playlist/7fJtQd3BvnDW1hOtVGweeM?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>

          {/* Tools candy */}
          <div>
            <h1 className=" mt-6 font-bold text-xl tracking-tight md:text-2xl md:tracking-tighter">
              Tools
            </h1>

            <p className="mt-2 ">
              here are some tools i use in my development process
              <br />
              これらのツールは素晴らしいです!
            </p>

            <Image
              src="/chibi.gif"
              width={230}
              height={230}
              alt="elorm pic of the day"
              className="object-fit rounded-md object-center mt-6"
            />
            <small className="text-gray-400">うーん、ごめんなさい友達</small>

            <p className="mt-6  bg-red-400/10 p-2 rounded-lg">
              <FileWarning className="w-8 h-8 rounded-md  bg-gray-600 p-1.5 mb-1 mt-2" />
              well... the thing is i use a lotta tools, that i think i might
              exhaust the list... will compile the ones i use frequently
              soon....
              <br />
              ごめん！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
