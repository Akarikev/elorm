import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "elorm ⚡ | about",
  description: "this is elorm.tsx!",
};

function page() {
  return (
    <div className="flex flex-col min-h-screen mt-5 px-6 md:p-10 lg:px-40 md:px-32 md:mx-10 lg:mx-40">
      <div>
        <div>
          <h1 className="text-xl text-bold mt-10 mb-2">Elorm.tsx</h1>
          <small className=" text-gray-400">Super Creative 👺</small>

          <p className="tracking-wide">
            Born in Ghana, a small country in the West of Africa. A lot of
            things have shaped me, and{" "}
            <span className="font-bold underline">inspired me</span> 🔥
          </p>

          <p className="mt-4">
            {" "}
            i&apos;m motivated to learn anything that looks cool to me!
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
