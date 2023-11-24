import Link from "next/link";
import { darken } from "polished";
import styled, { css, DefaultTheme } from "styled-components";

export const Wrapper = styled.aside`
  ${({ theme }) => css`
    grid-area: sidebar;
    display: grid;
    grid-template-areas:
      "logo"
      "menu";
    grid-template-rows: 8rem 1fr;
    background: ${theme.colors.white};
    box-shadow: ${theme.shadows.default};
    text-align: center;
  `}
`;

export const Logo = styled(Link)`
  ${({ theme }) => css`
    grid-area: logo;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
    transform: scale(0.9);
    transition: ${theme.transitions.fast};

    &:hover {
      transform: scale(1);
    }
  `}
`;

export const Menu = styled.ul`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.small};
    list-style-type: none;
  `}
`;

const menuItemModifiers = {
  active: (theme: DefaultTheme) => css`
    a {
      background: ${theme.colors.white};

      border-left: 0.5rem solid ${theme.colors.primary};
      padding-left: ${theme.spacings.xxsmall};
      box-shadow:
        inset 0.15rem 0.1rem 0.1rem -0.05rem #ccdbdb,
        inset 0.1rem -0.1rem 0.15rem -0.05rem #ccdbdb;
    }
  `,
};

type MenuItemProps = {
  active?: boolean;
};
export const MenuItem = styled.li<MenuItemProps>`
  ${({ theme, active }) => css`
    height: 4.5rem;

    & + & {
      margin-top: 0.1rem;
    }

    a {
      display: flex;
      align-items: center;
      height: 100%;
      padding-left: ${theme.spacings.xsmall};
      text-decoration: none;
      color: ${darken(0.08, theme.colors.primary)};
      transition: background 0.2s ease;
    }

    ${!active &&
    css`
      &:hover a {
        background: ${theme.colors.white};
      }
    `}

    ${!!active && menuItemModifiers.active(theme)}
  `}
`;
