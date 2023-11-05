import { ReactNode } from "react";
import * as S from "./styles";

export type HeaderProps = {
  children: string | ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Header;
