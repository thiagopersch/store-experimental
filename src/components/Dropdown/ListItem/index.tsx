import * as S from "./styles";

export type ListItemProps = {
  children: string | React.ReactNode;
};

const ListItem = ({ children }: ListItemProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default ListItem;
