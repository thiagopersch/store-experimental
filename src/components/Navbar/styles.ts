import styled, { css } from "styled-components";
import { NavbarProps } from ".";

export const Wrapper = styled.nav<NavbarProps>`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 8rem;
    width: 100%;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primaryMain};
    padding: ${theme.spacings.xsmall};
  `}
`;

export const LogoLink = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-family: ${theme.font.family.primary};
    font-size: ${theme.font.sizes.medium};
    height: 100%;

    > span {
      font-weight: ${theme.font.weight.normal};
      color: ${theme.colors.infoMain};
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`;

export const Menu = styled.ul``;

export const MenuItem = styled.li`
  ${({ theme }) => css``}
`;
