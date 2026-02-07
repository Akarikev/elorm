"use client";

import { Share2, Check, Copy, Twitter, Linkedin, Facebook } from "lucide-react";
import { useState } from "react";

interface ShareButtonProps {
  title: string;
  url: string;
  description?: string;
}

export function ShareButton({ title, url, description }: ShareButtonProps) {
  const [showOptions, setShowOptions] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        });
      } catch (error) {
        // User cancelled or error occurred
        console.log("Share cancelled or failed");
      }
    } else {
      // Fallback: show share options
      setShowOptions(!showOptions);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title
    )}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, "_blank", "noopener,noreferrer");
  };

  const shareToLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}`;
    window.open(linkedInUrl, "_blank", "noopener,noreferrer");
  };

  const shareToFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`;
    window.open(facebookUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative">
      {/* Main Share Button */}
      <button
        onClick={handleNativeShare}
        className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 border border-transparent hover:border-border/40 p-2 rounded-full hover:px-4 hover:rounded-md bg-transparent hover:bg-muted/30"
        aria-label="Share this article"
      >
        <Share2 className="w-4 h-4 flex-shrink-0" />
        <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
          Share
        </span>
      </button>

      {/* Fallback Share Options */}
      {showOptions && (
        <div className="absolute top-full mt-2 right-0 bg-background border border-border/40 rounded-md shadow-lg p-2 min-w-[200px] z-10">
          <div className="flex flex-col gap-1">
            {/* Copy Link */}
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-muted rounded transition-colors text-left w-full"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy link</span>
                </>
              )}
            </button>

            <div className="h-px bg-border/40 my-1" />

            {/* Twitter */}
            <button
              onClick={shareToTwitter}
              className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-muted rounded transition-colors text-left w-full"
            >
              <Twitter className="w-4 h-4" />
              <span>Share on Twitter</span>
            </button>

            {/* LinkedIn */}
            <button
              onClick={shareToLinkedIn}
              className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-muted rounded transition-colors text-left w-full"
            >
              <Linkedin className="w-4 h-4" />
              <span>Share on LinkedIn</span>
            </button>

            {/* Facebook */}
            <button
              onClick={shareToFacebook}
              className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-muted rounded transition-colors text-left w-full"
            >
              <Facebook className="w-4 h-4" />
              <span>Share on Facebook</span>
            </button>
          </div>
        </div>
      )}

      {/* Click outside to close */}
      {showOptions && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setShowOptions(false)}
        />
      )}
    </div>
  );
}
