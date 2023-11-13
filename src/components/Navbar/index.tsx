import { DefaultTheme } from "styled-components";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/images/white/logo.png";

import { useState } from "react";
import Button from "../Button";
import { Dropdown } from "../Dropdown";
import TextField from "../TextField";
import * as S from "./styles";

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
      <div>
        <Dropdown.Root>
          <Dropdown.Header
            color="white"
            size="small"
            onClick={toggleBase}
            isOpen={show}
          >
            My dropdown
          </Dropdown.Header>
          <Dropdown.Content isOpen={show}>
            <Dropdown.ListItem color="primary">
              <Dropdown.Item color="primary" size="xsmall">
                Home
              </Dropdown.Item>
            </Dropdown.ListItem>
            <Dropdown.ListItem color="primary">
              <Dropdown.Item color="primary" size="xsmall">
                Home
              </Dropdown.Item>
            </Dropdown.ListItem>
            <Dropdown.ListItem color="primary">
              <Dropdown.Item color="primary" size="xsmall">
                Home
              </Dropdown.Item>
            </Dropdown.ListItem>
            <Dropdown.ListItem color="primary">
              <Dropdown.Item color="primary" size="xsmall">
                Home
              </Dropdown.Item>
            </Dropdown.ListItem>
          </Dropdown.Content>
        </Dropdown.Root>
      </div>
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
