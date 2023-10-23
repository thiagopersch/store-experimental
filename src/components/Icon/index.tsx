import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";
import * as S from "./styles";

export type IconProps = {
  children: ReactNode;
  color: keyof DefaultTheme["colors"];
  size: "small" | "medium" | "large";
};

const Icon = ({ children, color, size }: IconProps) => {
  return (
    <S.Wrapper color={color} size={size}>
      {children}
    </S.Wrapper>
  );
};

export default Icon;
