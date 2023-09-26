import * as S from "./styles";

type ToastContentProps = {
  children: React.ReactNode | string;
  showSpinner?: boolean;
};

const ToastContent = ({ children, showSpinner = true }: ToastContentProps) => (
  <S.Wrapper>
    {showSpinner && <S.Spinner />}
    {children}
  </S.Wrapper>
);

export default ToastContent;
