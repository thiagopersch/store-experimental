import styled, { css } from "styled-components";

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

export const Switch = styled.input`
  ${({ theme }) => css`
    opacity: 0;
    z-index: 1;
    border-radius: 1.5rem;
    width: 4.2rem;
    height: 2.6rem;
    cursor: pointer;

    &:checked + ${Toggle} {
      background: ${theme.colors.primaryMain};
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

    &:hover {
      box-shadow: ${theme.shadows.NotFocus};
    }
  `}
`;

export const Toggle = styled.label`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 5rem;
    height: 2rem;
    border-radius: 1.5rem;
    background: ${theme.colors.gray};
    cursor: pointer;

    &::after {
      content: "";
      display: block;
      border-radius: 10rem;
      width: 1.8rem;
      height: 1.8rem;
      margin: 0.1rem;
      background: ${theme.colors.white};
      transition: ${theme.transition.fast};
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    cursor: pointer;
    font-family: ${theme.font.family.primary};
    font-weight: ${theme.font.weight.normal};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.primaryMain};
    padding-left: ${theme.spacings.xsmall};
  `}
`;
