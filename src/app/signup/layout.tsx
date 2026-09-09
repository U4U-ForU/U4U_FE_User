"use client";

import styled from "@emotion/styled";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { BOTTOM_AREA_HEIGHT } from "@/src/features/signup/ui/BottomArea";
import { useSignupStore } from "@/src/features/signup/model/signupStore";

const FIRST_STEP = "/signup/email";

export default function SignupLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const isDirectEntry =
    pathname !== FIRST_STEP && useSignupStore.getState().form.email === "";

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (!isDirectEntry) return;

    router.replace(FIRST_STEP);
  }, [isDirectEntry, router]);

  return (
    <Wrapper>
      <Background />
      <Content>{isDirectEntry ? null : children}</Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 100dvh;
  padding: 40px 20px
    calc(${BOTTOM_AREA_HEIGHT}px + 24px + env(safe-area-inset-bottom));
  flex-direction: column;
`;

const Background = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  background-color: #ffe4e4;
  background-image: url("/img/background/50.png");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  pointer-events: none;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex: 1;
  flex-direction: column;
`;
