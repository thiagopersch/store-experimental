import { ReactNode } from "react";
import * as S from "./styles";

export type ContentProps = {
  children: ReactNode;
};

const Content = ({ children }: ContentProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Content;
