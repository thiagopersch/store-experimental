import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    common: {
      white: "#FAFAFA",
      black: "#1B1C1D",
    },
    background: {
      paper: "#fff",
      default: "#fff",
    },
    primary: {
      light: "#8243B9",
      main: "#6314A8",
      dark: "#450E75",
    },
    secondary: {
      light: "#E07FBB",
      main: "#D960AB",
      dark: "#974377",
    },
    error: {
      light: "#F390A3",
      main: "#F0758D",
      dark: "#A85162",
    },
    warning: {
      light: "#FFC76B",
      main: "#FFB946",
      dark: "#B28131",
    },
    info: {
      light: "#BFE6EB",
      main: "#B0E0E6",
      dark: "#7B9CA1",
    },
    success: {
      light: "#81c784",
      main: "#4caf50",
      dark: "#388e3c",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
  },
});
