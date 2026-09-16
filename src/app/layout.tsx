import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Superhero battle",
  description: "Who wins the battle?",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
