export type Author = "kuma" | "atom" | "both";
export type Category = "books" | "learn" | "trip" | "build" | "think";

export type Article = {
  slug: string;
  category: Category;
  title: string;
  date: string;
  author: Author;
  thumbnail: string;
  excerpt: string;
  tags: string[];
  series?: string;
};
