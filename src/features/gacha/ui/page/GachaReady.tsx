"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import Header from "@/src/shared/ui/Header";
import Button from "@/src/shared/ui/Button";

interface GachaReadyProps {
  onDraw: () => void;
}

export default function GachaReady({ onDraw }: GachaReadyProps) {
  return (
    <Wrapper>
      <Header title="뽑기" />
      <GachaImage src="/img/Gacha/Gacha.svg" width={320} height={442} alt="" />
      <Bottom>
        <Buttons>
          <Button
            text="별 20개로 10회 뽑기"
            fontColor="white"
            backgroundColor="#FFD0D0"
            fontBorderColor="#A75959"
            borderColor="#DFAFAF"
            boxShadow={false}
            onClick={onDraw}
          />
          <Button
            text="별 2개로 1회 뽑기"
            fontColor="#A75959"
            backgroundColor="white"
            borderColor="#DFAFAF"
            boxShadow={false}
            onClick={onDraw}
          />
        </Buttons>
        <CurrentStar>현재 별 보유 : 2400</CurrentStar>
      </Bottom>
    </Wrapper>
  );
}

const Bottom = styled.div`
  margin-top: 44px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  && > button {
    width: 100%;
  }
`;

const CurrentStar = styled.div`
  color: var(--gray-500, #b3aeaf);
  text-align: center;
  font-family: Pretendard;
  font-size: var(--typo-body-small, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 80px;
`;

const GachaImage = styled(Image)`
  margin-top: 32px;
  width: 100%;
  max-width: 320px;
  height: auto;
`;
