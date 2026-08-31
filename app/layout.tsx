import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "U4U",
  description: "U4U 프로젝트",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
