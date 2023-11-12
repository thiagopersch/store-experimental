import Icon from "@/components/Icon";
import Link from "next/link";
import { DefaultTheme } from "styled-components";
import * as S from "./styles";

export type ItemProps = {
  children: string | React.ReactNode;
  icon?: React.ReactNode;
  color: keyof DefaultTheme["colors"];
  size: keyof DefaultTheme["fonts"]["sizes"];
  dark?: boolean;
};

const Item = ({ children, icon, color, dark, size }: ItemProps) => {
  return (
    <S.Wrapper>
      <Link href="#" passHref>
        <S.Item>
          {!!icon && (
            <Icon color="primary" size="small">
              {icon}
            </Icon>
          )}
          {!!children && (
            <S.Label size={size} color={color} dark={dark}>
              {children}
            </S.Label>
          )}
        </S.Item>
      </Link>
    </S.Wrapper>
  );
};

export default Item;
