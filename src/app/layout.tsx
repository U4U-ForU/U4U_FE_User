import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "U4U",
  description: "U4U 웹 애플리케이션",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "U4U",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <main className="app-content">{children}</main>
      </body>
    </html>
  );
}
