import { ReactNode } from "react";
import * as S from "./styles";

export type ActionsProps = {
  children: string | ReactNode;
};

const Actions = ({ children }: ActionsProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Actions;
