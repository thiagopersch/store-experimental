/**
 * @tailwind base;
 * @tailwind components;
 * @tailwind utilities;
 *
 */

import {
  DefaultTheme,
  GlobalStyleComponent,
  createGlobalStyle,
  css,
} from "styled-components";

type GlobalStyleProps = {
  theme?: DefaultTheme;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStyleProps,
  DefaultTheme | undefined
> = createGlobalStyle`
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
      font-size: ${theme.font.sizes.small};
      font-family: ${theme.font.family.primary};
      color: ${theme.colors.black};
      outline: none;
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
