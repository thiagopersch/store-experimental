import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";
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
  children: React.ReactNode;
};

export default function RootLayout({ children }: ThemeProviderProps) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Suspense fallback={<Loading />}>
          <ThemeContextProvider>{children}</ThemeContextProvider>
        </Suspense>
      </body>
    </html>
  );
}
