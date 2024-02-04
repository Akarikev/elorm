"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "./ui/button";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type LinkType = {
  linkId: number;
  linkName: string;
  linkPath: string;
  isSelected?: boolean; // Fix the type here
}[];

function Navbar() {
  const pathname = usePathname();

  const links: LinkType = useMemo(
    () => [
      {
        linkId: 1,
        linkName: "home",
        linkPath: "/",
        isSelected: pathname === "/",
      },
      {
        linkId: 2,
        linkPath: "/projects",
        linkName: "projects",
        isSelected: pathname === "/projects",
      },
      {
        linkId: 3,
        linkPath: "/about",
        linkName: "about",
        isSelected: pathname === "/about",
      },
    ],
    [pathname]
  );

  return (
    <nav className="  w-full px-4 h-11">
      <div className="flex flex-grow items-center pt-3 gap-2">
        {links.map((link) => (
          <div key={link.linkId}>
            <Link
              href={`${link.linkPath}`}
              className={cn(
                buttonVariants({
                  variant: "link",
                }),
                {
                  "text-bold hover:text-white": !link.isSelected,
                  "text-red-500": link.isSelected,
                }
              )}
            >
              {link.linkName}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
