import fs from "fs";
import path from "path";
import matter from "gray-matter";
import moment from "moment";
import { remark } from "remark";
import remarkHtml from "remark-html";

import type { blogItemType } from "@/types";

const blogDir = path.join(process.cwd(), "articles");

export const getSortedBlog = async (): Promise<blogItemType[]> => {
  "use cache";
  const fileNames = fs.readdirSync(blogDir);

  const allBlogs = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(blogDir, fileName);

    const fileContent = fs.readFileSync(fullPath, "utf-8");

    const matterRes = matter(fileContent);

    return {
      id,
      title: matterRes.data.title,
      image: matterRes.data.image,
      date: matterRes.data.date,
      category: matterRes.data.category,
      description: matterRes.data.description,
    };
  });

  return allBlogs.sort((a, b) => {
    const format = "MM-DD-YYYY";
    const dateOne = moment(a.date, format);
    const dateTwo = moment(b.date, format);
    if (dateOne.isBefore(dateTwo)) {
      return -1;
    } else if (dateTwo.isAfter(dateOne)) {
      return 1;
    } else return 0;
  });
};

export const getCategorizedBlogs = async (): Promise<Record<string, blogItemType[]>> => {
  "use cache";
  const sortedBlogs = await getSortedBlog();
  const categorizedBlogs: Record<string, blogItemType[]> = {};

  sortedBlogs.forEach((blog) => {
    if (!categorizedBlogs[blog.category]) {
      categorizedBlogs[blog.category] = [];
    }
    categorizedBlogs[blog.category].push(blog);
  });

  return categorizedBlogs;
};

export const getBlogData = async (id: string) => {
  "use cache";
  const fullPath = path.join(blogDir, `${id}.md`);

  const fileContent = fs.readFileSync(fullPath, "utf-8");

  const matterRes = matter(fileContent);

  // const processContent = await remark()
  //   .use(remarkHtml)
  //   .process(matterRes.content);

  const contentHTML = matterRes.content.toString();


  return {
    id,
    contentHTML,
    title: matterRes.data.title,
    image: matterRes.data.image,
    category: matterRes.data.category,
    description: matterRes.data.description,
    date: matterRes.data.date, // Return raw date string from frontmatter
  };
};
