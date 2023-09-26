"use client";

import { Suspense, createContext } from "react";

import { theme } from "@/styles/theme";
import GlobalStyles from "@/styles/global";
import { ThemeProvider } from "@mui/material";

export const ThemeContext = createContext("");

type ThemeProviderProps = {
  children: React.ReactNode | string;
};

export default function ThemeContextProvider({ children }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeProvider theme={theme}>
        {children}
        <GlobalStyles />
        <Suspense />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
