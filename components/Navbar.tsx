"use client";

import React from "react";
import { Link } from "next-view-transitions";
import { useState } from "react";
import { buttonVariants } from "./ui/button";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import {
  Book,
  FolderDot,
  Home,
  Menu,
  X,
  UserSearch,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import { ModeToggle } from "@/components/ui/theme-toggler";

import { getSortedBlog } from "@/lib/articles";

type LinkType = {
  linkId: any;
  linkName: string;
  linkPath: string;
  isSelected?: boolean;
  Icon: any;
  colorScheme: {
    bg: string;
    text: string;
    border: string;
    hoverBg: string;
    hoverText: string;
    hoverBorder: string;
  };
}[];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const links: LinkType = useMemo(
    () => [
      {
        linkId: 1,
        linkName: "home",
        linkPath: "/",
        isSelected: pathname === "/",
        Icon: Home,
        colorScheme: {
          bg: "bg-blue-100 dark:bg-blue-950/20",
          text: "text-blue-700 dark:text-blue-300",
          border: "border-blue-200 dark:border-blue-800",
          hoverBg: "hover:bg-blue-50 dark:hover:bg-blue-950/10",
          hoverText: "hover:text-blue-600 dark:hover:text-blue-400",
          hoverBorder: "hover:border-blue-200 dark:hover:border-blue-700",
        },
      },
      {
        linkId: 2,
        linkPath: "/projects",
        linkName: "projects",
        isSelected: pathname === "/projects",
        Icon: FolderDot,
        colorScheme: {
          bg: "bg-green-100 dark:bg-green-950/20",
          text: "text-green-700 dark:text-green-300",
          border: "border-green-200 dark:border-green-800",
          hoverBg: "hover:bg-green-50 dark:hover:bg-green-950/10",
          hoverText: "hover:text-green-600 dark:hover:text-green-400",
          hoverBorder: "hover:border-green-200 dark:hover:border-green-700",
        },
      },
      {
        linkId: 3,
        linkPath: "/about",
        linkName: "about",
        isSelected: pathname === "/about",
        Icon: UserSearch,
        colorScheme: {
          bg: "bg-purple-100 dark:bg-purple-950/20",
          text: "text-purple-700 dark:text-purple-300",
          border: "border-purple-200 dark:border-purple-800",
          hoverBg: "hover:bg-purple-50 dark:hover:bg-purple-950/10",
          hoverText: "hover:text-purple-600 dark:hover:text-purple-400",
          hoverBorder: "hover:border-purple-200 dark:hover:border-purple-700",
        },
      },
      {
        linkId: 4,
        linkPath: "/blog",
        linkName: "blog",
        isSelected: pathname === "/blog",
        Icon: Book,
        colorScheme: {
          bg: "bg-orange-100 dark:bg-orange-950/20",
          text: "text-orange-700 dark:text-orange-300",
          border: "border-orange-200 dark:border-orange-800",
          hoverBg: "hover:bg-orange-50 dark:hover:bg-orange-950/10",
          hoverText: "hover:text-orange-600 dark:hover:text-orange-400",
          hoverBorder: "hover:border-orange-200 dark:hover:border-orange-700",
        },
      },
    ],
    [pathname]
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 md:px-32 lg:px-40">
        {/* Logo/Brand */}
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <span className="relative inline-block transform -rotate-1 bg-green-500 text-white px-3 py-1 border-2 border-green-600 shadow-md text-xl font-bold tracking-tight md:text-2xl font-mono">
                <span className="relative z-10">elorm.tsx</span>
                <div className="absolute inset-0 bg-green-400 opacity-50 transform skew-x-6"></div>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.linkId}
                href={link.linkPath}
                className={cn(
                  "inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 border border-transparent",
                  {
                    [`${link.colorScheme.bg} ${link.colorScheme.text} ${link.colorScheme.border} shadow-sm`]:
                      link.isSelected,
                    [`text-muted-foreground ${link.colorScheme.hoverBg} ${link.colorScheme.hoverText} ${link.colorScheme.hoverBorder}`]:
                      !link.isSelected,
                  }
                )}
              >
                <link.Icon className="h-4 w-4" />
                {link.linkName}
              </Link>
            ))}

            {/* Social Links */}
            <div className="flex items-center space-x-2 ml-4 border-l pl-4">
              <Link
                href="https://twitter.com/elorm_elom"
                className="p-2 text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterLogoIcon className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://github.com/Akarikev"
                className="p-2 text-muted-foreground hover:text-gray-600 dark:hover:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-950/20 rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubLogoIcon className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
              <ModeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {links.map((link) => (
                <Link
                  key={link.linkId}
                  href={link.linkPath}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "inline-flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 border border-transparent",
                    {
                      [`${link.colorScheme.bg} ${link.colorScheme.text} ${link.colorScheme.border}`]:
                        link.isSelected,
                      [`text-muted-foreground ${link.colorScheme.hoverBg} ${link.colorScheme.hoverText} ${link.colorScheme.hoverBorder}`]:
                        !link.isSelected,
                    }
                  )}
                >
                  <link.Icon className="h-4 w-4" />
                  {link.linkName}
                </Link>
              ))}

              {/* Mobile Social Links */}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t mt-4">
                <Link
                  href="https://twitter.com/elorm_elom"
                  className="p-2 text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 rounded-lg transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterLogoIcon className="h-5 w-5" />
                </Link>
                <Link
                  href="https://github.com/Akarikev"
                  className="p-2 text-muted-foreground hover:text-gray-600 dark:hover:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-950/20 rounded-lg transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubLogoIcon className="h-5 w-5" />
                </Link>
                <ModeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
