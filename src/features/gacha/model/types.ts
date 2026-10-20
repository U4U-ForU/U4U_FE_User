export type GachaStep = "ready" | "drawing" | "result";

export interface GachaItem {
  id: number;
  name: string;
  imageUrl: string;
}
