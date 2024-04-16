import { Lollipop } from "lucide-react";
import React from "react";
import Image from "next/image";
function page() {
  return (
    <div className="mt-16 px-4 md:px-10 lg:px-24 min-h-screen">
      <div>
        <h1 className="font-bold inline-flex items-center gap-2  text-xl tracking-tight md:tracking-tight md:text-3xl">
          Candies <Lollipop className="w-6 h-6" />
        </h1>

        <p className="mt-1 text-gray-300">
          candies are little tit-bits of stuffs and cool people i&apos;ve
          discovered on the internet and sharing with y&apos;all
        </p>

        {/* chibi image over here */}

        <Image
          src="/gojo.jpg"
          width={230}
          height={230}
          alt="elorm pic of the day"
          className="object-fit rounded-md object-center mt-2"
        />
        <small className="mt-1 "> this is gojo </small>
      </div>
    </div>
  );
}

export default page;
