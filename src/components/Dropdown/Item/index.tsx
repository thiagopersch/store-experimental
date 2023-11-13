import { DefaultTheme } from "styled-components";
import * as S from "./styles";

export type ItemProps = {
  children: string | React.ReactNode;
  color: keyof DefaultTheme["colors"];
  size: keyof DefaultTheme["fonts"]["sizes"];
  dark?: boolean;
};

const Item = ({ children, color, dark, size }: ItemProps) => {
  return (
    <S.Wrapper size={size} color={color} dark={dark}>
      {children}
    </S.Wrapper>
  );
};

export default Item;
