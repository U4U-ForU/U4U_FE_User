import styled from "@emotion/styled";
import DailyTitle from "./DailyTitle";
import DailyEachList from "./DailyEachList";

interface DailyCheckProps {
  totalCount: number;
}

export default function DailyCheckBlock({ totalCount }: DailyCheckProps) {
  return (
    <Wrapper>
      <DailyTitle />
      <DailyProgressWrapper>
        <DailyEachList totalCount={totalCount} />
      </DailyProgressWrapper>
    </Wrapper>
  );
}

const DailyProgressWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 16px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 2px solid var(--brown-b2, #a18f85);
  background: #fff;
  height: 68px;
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  border-radius: 12px;
  border: 2px solid var(--brown-b2, #a18f85);
  background: var(--brown-b1, #c9b4a9);
  display: flex;
  height: 120px;
  width: 100%;
  padding: 6px 12px 12px 12px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
