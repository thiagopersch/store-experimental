import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ForwardRefRenderFunction,
  ReactNode,
  forwardRef,
} from "react";
import { DefaultTheme } from "styled-components";
import * as S from "./styles";

type FabTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type FabProps = {
  children?: string | ReactNode;
  color?: keyof DefaultTheme["colors"];
  icon?: ReactNode;
  as?: ElementType;
  labelColor?: keyof DefaultTheme["colors"];
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  variant?: "circular" | "extended";
} & FabTypes;

const Fab: ForwardRefRenderFunction<HTMLButtonElement, FabProps> = (
  {
    children,
    as,
    labelColor,
    disabled = false,
    size = "large",
    color,
    icon,
    variant = "circular",
    ...props
  },
  ref,
) => {
  return (
    <S.Wrapper
      size={size}
      as={as}
      ref={ref}
      hasIcon={!!icon}
      color={color}
      labelColor={labelColor}
      disabled={disabled}
      variant={variant}
      {...props}
    >
      {!!icon && icon}
      {variant === "extended" && children}
    </S.Wrapper>
  );
};

export default forwardRef(Fab);
