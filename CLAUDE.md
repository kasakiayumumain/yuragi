# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

ブログ名: **Yuragi,**（カンマだけ朱色）
運営: くま & あとむ — 会社員と経営者のあいだで揺れる二人の記録
URL: https://yuragi.vercel.app

## よく使うコマンド

```bash
npm run dev      # 開発サーバー起動 (localhost:3000)
npm run build    # 本番ビルド（デプロイ前に必ず確認）
npm run lint     # ESLint
```

## スタック

- Next.js 16 (App Router, TypeScript strict, Turbopack)
- Tailwind CSS v4（CSS-first, `@theme` でカスタムカラー定義）
- MDX（gray-matter + next-mdx-remote v6 / `compileMDX` for RSC）
- Vercel デプロイ

## ディレクトリ構成

```
app/
  page.tsx                          # トップページ（getAllPosts().slice(0,3)）
  about/page.tsx
  category/[slug]/page.tsx
  posts/[category]/[slug]/page.tsx  # compileMDX でレンダリング
components/
  layout/   Header.tsx Footer.tsx
  common/   Logo.tsx CategoryLabel.tsx AuthorBadge.tsx
            decorations/ WavyLine.tsx ScrollMark.tsx
  home/     Hero.tsx ArticleCard.tsx LatestArticles.tsx
            CategoryGrid.tsx ProfileSection.tsx
  article/  ArticleHeader.tsx ArticleBody.tsx article-body.css
lib/
  categories.ts   # CATEGORIES_DATA / CATEGORY_MAP の正規データ
  posts.ts        # getAllPosts / getPostsByCategory / getPostBySlug
types/
  article.ts      # Article / Author / Category 型
posts/
  books/ learn/ trip/ build/ think/   ← MDX ファイルをここに追加
```

## 記事の追加方法

`posts/{category}/slug.mdx` を作成するだけ。フロントマター：

```yaml
---
title: タイトル
date: 2026-05-01
author: kuma          # kuma | atom | both
category: books       # books | learn | trip | build | think
thumbnail: /images/books/example.jpg
excerpt: 一覧に表示する要約（150字以内）
tags: [タグ1, タグ2]
series: ""            # 任意
---
```

## カラーパレット（Tailwind クラス名）

| クラス | 用途 |
|---|---|
| `bg-ivory` / `bg-ivory-light` | ページ背景 / カード背景 |
| `text-burnt` / `border-burnt` | 焼き朱アクセント (#C2410C) |
| `text-ink` | メインテキスト |
| `text-ink-mid` | サブテキスト |
| `text-ink-muted` | キャプション・日付 |
| `bg-cat-books` 〜 `bg-cat-think` | 記事カードのサムネイル色 |

## コーディング規約

- `any` 禁止。型は必ず定義する
- コンポーネントは named export（page.tsx / layout.tsx は default export）
- **HEX カラーをコンポーネント内で直書きしない** — Tailwind クラスを使う（SVG の `stroke/fill` 属性は例外）
- 著者は `— くま`（emダッシュ形式）、`by くま` は使わない
- `CategoryLabel` で `Rec` 部分を装飾せずに出さない（常に burnt + italic）
- フォントは CSS 変数で参照: `var(--font-noto-serif-jp)` / `var(--font-noto-sans-jp)` / `var(--font-dm-serif-display)`
