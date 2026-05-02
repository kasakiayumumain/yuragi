import { Hero } from "@/components/home/Hero";
import { LatestArticles } from "@/components/home/LatestArticles";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { ProfileSection } from "@/components/home/ProfileSection";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const articles = getAllPosts().slice(0, 3);
  return (
    <>
      <Hero />
      <LatestArticles articles={articles} />
      <CategoryGrid />
      <ProfileSection />
    </>
  );
}
