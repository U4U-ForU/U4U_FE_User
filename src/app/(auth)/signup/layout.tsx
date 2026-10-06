"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import {
  SignupProvider,
  useSignupContext,
  type SignupData,
} from "@/src/features/signup/model/SignupContext";
import {
  validateEmail,
  validateNickname,
  validatePassword,
} from "@/src/features/signup/model/validate";

const STEPS = ["email", "password", "nickname", "id"] as const;

type Step = (typeof STEPS)[number];

function isStepDone(step: Step, data: SignupData) {
  switch (step) {
    case "email":
      return validateEmail(data.email) === "";
    case "password":
      return validatePassword(data.password) === "";
    case "nickname":
      return validateNickname(data.nickname) === "";
    case "id":
      return true;
  }
}

function StepGuard({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { data } = useSignupContext();

  const currentStep = STEPS.find((step) => pathname === `/signup/${step}`);

  const unfinishedStep = currentStep
    ? STEPS.slice(0, STEPS.indexOf(currentStep)).find(
        (step) => !isStepDone(step, data),
      )
    : undefined;

  useEffect(() => {
    if (!unfinishedStep) return;

    router.replace(`/signup/${unfinishedStep}`);
  }, [unfinishedStep, router]);

  return unfinishedStep ? null : children;
}

export default function SignupLayout({ children }: { children: ReactNode }) {
  return (
    <SignupProvider>
      <StepGuard>{children}</StepGuard>
    </SignupProvider>
  );
}
