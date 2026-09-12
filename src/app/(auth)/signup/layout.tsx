"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { useSignupStore } from "@/src/features/signup/model/signupStore";

const FIRST_STEP = "/signup/email";

export default function SignupLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const isDirectEntry =
    pathname !== FIRST_STEP && useSignupStore.getState().form.email === "";

  useEffect(() => {
    if (!isDirectEntry) return;

    router.replace(FIRST_STEP);
  }, [isDirectEntry, router]);

  return isDirectEntry ? null : children;
}
