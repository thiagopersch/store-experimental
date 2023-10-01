import PageContainer from "@/components/PageContainer";
import { ReactNode } from "react";

import { Box } from "@/components/Box";
import Navbar from "@/components/Navbar";

type BaseProps = {
  children?: ReactNode;
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
