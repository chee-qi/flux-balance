import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import SuiProvider from "@/context/suiProvider";
import "@mysten/dapp-kit/dist/index.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Flux Balance",
  description: "Flux Balance App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SuiProvider>
        <body className={inter.variable}>{children}</body>
      </SuiProvider>
    </html>
  );
}
