import { ReactNode } from "react";

type BoxProps = {
  children: string | ReactNode;
  sx?: Array<Function | Object | boolean> | Function | Object;
};

export const Box = ({ children }: BoxProps) => {
  return <div>{children}</div>;
};
