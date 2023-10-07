import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ReactNode, Suspense } from "react";

import LoadingComponent from "@/components/Loading";

import ThemeContextProvider from "./theme-provider";

const poppins = Poppins({
  style: "normal",
  weight: "500",
  preload: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Store",
};

type ThemeProviderProps = {
  children?: ReactNode | string;
};

export default function RootLayout({ children }: ThemeProviderProps) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Suspense fallback={<LoadingComponent />}>
          <ThemeContextProvider>{children}</ThemeContextProvider>
        </Suspense>
      </body>
    </html>
  );
}
