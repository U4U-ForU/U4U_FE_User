"use client";

import { useEffect } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import SkipButton from "@/src/features/gacha/ui/SkipButton";
import { SkipArea } from "@/src/features/gacha/ui/SkipArea";

const ANIMATION_DURATION = 2000;

interface GachaGoProps {
  onFinish: () => void;
}

export default function GachaGo({ onFinish }: GachaGoProps) {
  useEffect(() => {
    const timer = setTimeout(onFinish, ANIMATION_DURATION);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <Wrapper>
      <SkipArea>
        <SkipButton onClick={onFinish} />
      </SkipArea>
      <Content>
        <Machine>
          <GachaImage
            src="/img/Gacha/Gacha.svg"
            width={320}
            height={442}
            alt=""
            priority
          />
        </Machine>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin-bottom: 60px;
`;

const Machine = styled.div`
  position: relative;
  width: 100%;
  max-width: 320px;
`;

const GachaImage = styled(Image)`
  width: 100%;
  height: auto;
`;
