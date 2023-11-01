import styled, { css } from "styled-components";
import { ContainerProps } from ".";

const containerModifiers = {
  none: () => css`
    padding: 0;
  `,
  small: () => css`
    padding: 2rem;
  `,
  medium: () => css`
    padding: 4rem;
  `,
  large: () => css`
    padding: 6rem;
  `,
  xlarge: () => css`
    padding: 8rem;
  `,
  huge: () => css`
    padding: 10rem;
  `,
  fluid: () => css`
    padding: auto;
  `,
};

export const Wrapper = styled.div<ContainerProps>`
  ${({ theme, breakpoints = "none" }) => css`
    width: 100%;
    transition: ${theme.transitions.fast};

    ${!!breakpoints && containerModifiers[breakpoints]()};
  `}
`;
