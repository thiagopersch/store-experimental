import styled, { DefaultTheme, css } from "styled-components";
import { TypographyProps } from ".";

export type TypographyPropsPicker = Pick<
  TypographyProps,
  "align" | "color" | "size" | "transform"
>;

const typographyModifiers = {
  capitalize: () => css`
    text-transform: capitalize;
  `,
  lowercase: () => css`
    text-transform: lowercase;
  `,
  uppercase: () => css`
    text-transform: uppercase;
  `,
  none: () => css`
    text-transform: none;
  `,
  center: () => css`
    text-align: center;
  `,
  inherit: () => css`
    text-align: inherit;
  `,
  justify: () => css`
    text-align: justify;
  `,
  left: () => css`
    text-align: left;
  `,
  right: () => css`
    text-align: right;
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.medium};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.large};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.huge};
  `,
  xhuge: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.xhuge};
  `,
};

export const Wrapper = styled.h1<TypographyPropsPicker>`
  ${({ theme, color = "primaryMain", size, align, transform }) => css`
    color: ${theme.colors[color]};
    transition: ${theme.transitions.fast};

    ${size && typographyModifiers[size](theme)}
    ${align && typographyModifiers[align]}
    ${transform && typographyModifiers[transform]}
  `}
`;
