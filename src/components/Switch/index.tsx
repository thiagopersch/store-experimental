import {
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { mergeRefs } from "react-merge-refs";
import { DefaultTheme } from "styled-components";

import * as S from "./styles";

export type SwitchProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  labelFor: string;
  icon?: string | ReactNode;
  hasIcon?: boolean;
  isChecked?: boolean;
  color?: keyof DefaultTheme["colors"];
  disabled?: boolean;
  onCheck?: (status: boolean) => void;
  required?: boolean;
  value?: string | ReadonlyArray<string> | number | undefined;
};

const Switch: React.ForwardRefRenderFunction<HTMLInputElement, SwitchProps> = (
  {
    label,
    labelFor,
    icon,
    hasIcon,
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
    <S.Wrapper onClick={() => setChecked(!checked)}>
      <S.Switch
        id={labelFor}
        type="checkbox"
        value={value}
        checked={checked}
        required={required}
        disabled={disabled}
        hasIcon={!!icon}
        ref={mergeRefs([fieldRef, ref])}
        {...props}
      />
      <S.Toggle htmlFor={labelFor} hasIcon={!!icon} icon={!!icon && icon} />
      <S.Label htmlFor={labelFor}>
        {label}
        {required && <S.Asterisk>&nbsp;*</S.Asterisk>}
      </S.Label>
    </S.Wrapper>
  );
};

export default forwardRef(Switch);
