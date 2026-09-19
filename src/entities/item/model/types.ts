export type ItemStatus = "보유" | "예약";

export type ItemFilter = "전체" | ItemStatus;

export interface InventoryItem {
  id: number;
  name: string;
  count?: number;
  status: ItemStatus;
}

export interface ItemModalProps {
  maker: string;
  img: string;
  itemName: string;
  itemCount?: number;
  itemDescription: string;
  onClose: () => void;
}
