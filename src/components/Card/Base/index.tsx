import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";
import * as S from "./styles";

export type BaseProps = {
  children: ReactNode;
  color: keyof DefaultTheme["colors"];
};

const Base = ({ children, color }: BaseProps) => {
  return <S.Wrapper color={color}>{children}</S.Wrapper>;
};

export default Base;
