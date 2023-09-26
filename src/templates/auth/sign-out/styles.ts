import styled, { css } from "styled-components";
import media from "styled-media-query";

export const WrapperTilteDescrition = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  & > span {
    padding: 2rem;
    width: 50rem;
    text-align: center;
  }

  ${media.lessThan("medium")`
    & > span {
      padding: 2rem;
      width: 100%;
    }
  `}
`;

export const WrapperInputs = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
    gap: 2rem;
  `}
`;
