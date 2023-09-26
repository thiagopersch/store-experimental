/**
 * @tailwind base;
 * @tailwind components;
 * @tailwind utilities;
 *'
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
    /* font-size: 62.5%; */
    scroll-behavior: smooth;
  }
  
  body {
    ${({ theme }) => css`
      background: #fff;
      font-size: 1rem;
      color: #1b1c1d;
      outline: none;
    `}

    button {
      cursor: pointer;
    }
  }
`;
export default GlobalStyles;
