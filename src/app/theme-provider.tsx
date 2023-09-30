"use client";

import NextNprogress from "nextjs-progressbar";
import { ReactNode, createContext } from "react";
import { QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { queryClient } from "@/services/api";

import GlobalStyles from "@/styles/global";
import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export const ThemeContext = createContext("");

type ThemeProviderProps = {
  children?: ReactNode | string;
};

export default function ThemeContextProvider({ children }: ThemeProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value="light">
        <ThemeProvider theme={theme}>
          {children}
          <NextNprogress
            color={theme.colors.primary.main}
            startPosition={0.3}
            stopDelayMs={300}
            height={5}
          />
          <GlobalStyles />
          <ToastContainer />
        </ThemeProvider>
      </ThemeContext.Provider>
    </QueryClientProvider>
  );
}
