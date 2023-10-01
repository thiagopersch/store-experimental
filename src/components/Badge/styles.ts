import styled, { css, DefaultTheme } from "styled-components";

import { BadgeProps } from "./";

export type WrapperProps = Pick<BadgeProps, "styledType">;

const wrapperModifiers = {
  success: (theme: DefaultTheme) => css`
    background: ${theme.colors.success.main};
    color: ${theme.colors.text.primary};
  `,
  info: (theme: DefaultTheme) => css`
    background: ${theme.colors.info.main};
    color: ${theme.colors.text.primary};
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary.main};
    color: ${theme.colors.text.primary};
  `,
  orange: (theme: DefaultTheme) => css`
    background: ${theme.colors.warning.main};
    color: ${theme.colors.text.primary};
  `,
  error: (theme: DefaultTheme) => css`
    background: ${theme.colors.error.main};
    color: ${theme.colors.text.primary};
  `,
};

export const Wrapper = styled.span<WrapperProps>`
  ${({ theme, styledType }) => css`
    display: inline-block;
    padding: 0.2rem 2rem;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.weight.medium};
    font-style: normal;
    line-height: 1.6rem;
    text-align: center;
    border-radius: 10rem;
    box-shadow: ${theme.shadows.NotFocus};

    ${wrapperModifiers[styledType](theme)}
  `}
`;
