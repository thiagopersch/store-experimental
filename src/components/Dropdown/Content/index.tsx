import * as S from "./styles";

export type ContentProps = {
  children: string | React.ReactNode;
  isOpen?: boolean;
};

const Content = ({ children, isOpen }: ContentProps) => {
  return <S.Wrapper isOpen={isOpen}>{children}</S.Wrapper>;
};

export default Content;
