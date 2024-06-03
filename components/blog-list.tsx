import type { blogItemType } from "@/types";
import Link from "next/link";
import { FC } from "react";

interface bloglistProps {
  category: string;
  blogs: blogItemType[];
}

const BlogList: FC<bloglistProps> = ({ category, blogs }) => {
  return (
    <div className="flex flex-col">
      {blogs.map((blog, id) => {
        return (
          <div key={id} className=" ">
            <div className="flex justify-between items-center gap-4">
              <Link href={`/blog/${blog.id}`} className="lowercase">
                {blog.title}
              </Link>
              <small className="font-bold justify-end">{blog.date}</small>
            </div>
            <hr className="my-2 border-gray-300" /> {/* Horizontal line */}
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
