import { darken } from "polished";
import styled, { DefaultTheme, css } from "styled-components";
import { ChipProps } from ".";

export type ChipPropsPicker = {
  hasIcon: boolean;
} & Pick<
  ChipProps,
  "disabled" | "color" | "backgroundColor" | "size" | "variant"
>;

const wrapperProps = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    padding: 0.7rem 1rem;
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    padding: 1.2rem 1.5rem;
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    padding: 1.5rem 2rem;
  `,
  disabled: (theme: DefaultTheme) => css`
    cursor: not-allowed;
    background-color: ${theme.colors.disabled};
    color: ${theme.colors.grey};
  `,
  filled: (theme: DefaultTheme) => css`
    background-color: ${darken(0.2, theme.colors.white)};
  `,
  outlined: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.white};
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
};

export const Wrapper = styled.div<ChipPropsPicker>`
  ${({
    theme,
    backgroundColor = "primaryMain",
    disabled,
    hasIcon,
    size,
    variant,
  }) => css`
    display: inline-block;
    justify-content: ${theme.layout.justifyContent.spaceBetween};
    align-items: ${theme.layout.alignItems.center};
    align-content: ${theme.layout.alignContent.center};
    line-height: 1.6rem;
    background-color: ${theme.colors[backgroundColor]};
    box-shadow: ${theme.shadows.default};
    border-radius: 100rem;
    transition: ${theme.transitions.fast};

    &:hover {
      box-shadow: ${theme.shadows.hover};
    }

    ${!!size && wrapperProps[size](theme)};
    ${!!variant && wrapperProps[variant](theme)};
    ${!!hasIcon && wrapperProps.withIcon(theme)};
    ${disabled && wrapperProps.disabled(theme)};
  `}
`;

export const Label = styled.span<ChipPropsPicker>`
  ${({ theme, color = "primaryMain" }) => css`
    color: ${theme.colors[color]};
    font-size: ${theme.fonts.sizes.small};
    font-weight: ${theme.fonts.weight.medium};
    font-style: ${theme.fonts.style.normal};
    text-align: center;
  `}
`;
