/**
 * @tailwind base;
 * @tailwind components;
 * @tailwind utilities;
 *
 */

import { DefaultTheme, createGlobalStyle, css } from "styled-components";

type GlobalStyleProps = {
  theme?: DefaultTheme;
};

const GlobalStyles = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;

    &::before, &::after {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  
  body {
    ${({ theme }) => css`
      background-color: ${theme.colors.white};
      font-size: ${theme.fonts.sizes.small};
      font-family: ${theme.fonts.family.primary};
      color: ${theme.colors.black};
      outline: none;

      ::selection {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primaryMain};
      }
    `}

    button {
      cursor: pointer;
    }

    a{
      text-decoration: none !important;
    }
  }
`;
export default GlobalStyles;
