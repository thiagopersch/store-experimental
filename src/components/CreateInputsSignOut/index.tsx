"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { z } from "zod";
import { CreateAccountSchema } from "./schema";

type CreateAccountSchemaProps = z.infer<typeof CreateAccountSchema>;

export const CreateInputsSignOut = () => {
  const [value, setValue] = useState("male");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateAccountSchemaProps>({
    resolver: zodResolver(CreateAccountSchema),
    mode: "all",
    criteriaMode: "all",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const onSubmit: SubmitHandler<CreateAccountSchemaProps> = (data) => {
    console.log({ data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" flexDirection="column" gap={1}>
        <TextField
          {...register("name")}
          aria-invalid={errors.name ? "true" : "false"}
          id="name"
          variant="filled"
          type="text"
          label="Nome completo"
          error={!!errors.name?.message}
          helperText={errors.name?.message}
          required
        />
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

        <TextField
          variant="filled"
          label="CPF"
          required
          {...register("cpf")}
          error={!!errors.cpf?.message}
          helperText={errors.cpf?.message}
        />

        <TextField
          variant="filled"
          label="Celular"
          required
          {...register("phone")}
          error={!!errors.phone?.message}
          helperText={errors.phone?.message}
        />
        <FormLabel id="sex" filled>
          Sexo
        </FormLabel>
        <RadioGroup
          aria-labelledby="sex"
          required
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
