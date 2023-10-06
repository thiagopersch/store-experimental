import { ReactNode } from "react";
import * as S from "./styles";

export type AccordionProps = {
  children?: string | ReactNode;
};

const Accordion = ({ children }: AccordionProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Accordion;
