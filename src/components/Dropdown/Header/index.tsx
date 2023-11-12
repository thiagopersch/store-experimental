import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { DefaultTheme } from "styled-components";

import * as S from "./styles";

export type HeaderProps = {
  children: string | React.ReactNode;
  color: keyof DefaultTheme["colors"];
  size: keyof DefaultTheme["fonts"]["sizes"];
  dark?: boolean;
  disabled?: boolean;
  image?: string | StaticImport;
  alt?: string | any;
  width?: number;
  height?: number;
  quality?: number;
  isOpen?: boolean;
  onClick?: () => void;
};

const Header = ({
  children,
  color,
  size,
  disabled,
  dark,
  image,
  alt,
  height,
  width,
  quality,
  isOpen,
  onClick,
}: HeaderProps) => {
  return (
    <S.Wrapper color={color} size={size} disabled={disabled} onClick={onClick}>
      {!!image && (
        <S.ImageWrapper>
          <Image
            src={image}
            alt={alt}
            width={width}
            height={height}
            quality={quality}
          />
        </S.ImageWrapper>
      )}
      {!!children && (
        <S.Label size={size} color={color} dark={dark}>
          {children}
        </S.Label>
      )}
      <S.ArrowIcon size={size} color={color} dark={dark} isOpen={isOpen} />
    </S.Wrapper>
  );
};

export default Header;
