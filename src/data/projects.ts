export type Project = {
  name: string;
  description: string;
  tags: string[];
  demoHref?: string;
  githubHref: string;
};

export const projects: Project[] = [
  {
    name: "DevCurrent",
    description:
      "IT/AI業界の急速な変化に追いつくためのエンジニア向けニュースアプリ。最新の技術情報をピックアップして紹介し、日本語・英語の両方に対応しています。",
    tags: ["TypeScript", "Next.js", "LLM API"],
    demoHref: "https://dev-current.vercel.app",
    githubHref: "https://github.com/kiro12102005/DevCurrent",
  },
  {
    name: "Poker Chase クラブマッチ GTOトレーナー",
    description:
      "6人打ちクラブマッチ形式に特化したプリフロップ練習アプリ。CFRソルバーによる最適解のクイズ形式トレーニングと、Gemini APIを使ったポストフロップのAI分析機能を搭載。",
    tags: ["TypeScript", "Next.js", "CFRソルバー", "Gemini API"],
    demoHref: "https://pokergtoapp-green.vercel.app",
    githubHref: "https://github.com/kiro12102005/pokergtoapp",
  },
  {
    name: "pdf-split-app",
    description: "PDFファイルを分割するためのシンプルなツール。",
    tags: ["HTML"],
    githubHref: "https://github.com/kiro12102005/pdf-split-app",
  },
];
