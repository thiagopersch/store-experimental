import { ChevronDown } from "@styled-icons/feather";
import { darken } from "polished";
import styled, { DefaultTheme, css } from "styled-components";
import { DropdownProps } from ".";

type dropDownProps = Pick<
  DropdownProps,
  "color" | "background" | "dark" | "isOpen" | "disabled" | "size"
>;

const dropDownModifiers = {
  disabled: (theme: DefaultTheme) => css`
    cursor: not-allowed;
    color: ${theme.colors.grey};
    pointer-events: none;
  `,
  small: () => css`
    padding: 1.6rem;
  `,
  medium: () => css`
    padding: 2.4rem;
  `,
  large: () => css`
    padding: 3.2rem;
  `,
  huge: () => css`
    padding: 5.6rem;
  `,
};

export const Wrapper = styled.div<dropDownProps>`
  ${({
    theme,
    color = "primary",
    dark,
    background = "transparent",
    disabled,
    size,
  }) => css`
    display: contents;
    --z-idx: calc(${theme.layers.overlay} - 1);
    background-color: ${dark
      ? darken(0.1, theme.colors[background])
      : theme.colors[background]};
    color: ${dark ? darken(0.1, theme.colors[color]) : theme.colors[color]};
    transition: ${theme.transitions.fast};

    ${!!disabled && dropDownModifiers.disabled(theme)};
    ${!!size && dropDownModifiers[size]()};
  `}
`;

export const Container = styled.div<dropDownProps>`
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

export const ArrowIcon = styled(ChevronDown)<dropDownProps>`
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

export const Content = styled.div<dropDownProps>`
  ${({ theme, background = "white", isOpen }) => css`
    position: absolute;
    background: ${theme.colors[background]};
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

export const ListItem = styled.li`
  ${({ theme }) => css`
    padding: 1.5rem;
    text-align: left;
    font-size: ${theme.fonts.sizes.xsmall};
    white-space: break-spaces;
    color: ${theme.colors.grey};
    list-style: none;
    transition: ${theme.transitions.fast};

    :hover {
      background: #e9e9e9;
      border-radius: 0.4rem;
    }

    a {
      color: ${theme.colors.grey} !important;
    }

    & + & {
      margin-top: 1rem;
    }
  `}
`;

export const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const Overlay = styled.div<dropDownProps>`
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
