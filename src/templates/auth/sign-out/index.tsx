"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { ModalFormCreateAccount } from "@/components/ModalFormCreateAccount";
import Base from "@/templates/Base";

const SignOut = () => {
  return (
    <Base>
      <div
        style={{
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
      </div>
    </Base>
  );
};

export default SignOut;
