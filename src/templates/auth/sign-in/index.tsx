"use client";

import Link from "next/link";

import { FormSignin } from "@/components/FormSignin";
import Typography from "@/components/Typography";

import Base from "@/templates/Base";

import * as S from "./styles";

const SignIn = () => {
  return (
    <Base>
      <S.Wrapper>
        <S.Header>
          <Typography color="primary" align="center" size="large">
            Login do cliente
          </Typography>
          <Typography color="grey" align="center" size="small">
            Veja seus pedidos de forma fácil, compre mais rápido e tenha uma
            experiência incrível! 🤩
          </Typography>
        </S.Header>
        <div>
          <FormSignin />
          <div>
            <Typography color="black" size="small">
              Não tem cadastro?
            </Typography>
            <Link href="/sign-out" passHref>
              <Typography color="primary" size="small">
                cadastre-se
              </Typography>
            </Link>
          </div>
          <div>
            <Typography color="black" size="small">
              Ao continuar com acesso, você concorda com a nossa
              <Link href="#" passHref>
                <Typography color="primary" size="small">
                  politica de privacidade
                </Typography>
              </Link>
            </Typography>
          </div>
        </div>
      </S.Wrapper>
    </Base>
  );
};

export default SignIn;
