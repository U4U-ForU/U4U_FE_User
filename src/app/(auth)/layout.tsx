"use client";

import styled from "@emotion/styled";
import type { ReactNode } from "react";
import { BOTTOM_AREA_HEIGHT } from "@/src/features/signup/ui/BottomArea";

/**
 * 로그인·회원가입 화면이 공통으로 쓰는 여백.
 * 하단에 고정된 버튼 영역만큼 아래 여백을 확보해 콘텐츠가 가리지 않게 한다.
 * 배경과 스크롤 잠금은 global.css가 모든 페이지에 적용한다.
 */
export default function AuthLayout({ children }: { children: ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 100dvh;
  padding: 40px 20px
    calc(${BOTTOM_AREA_HEIGHT}px + 24px + env(safe-area-inset-bottom));
  flex-direction: column;
`;
