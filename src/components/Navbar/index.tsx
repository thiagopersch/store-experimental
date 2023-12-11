import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DefaultTheme } from "styled-components";

import Button from "../Button";
import TextField from "../TextField";

import * as S from "./styles";

import Logo from "@/assets/images/white/logo.png";

export type NavbarProps = {
  color: keyof DefaultTheme["colors"];
  enableColorOnDark?: boolean;
  position?: "absolute" | "fixed" | "relative" | "static" | "sticky";
};

const Navbar = ({ color, position, enableColorOnDark }: NavbarProps) => {
  const [show, setShow] = useState(false);

  const toggleBase = () => {
    setShow((current) => !current);
  };

  return (
    <>
      <S.Wrapper
        color={color}
        position={position}
        enableColorOnDark={enableColorOnDark}
      >
        <S.Logo href="/" passHref>
          <Image src={Logo} width={150} quality={80} alt="Logo" priority />
        </S.Logo>
        <S.SearchCTA>
          <form>
            <TextField
              type="search"
              label="Pesquise aqui..."
              id="search"
              name="search"
            />
          </form>
          <div>
            <Link href="/sign-in">
              <Button color="success" labelColor="white" variant="contained">
                Login
              </Button>
            </Link>
          </div>
        </S.SearchCTA>
      </S.Wrapper>
    </>
  );
};

export default Navbar;
