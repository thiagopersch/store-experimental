import { ReactNode } from "react";

type BoxProps = {
  children: string | ReactNode;
  sx?: Object | ReactNode;
};

export const Box = ({ children }: BoxProps) => {
  return <div>{children}</div>;
};
