export const profile = {
  name: "木田 颯真",
  title: "System Design Eng. Student",
  affiliation: "大阪工業大学",
  location: "Osaka, Japan",
  tagline: "AIを使った業務効率化・要約ツールを個人開発しています。",
  bio: "大阪工業大学でシステムデザイン工学を専攻。Python・TypeScriptを中心に、Claude/GeminiなどのLLM APIを組み込んだアプリを個人開発しています。Dev Containers・Docker・WSL2を使った開発環境づくりも得意分野です。",
  skills: [
    "Python",
    "TypeScript",
    "Next.js",
    "LLM API (Claude / Gemini)",
    "Docker",
    "Dev Containers",
    "WSL2",
    "Tailwind CSS",
  ],
} as const;

export type LinkItem = {
  label: string;
  short: string;
  href: string;
  description: string;
};

export const links: LinkItem[] = [
  {
    label: "X (Twitter)",
    short: "X",
    href: "https://x.com/kiro12102005",
    description: "開発の進捗や技術メモを発信しています。",
  },
  {
    label: "GitHub",
    short: "GH",
    href: "https://github.com/kiro12102005",
    description: "個人開発しているアプリのソースコードを公開しています。",
  },
  {
    label: "ココナラ",
    short: "coco",
    href: "https://coconala.com/users/6216253",
    description: "作業依頼・見積もりの相談はこちらから。",
  },
  {
    label: "クラウドワークス",
    short: "CW",
    href: "https://crowdworks.jp/public/employees/7125408?ref=share_url_wkprofile",
    description: "実績・評価はクラウドワークスのプロフィールをご覧ください。",
  },
];

export const contactEmail = "contact.somakida@gmail.com";
