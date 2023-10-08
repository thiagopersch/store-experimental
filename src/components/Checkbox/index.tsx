import { InputHTMLAttributes, useEffect, useState } from "react";
import { DefaultTheme } from "styled-components";
import * as S from "./styles";

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  children?: string;
  childrenFor?: string;
  isChecked?: boolean;
  labelColor?: keyof DefaultTheme["colors"];
  color?: keyof DefaultTheme["colors"];
  disabled?: boolean;
  onCheck?: (status: boolean) => void;
  required?: boolean;
  value?: string | ReadonlyArray<string> | number | boolean;
};

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
    <S.Wrapper onClick={() => setChecked(!checked)}>
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
          {children}{" "}
          {required && <S.Asterisk disabled={disabled}>*</S.Asterisk>}
        </S.Label>
      )}
    </S.Wrapper>
  );
};

export default Checkbox;
