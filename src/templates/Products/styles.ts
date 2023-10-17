import styled, { css } from "styled-components";

export const CardProducts = styled.div`
  ${({ theme }) => css`
    padding: 15rem;
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    align-content: stretch;
    flex-flow: row wrap;
    gap: 1rem;
  `}
`;
