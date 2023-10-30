import styled from "styled-components";
import media from "styled-media-query";

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CTA = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.lessThan("medium")`
    width: 100%;
  `}
`;
