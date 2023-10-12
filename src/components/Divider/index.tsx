import * as S from "./styles";

export type DividerProps = {
  absolute?: boolean;
  light?: boolean;
};

const Divider = ({ absolute = false, light = false }: DividerProps) => {
  return <S.Wrapper absolute={absolute} light={light} />;
};

export default Divider;
