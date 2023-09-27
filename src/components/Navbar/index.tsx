import Image from "next/image";
import Link from "next/link";

import { AppBar, Box, Button, Toolbar } from "@mui/material";

import LoginOutlined from "@mui/icons-material/LoginOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Search } from "../Search";
import { SearchIconWrapper } from "../SearchIconWrapper";
import { StyledInputBase } from "../StyledInputBase";

import LogoCompany from "@/assets/images/white/logo.png";

const Navbar = () => {
  return (
    <>
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
              <Button
                variant="contained"
                color="success"
                endIcon={<LoginOutlined />}
              >
                Login
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
