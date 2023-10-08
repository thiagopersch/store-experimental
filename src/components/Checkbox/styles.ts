import styled, { css } from "styled-components";
import media from "styled-media-query";
import { CheckboxProps } from ".";

export type InputProps = Pick<CheckboxProps, "labelColor" | "disabled">;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Input = styled.input<InputProps>`
  ${({ theme, disabled, size }) => css`
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.08rem solid ${theme.colors.primaryMain};
    border-radius: 0.3rem;
    outline: none;
    transition: ${theme.transitions.fast};

    ${
      disabled &&
      css`
        border: 0.1rem solid ${theme.colors.grey};
        opacity: 0.6;
        cursor: not-allowed;
      `
    }

    &::before {
      transition:
        transform 0.3s ease,
        opacity 0.2s;
      content: "";
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      position: absolute;
      top: 0.20rem;
      transform: rotate(20deg);
      opacity: 0;
    }

    &:focus {
      box-shadow: ${theme.shadows.notFocus};
    }

    &:checked {
      background-color: ${theme.colors.primaryMain};

      &::before {
        transition: transform 0.5s cubic-bezier(0.3, 0.85, 0.32, 1.2), 
          opacity: 0.3s;
        opacity: 1;
        transform: rotate(30deg);
      }
    }

  `}
`;

export const Label = styled.label<InputProps>`
  ${({ theme, labelColor = "primaryMain", disabled }) => css`
    cursor: pointer;
    padding-left: ${theme.spacings.xxsmall};
    color: ${theme.colors[labelColor]};
    font-size: ${theme.fonts.sizes.small};
    line-height: 1.8rem;
    user-select: none;

    ${disabled &&
    css`
      color: ${theme.colors.grey};
      opacity: 0.6;
      cursor: not-allowed;
    `}

    ${media.lessThan("medium")`
      font-size: ${theme.fonts.sizes.xsmall};
    `}
  `}
`;

export const Asterisk = styled.span<InputProps>`
  ${({ theme, disabled }) => css`
    color: ${theme.colors.errorDark};

    ${disabled &&
    css`
      color: ${theme.colors.grey};
      cursor: not-allowed;
    `}
  `}
`;
