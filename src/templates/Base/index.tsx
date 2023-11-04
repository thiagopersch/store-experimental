import { ReactNode } from "react";

import PageContainer from "@/components/PageContainer";

import Navbar from "@/components/Navbar";

import * as S from "./styles";

type BaseProps = {
  children?: string | ReactNode;
};

export default function Base({ children }: BaseProps) {
  return (
    <S.Wrapper>
      <Navbar color="primary" enableColorOnDark />
      <PageContainer>{children}</PageContainer>
    </S.Wrapper>
  );
}
