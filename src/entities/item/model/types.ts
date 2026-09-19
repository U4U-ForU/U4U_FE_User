export type ItemStatus = "보유" | "예약";

export type ItemFilter = "전체" | ItemStatus;

export interface InventoryItem {
  id: number;
  name: string;
  count?: number;
  status: ItemStatus;
}
