import { ReactNode, useRef, useState } from "react";
import { DefaultTheme } from "styled-components";
import Typography from "../Typography";
import * as S from "./styles";

export type Orientation = "bottom" | "top";

export type AccordionProps = {
  children?: string | ReactNode;
  label?: string | ReactNode;
  icon?: string | ReactNode;
  color?: keyof DefaultTheme["colors"];
  labelColor?: keyof DefaultTheme["colors"];
  disabled?: boolean;
  disabledGutters?: boolean;
  rounded?: boolean;
  open?: boolean;
  orientation?: Orientation;
};

const Accordion = ({
  children,
  color,
  disabled,
  disabledGutters,
  open = false,
  rounded,
  labelColor,
  icon,
  label,
  orientation,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(open);

  const ref = useRef<HTMLDivElement>(null);

  const handleFilterOpening = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <S.Wrapper
        color={color}
        disabled={disabled}
        disabledGutters={disabledGutters}
        rounded={rounded}
        labelColor={labelColor}
        ref={ref}
      >
        <S.Label
          labelColor={labelColor}
          open={open}
          onClick={handleFilterOpening}
        >
          {label}
        </S.Label>
        <S.Icon onClick={handleFilterOpening} open={isOpen}>
          {icon}
        </S.Icon>
      </S.Wrapper>
      {!!isOpen && (
        <S.WrapperContent isOpen={isOpen} orientation={orientation}>
          <S.Content color={color}>
            <Typography color="white" size="small">
              {children}
            </Typography>
          </S.Content>
        </S.WrapperContent>
      )}
    </>
  );
};

export default Accordion;
