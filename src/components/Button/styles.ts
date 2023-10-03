import { darken } from "polished";
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
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xsmall};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.small};
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
    border: 0.2rem solid ${theme.colors.primaryMain};
    color: ${theme.colors.primaryMain};
    font-weight: ${theme.font.weight.bold};

    &:hover {
      background: ${darken(0.1, theme.colors.white)};
      box-shadow: ${theme.shadows.NotFocus};
    }
  `,
  text: (theme: DefaultTheme) => css`
    background-color: transparent;
    color: ${theme.colors.primaryMain};
    font-weight: ${theme.font.weight.bold};
    box-shadow: none;

    &:hover {
      background-color: ${darken(0.15, theme.colors.white)};
      box-shadow: none;
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({
    theme,
    color = "successDark",
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
		background-color: ${theme.colors[color]}};
		color: ${theme.colors[labelColor]};
		width: auto;
    white-space: nowrap;
    overflow: hidden;
		border: 0;
		border-radius: 0.4rem;
		font-family: ${theme.font.family.primary};
		font-style: ${theme.font.style.normal};
		font-weight: ${theme.font.weight.medium};
		letter-spacing: 0.25rem;
		line-height: 1.64062rem;
		text-decoration: none;
		text-align: center;
		text-transform: uppercase;
		cursor: pointer;
		box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 0.5px 2px 0px;
		transition: ${theme.transition.fast};
    word-wrap: break-word;

		&:hover {
			transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s, border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s;
			box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 2px -3px, rgba(0, 0, 0, 0.14) 0px 3px 3px 0px, rgba(0, 0, 0, 0.12) 0px 2px 7px 0px;
		}

    ${media.lessThan("medium")`width: 100%`} 
    
    ${!!variant && buttonModifications[variant](theme)};
		${!!fullWidth && buttonModifications.fullWidth()};
    ${!!size && buttonModifications[size](theme)};
		${!!hasIcon && buttonModifications.withIcon(theme)};
		${disabled && buttonModifications.disabled()};
  `}
`;
