"use client";

import { createContext } from "react";
/* import { ThemeProvider } from "styled-components"; */

import { theme } from "@/styles/theme";
import GlobalStyles from "@/styles/global";
import { ThemeProvider, createTheme } from "@mui/material";

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
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
