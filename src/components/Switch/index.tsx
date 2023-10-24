import {
  InputHTMLAttributes,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { DefaultTheme } from "styled-components";

import { mergeRefs } from "react-merge-refs";
import * as S from "./styles";

export type SwitchProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  labelFor: string;
  isChecked?: boolean;
  color: keyof DefaultTheme["colors"];
  disabled?: boolean;
  onCheck?: (status: boolean) => void;
  required?: boolean;
  value?: string | ReadonlyArray<string> | number | undefined;
};

const Switch: React.ForwardRefRenderFunction<HTMLInputElement, SwitchProps> = (
  {
    label,
    labelFor,
    isChecked,
    color,
    disabled = false,
    onCheck,
    required = false,
    value,
    ...props
  },
  ref,
) => {
  const [checked, setChecked] = useState(!!isChecked);

  const fieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (onCheck) {
      onCheck(checked);
    }
  }, [checked]);

  return (
    <S.Wrapper color={color} onClick={() => setChecked(!checked)}>
      <S.Switch
        id={labelFor}
        type="checkbox"
        value={value}
        color={color}
        checked={checked}
        required={required}
        disabled={disabled}
        ref={mergeRefs([fieldRef, ref])}
        {...props}
      />
      <S.Toggle htmlFor={labelFor} color={color} disabled={disabled} />
      <S.Label htmlFor={labelFor} color={color} disabled={disabled}>
        {label}
        {required && <S.Asterisk>&nbsp;*</S.Asterisk>}
      </S.Label>
    </S.Wrapper>
  );
};

export default forwardRef(Switch);
