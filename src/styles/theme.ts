export default {
  colors: {
    transparent: "transparent",
    white: "#FAFAFA",
    black: "#1B1C1D",
    primaryLight: "#8243B9",
    primaryMain: "#6314A8",
    primaryDark: "#450E75",
    secondaryLight: "#E07FBB",
    secondaryMain: "#D960AB",
    secondaryDark: "#974377",
    errorLight: "#F390A3",
    errorMain: "#F0758D",
    errorDark: "#A85162",
    warningLight: "#FFC76B",
    warningMain: "#FFB946",
    warningDark: "#B28131",
    infoLight: "#BFE6EB",
    infoMain: "#B0E0E6",
    infoDark: "#7B9CA1",
    successLight: "#81C784",
    successMain: "#4CAF50",
    successDark: "#388E3C",
    grey: "#9e9e9e",
    disabled: "#E0E0E0E0",
  },
  shadows: {
    default: `rgba(0, 0, 0, 0.2) 0px 1px 1px -1px,
      rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
      rgba(0, 0, 0, 0.12) 0px 0.5px 2px 0px;`,
    notFocus: `0.3px 0.3px 1px 1px rgba(0,0,0,0.14),
      -0.3px -0.3px 1px 0px rgba(0,0,0,0.11),
      0px 0.1px 1px 0px rgba(0,0,0,0.12)`,
    focus: `0.3px 0.2px 1px 1px rgba(0,0,0,0.30),
      -0.4px -0.2px 1px 0px rgba(0,0,0,0.25),
      0px 0.1px 1px 0px rgba(0,0,0,0.20)`,
    hover: `rgba(0, 0, 0, 0.2) 0px 4px 2px -3px,
        rgba(0, 0, 0, 0.14) 0px 3px 3px 0px,
        rgba(0, 0, 0, 0.12) 0px 2px 7px 0px;`,
  },
  fonts: {
    family: {
      primary: "'Poppins', sans-serif",
    },
    weight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 600,
      mediumBold: 700,
      black: 800,
      extraBlack: 900,
    },
    sizes: {
      xxsmall: "1rem",
      xsmall: "1.2rem",
      small: "1.6rem",
      medium: "2.4rem",
      large: "3.2rem",
      xlarge: "4.0rem",
      xxlarge: "4.8rem",
      huge: "5.6rem",
      xhuge: "6.4rem",
    },
    style: {
      normal: "normal",
      italic: "italic",
      oblique: "oblique",
    },
  },
  breakpoints: {
    phones: "(max-width: 768px)",
  },
  transitions: {
    fast: "all 0.3s ease-in-out;",
    normal: "all 1s ease-in-out;",
    slow: "all 2s ease-in-out;",
    hover: `background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s,
        box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s,
        border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s,
        color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s`,
  },
  layers: {
    base: 10,
    menu: 20,
    cardOverlay: 30,
    card: 40,
    overlay: 50,
    modal: 60,
    alwaysOnTop: 70,
  },
  spacings: {
    none: "0rem",
    xxsmall: "0.8rem",
    xsmall: "1.8rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem",
    huge: "6.2rem",
    xhuge: "6.4rem",
  },
  layout: {
    display: {
      block: "block",
      inline: "inline",
      flex: "flex",
    },
    flexDirection: {
      row: "row",
      column: "column",
      rowReverse: "row-reverse",
      columnReverse: "column-reverse",
    },
    flexWrap: {
      wrap: "wrap",
      nowrap: "nowrap",
      wrapReverse: "wrap-reverse",
    },
    justifyContent: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      spaceBetween: "space-between",
      spaceAround: "space-around",
      spaceEvenly: "space-evenly",
    },
    alignItems: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      baseline: "baseline",
      stretch: "stretch",
    },
    alignContent: {
      start: "flex-start",
      end: "flex-end",
      center: "center",
      spaceBetween: "space-between",
      spaceAround: "space-around",
    },
  },
} as const;

/* import { createTheme } from "@mui/material";

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
 */
