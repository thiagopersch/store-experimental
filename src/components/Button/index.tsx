import { DefaultTheme } from "styled-components";
import * as S from "./styles";

export type ButtonProps = {
  children?: string;
  color?: keyof DefaultTheme["colors"];
  labelColor?: keyof DefaultTheme["colors"];
};

const Button = ({ children, color, labelColor }: ButtonProps) => {
  return (
    <S.Button color={color} labelColor={labelColor}>
      {children}
    </S.Button>
  );
};

export default Button;
