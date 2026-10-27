"use client";

import { useCallback, useRef, useState } from "react";
import type { GachaDrawCount, GachaItem, GachaStep } from "./types";
import { createMockGachaItems } from "./mockItems";

const requestGacha = async (
  drawCount: GachaDrawCount,
): Promise<GachaItem[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return createMockGachaItems(drawCount);
};

export function useGachaFlow() {
  const [step, setStep] = useState<GachaStep>("ready");
  const [items, setItems] = useState<GachaItem[]>([]);
  const resultRef = useRef<Promise<GachaItem[]> | null>(null);

  const draw = useCallback((drawCount: GachaDrawCount) => {
    resultRef.current = requestGacha(drawCount);
    setStep("drawing");
  }, []);

  const finishDrawing = useCallback(async () => {
    setItems((await resultRef.current) ?? []);
    setStep("beforeResult");
  }, []);

  const showResult = useCallback(() => {
    setStep("result");
  }, []);

  const showAllResult = useCallback(() => {
    setStep("allResult");
  }, []);

  const reset = useCallback(() => {
    resultRef.current = null;
    setItems([]);
    setStep("ready");
  }, []);

  return {
    step,
    items,
    draw,
    finishDrawing,
    showResult,
    showAllResult,
    reset,
  };
}
