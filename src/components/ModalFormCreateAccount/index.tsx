"use client";

import { Box, Typography } from "@mui/material";
import { CreateInputsSignOut } from "../CreateInputsSignOut";

export const ModalFormCreateAccount = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      flexGrow="1"
      padding="1rem"
    >
      <Typography
        variant="h4"
        component="h4"
        color="primary"
        fontWeight="600"
        textAlign="center"
      >
        Crie seu cadastro
      </Typography>
      <Typography component="span" color="darkgray" textAlign="center">
        Veja seus pedidos de forma fácil, compre mais rápido e tenha uma
        experiência incrível! 🤩
      </Typography>
      <CreateInputsSignOut />
    </Box>
  );
};
