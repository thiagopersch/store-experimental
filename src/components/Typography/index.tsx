import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";
import * as S from "./styles";

export type TypographyProps = {
  children: string | ReactNode;
  color: keyof DefaultTheme["colors"];
  size: keyof DefaultTheme["fonts"]["sizes"];
  align?: "center" | "inherit" | "justify" | "left" | "right";
  transform?: "capitalize" | "lowercase" | "uppercase" | "none";
  bold?: boolean;
  mobile?: boolean;
};

const Typography = ({
  children,
  align = "left",
  color,
  size = "small",
  transform = "none",
  bold,
  mobile,
}: TypographyProps) => {
  return (
    <S.Wrapper
      bold={bold}
      align={align}
      color={color}
      size={size}
      transform={transform}
      mobile={mobile}
    >
      {children}
    </S.Wrapper>
  );
};

export default Typography;
