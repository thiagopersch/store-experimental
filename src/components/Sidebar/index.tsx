import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

import { administrador, global } from "@/config/global.routes";

import Logo from "@/assets/images/colored/logo-horizontal.png";

import * as S from "./styles";

type Route = {
  path: string;
  name: string;
};

type Routes = {
  [key: string]: Route[];
};

const routes: Routes = {
  global,
  administrador,
};

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <S.Wrapper>
      <S.Logo href="/" passHref>
        <Image src={Logo} width={150} quality={80} alt="Logo" />
      </S.Logo>
      <S.Menu>
        <S.MenuItem active={pathname === "/"}>
          <Link href="/">Início</Link>
        </S.MenuItem>
        {Object.entries(routes).map(([key, value]) => (
          <Fragment key={key}>
            {value.map((route) => (
              <S.MenuItem key={route.path} active={pathname === route.path}>
                <Link href={route.path} passHref>
                  {route.name}
                </Link>
              </S.MenuItem>
            ))}
          </Fragment>
        ))}
      </S.Menu>
    </S.Wrapper>
  );
};

export default Sidebar;
