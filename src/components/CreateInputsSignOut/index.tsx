"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo/DemoContainer";
import { ChangeEvent, StrictMode, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
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
    handleSubmit,
    register,
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
        <TextField
          {...register("name", {
            required: {
              value: true,
              message: `
                  Nome completo é obrigatório.
                `,
            },
          })}
          aria-invalid={errors.name ? "true" : "false"}
          id="name"
          variant="filled"
          type="text"
          label="Nome completo"
          required
        />
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
        <StrictMode>
          <InputMask mask="999.999.999-99">
            <TextField variant="filled" name="cpf" label="CPF" required />
          </InputMask>
          <InputMask mask="(99) 99999-9999">
            <TextField variant="filled" name="phone" label="Celular" required />
          </InputMask>
        </StrictMode>
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
