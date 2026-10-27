"use client";

import { useCallback, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { isAxiosError } from "axios";
import { login } from "@/src/features/login/api/login";
import { saveTokens, type Tokens } from "@/src/shared/lib/tokenStorage";
import { signup } from "../api/signup";
import { useSignupContext } from "./SignupContext";

export function useSignupSubmit() {
  const { data } = useSignupContext();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const tokensRef = useRef<Tokens | null>(null);

  const submit = useCallback(
    async (loginId: string) => {
      if (isSubmitting) return;

      setIsSubmitting(true);
      setError("");

      try {
        await signup({ ...data, loginId });
      } catch (submitError) {
        setError(
          isAxiosError(submitError) &&
            typeof submitError.response?.data?.message === "string"
            ? submitError.response.data.message
            : "회원가입에 실패했습니다. 잠시 후 다시 시도해주세요.",
        );
        setIsSubmitting(false);

        return;
      }

      try {
        tokensRef.current = await login({ loginId, password: data.password });
      } catch {
        tokensRef.current = null;
      }

      setIsSuccess(true);
    },
    [data, isSubmitting],
  );

  const confirmSuccess = useCallback(() => {
    if (tokensRef.current === null) {
      router.replace("/login");

      return;
    }

    saveTokens(tokensRef.current);
    router.replace("/main");
  }, [router]);

  const resetError = useCallback(() => setError(""), []);

  return { submit, isSubmitting, error, resetError, isSuccess, confirmSuccess };
}
