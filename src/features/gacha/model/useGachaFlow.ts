"use client";

import { useCallback, useRef, useState } from "react";
import type { GachaItem, GachaStep } from "./types";

const requestGacha = async (): Promise<GachaItem[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [];
};

export function useGachaFlow() {
  const [step, setStep] = useState<GachaStep>("ready");
  const [items, setItems] = useState<GachaItem[]>([]);
  const resultRef = useRef<Promise<GachaItem[]> | null>(null);

  const draw = useCallback(() => {
    resultRef.current = requestGacha();
    setStep("drawing");
  }, []);

  const finishDrawing = useCallback(async () => {
    setItems((await resultRef.current) ?? []);
    setStep("result");
  }, []);

  const reset = useCallback(() => {
    resultRef.current = null;
    setItems([]);
    setStep("ready");
  }, []);

  return { step, items, draw, finishDrawing, reset };
}
