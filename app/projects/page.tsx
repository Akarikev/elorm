import { AITools, devTools, featuredContent } from "@/lib/projects";
import { CircleDot } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "elorm ⚡ | Projects",
  description: "hey, elorm's Projects!",
};

function page() {
  return (
    <div className="flex flex-col min-h-screen mt-5 px-6 md:p-10  md:px-32 md:mx-10 lg:mx-40">
      <div className="mt-10">
        <div>
          {/* Title */}
          <h1 className="text-xl font-semibold tracking-tighter">Projects</h1>

          {/* intro */}
          <div className=" ">
            <p className="mt-2">
              I&#39;ve built several projects, but these are the ones I could
              showcase 😁 just proud of them tbh
            </p>
          </div>

          {/* tools used */}
          <div className="mt-4 ">
            <div className="">
              I use tools such as{" "}
              <Link
                href={`https://nextjs.org`}
                className="underline text-gray-700 tracking-tight font-extrabold  ml-1"
                target="_blank"
              >
                Nextjs,
              </Link>
              <Link
                href={`https://vitejs.dev`}
                className="underline text-pink-600 tracking-tight font-extrabold  ml-1 mr-1"
                target="_blank"
              >
                Vitejs,
              </Link>
              and
              <Link
                href={`https://tailwindcss.com`}
                className="underline text-blue-700 tracking-tight font-extrabold ml-1"
                target="_blank"
              >
                tailwind,
              </Link>
              <span></span> :) i mean everyone loves tailwind
            </div>
          </div>

          {/* projects */}

          <div>
            <div className="mt-10 flex flex-col">
              <h1 className="text-xl  gap-2 font-semibold tracking-tighter mt-10 mb-3">
                Apps
              </h1>
              {featuredContent.map((content) => {
                return (
                  <div key={content.id} className="flex flex-col mb-2 ">
                    <Card>
                      <CardHeader>
                        <CardTitle>{content.contentName}</CardTitle>
                        <CardDescription>
                          {content.contentDescription}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Link
                          href={content.contentLink}
                          className="underline text-sm text-gray-400"
                        >
                          {content.contentLink}
                        </Link>
                      </CardContent>
                      <CardFooter>
                        <div>
                          {content.isLive ? (
                            <Badge variant={"default"} className="font-bold">
                              LIVE
                            </Badge>
                          ) : (
                            <Badge variant={"destructive"}>
                              inactive/suspended
                            </Badge>
                          )}
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                );
              })}
            </div>

            {/* dev packages */}
            <div className="mt-10">
              <h1 className="text-xl  mb-3 font-semibold tracking-tighter mt-6 ">
                Dev Packages
              </h1>

              {devTools.map((devTool) => {
                return (
                  <div key={devTool.id} className="flex flex-col mb-2 ">
                    <Card>
                      <CardHeader>
                        <CardTitle>{devTool.contentName}</CardTitle>
                        <CardDescription>
                          {devTool.contentDescription}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Link
                          href={devTool.contentLink}
                          className="underline text-sm text-gray-400"
                        >
                          {devTool.contentLink}
                        </Link>
                      </CardContent>
                      <CardFooter>
                        <div>
                          {devTool.isLive ? (
                            <Badge variant={"default"} className="font-bold">
                              LIVE
                            </Badge>
                          ) : (
                            <Badge variant={"destructive"}>
                              inactive/suspended
                            </Badge>
                          )}
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* AI Tools */}

          <div>
            <h1 className="text-xl mb-3 font-semibold tracking-tighter mt-10">
              AI Apps
            </h1>
            {AITools.map((content) => {
              return (
                <div key={content.id} className="flex flex-col mb-2 ">
                  <Card>
                    <CardHeader>
                      <CardTitle>{content.contentName}</CardTitle>
                      <CardDescription>
                        {content.contentDescription}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link
                        href={content.contentLink}
                        className="underline text-sm text-gray-400"
                      >
                        {content.contentLink}
                      </Link>
                    </CardContent>
                    <CardFooter>
                      <div>
                        {content.isLive ? (
                          <Badge variant={"default"} className="font-bold">
                            LIVE
                          </Badge>
                        ) : (
                          <Badge variant={"destructive"}>
                            inactive/suspended
                          </Badge>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              );
            })}
          </div>

          <div className="mt-10 ">
            <div>
              check my{" "}
              <span>
                <Link href="https://github.com/Akarikev" className="underline ">
                  github
                </Link>
              </span>{" "}
              to see other cool stuffs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

// return (
//   <div
//     className="border-b mt-5  bg-gradient-to-b  backdrop-blur-2xl bg-cyan-800/10  p-4 rounded-md"
//     key={content.id}
//   >
//     <div>
//       <div className="border px-2 w-fit rounded-lg border-none gap-x-1 bg-gray-800 flex items-center justify-center cursor-pointer align-middle">
//         {content.isLive === true ? (
//           <CircleDot className="text-green-400 animate-pulse w-4 h-4" />
//         ) : (
//           <CircleDot className="text-yellow-200 animate-pulse w-4 h-4" />
//         )}

//         <p className="text-green-400 text-center ">
//           {content.contentName}
//         </p>
//       </div>

//       <p className=" mt-2">{content.contentDescription}</p>

//       <Link
//         href={`${content.contentLink}`}
//         className="underline text-base"
//         target="_blank"
//       >
//         {content.contentLink}
//       </Link>
//     </div>
//   </div>
// );
