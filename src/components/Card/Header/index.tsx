import { ReactNode } from "react";
import * as S from "./styles";

export type HeaderProps = {
  children: ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Header;
