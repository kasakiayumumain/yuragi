import type { Article } from "@/types/article";

export const MOCK_ARTICLES: Article[] = [
  {
    slug: "michi-wo-hiraku",
    category: "books",
    title: "『道をひらく』を30代で読み返したら、刺さる箇所が変わっていた",
    date: "2026.04.28",
    author: "kuma",
    thumbnail: "",
    excerpt: "学生の頃と違い、今は「焦り」より「問い」として受け取れるようになった。",
    tags: ["松下幸之助", "古典", "自己啓発"],
  },
  {
    slug: "fukugyo-nedan",
    category: "build",
    title: "副業から事業へ。最初の壁は「自分で値段を決めること」だった",
    date: "2026.04.22",
    author: "atom",
    thumbnail: "",
    excerpt: "値段を決めるのが怖かった。その理由を分解してみたら、自己評価の問題だとわかった。",
    tags: ["副業", "値決め", "経営"],
  },
  {
    slug: "kaishain-vs-chousenn",
    category: "think",
    title: "会社員の安定 vs 不確実な挑戦。二人で議論したら結論が割れた",
    date: "2026.04.18",
    author: "both",
    thumbnail: "",
    excerpt: "同じ状況にいるはずなのに、リスクの感じ方がまったく違った。",
    tags: ["会社員", "起業", "対話"],
  },
];
