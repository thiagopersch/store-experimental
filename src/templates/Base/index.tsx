import PageContainer from "@/components/PageContainer";
import { Box } from "@mui/material";
import { ReactNode } from "react";

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
      {/* <AppBar position="static">
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
              <Button variant="contained" color="success">
                Login
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar> */}
      <PageContainer>{children}</PageContainer>
    </Box>
  );
}
