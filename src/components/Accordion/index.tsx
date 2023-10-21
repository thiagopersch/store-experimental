import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";

import * as S from "./styles";

export type AccordionProps = {
  children: ReactNode | string;
  label: string;
  icon: ReactNode;
  color: keyof DefaultTheme["colors"];
  labelColor: keyof DefaultTheme["colors"];
  rounded?: boolean;
  disabled?: boolean;
  disabledGutters?: boolean;
};

const Accordion = ({
  children,
  rounded = false,
  color,
  disabled = false,
  disabledGutters = false,
  icon,
  label,
  labelColor,
}: AccordionProps) => {
  return (
    <S.Wrapper
      rounded={rounded}
      color={color}
      disabled={disabled}
      disabledGutters={disabledGutters}
    >
      <S.Label labelColor={labelColor}>{label}</S.Label>
      <S.Icon labelColor={labelColor}>{icon}</S.Icon>
      {children}
    </S.Wrapper>
  );
};

export default Accordion;
