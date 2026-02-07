import React from "react";
import { getCategorizedBlogs } from "@/lib/articles";
import type { Metadata } from "next";
import BlogList from "@/components/blog-list";

export const metadata: Metadata = {
  title: "Blog by Prince Elorm",
  description:
    "Read insightful articles about web development, programming languages, coding habits, and tech insights by Prince Elorm. Learn React, Next.js, JavaScript, and modern development practices.",
  openGraph: {
    title: "Blog by Prince Elorm",
    description:
      "Read insightful articles about web development, programming languages, coding habits, and tech insights by Prince Elorm. Learn React, Next.js, JavaScript, and modern development practices.",
    url: "https://elorm.xyz/blog",
    images: [
      {
        url: "/api/og?title=Blog by Prince Elorm&description=Web Development Articles&type=blog",
        width: 1200,
        height: 630,
        alt: "Blog by Prince Elorm - Web Development Articles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog by Prince Elorm",
    description:
      "Read insightful articles about web development, programming languages, coding habits, and tech insights by Prince Elorm.",
    images: [
      "/api/og?title=Blog by Prince Elorm&description=Web Development Articles&type=blog",
    ],
  },
  keywords: [
    "Prince Elorm blog",
    "Web development blog",
    "Programming tutorials",
    "React tutorials",
    "Next.js articles",
    "JavaScript guides",
    "Frontend development",
    "Coding habits",
    "Programming languages",
    "Tech insights",
    "Developer blog Ghana",
    "Software engineering",
    "Modern web development",
    "Programming best practices",
  ],
};

async function page() {
  const blogs = await getCategorizedBlogs();

  return (
    <div className="flex flex-col min-h-screen px-4 md:px-10 lg:px-40 bg-background">
      {/* Page Header */}
      {/* Page Header */}
      <header className="w-full max-w-4xl mx-auto pt-24 pb-16">
        <h1 className="font-serif text-6xl md:text-7xl font-medium tracking-tight mb-6 text-foreground">
          Writing<span className="text-primary">.</span>
        </h1>
        <p className="text-xl text-muted-foreground font-light max-w-2xl leading-relaxed">
          Thoughts on technology, design, and everything in between.
        </p>
      </header>

      {/* Blog Lists */}
      <main className="w-full max-w-5xl mx-auto flex-1 space-y-12 pb-16">
        {blogs !== null &&
          Object.keys(blogs).map((blog) => (
            <BlogList category={blog} blogs={blogs[blog]} key={blog} />
          ))}
      </main>
    </div>
  );
}

export default page;
