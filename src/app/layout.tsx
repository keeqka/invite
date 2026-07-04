import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Свадьба Ивана & Марии | 15 Августа 2026",
  description: "Приглашаем вас разделить с нами этот особенный день",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
