import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { LatestArticles } from "@/components/home/LatestArticles";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { ProfileSection } from "@/components/home/ProfileSection";
import { MOCK_ARTICLES } from "@/lib/mock-posts";

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
