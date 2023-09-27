"use client";

import {
  Box,
  Button,
  Container,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { Fragment, ReactNode, useState } from "react";

import { AuthInputsSignOut } from "@/components/AuthInputsSignOut";
import { CreateInputsSignOut } from "@/components/CreateInputsSignOut";
import Base from "@/templates/Base";

const steps = ["Dados básicos", "Acessar sua conta"];

const SignOut = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: {
                  optional?: ReactNode;
                } = {};
                // if (isStepOptional(index)) {
                //   labelProps.optional = (
                //     <Typography variant="caption">Optional</Typography>
                //   );
                // }
                // if (isStepSkipped(index)) {
                //   stepProps.completed = false;
                // }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: "2rem",
              }}
            >
              {activeStep === steps.length ? (
                <Fragment>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      pt: 2,
                    }}
                  >
                    <Button variant="contained" onClick={handleReset}>
                      Voltar tudo
                    </Button>
                  </Box>
                </Fragment>
              ) : (
                <Fragment>
                  {activeStep === 0 ? (
                    <>
                      <Box
                        display="flex"
                        flexDirection="column"
                        gap={2}
                        flexGrow="1"
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
                        <Typography
                          component="p"
                          color="darkgray"
                          textAlign="center"
                        >
                          Veja seus pedidos de forma fácil, compre mais rápido e
                          tenha uma experiência incrível! 🤩
                        </Typography>
                        <CreateInputsSignOut />
                      </Box>
                    </>
                  ) : (
                    <>
                      <Typography
                        variant="h4"
                        component="h4"
                        color="primary"
                        fontWeight="600"
                        textAlign="center"
                      >
                        Agora realize o login
                      </Typography>
                      <Typography
                        component="p"
                        color="darkgray"
                        textAlign="center"
                      >
                        Veja seus pedidos de forma fácil, compre mais rápido e
                        tenha uma experiência incrível! 🤩
                      </Typography>
                      <AuthInputsSignOut />
                    </>
                  )}
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    flexGrow={1}
                    paddingTop="2"
                  >
                    <Button
                      color="secondary"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Voltar
                    </Button>
                    <Button variant="contained" onClick={handleNext}>
                      {activeStep === steps.length - 1 ? "Acessar" : "Avançar"}
                    </Button>
                  </Box>
                </Fragment>
              )}
            </Box>
          </Box>
        </Container>
      </Stack>
    </Base>
  );
};

export default SignOut;
