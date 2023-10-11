import * as S from "./styles";

export type DividerProps = {
  children?: string;
  absolute?: boolean;
  light?: boolean;
  orientation?: "horizontal" | "vertical";
  fullWidth?: boolean;
};

const Divider = ({
  children,
  absolute = false,
  light = false,
  fullWidth = false,
  orientation = "horizontal",
}: DividerProps) => {
  return (
    <S.Wrapper
      absolute={absolute}
      light={light}
      orientation={orientation}
      fullWidth={fullWidth}
    />
  );
};

export default Divider;
