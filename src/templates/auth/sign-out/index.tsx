"use client";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Base from "@/templates/Base";
import Heading from "@/components/Heading";
import SectionContainer from "@/components/SectionContainer";
import TextComponent from "@/components/TextComponent";
import TextInput from "@/components/TextInput";

import * as S from "./styles";
import RadioButton from "@/components/RadioButton";
import { TextField } from "@mui/material";

const SignOut = () => {
  return (
    <Base>
      <SectionContainer>
        <S.WrapperTilteDescrition>
          <Heading size="md">Crie seu cadastro</Heading>
          <TextComponent>
            Veja seus pedidos de forma fácil, compre mais rápido e tenha uma
            experiência incrível! 🤩
          </TextComponent>
        </S.WrapperTilteDescrition>
        <TextField variant="filled" name="name" label="Nome completo" />
        <S.WrapperInputs>
          {/* <TextInput name="email" label="E-mail" type="email" />
          <TextInput name="birth_date" label="Data de nascimento" type="date" />
          <TextInput name="cpf" label="CPF" />
          <TextInput name="phone" label="Celular" />
          <TextInput name="password" label="Senha" type="password" /> */}
          <FormControl>
            <FormLabel id="sex">Sexo</FormLabel>
            <RadioGroup
              aria-labelledby="sex"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </S.WrapperInputs>
      </SectionContainer>
    </Base>
  );
};

export default SignOut;
