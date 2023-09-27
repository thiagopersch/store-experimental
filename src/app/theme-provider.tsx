"use client";

import { ThemeProvider } from "@mui/material";
import NextNprogress from "nextjs-progressbar";
import { ReactNode, createContext } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { queryClient } from "@/services/api";
import GlobalStyles from "@/styles/global";
import { theme } from "@/styles/theme";
import { QueryClientProvider } from "react-query";

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
            color="primary"
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
