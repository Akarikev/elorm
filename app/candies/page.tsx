import { Lollipop, Music } from "lucide-react";
import React from "react";
import Image from "next/image";
import { CandyPeople } from "@/lib/people";
import { Link } from "next-view-transitions";
function page() {
  return (
    <div className="px-6 md:p-10 lg:px-40 md:px-32 md:mx-10 lg:mx-40 min-h-screen mt-16">
      <div>
        <h1 className="font-bold inline-flex items-center gap-2  text-xl tracking-tight md:tracking-tight md:text-3xl">
          Candies <Lollipop className="w-8 h-8 text-red-500" />
        </h1>

        <p className="mt-1 text-gray-300">
          candies are small treasures of things and awesome individuals
          I&apos;ve stumbled upon online and am excited to share with all of
          you.
        </p>

        {/* chibi image over here */}

        <Image
          src="/gojo.jpg"
          width={230}
          height={230}
          alt="elorm pic of the day"
          className="object-fit rounded-md object-center mt-2"
        />
        <p className="mt-2 ">私は非常に興奮しています！</p>
        <small className="mt-1 underline"> gojo is excited!</small>
      </div>

      {/* Candies start here */}
      <div>
        <h1 className=" mt-6 font-bold text-xl tracking-tight md:text-2xl md:tracking-tighter">
          People
        </h1>
        <p className="italic">here are some cool people</p>

        {/* Candy People */}
        <div>
          {CandyPeople.map((people) => {
            return (
              <div key={people.candyId}>
                <h1 className="font-bold mt-4 inline-flex items-center gap-3 justify-center">
                  {people.candyName}
                  {people.candyType === "Artist" ? (
                    <Music className="w-6 h-6 bg-green-400/10 p-1.5 rounded-md   " />
                  ) : (
                    <small className="no-underline bg-blue-600 px-1.5 rounded-md">
                      {people.candyType}
                    </small>
                  )}
                </h1>
                <p>{people.candyDesc}</p>

                <Link
                  href={`${people.candyLink?.candyLin!}`}
                  target="_blank"
                  className="underline text-sm mt-3 text-slate-400"
                >
                  <p className="text-sm">
                    {" "}
                    {people.candyLink?.candyLin!
                      ? "listen to his music"
                      : people.candyLinknr}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
