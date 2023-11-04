import { darken } from "polished";
import styled, { css } from "styled-components";
import media from "styled-media-query";
import { NavbarProps } from ".";

const navbarModifiers = {
  absolute: () => css`
    position: absolute;
  `,
  fixed: () => css`
    position: fixed;
  `,
  relative: () => css`
    position: relative;
  `,
  static: () => css`
    position: static;
  `,
  sticky: () => css`
    position: sticky;
  `,
};

export const Wrapper = styled.nav<NavbarProps>`
  ${({ theme, color, position, enableColorOnDark }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 8rem;
    width: 100%;
    color: ${theme.colors.white};
    background-color: ${enableColorOnDark
      ? darken(0.1, theme.colors[color])
      : theme.colors[color]};
    padding: ${theme.spacings.xsmall};
    transition: ${theme.transitions.fast};

    ${!!position && navbarModifiers[position]};
  `}
`;

export const LogoLink = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-family: ${theme.fonts.family.primary};
    font-size: ${theme.fonts.sizes.medium};
    height: 100%;

    > span {
      font-weight: ${theme.fonts.weight.normal};
      color: ${theme.colors.info};
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`;

export const SearchCTA = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;
export const Search = styled.div`
  ${media.lessThan("medium")`
    display: none;
  `}
`;
