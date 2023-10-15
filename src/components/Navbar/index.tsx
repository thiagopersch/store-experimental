import { ReactNode } from "react";

import { DefaultTheme } from "styled-components";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/images/white/logo.png";

import Button from "../Button";
import TextField from "../TextField";
import * as S from "./styles";

export type NavbarProps = {
  children?: string | ReactNode;
  enableColorOnDark?: boolean;
  color?: keyof DefaultTheme["colors"];
  position?: "absolute" | "fixed" | "relative" | "static" | "sticky";
};

const Navbar = ({
  children,
  color,
  position,
  enableColorOnDark,
}: NavbarProps) => {
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
      <div style={{ display: "flex" }}>
        <form>
          <TextField label="Pesquise aqui..." name="search" type="search" />
        </form>
        <div>
          <Link href="/sign-in">
            <Button color="success" labelColor="white" variant="contained">
              Login
            </Button>
          </Link>
        </div>
      </div>
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
