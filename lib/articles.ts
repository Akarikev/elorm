import fs from "fs";
import path from "path";
import matter from "gray-matter";
import moment from "moment";
import { remark } from "remark";
import remarkHtml from "remark-html";

import type { blogItemType } from "@/types";

const blogDir = path.join(process.cwd(), "articles");
export const getSortedBlog = (): blogItemType[] => {
  const fileNames = fs.readdirSync(blogDir);

  const allBlogs = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(blogDir, fileName);

    const fileContent = fs.readFileSync(fullPath, "utf-8");

    const matterRes = matter(fileContent);

    return {
      id,
      title: matterRes.data.title,
      date: matterRes.data.date,
      category: matterRes.data.category,
      description: matterRes.data.description,
    };
  });

  return allBlogs.sort((a, b) => {
    const format = "DD-MM-YYYY";
    const dateOne = moment(a.date, format);
    const dateTwo = moment(b.date, format);
    if (dateOne.isBefore(dateTwo)) {
      return -1;
    } else if (dateTwo.isAfter(dateOne)) {
      return 1;
    } else return 0;
  });
};

export const getCategorizedBlogs = (): Record<string, blogItemType[]> => {
  const sortedBlogs = getSortedBlog();
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
    category: matterRes.data.category,
    description: matterRes.data.description,
    date: moment(matterRes.data.date, "DD-MM-YYYY").format("MMMM Do YYYY"),
  };
};
