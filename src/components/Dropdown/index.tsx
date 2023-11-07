import { ReactNode, useState } from "react";
import { DefaultTheme } from "styled-components";

import { global } from "../../config/global.routes";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import Icon from "../Icon";
import Typography from "../Typography";
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
};

export type DropdownProps = {
  label: string | ReactNode;
  color?: keyof DefaultTheme["colors"];
  background?: keyof DefaultTheme["colors"];
  dark?: boolean;
  isOpen?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  image?: string | StaticImport;
  size?: "small" | "medium" | "large" | "huge";
};

const Dropdown = ({
  label,
  color,
  background,
  dark = false,
  disabled,
  isOpen,
  size,
  icon,
  image,
}: DropdownProps) => {
  const [show, setShow] = useState(false);

  const toggleDropdown = () => {
    setShow((current) => !current);
  };

  return (
    <S.Wrapper
      background={background}
      color={color}
      dark={dark}
      isOpen={show}
      disabled={disabled}
      size={size}
    >
      <S.Container isOpen={show}>
        <S.UserContainer onClick={toggleDropdown}>
          {!!image && (
            <S.ImageWrapper>
              <Image src={image} alt="user-image" width={32} height={32} />
            </S.ImageWrapper>
          )}
          {!!label && (
            <Typography color="primary" size="small" align="left" mobile>
              {label}
            </Typography>
          )}
          <S.ArrowIcon isOpen={show} />
        </S.UserContainer>
        <S.Content isOpen={show}>
          <S.ListItem>
            <Link href="#" passHref>
              <S.Item>
                {!!icon && (
                  <Icon color="primary" size="small">
                    {icon}
                  </Icon>
                )}
                <Typography size="xsmall" color="primary" mobile>
                  Inicio
                </Typography>
              </S.Item>
            </Link>
          </S.ListItem>
        </S.Content>
      </S.Container>
      <S.Overlay isOpen={show} onClick={() => setShow(false)} />
    </S.Wrapper>
    // <S.Wrapper color={color} dark={dark} background={background}>
    //   <S.Container isOpen={show}>
    //     <S.Title onClick={toggleDropdown}>
    //       <S.UserContainer>
    //         <span>
    //           {label}
    //           <S.ArrowIcon isOpen={show} />
    //         </span>
    //       </S.UserContainer>
    //     </S.Title>
    //     <S.Content isOpen={show}>
    //       <ul>
    //         {Object.entries(routes).map(([key, value]) => (
    //           <React.Fragment key={key}>
    //             {value.map((route) => (
    //               <S.ListItem key={route.path}>
    //                 <Link href={route.path}>{route.name}</Link>
    //               </S.ListItem>
    //             ))}
    //           </React.Fragment>
    //         ))}
    //       </ul>
    //     </S.Content>
    //   </S.Container>
    //   <S.Overlay isOpen={show} onClick={() => setShow(false)} />
    // </S.Wrapper>
  );
};

export default Dropdown;
