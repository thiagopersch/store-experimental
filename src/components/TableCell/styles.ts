import { ChevronDown } from "@styled-icons/feather";
import styled, { css, DefaultTheme } from "styled-components";

import { columnFixedModifier } from "../TableColumn/styles";

const wrapperModifiers = {
  minimal: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.xsmall};
    color: #545f6a;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `,
  showingDetail: (theme: DefaultTheme) => css`
    box-shadow: inset 5px 0px ${theme.colors.primaryMain};
  `,
  ellipsis: () => css`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 2rem;
  `,
};

const bordersModifiers = {
  none: () => css``,
  left: () => css`
    border-right: 0.2rem left #97aeb1;
  `,
  right: () => css`
    border-right: 0.2rem solid #97aeb1;
  `,
  all: () => css`
    ${bordersModifiers.left};
    ${bordersModifiers.right};
  `,
};

type WrapperProps = {
  position: number;
  fixed?: boolean;
  minimal: boolean;
  contentAlign?: "left" | "center" | "right";
  border?: "all" | "left" | "right" | "none";
  showingDetail?: boolean;
  ellipsis?: boolean;
};
export const Wrapper = styled.td<WrapperProps>`
  ${({
    theme,
    fixed,
    position,
    minimal,
    contentAlign = "left",
    border = "none",
    showingDetail,
    ellipsis = false,
  }) => css`
    font-size: ${theme.fonts.sizes.small};
    color: ${theme.colors.black};
    border-bottom: 0.1rem solid ${theme.colors.grey};
    padding: ${theme.spacings.xsmall};
    background: ${theme.colors.white};
    text-align: ${contentAlign};

    transition: box-shadow 0.3s ease-out;

    ${!!ellipsis && wrapperModifiers.ellipsis()}
    ${!!fixed && columnFixedModifier(theme, position)}
    ${!!minimal && wrapperModifiers.minimal(theme)};
    ${!!showingDetail && wrapperModifiers.showingDetail(theme)}
    ${!!border && bordersModifiers[border]}
  `}
`;

export const ExpandButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.primaryMain};
    background: none;
    border: none;
    outline: 0;
    font: inherit;
    text-decoration: none;
    text-align: left;
  `}
`;

type ExpandIconProps = {
  active: boolean;
};
export const ExpandIcon = styled(ChevronDown)<ExpandIconProps>`
  ${({ theme, active }) => css`
    stroke-width: 0.2rem;
    margin-left: 0.5rem;
    color: ${theme.colors.primaryMain};
    transition: transform 0.3s ease;

    ${!!active &&
    css`
      transform: rotateZ(180deg);
    `}
  `}
`;
