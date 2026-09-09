"use client";

import styled from "@emotion/styled";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.replace("/signup"), 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <Wrapper>
      <Background />
      <Logo
        src="/img/info/logo.png"
        alt="U4U"
        width={190}
        height={85}
        priority
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 100dvh;
  justify-content: center;
  align-items: center;
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

const Logo = styled(Image)`
  position: relative;
  z-index: 1;
`;
