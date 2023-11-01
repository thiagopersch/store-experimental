import { ReactNode } from "react";
import * as S from "./styles";

export type ContainerProps = {
  children: string | ReactNode;
  breakpoints:
    | "none"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "huge"
    | "fluid";
};

const Container = ({ children, breakpoints }: ContainerProps) => {
  return <S.Wrapper breakpoints={breakpoints}>{children}</S.Wrapper>;
};

export default Container;
