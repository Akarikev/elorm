import { Loader2Icon } from "lucide-react";
import React from "react";
import { getCategorizedBlogs } from "@/lib/articles";
import type { blogItemType } from "@/types";
import BlogList from "@/components/blog-list";

function page() {
  const blogs = getCategorizedBlogs();

  // console.log(blogs);
  return (
    <div className=" flex flex-col min-h-screen mt-10 px-6 md:p-10 lg:px-40 md:px-32 md:mx-10 lg:mx-40">
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
