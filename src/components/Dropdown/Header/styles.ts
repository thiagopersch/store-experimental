import styled, { css } from "styled-components";
import { HeaderProps } from ".";

export const Wrapper = styled.div<HeaderProps>`
  ${({ theme, isOpen }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
    height: 100%;
    width: 100%;
    min-width: auto;

    ${isOpen &&
    css`
      z-index: var(--z-idx);
    `}
  `}
`;

export const UserContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    padding: 0 ${theme.spacings.xsmall};
  `}
`;

export const ImageWrapper = styled.div`
  margin: 0 0.5rem;
`;

export const Icon = styled.svg<HeaderProps>`
  ${({ isOpen }) => css`
    width: 2.4rem;
    stroke-width: 1.5;
    transition: transform 0.3s ease;

    ${isOpen &&
    css`
      transform: rotateZ(180deg);
    `}
  `}
`;
