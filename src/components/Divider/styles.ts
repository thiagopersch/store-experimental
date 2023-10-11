import styled, { DefaultTheme, css } from "styled-components";
import { DividerProps } from ".";

type wrapperTypes = Pick<
  DividerProps,
  "absolute" | "light" | "orientation" | "fullWidth"
>;

const dividerModifiers = {
  horizontal: (theme: DefaultTheme) => css`
    hr {
      height: 1rem solid ${theme.colors.grey};
    }
  `,
  vertical: (theme: DefaultTheme) => css``,
  fullWidth: () => css``,
};

export const Wrapper = styled.div<wrapperTypes>`
  ${({ theme, absolute, light, orientation, fullWidth }) => css`
    ${!!orientation && dividerModifiers[orientation](theme)};
  `}
`;
