import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem;
    margin-top: 2rem;
    gap: 2rem;
  `}
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 50vw;

  ${media.lessThan("medium")`
    width: 80vw;
  `}
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const CTA = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.lessThan("medium")`
    width: 100%;
  `}
`;
