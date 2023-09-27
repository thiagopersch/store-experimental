"use client";

import LoginOutlined from "@mui/icons-material/LoginOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useRouter } from "next/navigation";

import { SubmitHandler, useForm } from "react-hook-form";

type FormSignInProps = {
  email?: string;
  password?: string;
};

export const FormSignin = ({ email, password }: FormSignInProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormSignInProps>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormSignInProps> = async (data) => {
    console.log(data);
    await router.push("/dashboard/main");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ flexGrow: 1 }} display="flex" flexDirection="column" gap={3}>
        <TextField
          variant="filled"
          type="email"
          label="E-mail"
          required
          {...register("email", {
            required: {
              value: true,
              message: `
                  E-mail é obrigatório.
                `,
            },
          })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        <TextField
          variant="filled"
          type="password"
          label="Senha"
          required
          {...register("password", {
            required: {
              value: true,
              message: `
                  E-mail é obrigatório.
                `,
            },
          })}
          aria-invalid={errors.password ? "true" : "false"}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="primary"
          endIcon={<LoginOutlined />}
        >
          Entrar
        </Button>
      </Box>
    </form>
  );
};
