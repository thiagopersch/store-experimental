import styled, { css } from "styled-components";

export const Wrapper = styled.main`
  padding: 5rem;
`;

export const CardProducts = styled.div`
  ${({ theme }) => css`
    padding: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 55rem;
  `}
`;
