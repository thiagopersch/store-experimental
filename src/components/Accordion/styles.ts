import styled, { DefaultTheme, css } from "styled-components";
import { AccordionProps } from ".";

type WrapperProps = Pick<
  AccordionProps,
  | "color"
  | "disabled"
  | "disabledGutters"
  | "rounded"
  | "icon"
  | "label"
  | "labelColor"
>;

const accordionModifiers = {
  rounded: () => css`
    border-radius: 1rem;
  `,
  disabled: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.disabled};
    color: ${theme.colors.grey};
    cursor: not-allowed;
    box-shadow: none;
  `,
  disabledGutters: (theme: DefaultTheme) => css`
    margin-bottom: ${theme.spacings.none};
  `,
};

export const Wrapper = styled.section<WrapperProps>`
  ${({ theme, rounded, color, disabled, disabledGutters }) => css`
    display: ${theme.layout.display.flex};
    justify-content: ${theme.layout.justifyContent.spaceBetween};
    align-items: ${theme.layout.alignItems.center};
    padding: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.xxsmall};
    background: ${theme.colors[color]};
    box-shadow: ${theme.shadows.default};
    transition: ${theme.transitions.fast};

    ${rounded && accordionModifiers.rounded()};
    ${disabled && accordionModifiers.disabled(theme)};
    ${disabledGutters && accordionModifiers.disabledGutters(theme)};
  `}
`;

export const Label = styled.button<WrapperProps>`
  ${({ theme, labelColor }) => css`
    border: 0;
    background-color: ${theme.colors.transparent};
    color: ${theme.colors[labelColor]};
  `}
`;

type ArrowIconProps = {
  isOpen: boolean;
};

export const Icon = styled.button<WrapperProps>`
  ${({ theme, labelColor }) => css`
    border: 0;
    background-color: ${theme.colors.transparent};

    &:focus {
      transform: rotateX(180deg);
    }

    svg {
      width: 3rem;
      height: 3rem;
      color: ${theme.colors[labelColor]};
    }
  `}
`;
