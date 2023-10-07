import PageContainer from "@/components/PageContainer";
import { Search } from "@/components/Search";
import { SearchIconWrapper } from "@/components/SearchIconWrapper";
import { StyledInputBase } from "@/components/StyledInputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";

import Logo from "@/assets/images/white/logo.png";
import Link from "next/link";

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
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/">
              <Image src={Logo} height={50} width={150} alt="logo" priority />
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                type="search"
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Link href="/sign-in">
              <Button variant="contained" color="inherit">
                Login
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <PageContainer>{children}</PageContainer>
    </Box>
  );
}
