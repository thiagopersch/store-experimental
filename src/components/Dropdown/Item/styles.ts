import { darken } from "polished";
import styled, { css } from "styled-components";
import { ItemProps } from ".";

type ItemPropsPick = Pick<ItemProps, "color" | "dark" | "icon" | "size">;

export const Wrapper = styled.div`
  ${({ theme }) => css``}
`;

export const Item = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const Label = styled.span<ItemPropsPick>`
  ${({ theme, color, dark }) => css`
    font-size: ${theme.fonts.sizes.xsmall};
    color: ${dark ? darken(0.1, theme.colors[color]) : theme.colors[color]};
  `}
`;
