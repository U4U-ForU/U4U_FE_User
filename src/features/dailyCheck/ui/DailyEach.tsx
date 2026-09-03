import styled from "@emotion/styled";

interface DailyEachProps {
  isFilled: boolean;
}

export default function DailyEach({ isFilled }: DailyEachProps) {
  return <Wrapper $isFilled={isFilled} />;
}

const Wrapper = styled.div<{ $isFilled: boolean }>`
  width: 32px;
  height: 32px;
  aspect-ratio: 1/1;
  border-radius: var(--radius-full, 999999px);
  border: 2px solid
    ${({ $isFilled }) =>
      $isFilled ? "var(--pink-p3, #dfafaf)" : "var(--brown-b1, #c9b4a9)"};
  background: ${({ $isFilled }) =>
    $isFilled ? "var(--pink-p2, #ffd3d3)" : "#fff"};
`;
