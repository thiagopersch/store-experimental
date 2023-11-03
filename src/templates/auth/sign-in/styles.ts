import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputsDescription = styled.div`
  width: 70rem;

  ${media.lessThan("medium")`
    width: 100%;
  `}
`;
