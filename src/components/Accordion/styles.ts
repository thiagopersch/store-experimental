import { ChevronDown } from "@styled-icons/feather";
import styled, { DefaultTheme, css } from "styled-components";
import { AccordionProps, Orientation } from ".";

type WrapperProps = Pick<
  AccordionProps,
  | "color"
  | "disabled"
  | "disabledGutters"
  | "rounded"
  | "labelColor"
  | "open"
  | "label"
  | "icon"
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
    pointer-events: none;
  `,
  disabledGutters: (theme: DefaultTheme) => css`
    margin-bottom: ${theme.spacings.none};
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, rounded, color = "primary", disabled, disabledGutters }) => css`
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

export const Label = styled.label<WrapperProps>`
  ${({ theme, labelColor = "white", disabled }) => css`
    border: 0;
    background-color: ${theme.colors.transparent};
    cursor: pointer;
    color: ${disabled ? theme.colors.grey : theme.colors[labelColor]};

    ${disabled && accordionModifiers.disabled(theme)};
  `}
`;

export const Icon = styled(ChevronDown)<WrapperProps>`
  ${({ theme, labelColor = "white", open, disabled }) => css`
    border: 0;
    background-color: ${theme.colors.transparent};
    transition: ${theme.transitions.fast};
    color: ${theme.colors[labelColor]};
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    transition: ${theme.transitions.fast};

    ${open &&
    css`
      transform: rotateZ(180deg);
    `}

    ${disabled && accordionModifiers.disabled(theme)};
  `}
`;

const optionsListModifiers = {
  bottom: () => css`
    top: 100%;
    border-radius: 0 0 0.5rem 0.5rem;
  `,
  top: () => css`
    bottom: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
  `,
};

type ContentProps = {
  isOpen: boolean;
  orientation: Orientation;
};

const slideOut = (orientation: Orientation) => css`
  @keyframes SlideOut {
    from {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
    to {
      visibility: hidden;
      opacity: 0;
      transform: ${orientation === "top"
        ? "translateY(0.2rem)"
        : "translateY(-0.2rem)"};
    }
  }
`;

const slideIn = (orientation: Orientation) => css`
  @keyframes SlideIn {
    from {
      visibility: hidden;
      opacity: 0;

      transform: ${orientation === "top"
        ? "translateY(0.2rem)"
        : "translateY(-0.2rem)"};
    }
    to {
      visibility: visible;
      opacity: 1;

      transform: translateY(0);
    }
  }
`;

export const WrapperContent = styled.div<ContentProps>`
  ${({ theme, isOpen, orientation }) => css`
    ${slideIn(orientation)}
    ${slideOut(orientation)}

    margin-top: -0.8rem;
    transform: ${orientation === "top"
      ? "translateY(0.2rem)"
      : "translateY(-0.2rem)"};

    animation-duration: 0.2s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    animation-name: ${isOpen ? "SlideIn" : "SlideOut"};

    ${optionsListModifiers[orientation]};
  `}
`;

export const Content = styled.div<WrapperProps>`
  ${({ theme, color = "primary" }) => css`
    background-color: ${theme.colors[color]};
    border-radius: 0 0 0.3rem 0.3rem;
    box-shadow: ${theme.shadows.default};
    padding: 2rem;
  `}
`;
