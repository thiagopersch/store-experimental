import styled, { css } from "styled-components";
import { IconProps } from ".";

type WrapperProps = Pick<IconProps, "color" | "size">;

const iconModifiers = {
  small: () => css`
    width: 3rem;
    height: 3rem;
  `,
  medium: () => css`
    width: 5rem;
    height: 5rem;
  `,
  large: () => css`
    width: 8rem;
    height: 8rem;
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, size, color }) => css`
    color: ${theme.colors[color]};
    transition: ${theme.transitions.fast};

    ${size && iconModifiers[size]}
  `}
`;
