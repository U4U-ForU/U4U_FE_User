import styled from "@emotion/styled";
import FilterBox from "./FilterBox";
import type { ItemFilter } from "@/src/entities/item/model/types";

const FILTERS: ItemFilter[] = ["전체", "보유", "예약"];

interface FilterBoxListProps {
  value: ItemFilter;
  onChange: (value: ItemFilter) => void;
}

export default function FilterBoxList({ value, onChange }: FilterBoxListProps) {
  return (
    <Wrapper>
      {FILTERS.map((filter) => (
        <FilterBox
          key={filter}
          text={filter}
          isActive={filter === value}
          onClick={() => onChange(filter)}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: var(--space-16, 16px) 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
