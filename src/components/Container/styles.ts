import styled, { css } from "styled-components";
import { ContainerProps } from ".";

const containerModifiers = {
  none: () => css`
    margin: 0;
  `,
  small: () => css`
    margin: 10rem 30rem;
  `,
  medium: () => css`
    margin: 10rem 40rem;
  `,
  large: () => css`
    margin: 10rem 50rem;
  `,
  xlarge: () => css`
    margin: 10rem 60rem;
  `,
  huge: () => css`
    margin: 10rem 70rem;
  `,
  fluid: () => css`
    margin: auto;
  `,
};

export const Wrapper = styled.div<ContainerProps>`
  ${({ theme, breakpoints = "none" }) => css`
    width: 100%;
    transition: ${theme.transitions.fast};

    ${!!breakpoints && containerModifiers[breakpoints]()};
  `}
`;
