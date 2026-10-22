export type GachaStep = "ready" | "drawing" | "result";
export type GachaDrawCount = 1 | 10;

export const GACHA_DRAW_COST: Record<GachaDrawCount, number> = {
  1: 2,
  10: 20,
};

export interface GachaItem {
  id: number;
  name: string;
  imageUrl: string;
}
