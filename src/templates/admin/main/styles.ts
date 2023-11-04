import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding: 15rem 20rem;
  `}
`;
