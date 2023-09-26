"use client";

import Link from "next/link";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Base from "@/templates/Base";
import SectionContainer from "@/components/SectionContainer";
import TextInput from "@/components/TextInput";
import TextComponent from "@/components/TextComponent";
import { LogIn } from "@styled-icons/feather";

import * as S from "./styles";

const SignIn = () => {
  return (
    <Base>
      <S.Wrapper>
        <SectionContainer>
          <form action="#">
            <S.WrapperTilteDescrition>
              <Heading size="md">Login do cliente</Heading>
              <TextComponent color="darkGray">
                Veja seus pedidos de forma fácil, compre mais rápido e tenha uma
                experiência incrível! 🤩
              </TextComponent>
            </S.WrapperTilteDescrition>
            <S.WrapperInputs>
              <S.Input>
                <TextInput name="email" label="E-mail" />
              </S.Input>
              <S.Input>
                <TextInput name="password" label="Senha" />
              </S.Input>
              <S.CTA>
                <Button size="large" icon={<LogIn />}>
                  Entrar
                </Button>
              </S.CTA>
              <S.Registration>
                <TextComponent color="darkGray">
                  Não tem cadastro?
                </TextComponent>
                <Link href="/sign-out" passHref>
                  <TextComponent color="primaryColor">
                    cadastre-se
                  </TextComponent>
                </Link>
              </S.Registration>
              <S.PrivacyPolicy>
                <TextComponent color="darkGray">
                  Ao continuar com acesso, você concorda com a nossa
                  <Link href="#" passHref>
                    <TextComponent color="primaryColor">
                      politica de privacidade
                    </TextComponent>
                  </Link>
                </TextComponent>
              </S.PrivacyPolicy>
            </S.WrapperInputs>
          </form>
        </SectionContainer>
      </S.Wrapper>
    </Base>
  );
};

export default SignIn;
