"use client";

import React, { useState, useTransition } from "react";
import roasts from "@/utils/roasts";
import { Download, FileWarning, LaughIcon, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

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
      htmlToImage.toPng(roastContainer as HTMLElement).then(function (dataUrl) {
        download(dataUrl, `${roastee + `'s` + `_roast.png`}`);
      });
    });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 py-10 bg-background">
      <div className="w-full max-w-md mx-auto space-y-8">
        <header className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight font-mono mb-2">
            Get <span className="text-primary">Roasted</span>
          </h1>
          <p className="text-muted-foreground text-base font-light max-w-xs mx-auto">
            A playful, minimal roast generator. Enter your name (optional), get
            a roast, and download your custom card.
          </p>
        </header>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 bg-muted/60 border border-border rounded-md px-4 py-3">
            <FileWarning className="w-4 h-4 text-primary" />
            <span className="text-xs text-muted-foreground">
              If you are easily offended or sensitive to jokes, please refrain
              from proceeding.
            </span>
          </div>

          <input
            type="text"
            placeholder="Your name (optional)"
            value={roastee}
            onChange={(e) => setRoastee(e.target.value)}
            className="p-3 w-full rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 shadow-sm outline-none text-base font-mono"
          />
        </div>

        {roast && (
          <div className="flex flex-col items-center space-y-4 mt-6">
            <div
              id="roastContainer"
              className={cn(
                "p-6 w-full min-h-[320px] flex flex-col justify-between rounded-xl bg-gradient-to-br from-primary/10 via-background to-pink-100/30 shadow-md border border-border"
              )}
              style={{
                fontFamily:
                  "monospace, 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace",
              }}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="inline-flex gap-2 items-center text-xs text-muted-foreground">
                  <LaughIcon className="w-4 h-4" />
                  <span
                    style={{
                      fontFamily:
                        "monospace, 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace",
                    }}
                  >
                    elorm.xyz/roaastme
                  </span>
                </div>
                <span
                  className="text-[10px] font-semibold text-muted-foreground"
                  style={{
                    fontFamily:
                      "monospace, 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace",
                  }}
                >
                  {roastee ? `${roastee}'s roast` : ""}
                </span>
              </div>
              <div className="flex flex-grow items-center justify-center">
                <p
                  className="font-extrabold text-lg md:text-xl text-center text-foreground leading-snug"
                  style={{
                    fontFamily:
                      "monospace, 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace",
                  }}
                >
                  {roastee ? `${roastee}, ${roast}` : roast}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex space-x-2 items-center justify-center mt-6">
          <Button onClick={handleNewRoast} size="sm" className="font-mono">
            ROAAST me!
          </Button>
          {roast && (
            <Button
              size="sm"
              variant="outline"
              className="font-mono"
              onClick={handleDownloadImage}
              disabled={pending}
            >
              {pending ? (
                <span className="gap-1 inline-flex items-center">
                  Downloading <Loader2 className="animate-spin w-3 h-3" />
                </span>
              ) : (
                <span className="gap-1 inline-flex items-center">
                  Download <Download className="w-4 h-4" />
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
