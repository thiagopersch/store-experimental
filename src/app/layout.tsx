import { ReactNode } from "react";
import type { Metadata } from "next";
import ThemeContextProvider from "./theme-provider";
import { Poppins } from "next/font/google";

import "@/styles/global.css";

const poppins = Poppins({
  style: "normal",
  weight: "400",
  preload: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Store",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
