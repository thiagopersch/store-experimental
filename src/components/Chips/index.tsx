import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";
import * as S from "./styles";

export type ChipProps = {
  color?: keyof DefaultTheme["colors"];
  backgroundColor?: keyof DefaultTheme["colors"];
  disabled?: boolean;
  hasIcon?: boolean;
  icon?: ReactNode;
  label?: string | ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "filled" | "outlined";
};

const Chip = ({
  color,
  backgroundColor,
  disabled,
  icon,
  label,
  size = "medium",
  variant = "filled",
}: ChipProps) => {
  return (
    <S.Wrapper
      color={color}
      backgroundColor={backgroundColor}
      disabled={disabled}
      size={size}
      variant={variant}
      hasIcon={!!icon}
    >
      {!!icon && icon}
      <S.Label hasIcon={!!icon} disabled={disabled}>
        {!!label && label}
      </S.Label>
    </S.Wrapper>
  );
};

export default Chip;
