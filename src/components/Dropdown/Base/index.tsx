import { useState } from "react";
import * as S from "./styles";

export type BaseProps = {
  children?: string | React.ReactNode;
  isOpen?: boolean;
};

const Base = ({ children, isOpen }: BaseProps) => {
  const [show, setShow] = useState(false);

  const toggleBase = () => {
    setShow((current) => !current);
  };
  return (
    <S.Wrapper onClick={toggleBase}>
      {children}
      <S.Overlay isOpen={show} onClick={() => setShow(false)} />
    </S.Wrapper>
  );
};

export default Base;

// import { StaticImport } from "next/dist/shared/lib/get-img-props";
// import Image from "next/image";
// import Link from "next/link";
// import { ReactNode, useState } from "react";
// import { DefaultTheme } from "styled-components";

// // import { global } from "../../config/global.routes";

// import Icon from "@/components/Icon";
// import Typography from "@/components/Typography";
// import * as S from "./styles";

// // type Route = {
// //   path: string;
// //   name: string;
// // };

// // type Routes = {
// //   [key: string]: Route[];
// // };

// // const routes: Routes = {
// //   global,
// // };

// export type BaseProps = {
//   children: string | ReactNode;
//   label: string | ReactNode;
//   color?: keyof DefaultTheme["colors"];
//   background?: keyof DefaultTheme["colors"];
//   dark?: boolean;
//   isOpen?: boolean;
//   disabled?: boolean;
//   icon?: ReactNode;
//   image?: string | StaticImport;
//   size?: "small" | "medium" | "large" | "huge";
// };

// const Base = ({
//   children,
//   label,
//   color,
//   background,
//   dark = false,
//   disabled,
//   isOpen,
//   size,
//   icon,
//   image,
// }: BaseProps) => {
//   const [show, setShow] = useState(false);

//   const toggleBase = () => {
//     setShow((current) => !current);
//   };

//   return (
//     <S.Wrapper
//       background={background}
//       color={color}
//       dark={dark}
//       isOpen={show}
//       disabled={disabled}
//       size={size}
//     >
//       <S.Container isOpen={show}>
//         <S.UserContainer onClick={toggleBase}>
//           {!!image && (
//             <S.ImageWrapper>
//               <Image src={image} alt="user-image" width={32} height={32} />
//             </S.ImageWrapper>
//           )}
//           {!!label && (
//             <Typography color="primary" size="small" align="left" mobile>
//               {label}
//             </Typography>
//           )}
//           <S.ArrowIcon isOpen={show} />
//         </S.UserContainer>
//         <S.Content isOpen={show}>
//           <S.ListItem>
//             <Link href="#" passHref>
//               <S.Item>
//                 {!!icon && (
//                   <Icon color="primary" size="small">
//                     {icon}
//                   </Icon>
//                 )}
//                 {!!children && (
//                   <Typography size="xsmall" color="primary" mobile>
//                     {children}
//                   </Typography>
//                 )}
//               </S.Item>
//             </Link>
//           </S.ListItem>
//         </S.Content>
//       </S.Container>
//       <S.Overlay isOpen={show} onClick={() => setShow(false)} />
//     </S.Wrapper>
//   );
// };

// export default Base;
