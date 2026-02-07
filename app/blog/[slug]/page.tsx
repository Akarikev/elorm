import { Link } from "next-view-transitions";
import { getBlogData } from "@/lib/articles";
import { getSortedBlog } from "@/lib/articles";
import { ArrowLeftIcon } from "lucide-react";
import MarkdownPreview from "@/components/markdown/markdown-preview";
import Discussions from "@/components/discussions";
import { ShareButton } from "@/components/ui/share-button";

type PageProps = {
  params: Promise<{ slug: string }>;
};


export async function generateStaticParams() {
  const articles = await getSortedBlog();
  return articles.map((article: any) => ({
    slug: article.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  "use cache";
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
      "software engineer",
      "reactjs",
      `${getBlogsData.title}`,
    ],
  };
}

const Blog = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const blogData = await getBlogData(resolvedParams.slug);

  return (
    <article className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-32 lg:px-40 py-24 md:py-32">
        {/* Back Link */}
        <div className="mb-12">
          <Link
            href={"/blog"}
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to writing</span>
          </Link>
        </div>

          {/* Share Button (Top) */}
        <div className="max-w-3xl -mt-10 mx-auto mb-10 flex justify-end">
           <ShareButton 
             title={blogData.title}
             url={`https://elorm.xyz/blog/${blogData.id}`}
             description={blogData.description}
           />
        </div>

        {/* Blog Header */}
        <header className="max-w-3xl mx-auto mb-16 text-center md:text-left">
           <div className="flex items-center gap-3 text-sm text-muted-foreground font-mono mb-6 justify-center md:justify-start">
              <time dateTime={blogData.date}>
                {(() => {
                  // Parse MM-DD-YYYY format
                  const [month, day, year] = blogData.date.split('-');
                  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
                  return new Intl.DateTimeFormat('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: '2-digit' 
                  }).format(date);
                })()}
              </time>
              <span>•</span>
              <span>Elorm</span>
           </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-8 text-foreground">
            {blogData.title}
          </h1>
        </header>

      

        {/* Blog Content */}
        <div className="max-w-3xl mx-auto">
          <MarkdownPreview
            className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-headings:font-medium prose-p:leading-relaxed prose-img:rounded-sm prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none text-muted-foreground"
            content={blogData.contentHTML}
          />
        </div>

        {/* Share Button Section */}
        <div className="max-w-3xl mx-auto mt-16 mb-8 flex items-center justify-between py-6 border-t border-border/40">
           <div className="text-muted-foreground italic font-serif">
              share this article
           </div>
           <ShareButton 
             title={blogData.title}
             url={`https://elorm.xyz/blog/${blogData.id}`}
             description={blogData.description}
           />
        </div>

        {/* Comments/Discussions */}
        <div className="max-w-3xl mx-auto mt-20 pt-10 border-t border-border/40">
          <Discussions />
        </div>
      </div>
    </article>
  );
};

export default Blog;
