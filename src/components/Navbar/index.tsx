import { ReactNode } from "react";

import { DefaultTheme } from "styled-components";

import Logo from "@/assets/images/white/logo.png";
import Image from "next/image";
import Link from "next/link";

import * as S from "./styles";

export type NavbarProps = {
  children?: string | ReactNode;
  color?: keyof DefaultTheme["colors"];
  position?: "absolute" | "fixed" | "relative" | "static" | "sticky";
  sx?: Array<Function | Object | boolean> | Function | Object;
};

const Navbar = ({ children, color, position, sx }: NavbarProps) => {
  return (
    <S.Wrapper color={color}>
      <S.LogoLink>
        <Link href="/" passHref>
          <Image
            src={Logo}
            width={150}
            height={50}
            quality={80}
            alt="logo-link"
          />
        </Link>
      </S.LogoLink>
    </S.Wrapper>
    // <AppBar position="static">
    //   <Toolbar>
    //     <Box
    //       sx={{
    //         flexGrow: 1,
    //       }}
    //     >
    //       <Link href="/" passHref>
    //         <Image src={LogoCompany} width={150} height={45} alt="logo-white" />
    //       </Link>
    //     </Box>
    //     <Box sx={{ display: "flex", gap: "2rem" }}>
    //       <Search>
    //         <SearchIconWrapper>
    //           <SearchIcon />
    //         </SearchIconWrapper>
    //         <StyledInputBase
    //           placeholder="Search…"
    //           inputProps={{ "aria-label": "search" }}
    //         />
    //       </Search>
    //       <Link href="/sign-in" passHref>
    //         <Button
    //           variant="contained"
    //           color="success"
    //           endIcon={<LoginOutlined />}
    //         >
    //           Login
    //         </Button>
    //       </Link>
    //     </Box>
    //   </Toolbar>
    // </AppBar>
  );
};

export default Navbar;
