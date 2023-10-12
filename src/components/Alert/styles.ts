import { darken } from "polished";
import styled, { DefaultTheme, css } from "styled-components";
import { AlertProps } from ".";

type WrapperProps = {
  hasIcon: boolean;
} & Pick<
  AlertProps,
  | "action"
  | "closeIcon"
  | "color"
  | "dark"
  | "description"
  | "icon"
  | "variant"
  | "onClose"
  | "backgroundColor"
  | "iconAnimation"
>;

const alertModifiers = {
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

export const Wrapper = styled.div<WrapperProps>`
  ${({
    theme,
    color = "white",
    backgroundColor = "primary",
    dark,
    hasIcon,
  }) => css`
    display: ${theme.layout.display.flex};
    /*justify-content: ${theme.layout.justifyContent.spaceBetween};*/
    align-items: ${theme.layout.alignItems.center};
    color: ${dark ? darken(0.2, theme.colors[color]) : theme.colors[color]};
    background-color: ${dark
      ? darken(0.2, theme.colors[backgroundColor])
      : theme.colors[backgroundColor]};
    padding: ${theme.spacings.xsmall};
    transition: ${theme.transitions.fast};
    border-radius: 0.6rem;

    ${!!hasIcon && alertModifiers.withIcon(theme)};
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    display: ${theme.layout.display.flex};
    justify-content: ${theme.layout.justifyContent.center};
    align-items: ${theme.layout.alignItems.center};
    margin-right: ${theme.spacings.xsmall};
  `}
`;

export const TitleDescription = styled.div`
  ${({ theme }) => css`
    display: ${theme.layout.display.flex};
    flex-direction: ${theme.layout.flexDirection.column};
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} 0;
  `}
`;

export const Description = styled.span`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} 0;
  `}
`;
