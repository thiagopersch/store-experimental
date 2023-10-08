import { darken, setLightness } from "polished";
import styled, { DefaultTheme, css } from "styled-components";
import media from "styled-media-query";

import { ButtonProps } from ".";

export type WrapperProps = {
  hasIcon: boolean;
} & Pick<
  ButtonProps,
  "size" | "fullWidth" | "color" | "labelColor" | "variant"
>;

const buttonModifications = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.fonts.sizes.small};
    padding: ${theme.spacings.xxsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.fonts.sizes.small};
    padding: ${theme.spacings.xsmall};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.fonts.sizes.small};
    padding: ${theme.spacings.small};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 2rem;
      stroke-width: 2;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `,
  contained: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primaryMain};
    color: ${theme.colors.white};

    &:hover {
      background-color: ${darken(0.15, theme.colors.primaryMain)};
    }
  `,
  outlined: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    border: 0.15rem solid ${theme.colors.primaryMain};
    color: ${theme.colors.primaryMain};
    font-weight: ${theme.fonts.weight.bold};

    &:hover {
      background-color: ${setLightness(0.7, theme.colors.primaryMain)};
      color: ${theme.colors.primaryDark};
    }
  `,
  text: (theme: DefaultTheme) => css`
    background-color: transparent;
    color: ${theme.colors.primaryMain};
    font-weight: ${theme.fonts.weight.bold};
    box-shadow: none;

    &:hover {
      background-color: ${setLightness(0.7, theme.colors.primaryMain)};
      color: ${theme.colors.primaryDark};
      box-shadow: none;
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({
    theme,
    color = "white",
    labelColor = "white",
    size,
    fullWidth,
    hasIcon,
    disabled,
    variant,
  }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors[color]};
    color: ${theme.colors[labelColor]};
    width: auto;
    white-space: nowrap;
    overflow: hidden;
    border: 0;
    border-radius: 0.4rem;
    font-family: ${theme.fonts.family.primary};
    font-style: ${theme.fonts.style.normal};
    font-weight: ${theme.fonts.weight.medium};
    letter-spacing: 0.25rem;
    line-height: 1.64062rem;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: ${theme.shadows.default};
    transition: ${theme.transitions.fast};

    &:hover {
      transition: ${theme.transitions.hover};
      box-shadow: ${theme.shadows.hover};
    }

    ${media.lessThan("medium")`width: 100%`}

    ${!!variant && buttonModifications[variant](theme)};
    ${!!fullWidth && buttonModifications.fullWidth()};
    ${!!size && buttonModifications[size](theme)};
    ${!!hasIcon && buttonModifications.withIcon(theme)};
    ${disabled && buttonModifications.disabled()};
  `}
`;
