import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin: 15rem;

    ${media.lessThan("medium")`
      margin: 2rem;
    `}
  `}
`;
