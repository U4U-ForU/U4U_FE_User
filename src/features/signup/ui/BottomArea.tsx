"use client";

import styled from "@emotion/styled";
import type { ReactNode } from "react";

export const BOTTOM_AREA_HEIGHT = 125;

interface BottomAreaProps {
  children: ReactNode;
}

export default function BottomArea({ children }: BottomAreaProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  z-index: 1;
  display: flex;
  width: min(100vw, 393px);
  padding: 0 20px calc(32px + env(safe-area-inset-bottom));
  transform: translateX(-50%);
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;
