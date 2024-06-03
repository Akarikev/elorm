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
      {sortedBlogs.map((blog, id) => (
        <div key={id} className="">
          <div className="flex justify-between items-center gap-4">
            <Link href={`/blog/${blog.id}`} className="lowercase">
              {blog.title}
            </Link>
            <small className="font-bold justify-end">{blog.date}</small>
          </div>
          <hr className="my-2 border-gray-300" /> {/* Horizontal line */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
