import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Article, Category, Author } from "@/types/article";

const POSTS_DIR = path.join(process.cwd(), "posts");

function formatDate(raw: string | Date): string {
  const d = new Date(raw);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}

export function getAllPosts(): Article[] {
  const categories = fs
    .readdirSync(POSTS_DIR)
    .filter((name) => fs.statSync(path.join(POSTS_DIR, name)).isDirectory());

  const posts: Article[] = [];

  for (const category of categories) {
    const dir = path.join(POSTS_DIR, category);
    const files = fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

    for (const file of files) {
      const slug = file.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data } = matter(raw);

      posts.push({
        slug,
        category: category as Category,
        title: data.title ?? "",
        date: formatDate(data.date),
        author: (data.author ?? "kuma") as Author,
        thumbnail: data.thumbnail ?? "",
        excerpt: data.excerpt ?? "",
        tags: data.tags ?? [],
        series: data.series,
      });
    }
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostsByCategory(category: string): Article[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getPostBySlug(
  category: string,
  slug: string
): { frontmatter: Article; content: string } | null {
  const extensions = [".mdx", ".md"];

  for (const ext of extensions) {
    const filePath = path.join(POSTS_DIR, category, `${slug}${ext}`);
    if (!fs.existsSync(filePath)) continue;

    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);

    return {
      frontmatter: {
        slug,
        category: category as Category,
        title: data.title ?? "",
        date: formatDate(data.date),
        author: (data.author ?? "kuma") as Author,
        thumbnail: data.thumbnail ?? "",
        excerpt: data.excerpt ?? "",
        tags: data.tags ?? [],
        series: data.series,
      },
      content,
    };
  }

  return null;
}
