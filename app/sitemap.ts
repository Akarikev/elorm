import { MetadataRoute } from "next";
import { getSortedBlog } from "@/lib/articles";
import moment from "moment";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://elorm.xyz";

  // Get all blog posts
  const blogs = getSortedBlog();

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/candies`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/roaastme`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  // Blog posts
  const blogPages = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.id}`,
    lastModified: moment(blog.date, "DD-MM-YYYY").toDate(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
