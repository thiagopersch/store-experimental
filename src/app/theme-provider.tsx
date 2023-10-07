"use client";

import { ReactNode, createContext } from "react";
import { QueryClientProvider } from "react-query";

import { queryClient } from "@/services/api";

import NextAppDirEmotionCacheProvider from "@/components/ThemeRegistry/EmotionCache";
import { theme } from "@/styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

export const ThemeContext = createContext("");

type ThemeProviderProps = {
  children?: ReactNode | string;
};

export default function ThemeContextProvider({ children }: ThemeProviderProps) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <QueryClientProvider client={queryClient}>
        <ThemeContext.Provider value="light">
          <ThemeProvider theme={theme}>
            {children}
            <CssBaseline />
          </ThemeProvider>
        </ThemeContext.Provider>
      </QueryClientProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
