"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import Button from "@/components/Button";
import TextField from "@/components/TextField";
import Typography from "@/components/Typography";

import Base from "@/templates/Base";

import { SignUpSchema } from "./schema";

import Checkbox from "@/components/Checkbox";
import * as S from "./styles";

type FormSignUpProps = {
  name?: string;
  email?: string;
  password?: string;
  cpf?: string;
  phone?: string;
  sex?: string;
  terms?: boolean;
};

const SignUp = ({
  cpf,
  email,
  name,
  password,
  phone,
  sex,
  terms,
}: FormSignUpProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormSignUpProps>({
    resolver: zodResolver(SignUpSchema),
    mode: "all",
    criteriaMode: "all",
  });

  const onSubmit: SubmitHandler<FormSignUpProps> = async (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <Base>
      <S.Wrapper>
        <Typography color="primary" align="center" size="large" bold>
          Crie seu cadastro
        </Typography>
        <Typography color="grey" size="xsmall" align="center">
          Veja seus pedidos de forma fácil, compre mais rápido e tenha uma
          experiência incrível! 🤩
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.Inputs>
            <S.Input>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="name"
                    type="text"
                    label="Nome completo"
                    required
                  />
                )}
              />
              {
                <Typography size="xxsmall" color="error">
                  {errors.name?.message}
                </Typography>
              }
            </S.Input>
            <S.Input>
              <Controller
                name="cpf"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="cpf"
                    type="text"
                    label="CPF"
                    mask="cpf"
                    maxLength={11}
                    required
                  />
                )}
              />
              {
                <Typography size="xxsmall" color="error">
                  {errors.cpf?.message}
                </Typography>
              }
            </S.Input>
            <S.Input>
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="phone"
                    type="text"
                    label="Celular"
                    maxLength={11}
                    required
                  />
                )}
              />
              {
                <Typography size="xxsmall" color="error">
                  {errors.phone?.message}
                </Typography>
              }
            </S.Input>
            <S.Input>
              <Controller
                name="sex"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="sex"
                    type="text"
                    label="Sexo"
                    required
                  />
                )}
              />
              {
                <Typography size="xxsmall" color="error">
                  {errors.sex?.message}
                </Typography>
              }
            </S.Input>
            <S.Input>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="email"
                    type="email"
                    label="E-mail"
                    required
                  />
                )}
              />
              {
                <Typography size="xxsmall" color="error">
                  {errors.email?.message}
                </Typography>
              }
            </S.Input>
            <S.Input>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="password"
                    type="password"
                    label="Senha"
                    required
                  />
                )}
              />
              {
                <Typography size="xxsmall" color="error">
                  {errors.password?.message}
                </Typography>
              }
            </S.Input>
            <S.Input>
              <Controller
                name="terms"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    id="terms"
                    color="primary"
                    labelColor="primary"
                    value="true"
                    required
                  >
                    Aceito receber conteúdos e lembretes sobre promoções e
                    novidades. Ao informar os meus dados, eu concordo com a
                    Política de Privacidade vigente.
                  </Checkbox>
                )}
              />
              {
                <Typography size="xxsmall" color="error">
                  {errors.terms?.message}
                </Typography>
              }
            </S.Input>
          </S.Inputs>
          <S.CTA>
            <Button
              type="submit"
              color="primary"
              labelColor="white"
              variant="contained"
            >
              Cadastrar
            </Button>
          </S.CTA>
        </form>
      </S.Wrapper>
    </Base>
  );
};

export default SignUp;
