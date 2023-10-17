import { ReactNode } from "react";
import * as S from "./styles";

export type BaseProps = {
  children: ReactNode;
};

const Base = ({ children }: BaseProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Base;
