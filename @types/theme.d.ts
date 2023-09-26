import React from "react";
import { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      common: NodeReact;
      primary: string;
      secondary: string;
      error: string;
      warning: string;
      info: string;
      success: string;
    };
  }

  interface ThemeOptions {
    palette: {
      primary: React.CSSProperties["color"];
      secondary: React.CSSProperties["color"];
      error: React.CSSProperties["color"];
      warning: React.CSSProperties["color"];
      info: React.CSSProperties["color"];
      success: React.CSSProperties["color"];
      common: React.CSSProperties["color"];
    };
  }
}
