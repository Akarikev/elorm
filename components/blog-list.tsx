"use client";
import type { blogItemType } from "@/types";
import { Link } from "next-view-transitions";
import { FC } from "react";
import moment from "moment";
import { ArrowUpRight } from "lucide-react";

interface BlogListProps {
  category: string;
  blogs: blogItemType[];
}

const BlogList: FC<BlogListProps> = ({ category, blogs }) => {
  // Blogs are already sorted by getSortedBlog() in lib/articles.ts
  const sortedBlogs = blogs;

  if (sortedBlogs.length === 0) return null;

  return (
    <div className="space-y-6">
      {/* Category Header */}
      <h3 className="font-serif text-2xl font-medium tracking-tight border-b border-border/40 pb-2 mb-6">
        {category}
      </h3>

      {/* Blog Posts List */}
      <div className="flex flex-col space-y-2">
        {sortedBlogs.map((blog, id) => (
          <Link 
            key={id} 
            href={`/blog/${blog.id}`} 
            className="group flex flex-col md:flex-row md:items-baseline justify-between py-3 border-b border-transparent hover:border-border/40 transition-colors"
          >
            <div className="flex-1 pr-4">
              <h4 className="text-lg font-medium group-hover:underline decoration-1 underline-offset-4 decoration-muted-foreground/50 transition-all">
                {blog.title}
              </h4>
             </div>
             
             <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono mt-1 md:mt-0 flex-shrink-0">
                <time dateTime={moment(blog.date, "MM-DD-YYYY").toISOString()}>
                  {moment(blog.date, "MM-DD-YYYY").format("MMM DD, YYYY")}
                </time>
                <span className="hidden md:inline">•</span>
                <span>~3 min</span>
             </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
