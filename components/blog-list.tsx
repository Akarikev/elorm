import type { blogItemType } from "@/types";
import { Link } from "next-view-transitions";
import { FC } from "react";
import moment from "moment";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <div className="space-y-6">
      {/* Category Header */}
      <div className="flex items-center gap-3">
        <Badge variant="secondary" className="text-sm capitalize font-medium">
          {category}
        </Badge>
        <div className="h-px bg-border flex-1"></div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sortedBlogs.map((blog, id) => (
          <Link key={id} href={`/blog/${blog.id}`} className="group block">
            <Card className="relative h-full overflow-hidden border-border/50 bg-card transition-all duration-200 ease-out hover:border-primary/30 hover:shadow-md hover:shadow-primary/5">
              {/* Subtle background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/[0.02] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

              <CardHeader className="relative pb-3">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base font-semibold leading-tight transition-colors duration-200 group-hover:text-primary line-clamp-2">
                    {blog.title}
                  </CardTitle>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-all duration-200 group-hover:text-primary group-hover:translate-x-0.5" />
                </div>
              </CardHeader>

              <CardContent className="relative pt-0">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <time
                    dateTime={moment(blog.date, "DD-MM-YYYY").toISOString()}
                  >
                    {moment(blog.date, "DD-MM-YYYY").format("MMM DD, YYYY")}
                  </time>
                </div>

                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>~3 min read</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Show message if no blogs */}
      {sortedBlogs.length === 0 && (
        <Card className="p-8 text-center">
          <CardContent>
            <p className="text-muted-foreground">
              No posts in this category yet.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BlogList;
