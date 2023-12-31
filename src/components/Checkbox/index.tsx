import { InputHTMLAttributes, useEffect, useState } from "react";
import { DefaultTheme } from "styled-components";
import * as S from "./styles";

type CheckboxTypes = InputHTMLAttributes<HTMLInputElement>;

export type CheckboxProps = {
  children: string;
  childrenFor?: string;
  isChecked?: boolean;
  labelColor?: keyof DefaultTheme["colors"];
  color?: keyof DefaultTheme["colors"];
  disabled?: boolean;
  onCheck?: (status: boolean) => void;
  required?: boolean;
  value?: string | number | boolean;
} & CheckboxTypes;

const Checkbox = ({
  children,
  isChecked,
  childrenFor,
  color,
  disabled,
  labelColor,
  onCheck,
  required,
  value,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(!!isChecked);

  useEffect(() => {
    if (onCheck) onCheck(checked);
  }, [checked]);

  return (
    <S.Wrapper onClick={() => setChecked(!checked)} disabled={disabled}>
      <S.Input
        type="checkbox"
        id={childrenFor}
        color={color}
        checked={checked}
        value={value}
        disabled={disabled}
        required={required}
        {...props}
      />
      {children && (
        <S.Label
          htmlFor={childrenFor}
          disabled={disabled}
          labelColor={labelColor}
        >
          {children}&nbsp;
          {required && <S.Asterisk disabled={disabled}>*</S.Asterisk>}
        </S.Label>
      )}
    </S.Wrapper>
  );
};

export default Checkbox;
