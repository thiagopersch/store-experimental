import Icon from "@/components/Icon";
import Typography from "@/components/Typography";
import { ChevronUp } from "@styled-icons/feather";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";
import * as S from "./styles";

export type HeaderProps = {
  children: string | React.ReactNode;
  srcImage?: string | StaticImport;
  alt?: string | any;
  width?: number;
  height?: number;
  quality?: number;
  icon?: React.ReactNode;
  isOpen?: boolean;
};

const Header = ({
  children,
  alt,
  height,
  icon,
  quality,
  srcImage,
  width,
  isOpen,
}: HeaderProps) => {
  const [show, setShow] = useState(false);

  const toggleBase = () => {
    setShow((current) => !current);
  };

  return (
    <S.Wrapper onClick={toggleBase}>
      <S.UserContainer>
        {!!srcImage && (
          <S.ImageWrapper>
            <Image src={srcImage} alt={alt} width={32} height={height} />
          </S.ImageWrapper>
        )}
        {!!children && (
          <Typography color="primary" size="small" align="left" mobile>
            {children}
          </Typography>
        )}
        <S.Icon isOpen={show}>
          <Icon color="primary" size="small">
            <ChevronUp />
          </Icon>
        </S.Icon>
      </S.UserContainer>
    </S.Wrapper>
  );
};

export default Header;
