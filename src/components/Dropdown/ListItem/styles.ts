import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 1.5rem;
    text-align: left;
    font-size: ${theme.fonts.sizes.xsmall};
    white-space: break-spaces;
    color: ${theme.colors.grey};
    list-style: none;
    transition: ${theme.transitions.fast};

    :hover {
      background: #e9e9e9;
      border-radius: 0.4rem;
    }

    a {
      color: ${theme.colors.grey} !important;
    }

    & + & {
      margin-top: 1rem;
    }
  `}
`;
