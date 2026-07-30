# KSWEBSITE

木田颯真の個人ポートフォリオサイト。自己紹介、開発中のアプリ、外部プラットフォーム（X, GitHub, ココナラ, クラウドワークス）へのリンクをまとめています。

## 技術スタック

Next.js (App Router) / TypeScript / Tailwind CSS。Vercelへのデプロイを想定しています。

## コンテンツの更新方法

サーバーやCMSは使わず、`src/data/` 配下のファイルを直接編集して更新します。

- `src/data/site.ts` : プロフィール、スキル、外部リンク
- `src/data/projects.ts` : 開発実績（Projectsセクション）
- `src/data/now-building.ts` : 開発中のアプリのステータス
- `src/data/news.ts` : お知らせ（新しい項目は配列の先頭に追加）

編集後は `git push` すればVercelが自動で再デプロイします。

## セットアップ

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開くと確認できます。
