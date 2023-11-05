import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: ${theme.layout.display.flex};
    max-width: 100%;
  `}
`;
