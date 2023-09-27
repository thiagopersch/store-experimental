"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import { ModalFormCreateAccount } from "@/components/ModalFormCreateAccount";
import Base from "@/templates/Base";

const SignOut = () => {
  return (
    <Base>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
          height: "50rem",
          padding: "2rem",
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ width: "100%" }}>
            <ModalFormCreateAccount />
          </Box>
        </Container>
      </Stack>
    </Base>
  );
};

export default SignOut;
