import styled, { css } from "styled-components";
import { BaseProps } from ".";

type BasePropsPick = Pick<BaseProps, "isOpen">;

export const Wrapper = styled.div<BasePropsPick>`
  ${({ theme }) => css`
    display: contents;
    --z-idx: calc(${theme.layers.overlay} - 1);
    transition: ${theme.transitions.fast};
  `}
`;

export const Container = styled.div<BasePropsPick>`
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

export const HeaderContainer = styled.div<BasePropsPick>`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    padding: 0 ${theme.spacings.xsmall};
  `}
`;

type overlayProps = {
  isOpen: boolean;
};

export const Overlay = styled.div<overlayProps>`
  ${({ isOpen }) => css`
    display: ${isOpen ? "block" : "none"};
    opacity: ${isOpen ? 1 : 0};
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 0.2s ease-out;
    z-index: calc(var(--z-idx) - 1);
  `}
`;
