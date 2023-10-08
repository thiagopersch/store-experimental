"use client";

import { OrbitSpinner } from "react-epic-spinners";
import { Box } from "../Box";

const LoadingComponent = () => {
  return (
    <Box
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
    </Box>
  );
};

export default LoadingComponent;
