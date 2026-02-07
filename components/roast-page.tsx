"use client";

import React, { useState, useTransition } from "react";
import { Download, FileWarning, LaughIcon, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

async function generateRoast(name?: string): Promise<string> {
  const response = await fetch("/api/roast", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate roast");
  }

  const data = await response.json();
  return data.roast;
}

export default function RoastPage() {
  const [roast, setRoast] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const [isGenerating, setIsGenerating] = useState(false);
  const [roastee, setRoastee] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleNewRoast = async () => {
    setError("");
    setIsGenerating(true);
    try {
      const newRoast = await generateRoast(roastee || undefined);
      setRoast(newRoast);
    } catch (err) {
      console.error("Error generating roast:", err);
      setError("Failed to generate roast. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadImage = () => {
    const roastContainer = document.querySelector("#roastContainer") as HTMLElement;
    if (!roastContainer) return;

    startTransition(async () => {
      try {
        const dataUrl = await htmlToImage.toPng(roastContainer, {
          skipFonts: true,
          cacheBust: true,
          pixelRatio: 2,
        });
        download(dataUrl, `${roastee || "roast"}_card.png`);
      } catch (error) {
        console.error("Failed to download image", error);
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full max-w-2xl mx-auto py-12">
      <header className="text-center mb-12 space-y-4">
        <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight">
          Roast Me<span className="text-primary">.</span>
        </h1>
        <p className="text-xl text-muted-foreground font-light max-w-lg mx-auto leading-relaxed">
          Prepare for emotional damage. AI-generated roasts served hot and personal.
        </p>
      </header>

      <div className="w-full max-w-md space-y-8">
        {/* Warning/Error */}
        <div className={`flex items-start gap-3 p-4 rounded-lg border ${
          error 
            ? "bg-red-500/10 border-red-500/20 text-red-700 dark:text-red-400"
            : "bg-orange-500/10 border-orange-500/20 text-orange-700 dark:text-orange-400"
        }`}>
          <FileWarning className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p className="text-sm leading-relaxed">
            {error || "Warning: These roasts are AI-generated and can be harsh. Don't take them personally."}
          </p>
        </div>

        {/* Input */}
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Your name (optional)"
              value={roastee}
              onChange={(e) => setRoastee(e.target.value)}
              className="w-full bg-transparent border-b border-border py-3 text-lg focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50 text-center font-medium"
            />
          </div>
          
          <div className="flex justify-center gap-4 pt-4">
            <Button 
                onClick={handleNewRoast}
                disabled={isGenerating}
                className="rounded-full px-8 py-6 text-lg font-medium bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Generating...
                </>
              ) : (
                "Roast Me"
              )}
            </Button>
            
            {roast && (
                 <Button
                    variant="outline"
                    onClick={handleDownloadImage}
                    disabled={isPending}
                    className="rounded-full px-6 py-6 border-border hover:bg-muted/50"
                  >
                    {isPending ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Download className="w-5 h-5" />
                    )}
                  </Button>
            )}
          </div>
        </div>

        {/* Roast Card Display */}
        {roast && (
          <div className="mt-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div
              id="roastContainer"
              className="relative overflow-hidden rounded-2xl bg-card border border-border p-8 md:p-12 shadow-2xl"
            >
              {/* Decorative gradients */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-pink-500/20 blur-3xl rounded-full" />
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                <LaughIcon className="w-10 h-10 text-muted-foreground/50 mb-2" />
                
                <div className="space-y-2">
                   {roastee && (
                       <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                           Dear {roastee}
                       </p>
                   )}
                   <p className="font-serif text-2xl md:text-3xl leading-snug text-foreground font-medium">
                     "{roast}"
                   </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border/40 w-full flex justify-between items-center text-xs text-muted-foreground font-mono">
                   <span>elorm.xyz/roaastme</span>
                   <span>AI Generated</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}


