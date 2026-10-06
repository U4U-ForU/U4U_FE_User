"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { isAxiosError } from "axios";
import { saveTokens } from "@/src/shared/lib/tokenStorage";
import { login } from "../api/login";
import type { LoginRequestProps } from "../api/type";

export function useLoginSubmit() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const submit = useCallback(
    async ({ loginId, password }: LoginRequestProps) => {
      if (isSubmitting) return;

      setIsSubmitting(true);
      setError("");

      try {
        const tokens = await login({ loginId, password });

        saveTokens(tokens);
        router.push("/main");
      } catch (submitError) {
        setError(
          isAxiosError(submitError) &&
            typeof submitError.response?.data?.message === "string"
            ? submitError.response.data.message
            : "로그인에 실패했습니다. 잠시 후 다시 시도해주세요.",
        );
        setIsSubmitting(false);
      }
    },
    [isSubmitting, router],
  );

  const resetError = useCallback(() => setError(""), []);

  return { submit, isSubmitting, error, resetError };
}
