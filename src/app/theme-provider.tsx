"use client";

import { ReactNode, createContext } from "react";
import { QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

import { queryClient } from "@/services/api";

import GlobalStyles from "@/styles/global";
import theme from "@/styles/theme";

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
          <GlobalStyles />
        </ThemeProvider>
      </ThemeContext.Provider>
    </QueryClientProvider>
  );
}
