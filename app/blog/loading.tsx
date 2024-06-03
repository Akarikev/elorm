import { Loader2 } from "lucide-react";
import React from "react";

function Loading() {
  return (
    <div className="transition-all flex flex-col min-h-screen gap-4">
      {/* <Loader2 className="w-6 h-6 animate-spin" /> */}

      <div className="bg-zinc-600 rounded-md animate-pulse h-7"></div>
      <div className="bg-zinc-600 rounded-md animate-pulse h-7"></div>
      <div className="bg-zinc-600 rounded-md animate-pulse h-7"></div>
      <div className="bg-zinc-600 rounded-md animate-pulse h-7"></div>
      <div className="bg-zinc-600 rounded-md animate-pulse h-7"></div>
    </div>
  );
}

export default Loading;
