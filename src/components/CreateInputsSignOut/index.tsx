"use client";
import {
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { ChangeEvent, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import InputMask from "react-input-mask";

type Sex = {
  male: "male";
  female: "female";
};

type CreateInputsSignOutProps = {
  name: string;
  birth_date: string;
  cpf: string;
  phone: string;
  sex: Sex;
};

export const CreateInputsSignOut = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateInputsSignOutProps>();
  const [value, setValue] = useState("male");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const onSubmit: SubmitHandler<CreateInputsSignOutProps> = (data) =>
    console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" flexDirection="column" gap={1}>
        <Controller
          name="name"
          control={control}
          rules={{ required: true, maxLength: 255 }}
          render={({ field }) => (
            <TextField
              id="name"
              variant="filled"
              type="text"
              label="Nome completo"
              required
              aria-invalid={errors.name ? "true" : "false"}
              {...field}
            />
          )}
        />
        {errors.name?.type === "required" && (
          <Typography
            variant="body1"
            component="span"
            color="error"
            role="error"
          >
            Nome completo é obrigatório.
          </Typography>
        )}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="Data de nascimento"
              format="DD/MM/YYYY"
              slotProps={{
                textField: {
                  variant: "filled",
                  placeholder: "dd/mm/aaaa",
                  required: true,
                },
              }}
              disableFuture
            />
          </DemoContainer>
        </LocalizationProvider>
        <InputMask mask="999.999.999-99">
          <TextField variant="filled" name="cpf" label="CPF" required />
        </InputMask>
        <InputMask mask="(99) 99999-9999">
          <TextField variant="filled" name="phone" label="Celular" required />
        </InputMask>
        <FormLabel id="sex" filled required>
          Sexo
        </FormLabel>
        <RadioGroup
          aria-labelledby="sex"
          defaultValue="female"
          name="sex"
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
