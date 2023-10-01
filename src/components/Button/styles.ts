import { darken } from "polished";
import styled, { DefaultTheme, css } from "styled-components";
import { ButtonProps } from ".";

export type WrapperProps = {
  hasIcon: boolean;
} & Pick<ButtonProps, "size" | "fullWidth" | "color" | "labelColor">;

const buttonModifications = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.bold};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall};
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
};

const variant = {
  contained: (theme: DefaultTheme) => css``,
  outlined: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    box-sizing: border-box;
    border: 0.2rem solid ${theme.colors.primaryMain};
    color: ${theme.colors.primaryMain};
    font-weight: ${theme.font.weight.bold};
    border-radius: 10rem;

    &:hover {
      background: ${darken(0.5, theme.colors.white)};
      box-shadow: ${theme.shadows.NotFocus};
    }
  `,
  text: (theme: DefaultTheme) => css``,
};

const sizeLabelModifiers = {
  xxsmall: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxsmall};
  `,
  xsmall: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  xlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  xxlarge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,
  xhuge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xhuge};
  `,
};

export const Wrapper = styled.button<ButtonProps>`
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
		position: relative;
		font-family: ${theme.font.family.primary};
		font-style: ${theme.font.style.normal};
		font-variant: normal;
		font-weight: ${theme.font.weight.medium};
		letter-spacing: 0.25rem;
		line-height: 1.64062rem;
		text-decoration: none;
		text-align: center;
		text-indent: 0px;
		text-transform: uppercase;
		vertical-align: middle;
		white-space: normal;
		word-spacing: 0px;
		background-attachment: scroll;
		background-color: ${theme.colors[color]}};
		background-image: none;
		background-position: 0% 0%;
		background-repeat: repeat;
		color: ${theme.colors[labelColor]};
		height: 3.8rem;
		width: 43rem;
		border: 0;
		border-radius: 0.4rem;
		z-index: auto;
		list-style-image: none;
		list-style-type: disc;
		list-style-position: outside;
		border-collapse: separate;
		border-spacing: 0px 0px;
		caption-side: top;
		empty-cells: show;
		table-layout: auto;
		overflow: visible;
		cursor: pointer;
		visibility: visible;
		transition: ${theme.transition.fast};
		box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 0.5px 2px 0px;
		word-wrap: normal;
		transform: none;
		outline-offset: 0px;
		resize: none;
		text-shadow: none;
		text-overflow: clip;

		&:hover {
			transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s, border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s;
			box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 2px -3px, rgba(0, 0, 0, 0.14) 0px 3px 3px 0px, rgba(0, 0, 0, 0.12) 0px 2px 7px 0px;
			background-color: ${darken(0.1, theme.colors[color])};
		}

		${!!variant && variant}
		${!!fullWidth && buttonModifications.fullWidth()}
    ${!!size && buttonModifications[size](theme)}
		${!!hasIcon && buttonModifications.withIcon(theme)}
		${disabled && buttonModifications.disabled()};
  `}
`;
