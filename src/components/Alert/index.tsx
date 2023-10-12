import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";
import * as S from "./styles";

export type AlertProps = {
  children?: string | ReactNode;
  description?: string | ReactNode;
  action?: ReactNode;
  closeIcon?: ReactNode;
  color?: keyof DefaultTheme["colors"];
  backgroundColor?: keyof DefaultTheme["colors"];
  icon?: ReactNode;
  onClose?: (event: boolean) => void;
  variant?: "filled" | "outlined" | "standard";
  dark?: boolean;
  iconAnimation?: boolean;
};

const Alert = ({
  children,
  description,
  action,
  closeIcon,
  color,
  backgroundColor,
  icon,
  onClose,
  variant = "filled",
  dark = false,
  iconAnimation = false,
}: AlertProps) => {
  return (
    <S.Wrapper
      action={action}
      closeIcon={closeIcon}
      backgroundColor={backgroundColor}
      color={color}
      hasIcon={!!icon}
      onClose={onClose}
      variant={variant}
      dark={dark}
      iconAnimation={iconAnimation}
    >
      <S.Icon>{!!icon && icon}</S.Icon>
      <S.TitleDescription>
        {!!children && <S.Title>{children}</S.Title>}
        {!!description && <S.Description>{description}</S.Description>}
      </S.TitleDescription>
      {!!closeIcon && <div>{closeIcon}</div>}
    </S.Wrapper>
  );
};

export default Alert;
