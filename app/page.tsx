import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { LatestArticles } from "@/components/home/LatestArticles";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { ProfileSection } from "@/components/home/ProfileSection";
import type { Article } from "@/types/article";

const MOCK_ARTICLES: Article[] = [
  {
    slug: "michi-wo-hiraku",
    category: "books",
    title: "『道をひらく』を30代で読み返したら、刺さる箇所が変わっていた",
    date: "2026.04.28",
    author: "kuma",
    thumbnail: "",
    excerpt: "",
    tags: [],
  },
  {
    slug: "fukugyo-nedan",
    category: "build",
    title: "副業から事業へ。最初の壁は「自分で値段を決めること」だった",
    date: "2026.04.22",
    author: "atom",
    thumbnail: "",
    excerpt: "",
    tags: [],
  },
  {
    slug: "kaishain-vs-chousenn",
    category: "think",
    title: "会社員の安定 vs 不確実な挑戦。二人で議論したら結論が割れた",
    date: "2026.04.18",
    author: "both",
    thumbnail: "",
    excerpt: "",
    tags: [],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-ivory py-6 px-4">
      <div className="max-w-2xl mx-auto bg-ivory-light border border-ink/10 rounded-sm overflow-hidden">
        <Header />
        <main>
          <Hero />
          <LatestArticles articles={MOCK_ARTICLES} />
          <CategoryGrid />
          <ProfileSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
