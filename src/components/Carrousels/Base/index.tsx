import * as S from "./styles";

export type CarrouselsProps = {
  children?: string;
};

const Carrousels = ({ children }: CarrouselsProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Carrousels;
