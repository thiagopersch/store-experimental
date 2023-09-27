"use client";

import LoginOutlined from "@mui/icons-material/LoginOutlined";
import { Box, Button, TextField } from "@mui/material";

export const FormSignin = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} display="flex" flexDirection="column" gap={3}>
        <TextField variant="filled" type="email" name="email" label="E-mail" />
        <TextField
          variant="filled"
          type="password"
          name="password"
          label="Senha"
        />
        <Button
          variant="contained"
          size="large"
          color="primary"
          endIcon={<LoginOutlined />}
        >
          Entrar
        </Button>
      </Box>
    </>
  );
};
