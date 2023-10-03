import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";
import * as S from "./styles";

export type ButtonProps = {
  children?: string | ReactNode;
  size?: "small" | "medium" | "large";
  color?: keyof DefaultTheme["colors"];
  labelColor?: keyof DefaultTheme["colors"];
  disabled?: boolean;
  icon?: string | ReactNode;
  fullWidth?: boolean;
  variant?: "contained" | "outlined" | "text";
  hasIcon?: boolean;
};

const Button = ({
  children,
  hasIcon,
  color = "primaryMain",
  labelColor = "white",
  disabled = false,
  fullWidth = false,
  icon,
  size = "medium",
  variant = "contained",
  ...props
}: ButtonProps) => (
  <S.Wrapper
    color={color}
    labelColor={labelColor}
    size={size}
    disabled={disabled}
    fullWidth={fullWidth}
    variant={variant}
    hasIcon={!!icon}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default Button;
