import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { ChangeEvent, useState } from "react";
import InputMask from "react-input-mask";

export const CreateInputsSignOut = () => {
  const [value, setValue] = useState("male");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <TextField
        variant="filled"
        type="text"
        name="name"
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
        <FormControlLabel value="male" control={<Radio />} label="Masculino" />
        <FormControlLabel value="female" control={<Radio />} label="Feminino" />
      </RadioGroup>
    </>
  );
};
