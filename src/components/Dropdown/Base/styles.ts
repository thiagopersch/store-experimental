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

// export const ImageWrapper = styled.div`
//   margin: 0 0.5rem;
// `;

// export const Label = styled.span<BasePropsPick>`
//   ${({ theme, color, dark }) => css`
//     font-size: ${theme.fonts.sizes.xsmall};
//     color: ${dark ? darken(0.1, theme.colors[color]) : theme.colors[color]};
//   `}
// `;

// export const ArrowIcon = styled(ChevronDown)<BasePropsPick>`
//   ${({ theme, isOpen, color, dark }) => css`
//     width: 2.4rem;
//     stroke-width: 1.5;
//     transition: transform 0.3s ease;
//     color: ${dark ? darken(0.1, theme.colors[color]) : theme.colors[color]};

//     ${isOpen &&
//     css`
//       transform: rotateZ(180deg);
//     `}
//   `}
// `;

type contentProps = {
  isOpen: boolean;
};

export const Content = styled.div<contentProps>`
  ${({ theme, isOpen }) => css`
    position: absolute;
    background: ${theme.colors.white};
    width: auto;
    max-width: 100%;
    padding: 1rem;
    top: 100%;
    border-radius: 0.3rem;
    z-index: ${theme.layers.menu};
    transition: ${theme.transitions.fast};
    box-shadow: ${theme.shadows.default};

    ${!isOpen &&
    css`
      visibility: hidden;
      opacity: 0;
      transform: translateY(50%);
    `}
    > ul {
      list-style: none;
    }
  `}
`;

// export const ListItem = styled.li`
//   ${({ theme }) => css`
//     padding: 1.5rem;
//     text-align: left;
//     font-size: ${theme.fonts.sizes.xsmall};
//     white-space: break-spaces;
//     color: ${theme.colors.grey};
//     list-style: none;
//     transition: ${theme.transitions.fast};

//     :hover {
//       background: #e9e9e9;
//       border-radius: 0.4rem;
//     }

//     a {
//       color: ${theme.colors.grey} !important;
//     }

//     & + & {
//       margin-top: 1rem;
//     }
//   `}
// `;

// export const Item = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   flex-direction: row;
//   align-items: center;
//   gap: 1rem;
// `;

type overlayProps = {
  isOpen: boolean;
};

export const Overlay = styled.div<overlayProps>`
  ${({ isOpen }) => css`
    visibility: hidden;
    opacity: 0;
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 0.2s ease-out;
    z-index: calc(var(--z-idx) - 1);

    ${isOpen &&
    css`
      visibility: visible;
      opacity: 1;
    `};
  `}
`;
