import {
  InputHTMLAttributes,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { mergeRefs } from "react-merge-refs";
import { DefaultTheme } from "styled-components";

import * as S from "./styles";

type InputHtmlProps = InputHTMLAttributes<HTMLInputElement>;

export type SwitchProps = InputHtmlProps & {
  label?: string;
  labelFor?: string;
  isChecked?: boolean;
  color?: keyof DefaultTheme["colors"];
  disabled?: boolean;
  onCheck?: (status: boolean) => void;
  required: boolean;
  size?: "small" | "medium" | "large";
  value?: string | ReadonlyArray<string> | number | boolean;
};

const Switch: React.ForwardRefRenderFunction<HTMLInputElement, SwitchProps> = (
  {
    label,
    labelFor,
    isChecked,
    color,
    disabled,
    onCheck,
    required,
    size,
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
    <div>
      <S.Wrapper onClick={() => setChecked(!checked)}>
        <S.Switch
          id={labelFor}
          type="checkbox"
          value={value}
          checked={checked}
          disabled={disabled}
          ref={mergeRefs([fieldRef, ref])}
          {...props}
        />
        <S.Toggle htmlFor={labelFor} />
        <S.Label htmlFor={labelFor}>{label}</S.Label>
      </S.Wrapper>
    </div>
  );
};

export default forwardRef(Switch);
