import { CircleDot, Hand, IceCream } from "lucide-react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { featuredContent } from "@/lib/content";
import { getCategorizedBlogs } from "@/lib/articles";
import BlogList from "@/components/blog-list";
import { MarqueeDemo } from "@/components/marquee-component";

export default function Home() {
  const blogs = getCategorizedBlogs();
  return (
    <div className="min-h-screen ">
      <main className="flex antialiased  flex-col  ">
        <div className="px-6 md:p-10 md:px-32 md:mx-10 lg:mx-40 ">
          <div className="border px-2 mt-3  w-fit rounded-sm  gap-x-1  inline-flex cursor-pointer   items-center">
            <Hand className="text-green-400 font-bold animate-pulse w-4 h-4" />
            <p className="text-green-400 tracking-tight text-center ">HEY!</p>
            <p className="ml-2 tracking-tight font-bold">いらっしゃいませ</p>
          </div>

          <div className="">
            <h1 className="uppercase md:text-3xl lg:text-5xl mt-5 text-xl max-w-full lg:tracking-tighter antialiased font-extrabold tracking-tight inline-flex gap-2 items-center">
              elorm is so cool !{" "}
              <IceCream className="w-8 h-8 lg:w-12 lg:h-12 text-green-300" />
            </h1>

            <p className="  mt-4">
              Hey there, it&#39;s elorm. I&#39;m a creative soul diving
              headfirst into all the cool stuff that catches my eye – code,
              music, drawing, writing – you name it! ✨
              <span>
                also a 10x certified youtube university frontend engineer, trust
                me bro :)
              </span>
            </p>

            <div>
              <p className=" mt-5">
                am a self taught{" "}
                <span className=" underline font-extrabold">
                  frontend engineer
                </span>{" "}
                and a{" "}
                <span className="underline text-blue-500 font-extrabold">
                  computer science grad!
                </span>
                👨‍🎓 wanna get to know me more check
                <Link
                  href={"/about"}
                  className="ml-1 text-green-500 font-semibold underline"
                >
                  about
                </Link>{" "}
                or{" "}
                <Link
                  href={"/projects"}
                  className="ml-1 text-yellow-500 font-semibold underline"
                >
                  stuffs am working on or already worked on
                </Link>
              </p>
            </div>

            {/* Image of the day */}
            <div className="flex justify-center items-center mt-10">
              <div>
                <div className="flex justify-center items-center">
                  <h1 className="p-1 mb-2 w-fit underline underline-offset-4 font-semibold">
                    pov: me every night
                  </h1>
                </div>

                <Image
                  src="/guy.webp"
                  width={260}
                  height={260}
                  alt="elorm pic of the day"
                  className="object-fit rounded-md border shadow-md"
                />

                {/* <p className="mt-2 text-center text-gray-400">
                  Image by{" "}
                  <span className="text-white underline">
                    Cat Sticker Studio
                  </span>
                </p> */}

                {/* <p className="mt-2 text-center text-gray-400">
                  went to space btw
                </p> */}

                <small className="mt-5 text-center text-gray-500">
                  <p className="mt-5 font-medium text-[16px]">
                    コーディングが大好きです{" "}
                  </p>
                </small>
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

                {/* {featuredContent.map((content) => {
                  return (
                    <div
                      className="shadow-md mt-5  bg-gradient-to-b  backdrop-blur-2xl bg-cyan-800/10  p-4 rounded-md lg:flex lg:flex-row"
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

                        <p className=" mt-2">{content.contentDescription}</p>

                        <Link
                          href={`${content.contentLink}`}
                          className="underline text-sm"
                          target="_blank"
                        >
                          {content.contentLink}
                        </Link>
                      </div>
                    </div>
                  );
                })} */}

                <MarqueeDemo />
              </>
            </div>

            <div className="mt-1">
              <Link href="/projects" className="underline">
                check out all of my projects
              </Link>
            </div>
          </div>

          {/* Latest Posts */}
          <div>
            <h1 className="font-bold mt-5 mb-3">latest blogs</h1>
            <div>
              {blogs !== null &&
                Object.keys(blogs).map((blog) => (
                  <BlogList category={blog} blogs={blogs[blog]} key={blog} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
