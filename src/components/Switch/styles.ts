import styled, { css } from "styled-components";
import { SwitchProps } from ".";

export type WrapperProps = {
  required?: boolean;
} & Pick<SwitchProps, "disabled" | "color">;

const switchModifications = {
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
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
  `}
`;

export const Switch = styled.input<WrapperProps>`
  ${({ theme, disabled, color = "primaryMain" }) => css`
    opacity: 0;
    z-index: 1;
    border-radius: 1.5rem;
    width: 4.2rem;
    height: 2.6rem;
    cursor: pointer;

    &:checked + ${Toggle} {
      background: ${theme.colors[color]};
      transition: ${theme.transition.fast};

      &::after {
        content: "";
        display: block;
        border-radius: 10rem;
        width: 1.8rem;
        height: 1.8rem;
        margin-left: 3.1rem;
        transition: ${theme.transition.fast};
      }
    }
    ${disabled && switchModifications.disabled()};
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
    cursor: pointer;

    &::after {
      content: "";
      display: block;
      border-radius: 10rem;
      width: 1.8rem;
      height: 1.8rem;
      margin: 0.1rem;
      background: ${theme.colors.white};
      box-shadow: ${theme.shadows.default};
      transition: ${theme.transition.fast};
    }
    ${disabled && switchModifications.disabled()};
  `}
`;

export const Label = styled.label<WrapperProps>`
  ${({ theme, disabled, color = "primaryMain" }) => css`
    cursor: pointer;
    font-family: ${theme.font.family.primary};
    font-weight: ${theme.font.weight.normal};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors[color]};
    padding-left: ${theme.spacings.xsmall};

    ${disabled && switchModifications.disabled()};
  `}
`;

export const Asterisk = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.errorMain};
  `}
`;
