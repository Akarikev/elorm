"use client";

import React, { useState, useTransition } from "react";
import html2canvas from "html2canvas";
import roasts from "@/utils/roasts";
import { Download, FileWarning, LaughIcon, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Amatic_SC, Dosis } from "next/font/google";
import { cn } from "@/lib/utils";

const dosis = Dosis({
  subsets: ["latin"],
  weight: "500",
});
const amatic = Amatic_SC({
  subsets: ["latin"],
  weight: "400",
});

function getRandomRoast(): string {
  const randomIndex = Math.floor(Math.random() * roasts.length);
  return roasts[randomIndex];
}

function RoastPage(): JSX.Element {
  const [roast, setRoast] = useState<string>("");
  const [pending, startTransition] = useTransition();
  const [roastee, setRoastee] = useState<string>("");

  const handleNewRoast = () => {
    setRoast(getRandomRoast());
  };

  const handleDownloadImage = () => {
    startTransition(() => {
      const roastContainer = document.querySelector("#roastContainer");
      if (roastContainer) {
        html2canvas(roastContainer as HTMLElement)
          .then((canvas) => {
            const link = document.createElement("a");
            link.download = "roast.png";
            link.href = canvas.toDataURL();
            link.click();

            // Check if the user is on iPhone/iPad

            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

            if (isIOS) {
              const linkDr = (link.href = canvas.toDataURL());
              window.location.href = linkDr;
              alert("Long press to download");
            }
          })
          .catch((err) => {
            console.error("Error generating image:", err);
          });
      }
    });
  };

  return (
    <div
      className="flex flex-col justify-center items-center space-y-3"
      suppressHydrationWarning
    >
      <div className="space-y-2">
        <h1 className="text-center uppercase font-extrabold text-3xl tracking-tight mb-4 mt-3">
          Get <span className="text-red-400">Roasted!</span>
        </h1>

        <div className="p-4 bg-red-700/50 rounded-md space-y-2 items-center">
          <FileWarning className="w-4 h-4 text-white " />
          <p className="text-white">
            If you are easily offended or sensitive to jokes, please refrain
            from proceeding with this content.
          </p>
        </div>

        <div className="flex flex-col">
          <small className="flex start mb-3 mt-2">
            <p className="text-gray-500">
              If you wanna get roasted, we might as well know your name.
              Don&apos;t worry, it&apos;s optional.
            </p>
          </small>

          <input
            type="text"
            placeholder="name? "
            value={roastee}
            onChange={(e) => setRoastee(e.target.value)}
            className="p-3 w-full rounded-lg bg-gray-100 dark:bg-background border-2 border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md outline-none mb-6"
          />
        </div>

        {roast && (
          <div className="flex flex-col items-center space-y-3 mt-4">
            <div
              id="roastContainer"
              className={cn(
                "p-3 w-[380px] h-[380px] bg-gradient-to-r from-violet-200 via-amber-100 to-pink-200 flex flex-col justify-between rounded-[2px]"
              )}
            >
              <div className="flex justify-between items-center gap-1">
                <div className="inline-flex gap-2 items-center">
                  <LaughIcon className="w-5 h-5 dark:text-black" />
                  <p className="text-[7.5px] dark:text-black font-bold">
                    Generate your own roast @{" "}
                    <span className="underline underline-offset-2">
                      elorm.site/roaastme
                    </span>
                    ✨
                  </p>
                </div>
                <div>
                  <p className="text-[7px] dark:text-black font-extrabold">
                    {roastee ? <>{roastee}&apos;s roast</> : ""}
                  </p>
                </div>
              </div>

              <div className="flex flex-grow items-center justify-center">
                <p className="font-extrabold text-xl text-zinc-800 text-center dark:text-black tracking-tight">
                  {roastee ? `${roastee}, ${roast}` : roast}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex space-x-2 items-center justify-center">
          <Button onClick={handleNewRoast} size={"sm"} className="mt-4">
            ROAAST me!
          </Button>
          {roast && (
            <Button
              size={"sm"}
              variant={"secondary"}
              className="mt-4"
              onClick={handleDownloadImage}
            >
              {pending ? (
                <span className="gap-1 inline-flex items-center">
                  Downloading <Loader2 className="animate-spin w-3 h-3" />
                </span>
              ) : (
                <span className="gap-1 inline-flex items-center">
                  download your roast
                  <Download className="w-4 h-4" />
                </span>
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default RoastPage;
