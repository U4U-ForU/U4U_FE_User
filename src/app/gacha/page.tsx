"use client";

import styled from "@emotion/styled";
import { useGachaFlow } from "@/src/features/gacha/model/useGachaFlow";
import GachaReady from "@/src/features/gacha/ui/page/GachaReady";
import GachaGo from "@/src/features/gacha/ui/page/GachaGo";
import GachaResult from "@/src/features/gacha/ui/page/GachaResult";

export default function Gacha() {
  const { step, items, draw, finishDrawing, reset } = useGachaFlow();

  return (
    <Page>
      {step === "ready" && <GachaReady onDraw={draw} />}
      {step === "drawing" && <GachaGo onFinish={finishDrawing} />}
      {step === "result" && <GachaResult items={items} onRetry={reset} />}
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  height: 100dvh;
  padding-bottom: env(safe-area-inset-bottom);
  flex-direction: column;
`;
