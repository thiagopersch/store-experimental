import styled, { DefaultTheme, css } from "styled-components";
import { SwitchProps } from ".";

export type WrapperProps = {
  required?: boolean;
} & Pick<SwitchProps, "disabled" | "color">;

const switchModifications = {
  disabled: (theme: DefaultTheme) => css`
    color: ${theme.colors.grey};
    cursor: not-allowed;
    pointer-events: none;
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;

    ${disabled && switchModifications.disabled(theme)};
  `}
`;

export const Switch = styled.input<WrapperProps>`
  ${({ theme, color, disabled }) => css`
    opacity: 0;
    border-radius: 1.5rem;
    width: 4.2rem;
    height: 2.6rem;
    cursor: pointer;
    box-shadow: ${theme.shadows.default};
    z-index: 0;

    &:checked + ${Toggle} {
      box-shadow: ${theme.shadows.focus};
      background: ${disabled ? theme.colors.disabled : theme.colors[color]};
      transition: ${theme.transitions.fast};

      &::after {
        box-shadow: ${theme.shadows.hover};
        content: "";
        display: block;
        border-radius: 10rem;
        width: 1.8rem;
        height: 1.8rem;
        margin-left: 3.1rem;
        transition: ${theme.transitions.fast};
      }
    }
    ${disabled && switchModifications.disabled(theme)};
  `}
`;

export const Toggle = styled.label<WrapperProps>`
  ${({ theme, disabled }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 5rem;
    height: 2rem;
    border-radius: 1.5rem;
    background: ${theme.colors.disabled};
    box-shadow: ${theme.shadows.notFocus};
    cursor: pointer;
    transition: ${theme.transitions.fast};
    z-index: 1;
    pointer-events: ${disabled ? "none" : "all"};

    &::after {
      content: "";
      display: block;
      border-radius: 10rem;
      width: 1.8rem;
      height: 1.8rem;
      margin: 0.1rem;
      background: ${theme.colors.white};
      transition: ${theme.transitions.fast};
      box-shadow: ${theme.shadows.notFocus};
    }

    ${disabled && switchModifications.disabled(theme)};
  `}
`;

export const Label = styled.label<WrapperProps>`
  ${({ theme, disabled, color }) => css`
    cursor: pointer;
    font-family: ${theme.fonts.family.primary};
    font-weight: ${theme.fonts.weight.normal};
    font-size: ${theme.fonts.sizes.small};
    color: ${theme.colors[color]};
    padding-left: ${theme.spacings.xsmall};
    pointer-events: ${disabled ? "none" : "all"};

    ${disabled && switchModifications.disabled(theme)};
  `}
`;

export const Asterisk = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.error};
  `}
`;
