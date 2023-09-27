"use client";

import { Container } from "@mui/material";
import { OrbitSpinner } from "react-epic-spinners";

const LoadingComponent = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <OrbitSpinner color="#6314A8" animationduration={5000} size={150} />
    </Container>
  );
};

export default LoadingComponent;
