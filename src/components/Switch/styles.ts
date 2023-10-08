import styled, { DefaultTheme, css } from "styled-components";
import { SwitchProps } from ".";

export type WrapperProps = {
  required?: boolean;
  hasIcon?: boolean;
} & Pick<SwitchProps, "disabled" | "color" | "icon">;

const switchModifications = {
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

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
  `}
`;

export const Switch = styled.input<WrapperProps>`
  ${({ theme, color = "primaryMain", hasIcon }) => css`
    opacity: 0;
    z-index: 1;
    border-radius: 1.5rem;
    width: 4.2rem;
    height: 2.6rem;
    cursor: pointer;
    box-shadow: ${theme.shadows.default};
    z-index: -1;

    &:checked + ${Toggle} {
      box-shadow: ${theme.shadows.focus};
      background: ${theme.colors[color]};
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

    ${!!hasIcon && switchModifications.withIcon(theme)}
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
    ${disabled && switchModifications.disabled()};
  `}
`;

export const Label = styled.label<WrapperProps>`
  ${({ theme, disabled, color = "primaryMain" }) => css`
    cursor: pointer;
    font-family: ${theme.fonts.family.primary};
    font-weight: ${theme.fonts.weight.normal};
    font-size: ${theme.fonts.sizes.small};
    color: ${theme.colors[color]};
    padding-left: ${theme.spacings.xsmall};

    ${disabled && switchModifications.disabled()};
  `}
`;

export const Asterisk = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.errorDark};
  `}
`;
