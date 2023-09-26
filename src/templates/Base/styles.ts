import styled, { css } from "styled-components";

export const Content = styled.main`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
  `}
`;
