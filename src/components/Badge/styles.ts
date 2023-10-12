import styled, { css, DefaultTheme } from "styled-components";

import { BadgeProps } from "./";

export type WrapperProps = Pick<BadgeProps, "styledType">;

const wrapperModifiers = {
  success: (theme: DefaultTheme) => css`
    background: ${theme.colors.success};
    color: ${theme.colors.black};
  `,
  info: (theme: DefaultTheme) => css`
    background: ${theme.colors.info};
    color: ${theme.colors.black};
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
  `,
  orange: (theme: DefaultTheme) => css`
    background: ${theme.colors.warning};
    color: ${theme.colors.white};
  `,
  error: (theme: DefaultTheme) => css`
    background: ${theme.colors.error};
    color: ${theme.colors.white};
  `,
};

export const Wrapper = styled.span<WrapperProps>`
  ${({ theme, styledType }) => css`
    display: inline-block;
    padding: 0.2rem 2rem;
    font-size: ${theme.fonts.sizes.xsmall};
    font-weight: ${theme.fonts.weight.medium};
    font-style: normal;
    line-height: 1.6rem;
    text-align: center;
    border-radius: 10rem;
    box-shadow: ${theme.shadows.default};

    ${wrapperModifiers[styledType](theme)}
  `}
`;
