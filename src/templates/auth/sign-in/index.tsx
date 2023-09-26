"use client";

import {
  Button,
  Container,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";

import Base from "@/templates/Base";
import { LogIn } from "@styled-icons/feather";

import * as S from "./styles";

const SignIn = () => {
  return (
    <Base>
      <Stack direction="column">
        <Container maxWidth="sm">
          <FormControl>
            <S.WrapperTilteDescrition>
              <Typography
                variant="h4"
                component="h4"
                color="primary"
                sx={{ fontWeight: "bold" }}
              >
                Login do cliente
              </Typography>
              <Typography component="p" color="darkgray" align="center">
                Veja seus pedidos de forma fácil, compre mais rápido e tenha uma
                experiência incrível! 🤩
              </Typography>
            </S.WrapperTilteDescrition>
            <S.WrapperInputs>
              <TextField name="email" label="E-mail" />
              <TextField name="password" label="Senha" />
              <Button variant="contained" color="primary" endIcon={<LogIn />}>
                Entrar
              </Button>
              <S.Registration>
                <Typography color="darkgray">Não tem cadastro?</Typography>
                <Link href="/sign-out" passHref>
                  <Typography color="primary">cadastre-se</Typography>
                </Link>
              </S.Registration>
              <S.PrivacyPolicy>
                <Typography color="darkGray">
                  Ao continuar com acesso, você concorda com a nossa
                  <Link href="#" passHref>
                    <Typography color="primary">
                      politica de privacidade
                    </Typography>
                  </Link>
                </Typography>
              </S.PrivacyPolicy>
            </S.WrapperInputs>
          </FormControl>
        </Container>
      </Stack>
    </Base>
  );
};

export default SignIn;
