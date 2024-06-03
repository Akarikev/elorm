import { Link } from "next-view-transitions";
import { getBlogData } from "@/lib/articles";
import { Metadata } from "next";
import { getSortedBlog } from "@/lib/articles";
import { ArrowLeftIcon } from "lucide-react";
import MarkdownPreview from "@/components/markdown/markdown-preview";

export const dynamic = "force-dynamic";
export async function generateStaticParams({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const articles = getSortedBlog();
  return articles.map((article) => ({
    slug: article.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const getBlogsData = await getBlogData(params.slug);

  return {
    title: `${getBlogsData.title} | elorm's Blog`,
    description: getBlogsData.description,
    authors: {
      name: "elorm",
    },

    openGraph: {
      title: `${getBlogsData.title} | elorm's Blog`,
      url: `https://www.elorm.site/blog/${getBlogsData.id}`,
      siteName: `${getBlogsData.title} | elorm`,
      description: getBlogsData.description,
      images: "https://www.elorm.site/react-app.png",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${getBlogsData.title} | elorm's Blog`,
      description: getBlogsData.description,
      creator: "@elorm_elom",
      images: ["https://www.elorm.site/react-app.png"],
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

const Blog = async ({ params }: { params: { slug: string } }) => {
  const blogData = await getBlogData(params.slug);

  // const htmlContent = MarkdownPreview({ content: blogData.matterRes });
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
