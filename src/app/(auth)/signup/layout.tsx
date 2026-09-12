"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { useSignupStore } from "@/src/features/signup/model/signupStore";
import {
  validateEmail,
  validateNickname,
  validatePassword,
  validatePasswordConfirm,
} from "@/src/features/signup/model/validate";

const STEPS = ["email", "password", "nickname", "id"] as const;

type Step = (typeof STEPS)[number];

function isStepDone(step: Step) {
  const { form } = useSignupStore.getState();

  switch (step) {
    case "email":
      return validateEmail(form.email) === "";
    case "password":
      return (
        validatePassword(form.password) === "" &&
        validatePasswordConfirm(form.password, form.passwordConfirm) === ""
      );
    case "nickname":
      return validateNickname(form.nickname) === "";
    case "id":
      return true;
  }
}

export default function SignupLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const currentStep = STEPS.find((step) => pathname === `/signup/${step}`);

  const unfinishedStep = currentStep
    ? STEPS.slice(0, STEPS.indexOf(currentStep)).find(
        (step) => !isStepDone(step),
      )
    : undefined;

  useEffect(() => {
    if (!unfinishedStep) return;

    router.replace(`/signup/${unfinishedStep}`);
  }, [unfinishedStep, router]);

  return unfinishedStep ? null : children;
}
