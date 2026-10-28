import styled from "@emotion/styled";
import DealItem from "./DealItem";

interface DealItemListProps {
  itemCount: number;
}

const VISIBLE_ITEM_COUNT = 5;

export default function DealItemList({ itemCount }: DealItemListProps) {
  const visibleCount = Math.min(itemCount, VISIBLE_ITEM_COUNT);
  const hiddenCount = itemCount - visibleCount;

  return (
    <ListBox>
      {Array.from({ length: visibleCount }, (_, index) => (
        <DealItem key={index} />
      ))}
      {hiddenCount > 0 && <MoreCount>+{hiddenCount}</MoreCount>}
    </ListBox>
  );
}

const ListBox = styled.div`
  display: flex;
  gap: 8px;
  justify-items: center;
  width: 100%;
`;

const MoreCount = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;

  color: var(--gray-600, #8e8889);
  text-align: center;

  /* body/body-medium */
  font-family: Pretendard;
  font-size: var(--typo-body-medium, 16px);
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;
