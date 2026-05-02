export type CategorySlug = "books" | "learn" | "trip" | "build" | "think";

export const CATEGORIES_DATA: { slug: CategorySlug; label: string; en: string }[] = [
  { slug: "books", label: "読書", en: "BOOKS" },
  { slug: "learn", label: "学び", en: "LEARN" },
  { slug: "trip",  label: "旅",   en: "TRIP" },
  { slug: "build", label: "挑戦", en: "BUILD" },
  { slug: "think", label: "思考", en: "THINK" },
];

export const CATEGORY_MAP: Record<string, { label: string; en: string }> =
  Object.fromEntries(CATEGORIES_DATA.map(({ slug, label, en }) => [slug, { label, en }]));
