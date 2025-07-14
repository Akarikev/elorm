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
      "tech",
      "AI",
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

  return (
    <section className="flex min-h-screen flex-col mt-16 px-4 md:p-10  md:px-32 md:mx-10 lg:mx-40">
      {/* Back Link */}
      <div className="pb-4">
        <Link
          href={"/blog"}
          className="inline-flex items-center gap-2 rounded border border-border px-3 py-1.5 text-sm font-mono text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span>Back to blogs</span>
        </Link>
      </div>

      {/* Blog Header */}
      <header className="w-full max-w-3xl mx-auto text-center mb-8">
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-2 font-mono leading-tight">
          {blogData.title}
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-xs md:text-sm text-muted-foreground font-light mb-2">
          <span>
            By <span className="font-semibold text-primary">elorm</span>
          </span>
          <span className="hidden md:inline">&middot;</span>
          <span>{blogData.date.toString()}</span>
        </div>
        <div className="h-px w-12 bg-border mx-auto my-4" />
      </header>

      {/* Blog Content */}
      <article className="w-full max-w-3xl mx-auto bg-card/80 rounded-lg shadow-sm">
        <MarkdownPreview
          className="mt-10 lg:mt-9 flex flex-col gap-2 leading-5  lg:leading-normal prose prose-neutral dark:prose-invert prose-headings:font-bold prose-headings:font-mono prose-p:leading-relaxed prose-img:rounded-lg prose-img:mx-auto"
          content={blogData.contentHTML}
        />
      </article>

      {/* Comments/Discussions */}
      <div className="w-full max-w-3xl mx-auto mt-12 border-t border-border pt-8">
        <Discussions />
      </div>
    </section>
  );
};

export default Blog;
