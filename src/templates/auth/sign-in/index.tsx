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
          <Typography color="primary" align="center" size="large" bold>
            Login do cliente
          </Typography>
          <Typography color="grey" align="center" size="xsmall">
            Veja seus pedidos de forma fácil, compre mais rápido e tenha uma
            experiência incrível! 🤩
          </Typography>
        </S.Header>
        <div>
          <S.InputsDescription>
            <FormSignin />
            <div>
              <Typography color="black" size="small" mobile>
                Não tem cadastro?&nbsp;
                <Link href="/sign-up" passHref>
                  <Typography color="primary" size="small" mobile>
                    cadastre-se
                  </Typography>
                </Link>
              </Typography>
            </div>
            <div>
              <Typography color="black" size="small" mobile>
                Ao continuar com acesso, você concorda com a nossa&nbsp;
                <Link href="#" passHref>
                  <Typography color="primary" size="small" mobile>
                    politica de privacidade
                  </Typography>
                </Link>
              </Typography>
            </div>
          </S.InputsDescription>
        </div>
      </S.Wrapper>
    </Base>
  );
};

export default SignIn;
