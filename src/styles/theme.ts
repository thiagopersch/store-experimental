import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#FAFAFA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1B1C1D",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    primary: {
      main: "#6314A8",
      light: "#8243B9",
      dark: "#450E75",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#D960AB",
      light: "#E07FBB",
      dark: "#974377",
      contrastText: "#ffffff",
    },
    error: {
      main: "#F0758D",
      light: "#F390A3",
      dark: "#A85162",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    warning: {
      main: "#FFB946",
      light: "#FFC76B",
      dark: "#B28131",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    info: {
      main: "#B0E0E6",
      light: "#BFE6EB",
      dark: "#7B9CA1",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    success: {
      main: "#4caf50",
      light: "#81c784",
      dark: "#388e3c",
      contrastText: "#ffffff",
    },
    common: {
      white: "#ffffff",
      black: "#1B1C1D",
    },
  },
});
