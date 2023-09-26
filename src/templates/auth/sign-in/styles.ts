import styled, { css } from "styled-components";
import media from "styled-media-query";

export const WrapperTilteDescrition = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  gap: 2rem;
`;

export const Input = styled.div`
  width: 30%;

  ${media.lessThan("medium")`
    width: 100%;
  `}
`;

export const CTA = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;

  ${media.lessThan("medium")`
        flex-direction: column-reverse;
        width: 100%;
    `}
`;

export const Registration = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    margin-left: 0.5rem;
  }
`;

export const PrivacyPolicy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    margin-left: 0.5rem;
  }
`;
