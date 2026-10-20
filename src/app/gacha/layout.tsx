import type { ReactNode } from "react";

"use client";

// import AuthGuard from "@/src/shared/ui/AuthGuard";
//
// return (
//   <AuthGuard requireAuth redirectTo="/login">
//     {children}
//   </AuthGuard>
// );
export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
