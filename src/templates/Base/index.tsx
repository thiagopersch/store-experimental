import * as React from "react";

import PageContainer from "@/components/PageContainer";
import Box from "@mui/material/Box";

import Navbar from "@/components/Navbar";

type BaseProps = {
  children?: React.ReactNode;
};

export default function Base({ children }: BaseProps) {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <Navbar />
      <PageContainer>{children}</PageContainer>
    </Box>
  );
}
