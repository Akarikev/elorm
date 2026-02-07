"use client";

import React, { useState } from "react";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/ui/theme-toggler";

const links = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Candies", path: "/candies" },
  { name: "RoastMe", path: "/roaastme" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 md:px-32 lg:px-40">
        <div className="flex h-16 items-center justify-between">
          {/* Minimal Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-serif text-2xl font-medium tracking-tight group-hover:opacity-80 transition-opacity">
              elorm.tsx
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground/80",
                  pathname === link.path
                    ? "text-foreground decoration-2 underline-offset-4 underline"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center gap-2 ml-4 pl-4 border-l">
              <Link
                href="https://twitter.com/elorm_elom"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <TwitterLogoIcon className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://github.com/Akarikev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
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
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-background">
            <nav className="flex flex-col space-y-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium px-4 py-2 transition-colors hover:bg-muted/50 rounded-md",
                    pathname === link.path
                      ? "text-foreground bg-muted"
                      : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 px-4 pt-4 border-t">
                <Link
                  href="https://twitter.com/elorm_elom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <TwitterLogoIcon className="h-5 w-5" />
                </Link>
                <Link
                  href="https://github.com/Akarikev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
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
