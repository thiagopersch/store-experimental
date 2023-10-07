"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import Base from "@/templates/Base";

import { FormSignin } from "@/components/FormSignin";

const SignIn = () => {
  return (
    <Base>
      <Stack
        direction="column"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          width: "100vw",
          height: "60vh",
        }}
      >
        <Container maxWidth="sm">
          <FormControl>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={4}
              padding="1rem"
            >
              <Typography
                variant="h4"
                component="h4"
                color="primary"
                sx={{ fontWeight: "bold" }}
              >
                Login do cliente
              </Typography>
              <Typography component="div" color="darkgray" textAlign="center">
                Veja seus pedidos de forma fácil, compre mais rápido e tenha uma
                experiência incrível! 🤩
              </Typography>
            </Box>
            <FormSignin />
            <Box
              display="flex"
              flexDirection="column"
              gap="1rem"
              padding="1rem"
            >
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                gap="0.5rem"
              >
                <Typography color="darkgray" component="div">
                  Não tem cadastro?
                </Typography>
                <Link href="/sign-out" passHref>
                  <Typography
                    component="div"
                    color="primary"
                    sx={{ textDecoration: "none" }}
                  >
                    cadastre-se
                  </Typography>
                </Link>
              </Box>
              <Box display="flex" flexDirection="row" justifyContent="center">
                <Typography component="div" color="darkGray" textAlign="center">
                  Ao continuar com acesso, você concorda com a nossa
                  <Link href="#" passHref>
                    <Typography component="div" color="primary">
                      politica de privacidade
                    </Typography>
                  </Link>
                </Typography>
              </Box>
            </Box>
          </FormControl>
        </Container>
      </Stack>
    </Base>
  );
};

export default SignIn;
