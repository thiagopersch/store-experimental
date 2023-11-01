import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 5rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputsDescription = styled.div`
  padding: 1rem 50rem;

  ${media.lessThan("medium")`
    padding: 0;
  `}
`;
