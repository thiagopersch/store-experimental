import { setLightness } from "polished";
import styled, { css } from "styled-components";
import media from "styled-media-query";
import { BaseProps } from ".";

export const Wrapper = styled.div<BaseProps>`
  ${({ theme, color }) => css`
    height: auto;
    width: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    border: 0.1rem solid ${setLightness(0.9, theme.colors[color])};
    border-radius: 0.5rem;
    padding: ${theme.spacings.small};
    background-color: ${setLightness(0.95, theme.colors[color])};
    box-shadow: ${theme.shadows.default};
    transition: ${theme.transitions.hover};

    &:hover {
      box-shadow: ${theme.shadows.hover};
    }

    ${media.lessThan("medium")`
      width: 100%;
    `}
  `}
`;
