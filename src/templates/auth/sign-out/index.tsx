"use client";

import { Box, Container, Stack } from "@mui/material";

import { StepperComponent } from "@/components/Stepper";
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
            <StepperComponent />
          </Box>
        </Container>
      </Stack>
    </Base>
  );
};

export default SignOut;
