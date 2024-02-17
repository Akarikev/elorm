"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "./ui/button";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { TwitterLogoIcon } from "@radix-ui/react-icons";
import { MailOpenIcon } from "lucide-react";
import Image from "next/image";

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
    <div>
      <div className="text-2xl font-bold mt-3">
        {/* <h1 className="px-6  lg:px-40 md:px-32  md:mx-10 lg:mx-40">
          elorm.tsx
        </h1> */}
        <Image
          src={"/elorm-logo/vector/default-monochrome-white.svg"}
          width={120}
          height={120}
          alt="elorm-logo"
          className="object-fit ml-9 mt-4 mb-4  lg:ml-80 md:ml-32  "
        />
      </div>

      <nav className="overflow-hidden  px-6 md:p-10 lg:px-40 md:px-32 h-11 md:mx-10 lg:mx-40">
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

          <Link href={"https://twitter.com/elorm_elom"}>
            <TwitterLogoIcon className="hover:text-white w-6 h-6" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
