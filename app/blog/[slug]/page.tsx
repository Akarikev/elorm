import { Link } from 'next-view-transitions'
import { getBlogData } from "@/lib/articles";
import { Metadata } from "next";
import { getSortedBlog } from "@/lib/articles";
import { ArrowLeftIcon } from "lucide-react";

const blogTitles = getSortedBlog().map((blog) => blog.id);

export const metadata: Metadata = {
  title: `elorm ⚡ | ${blogTitles}`,
  description: "this is elorm.tsx! - everything you need to know  👺",
};

const Blog = async ({ params }: { params: { slug: string } }) => {
  const blogData = await getBlogData(params.slug);
  return (
    <section className="flex  min-h-screen flex-col mt-16 px-4 md:p-10 lg:px-40 md:px-32 md:mx-10 lg:mx-40">
      <Link
        href={"/blog"}
        className="inline-flex gap-2 items-center group hover:underline"
      >
        <ArrowLeftIcon className="group-hover:animate-ping w-3 h-3" />
        <p className="text-sm">back to blogs</p>
      </Link>

      <div>
        <div className="mt-7">
          <h1 className="font-extrabold tracking-tight text-xl md:text-3xl">
            {blogData.title}
          </h1>
          <p className="px-1 rounded-md bg-zinc-800  w-fit text-sm">
            {blogData.date.toString()}
          </p>
        </div>

        <article
          dangerouslySetInnerHTML={{ __html: blogData.contentHTML }}
          className="mt-10 lg:mt-9 flex flex-col gap-2 leading-5  lg:leading-normal"
        />
      </div>

      <Link
        href={"/blog"}
        className="inline-flex mt-20 gap-2 items-center group hover:underline"
      >
        <ArrowLeftIcon className="group-hover:animate-ping w-3 h-3" />
        <p className="text-sm">back to blogs</p>
      </Link>
    </section>
  );
};

export default Blog;
