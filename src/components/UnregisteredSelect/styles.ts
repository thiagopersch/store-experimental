import { ChevronDown } from "@styled-icons/feather";
import styled, { css } from "styled-components";

import { Orientation } from ".";

export const Wrapper = styled.div`
  position: relative;
  height: 5rem;
  width: 100%;
  cursor: pointer;

  label,
  input {
    cursor: pointer;
  }

  input {
    color: #556365;
  }
`;

type ArrowIconProps = {
  isOpen: boolean;
};
export const ArrowIcon = styled(ChevronDown)<ArrowIconProps>`
  ${({ isOpen }) => css`
    transition: all 0.3s ease;

    ${isOpen &&
    css`
      transform: rotateZ(180deg);
    `}
  `}
`;

const optionsListModifiers = {
  bottom: () => css`
    top: 100%;
    border-radius: 0 0 0.5rem 0.5rem;
  `,
  top: () => css`
    bottom: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
  `,
};

type OptionsListProps = {
  isOpen: boolean;
  orientation: Orientation;
};

const slideOut = (orientation: Orientation) => css`
  @keyframes SlideOut {
    from {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
    to {
      visibility: hidden;
      opacity: 0;
      transform: ${orientation === "top"
        ? "translateY(0.2rem)"
        : "translateY(-0.2rem)"};
    }
  }
`;

const slideIn = (orientation: Orientation) => css`
  @keyframes SlideIn {
    from {
      visibility: hidden;
      opacity: 0;

      transform: ${orientation === "top"
        ? "translateY(0.2rem)"
        : "translateY(-0.2rem)"};
    }
    to {
      visibility: visible;
      opacity: 1;

      transform: translateY(0);
    }
  }
`;

export const OptionsList = styled.div<OptionsListProps>`
  ${({ theme, isOpen, orientation }) => css`
    ${slideIn(orientation)}
    ${slideOut(orientation)}

    position: absolute;
    left: 0;
    right: 0;
    overflow: auto;
    background: #fdfdfd;
    padding: 1rem 0.5rem;
    padding-top: 0;
    font-size: ${theme.fonts.sizes.medium};
    z-index: ${theme.layers.base};
    box-shadow: 0rem 0rem 0.4rem rgba(51, 73, 77, 0.3);
    max-height: 0;
    visibility: hidden;
    opacity: 0;
    font-size: ${theme.fonts.sizes.small};

    transform: ${orientation === "top"
      ? "translateY(0.2rem)"
      : "translateY(-0.2rem)"};

    animation-duration: 0.2s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    animation-name: ${isOpen ? "SlideIn" : "SlideOut"};

    ${optionsListModifiers[orientation]};
  `}
`;

type OptionItemProps = {
  disabled?: boolean;
};
const OptionItem = styled.div<OptionItemProps>`
  ${({ disabled }) => css`
    padding: 1rem;
    margin-top: 1rem;
    color: #556365;
    height: 100%;

    ${disabled &&
    css`
      pointer-events: none;
      cursor: not-allowed;
    `}

    :hover {
      border-radius: 0.3rem;
      background: rgba(0, 0, 0, 0.1);
    }
  `}
`;

export const EmptyOption = styled(OptionItem)`
  padding: 0;
  margin-top: 0.5rem;
`;

type GroupContainerProps = {
  hasTitle: boolean;
};
export const GroupContainer = styled.div<GroupContainerProps>`
  ${({ theme, hasTitle }) => css`
    position: relative;

    ${hasTitle &&
    css`
      margin-top: 1.5rem;
      border-top: 0.1rem solid ${theme.colors.grey};

      > span {
        position: absolute;
        top: 0;
        padding: 0 0.5rem;
        transform: translateY(calc(-50% - 0.1rem));
        background: ${theme.colors.white};
        color: ${theme.colors.grey};
      }
    `}
  `}
`;

export const Option = styled(OptionItem)`
  ${({ theme }) => css`
    ${EmptyOption} + ${GroupContainer} > & {
      margin-top: 0;
    }
  `}
`;
