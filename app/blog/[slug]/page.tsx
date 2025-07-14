import { Link } from "next-view-transitions";
import { getBlogData } from "@/lib/articles";

import { getSortedBlog } from "@/lib/articles";
import { ArrowLeftIcon } from "lucide-react";
import MarkdownPreview from "@/components/markdown/markdown-preview";
import Discussions from "@/components/discussions";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";
export async function generateStaticParams() {
  const articles = getSortedBlog();
  return articles.map((article) => ({
    slug: article.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const getBlogsData = await getBlogData(resolvedParams.slug);

  return {
    title: `${getBlogsData.title} | elorm's Blog`,
    description: getBlogsData.description,
    authors: {
      name: "elorm",
    },

    openGraph: {
      title: `${getBlogsData.title} | elorm's Blog`,
      url: `https://elorm.xyz/blog/${getBlogsData.id}`,
      siteName: "elorm.tsx",
      description: getBlogsData.description,
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(
            getBlogsData.title
          )}&description=${encodeURIComponent(
            getBlogsData.description
          )}&type=blog`,
          width: 1200,
          height: 630,
          alt: `${getBlogsData.title} - Article by Prince Elorm`,
        },
      ],
      type: "article",
      publishedTime: getBlogsData.date.toString(),
      authors: ["Prince Elorm"],
    },

    twitter: {
      card: "summary_large_image",
      title: `${getBlogsData.title} | elorm's Blog`,
      description: getBlogsData.description,
      creator: "@elorm_elom",
      site: "@elorm_elom",
      images: [
        `/api/og?title=${encodeURIComponent(
          getBlogsData.title
        )}&description=${encodeURIComponent(
          getBlogsData.description
        )}&type=blog`,
      ],
    },

    keywords: [
      "elorm",
      "blogging",
      "Ghanaian Bloggers",
      "coding tutorials",
      "tech blogs",
      "coding blogs",
      "nextjs",
      "frontend developer",
      "reactjs",
      `${getBlogsData.title}`,
    ],
  };
}

const Blog = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const blogData = await getBlogData(resolvedParams.slug);

  // const htmlContent = MarkdownPreview({ content: blogData.matterRes });
  return (
    <section className="flex  min-h-screen flex-col mt-16 px-4 md:p-10  md:px-32 md:mx-10 lg:mx-40">
      <Link
        href={"/blog"}
        className="inline-flex gap-2 items-center group hover:underline"
      >
        <ArrowLeftIcon className="group-hover:animate-ping w-3 h-3" />
        <p className="text-sm">back to blogs</p>
      </Link>

      <div>
        <div className="mt-7">
          <h1 className="font-extrabold tracking-tight text-xl md:text-3xl uppercase">
            {blogData.title}
          </h1>

          <p className="text-sm font-extrabold text-green-600">Author: elorm</p>
          <p className="px-1 rounded-md mt-1 underline  w-fit text-xs">
            {blogData.date.toString()}
          </p>
        </div>

        {/* <article
          dangerouslySetInnerHTML={{ __html: blogData.contentHTML }}
          className="mt-10 lg:mt-9 flex flex-col gap-2 leading-5  lg:leading-normal"
        /> */}

        <MarkdownPreview
          className="mt-10 lg:mt-9 flex flex-col gap-2 leading-5  lg:leading-normal"
          content={blogData.contentHTML}
        />
      </div>

      {/* Giscus */}

      <Discussions />

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
