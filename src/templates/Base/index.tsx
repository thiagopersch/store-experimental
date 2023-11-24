import { ReactNode } from "react";

import Navbar from "@/components/Navbar";
import PageContainer from "@/components/PageContainer";

import Sidebar from "@/components/Sidebar";
import * as S from "./styles";

type BaseProps = {
  children?: string | ReactNode;
};

export default function Base({ children }: BaseProps) {
  return (
    <S.Wrapper>
      <Navbar color="primary" />
      <Sidebar />
      <S.Content>
        <PageContainer>{children}</PageContainer>
      </S.Content>
    </S.Wrapper>
  );
}
