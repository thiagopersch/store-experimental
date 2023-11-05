import styled, { css } from "styled-components";
import { DividerProps } from ".";

type wrapperTypes = Pick<DividerProps, "light">;

export const Wrapper = styled.div<wrapperTypes>`
  ${({ theme, light }) => css`
    height: 0.01rem;
    background-color: ${light ? theme.colors.white : theme.colors.grey};
    border-radius: 100rem;
    transition: ${theme.transitions.fast};
  `}
`;
