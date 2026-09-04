import DailyEach from "./DailyEach";
import styled from "@emotion/styled";

interface DailyEachListProps {
  totalCount: number;
}

export default function DailyEachList({ totalCount }: DailyEachListProps) {
  return (
    <Wrapper>
      {Array.from({ length: 7 }, (_, index) => (
        <DailyEach key={index} isFilled={index < totalCount} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  &::before {
    position: absolute;
    top: 50%;
    right: 16px;
    left: 16px;
    height: 2px;
    transform: translateY(-50%);
    background: var(--brown-b1, #c9b4a9);
    content: "";
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;
