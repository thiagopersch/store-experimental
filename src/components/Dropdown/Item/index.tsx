import * as S from "./styles";

export type ItemProps = {
  children: string | React.ReactNode;
};

const Item = ({ children }: ItemProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Item;
