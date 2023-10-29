"use client";

import { useRouter } from "next/navigation";

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import TextField from "../TextField";
import Typography from "../Typography";

import { zodResolver } from "@hookform/resolvers/zod";
import { LogIn } from "@styled-icons/feather";
import Button from "../Button";
import { SingInSchema } from "./schema";

import * as S from "./styles";

type FormSignInProps = {
  email?: string;
  password?: string;
};

export const FormSignin = ({ email, password }: FormSignInProps) => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<FormSignInProps>({
    resolver: zodResolver(SingInSchema),
    mode: "all",
    criteriaMode: "all",
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<FormSignInProps> = async (data) => {
    console.log(data);
    await router.push("/dashboard/main");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Inputs>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField {...field} id="email" type="email" label="E-mail" />
          )}
        />
        {
          <Typography size="xxsmall" color="error">
            {errors.email?.message}
          </Typography>
        }
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField {...field} id="password" type="password" label="Senha" />
          )}
        />
        {
          <Typography size="xxsmall" color="error">
            {errors.password?.message}
          </Typography>
        }
      </S.Inputs>
      <div>
        <Button
          color="primary"
          labelColor="white"
          variant="contained"
          icon={<LogIn />}
        >
          Login
        </Button>
      </div>
    </form>
  );
};
