export type NowBuildingItem = {
  project: string;
  status: string;
};

export const nowBuilding: NowBuildingItem[] = [
  {
    project: "DevCurrent",
    status: "起票済みのIssueをもとに機能追加・改善を継続中です。",
  },
  {
    project: "Poker Chase クラブマッチ GTOトレーナー",
    status:
      "Phase 1（プリフロップ特化）を公開中。ポストフロップ以降の対応強化を検討しています。",
  },
];
