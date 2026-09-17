import FilterBox from "./FilterBox";
import styled from "@emotion/styled";

interface FilterBoxListProps {
  FilteringName: "전체" | "보유" | "예약";
}

export default function FilterBoxList({ FilteringName }: FilterBoxListProps) {
  return (
    <Wrapper>
      <FilterBox
        text="전체"
        isActive={FilteringName === "전체" ? true : false}
      />
      <FilterBox
        text="보유"
        isActive={FilteringName === "보유" ? true : false}
      />
      <FilterBox
        text="예약"
        isActive={FilteringName === "예약" ? true : false}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 393px;
  padding: var(--space-16, 16px) 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
