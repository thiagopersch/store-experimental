import * as S from "./styles";

export type ContentProps = {
  children: string | React.ReactNode;
  isOpen?: boolean;
  onClick?: () => React.MouseEvent<HTMLDivElement>;
};

const Content = ({ children, isOpen, onClick }: ContentProps) => {
  return (
    <S.Wrapper isOpen={isOpen} onClick={onClick}>
      {children}
    </S.Wrapper>
  );
};

export default Content;
