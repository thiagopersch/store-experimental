import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import { Search } from "@/components/Search";
import { SearchIconWrapper } from "@/components/SearchIconWrapper";
import { StyledInputBase } from "@/components/StyledInputBase";
import PageContainer from "@/components/PageContainer";

import { LogIn } from "@styled-icons/feather";

import LogoCompany from "@/assets/images/white/logo.png";

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
      <AppBar position="static">
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <Link href="/" passHref>
              <Image
                src={LogoCompany}
                width={150}
                height={45}
                alt="logo-white"
              />
            </Link>
          </Box>
          <Box sx={{ display: "flex", gap: "2rem" }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Link href="/sign-in" passHref>
              <Button variant="contained" color="success">
                Login
                <LogIn />
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <PageContainer>{children}</PageContainer>
    </Box>
  );
}

// import { useCallback, useRef, useImperativeHandle, forwardRef } from "react";

// import Navbar from "@/components/Navbar";
// import PageContainer from "@/components/PageContainer";

// import * as S from "./styles";

// type BaseProps = {
//   children?: React.ReactNode;
// };

// export type BaseRef = {
//   scrollTo: (options?: ScrollToOptions) => void;
// };

// const Base: React.ForwardRefRenderFunction<BaseRef, BaseProps> = (
//   { children },
//   ref,
// ) => {
//   const contentRef = useRef<HTMLElement>(null);

//   const scrollTo = useCallback((options?: ScrollToOptions) => {
//     contentRef.current?.scrollTo(options);
//   }, []);

//   useImperativeHandle(ref, () => ({ scrollTo }));

//   return (
//     <>
//       <Navbar />
//       <S.Content ref={contentRef}>
//         <PageContainer>{children}</PageContainer>
//       </S.Content>
//     </>
//   );
// };

// export default forwardRef(Base);
