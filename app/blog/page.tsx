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

function page() {
  const blogs = getCategorizedBlogs();

  // console.log(blogs);
  return (
    <div className=" flex flex-col min-h-screen mt-8 px-6 md:p-10  md:px-32 md:mx-10 lg:mx-40">
      <div>
        {blogs !== null &&
          Object.keys(blogs).map((blog) => (
            <BlogList category={blog} blogs={blogs[blog]} key={blog} />
          ))}
      </div>
    </div>
  );
}

export default page;
