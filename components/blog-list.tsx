import type { blogItemType } from "@/types";
import Link from "next/link";
import { FC } from "react";
import moment from "moment";

interface BlogListProps {
  category: string;
  blogs: blogItemType[];
}

const BlogList: FC<BlogListProps> = ({ category, blogs }) => {
  // Sort blogs by date in descending order
  const sortedBlogs = [...blogs].sort((a, b) =>
    moment(b.date, "DD-MM-YYYY").diff(moment(a.date, "DD-MM-YYYY"))
  );

  return (
    <div className="flex flex-col">
      {/* <h1 className="font-bold md:font-extrabold md:text-2xl md:tracking-tighter">
        blogs
      </h1> */}
      {sortedBlogs.map((blog, id) => (
        <div key={id} className="p-0.5">
          <div className="flex transition-all hover:bg-zinc-500 hover:rounded-sm dark:hover:bg-zinc-300 dark:hover:text-zinc-800 hover:text-gray-300 duration-100  justify-between items-center gap-4 p-0.5">
            <Link href={`/blog/${blog.id}`} className="lowercase">
              <p>{blog.title}</p>
            </Link>
            <small className="font-bold ">{blog.date}</small>
          </div>
          <hr className="my-2 border-gray-300" /> {/* Horizontal line */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
