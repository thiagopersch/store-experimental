import * as S from "./styles";

export type CaptionProps = {
  children?: string;
};

const Caption = ({ children }: CaptionProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Caption;
