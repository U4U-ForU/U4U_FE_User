"use client";

import { useEffect } from "react";
import styled from "@emotion/styled";
import SkipButton from "@/src/features/gacha/ui/SkipButton";

const ANIMATION_DURATION = 3000;

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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const SkipArea = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
`;
