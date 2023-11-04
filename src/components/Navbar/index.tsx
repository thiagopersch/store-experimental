import { DefaultTheme } from "styled-components";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/images/white/logo.png";

import Button from "../Button";
import TextField from "../TextField";
import * as S from "./styles";

export type NavbarProps = {
  enableColorOnDark?: boolean;
  color: keyof DefaultTheme["colors"];
  position?: "absolute" | "fixed" | "relative" | "static" | "sticky";
};

const Navbar = ({ color, position, enableColorOnDark }: NavbarProps) => {
  return (
    <S.Wrapper
      color={color}
      position={position}
      enableColorOnDark={enableColorOnDark}
    >
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
      <S.SearchCTA>
        <S.Search>
          <form>
            <TextField
              type="search"
              label="Pesquise aqui..."
              id="search"
              name="search"
            />
          </form>
        </S.Search>
        <div>
          <Link href="/sign-in">
            <Button color="success" labelColor="white" variant="contained">
              Login
            </Button>
          </Link>
        </div>
      </S.SearchCTA>
    </S.Wrapper>
  );
};

export default Navbar;
