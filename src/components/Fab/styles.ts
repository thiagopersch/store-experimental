import styled, { css } from "styled-components";
import media from "styled-media-query";
import { FabProps } from ".";

export const Wrapper = styled.div<FabProps>`
  ${({
    theme,
    color = "primaryMain",
    variant,
    size,
    labelColor = "white",
  }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    white-space: nowrap;
    border: 0;
    border-radius: 100rem;
    color: ${theme.colors[labelColor]};
    background-color: ${theme.colors[color]};
    font-family: ${theme.fonts.family.primary};
    font-style: ${theme.fonts.style.normal};
    font-weight: ${theme.fonts.weight.bold};
    letter-spacing: 0.25rem;
    line-height: 1.6rem;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: ${theme.shadows.default};
    transition: ${theme.transitions.fast};

    &:hover {
      transition: ${theme.transitions.hover};
      box-shadow: ${theme.shadows.hover};
    }

    ${variant === "extended" && media.lessThan("medium")`width: 100%`}
  `}
`;
