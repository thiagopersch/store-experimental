import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import { ReactNode, Suspense } from "react";

import ThemeContextProvider from "./theme-provider";

import LoadingComponent from "@/components/Loading";
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
        <ThemeContextProvider>
          <Suspense fallback={<LoadingComponent />}>{children}</Suspense>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
