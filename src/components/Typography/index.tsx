import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";
import * as S from "./styles";

export type TypographyProps = {
  children: string | ReactNode;
  color?: keyof DefaultTheme["colors"];
  size?: "small" | "medium" | "large" | "huge" | "xhuge";
  align?: "center" | "inherit" | "justify" | "left" | "right";
  transform?: "capitalize" | "lowercase" | "uppercase" | "none";
};

const Typography = ({
  children,
  align = "justify",
  color,
  size = "small",
  transform = "none",
}: TypographyProps) => {
  return (
    <S.Wrapper align={align} color={color} size={size} transform={transform}>
      {children}
    </S.Wrapper>
  );
};

export default Typography;
