import { Lollipop } from "lucide-react";
import React from "react";
import Image from "next/image";
function page() {
  return (
    <div className="mt-16 px-4 md:px-10 lg:px-24 min-h-screen">
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
      <div></div>
    </div>
  );
}

export default page;
