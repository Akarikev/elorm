"use client";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";

function PendingUI() {
  const router = useRouter();
  const intervalRef = useRef<NodeJS.Timeout>();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = divRef.current;
    if (["loading", "submitting"].includes(router.route)) {
      intervalRef.current = setInterval(() => {
        if (!loader) return;

        const previous = parseInt(loader.style.width);

        if (previous >= 80) {
          clearInterval(intervalRef.current!);
          return;
        }

        loader.style.width = `${previous + 2}%`;
      }, 200);
    }

    return () => {
      if (intervalRef.current) {
        if (!loader) return;

        loader.style.width = "100%";
        setTimeout(() => {
          if (!loader) return;
          loader.style.width = "0%";
        }, 200);

        clearInterval(intervalRef.current);
        intervalRef.current = undefined;
      }
    };
  }, [router]);

  return (
    <div
      className="loader sticky left-0 top-0 h-1 -mb-1 bg-blue-500 transition-[width] duration-200 transition-ease-in"
      style={{ width: "0%" }}
      ref={divRef}
    ></div>
  );
}

export { PendingUI };
