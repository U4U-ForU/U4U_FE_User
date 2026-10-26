import type { GachaItem } from "./types";

export const MOCK_GACHA_ITEMS: GachaItem[] = Array.from(
  { length: 10 },
  (_, index) => ({
    id: index,
    name: "아이템 이름",
    imageUrl: "/tempImg/tempItemImg.png",
    description:
      "푹신한 핑크빛 젤리가 콕 박힌 귀여운 냥이 장갑! 착용하면 냥냥 펀치의 파워가 업! 심쿵 주의 귀여움으로 적의 마음을 스르륵 녹여 공격력을 살짝 낮춰버려요.",
  }),
);
