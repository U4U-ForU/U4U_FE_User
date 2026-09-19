import styled from "@emotion/styled";
import Item from "./Item";
import type { InventoryItem } from "../model/types";

interface ItemListProps {
  items: InventoryItem[];
}

export default function ItemList({ items }: ItemListProps) {
  return (
    <Scroller>
      <ListBox>
        {items.map((item) => (
          <Item key={item.id} itemName={item.name} itemCount={item.count} />
        ))}
      </ListBox>
    </Scroller>
  );
}

const Scroller = styled.div`
  width: fit-content;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 12px;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
`;

const ListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  padding: 12px 6px;
  gap: 4px;
  justify-items: center;
  border-radius: var(--radius-md, 12px);
  background: rgba(255, 255, 255, 0.7);
`;
