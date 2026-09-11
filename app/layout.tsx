import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Богдан Сокруенко — биография",
  description: "Персональный сайт Богдана Сокруенко.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
