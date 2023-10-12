import styled, { css } from "styled-components";
import { DividerProps } from ".";

type wrapperTypes = Pick<DividerProps, "absolute" | "light">;

const dividerModifiers = {
  absolute: () => css`
    position: absolute;
  `,
};

export const Wrapper = styled.div<wrapperTypes>`
  ${({ theme, absolute, light }) => css`
    border: 0.1rem solid ${light ? theme.colors.white : theme.colors.grey};
    border-radius: 100rem;
    transition: ${theme.transitions.fast};

    ${absolute && dividerModifiers.absolute()}
  `}
`;
