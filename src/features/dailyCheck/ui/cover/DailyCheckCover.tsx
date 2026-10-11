"use client";

import styled from "@emotion/styled";
import Star from "./Star";

interface DailyCheckCoverProps {
  onClick: () => void;
}

export default function DailyCheckCover({ onClick }: DailyCheckCoverProps) {
  return (
    <Cover type="button" onClick={onClick}>
      <TopLeftStar size="big" />
      <TopLeftSmallStar size="small" />
      <Hint>아직 출석체크 전이에요!</Hint>
      <Title>클릭하고 출석체크 보상 얻기</Title>
      <BottomRightSmallStar size="small" />
      <BottomRightStar size="big" />
    </Cover>
  );
}

const Cover = styled.button`
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  width: 100%;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  border-radius: var(--radius-md, 12px);
  border: 2px solid var(--pink-p3, #dfafaf);
  background: var(--pink-p2, #ffd0d0);
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid var(--pink-p3, #dfafaf);
    outline-offset: 2px;
  }
`;

const Hint = styled.span`
  color: var(--pink-p4, #a75959);
  text-align: center;

  /* body/body-small */
  font-family: Pretendard;
  font-size: var(--typo-body-small, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  align-self: stretch;
`;

const Title = styled.span`
  paint-order: stroke fill;

  color: #fff;
  -webkit-text-stroke-width: 5px;
  -webkit-text-stroke-color: var(--pink-p4, #a75959);
  font-family: "Cafe24 Ssurround";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const TopLeftStar = styled(Star)`
  position: absolute;
  top: -15px;
  left: -11px;
`;

const TopLeftSmallStar = styled(Star)`
  position: absolute;
  top: 22px;
  left: -13px;
  transform: rotate(-30deg);
`;

const BottomRightStar = styled(Star)`
  position: absolute;
  right: -16px;
  bottom: -14px;
`;

const BottomRightSmallStar = styled(Star)`
  position: absolute;
  right: 20px;
  bottom: -11px;
  transform: rotate(-25deg);
`;
