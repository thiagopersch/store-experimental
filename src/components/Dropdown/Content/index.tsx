import * as S from "./styles";

export type ContentProps = {
  children: string | React.ReactNode;
};

const Content = ({ children }: ContentProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Content;
