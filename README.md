# KSStudioWebSite

木田颯真の個人ポートフォリオサイトです。自己紹介、開発中のアプリ、外部プラットフォーム（X, GitHub, ココナラ, クラウドワークス）へのリンクをまとめています。

**🔗 Live: [ks-web-site.vercel.app](https://ks-web-site.vercel.app/)**

## セクション構成

- **Hero** : 名前・肩書き・SNS/外部プラットフォームへのリンク
- **About** : 自己紹介・スキル一覧
- **Projects** : 開発実績（DevCurrent, Poker Chase クラブマッチ GTOトレーナー, pdf-split-app）
- **Now Building** : 現在開発中のアプリのステータス
- **News** : お知らせ
- **Links** : X / GitHub / ココナラ / クラウドワークスへのリンク集
- **Contact** : お仕事の依頼・お問い合わせ用の連絡先

## 技術スタック

Next.js (App Router) / TypeScript / Tailwind CSS。Vercelにデプロイし、GitHubの`main`ブランチへのpushで自動再デプロイされます。

## コンテンツの更新方法

サーバーやCMSは使わず、`src/data/` 配下のファイルを直接編集して更新します。

- `src/data/site.ts` : プロフィール、スキル、外部リンク、連絡先メールアドレス
- `src/data/projects.ts` : 開発実績（Projectsセクション）
- `src/data/now-building.ts` : 開発中のアプリのステータス
- `src/data/news.ts` : お知らせ（新しい項目は配列の先頭に追加）

編集後は以下でビルドを確認してから `git push` してください。

```bash
npm run build
```

## セットアップ

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開くと確認できます。
