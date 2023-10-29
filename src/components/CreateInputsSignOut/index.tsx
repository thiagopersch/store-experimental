"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import TextField from "../TextField";
import { CreateAccountSchema } from "./schema";

type CreateInputsSignOutProps = {
  name: string;
  birth_date: string;
  cpf: string;
  phone: string;
  sex: string;
};

export const CreateInputsSignOut = ({
  birth_date,
  cpf,
  name,
  phone,
  sex,
}: CreateInputsSignOutProps) => {
  const [value, setValue] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateInputsSignOutProps>({
    resolver: zodResolver(CreateAccountSchema),
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const onSubmit: SubmitHandler<CreateInputsSignOutProps> = (data) => {
    console.log({ data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" flexDirection="column" gap={1}>
        <TextField
          type="text"
          id="name"
          label="Nome completo"
          {...register("name")}
        />
        {/* <TextField
           {...register("name")}
           aria-invalid={errors.name ? "true" : "false"}
           id="name"
           variant="filled"
           type="text"
           label="Nome completo"
           error={!!errors.name?.message}
           helperText={errors.name?.message}
           required
         /> */}
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="Data de nascimento"
              format="DD/MM/YYYY"
              value={{ ...register("birth_date") }}
              slotProps={{
                textField: {
                  variant: "filled",
                  error: !!errors.birth_date?.message,
                  helperText: errors.birth_date?.message,
                  placeholder: "dd/mm/aaaa",
                  required: true,
                },
              }}
              disableFuture
            />
          </DemoContainer>
            </LocalizationProvider> */}

        {/*<TextField
          variant="filled"
          label="CPF"
          required
          {...register("cpf")}
          error={!!errors.cpf?.message}
          helperText={errors.cpf?.message}
        ></TextField>
        <TextField
          variant="filled"
          label="Celular"
          required
          {...register("phone")}
          error={!!errors.phone?.message}
          helperText={errors.phone?.message}
        />
        <FormControl required error={!!errors.sex?.message}>
          <FormLabel id="sex">Sexo</FormLabel>
          <RadioGroup
            aria-labelledby="sex"
            {...register("sex")}
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Masculino"
            />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Feminino"
            />
          </RadioGroup>
        </FormControl>*/}
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          maxWidth="100%"
        >
          <Button type="submit" variant="contained">
            Cadastrar
          </Button>
        </Box>
      </Box>
    </form>
  );
};
