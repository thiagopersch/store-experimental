import { ReactNode } from "react";

import { DefaultTheme } from "styled-components";
import { Box } from "../Box";

type NavbarProps = {
  children?: string | ReactNode;
  color?: keyof DefaultTheme["colors"];
  position?: "absolute" | "fixed" | "relative" | "static" | "sticky";
  sx?: Array<Function | Object | boolean> | Function | Object;
};

const Navbar = ({ children, color, position, sx }: NavbarProps) => {
  return (
    <Box>teste</Box>
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
