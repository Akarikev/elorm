"use client";

import React from "react";
import { Link } from "next-view-transitions";
import { useState } from "react";
import { buttonVariants } from "./ui/button";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Book, FolderDot, Home, MailOpenIcon, UserSearch } from "lucide-react";
import Image from "next/image";
import { ModeToggle } from "@/components/ui/theme-toggler";

import { getSortedBlog } from "@/lib/articles";

type LinkType = {
  linkId: any;
  linkName: string;
  linkPath: string;
  isSelected?: boolean; // Fix the type here
  Icon: any;
}[];

function Navbar() {
  // const blogD = getSortedBlog().map((blg) => blg.id);
  const pathname = usePathname();

  const links: LinkType = useMemo(
    () => [
      {
        linkId: 1,
        linkName: "home",
        linkPath: "/",
        isSelected: pathname === "/",
        Icon: Home,
      },
      {
        linkId: 2,
        linkPath: "/projects",
        linkName: "projects",
        isSelected: pathname === "/projects",
        Icon: FolderDot,
      },
      {
        linkId: 3,
        linkPath: "/about",
        linkName: "about",
        isSelected: pathname === "/about",
        Icon: UserSearch,
      },
      {
        linkId: 4,
        linkPath: "/blog",
        linkName: "blog",
        isSelected: pathname === "/blog",
        Icon: Book,
      },

      // {
      //   linkId: blogD,
      //   linkName: "blog",
      //   isSelected: pathname === `/blog/${blogD}`,
      //   linkPath: "/blog/",
      // },
    ],
    [pathname]
  );

  return (
    <div className="transition-all ">
      <div className="font-bold mt-3">
        <h1 className="px-6 tracking-tighter font-extrabold  lg:px-40 md:px-32  md:mx-10 lg:mx-40 mt-5 mb-3 text-xl lg:text-3xl md:text-2xl">
          elorm.tsx
        </h1>
        {/* <Image
          src={"/elorm-logo/vector/default.svg"}
          width={110}
          height={110}
          alt="elorm-logo"
          className="object-fit ml-9 mt-4 mb-4  lg:ml-80 md:ml-32  "
        /> */}
      </div>

      <nav className="overflow-hidden  px-6 md:p-10 lg:px-40 md:px-32 h-11 md:mx-10 lg:mx-40">
        <div className="flex flex-grow items-center pt-3 gap-1 ">
          {links.map((link) => (
            <div key={link.linkId}>
              <Link
                href={`${link.linkPath}`}
                className={cn(
                  // buttonVariants({
                  //   variant: "link",
                  // }),
                  "mr-4 text-[13px] inline-flex items-center text-center justify-center gap-1 group",
                  {
                    " hover:underline hover:": !link.isSelected,
                    "w-fit  bg-green-900 px-1 text-white rounded-md":
                      link.isSelected,
                  }
                )}
              >
                <link.Icon className="w-3 h-3 flex items-center justify-center" />
                {link.linkName}
              </Link>
            </div>
          ))}

          <Link href={"https://twitter.com/elorm_elom"}>
            <TwitterLogoIcon className="hover:text-white w-4 h-4" />
          </Link>

          <Link href={"https://github.com/Akarikev"}>
            <GitHubLogoIcon className="w-4 h-4 ml-2 " />
          </Link>
        </div>
      </nav>
      <div className="md:-mt-12  ">
        <div className="">
          <ModeToggle />
          {/* <p className="bg-gray-300/10 absolute text-green-400  top-0 left-0 right-10 rounded-md z-10  w-fit h-fit text-center px-1  text-xs"> */}
          {/* </p> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
