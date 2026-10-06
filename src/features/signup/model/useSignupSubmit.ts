"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { isAxiosError } from "axios";
import { signup } from "../api/signup";
import { useSignupContext } from "./SignupContext";

export function useSignupSubmit() {
  const { data } = useSignupContext();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const submit = useCallback(
    async (loginId: string) => {
      if (isSubmitting) return;

      setIsSubmitting(true);
      setError("");

      try {
        await signup({ ...data, loginId });
        router.replace("/login");
      } catch (submitError) {
        setError(
          isAxiosError(submitError) &&
            typeof submitError.response?.data?.message === "string"
            ? submitError.response.data.message
            : "회원가입에 실패했습니다. 잠시 후 다시 시도해주세요.",
        );
        setIsSubmitting(false);
      }
    },
    [data, isSubmitting, router],
  );

  const resetError = useCallback(() => setError(""), []);

  return { submit, isSubmitting, error, resetError };
}
