import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { meta } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
    siteName: "Ivan Fang Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: meta.title,
    description: meta.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#f9fafb] text-[#1a1a2e] antialiased">{children}</body>
    </html>
  );
}
