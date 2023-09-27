"use client";

import { ThemeProvider } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import { AppProps as NextAppProps } from "next/app";
import { ReactNode, createContext } from "react";
import { Hydrate } from "react-query/hydration";

import "react-toastify/dist/ReactToastify.css";

import GlobalStyles from "@/styles/global";

import { theme } from "@/styles/theme";

export const ThemeContext = createContext("");

type ThemeProviderProps = NextAppProps & {
  Component: NextAppProps["Component"];
  children: ReactNode | string;
};

export default function ThemeContextProvider({
  children,
  Component,
  pageProps,
}: ThemeProviderProps) {
  return (
    <SessionProvider session={pageProps.session}>
      {/* <QueryClientProvider client={queryClient}> */}
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeContext.Provider value="dark">
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            {children}
            <GlobalStyles />
          </ThemeProvider>
        </ThemeContext.Provider>
      </Hydrate>
    </SessionProvider>
  );
}
