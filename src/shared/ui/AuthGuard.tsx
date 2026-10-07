"use client";

import { useEffect, useSyncExternalStore, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import {
  getAccessToken,
  subscribeTokenChange,
} from "@/src/shared/lib/tokenStorage";

const getSnapshot = () => getAccessToken() !== null;

const getServerSnapshot = () => false;

interface AuthGuardProps {
  children: ReactNode;
  requireAuth: boolean;
  redirectTo: string;
}

export default function AuthGuard({
  children,
  requireAuth,
  redirectTo,
}: AuthGuardProps) {
  const router = useRouter();
  const hasToken = useSyncExternalStore(
    subscribeTokenChange,
    getSnapshot,
    getServerSnapshot,
  );
  const isAllowed = hasToken === requireAuth;

  useEffect(() => {
    if (isAllowed) return;

    router.replace(redirectTo);
  }, [isAllowed, redirectTo, router]);

  return isAllowed ? children : null;
}
