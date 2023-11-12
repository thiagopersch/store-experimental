import { ChevronDown } from "@styled-icons/feather";
import { darken } from "polished";
import styled, { css } from "styled-components";
import { HeaderProps } from ".";

type HeaderPropsPick = Pick<
  HeaderProps,
  "color" | "dark" | "disabled" | "image" | "size" | "isOpen"
>;

export const Wrapper = styled.div<HeaderPropsPick>`
  ${({ theme }) => css`
    transition: ${theme.transitions.fast};
  `}
`;

export const ImageWrapper = styled.div`
  margin: 0 0.5rem;
`;

export const Label = styled.span<HeaderPropsPick>`
  ${({ theme, color, dark, size }) => css`
    font-size: ${theme.fonts.sizes[size]};
    color: ${dark ? darken(0.1, theme.colors[color]) : theme.colors[color]};
  `}
`;

export const ArrowIcon = styled(ChevronDown)<HeaderPropsPick>`
  ${({ theme, isOpen, color, dark, size }) => css`
    width: 2.4rem;
    stroke-width: 1.5;
    transition: transform 0.3s ease;
    font-size: ${theme.fonts.sizes[size]};
    color: ${dark ? darken(0.1, theme.colors[color]) : theme.colors[color]};

    ${isOpen &&
    css`
      transform: rotateZ(180deg);
    `}
  `}
`;
