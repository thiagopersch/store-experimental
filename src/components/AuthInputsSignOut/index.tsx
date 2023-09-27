"use client";

import { Box, TextField } from "@mui/material";

export const AuthInputsSignOut = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" gap={2} flexGrow="1">
        <TextField
          variant="filled"
          type="email"
          name="email"
          label="E-mail"
          required
        />
        <TextField
          variant="filled"
          type="password"
          name="password"
          label="Senha"
          required
        />
      </Box>
    </>
  );
};
