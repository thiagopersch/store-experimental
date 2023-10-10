import {
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import { CSSProperties } from "styled-components";

import { masks } from "../../utils/masks";

import { mergeRefs } from "react-merge-refs";
import * as S from "./styles";

type InputHtmlProps =
  | InputHTMLAttributes<HTMLInputElement>
  | TextareaHTMLAttributes<HTMLTextAreaElement>;

export type InputAs = "input" | "textarea";

export type TextFieldProps = {
  name: string;
  label: string;
  as?: InputAs;
  size?: "large" | "medium" | "small";
  type?: string;
  icon?: React.ReactNode;
  mask?: keyof typeof masks;
  error?: string;
  containerStyle?: CSSProperties;
  onChangeValue?: (value?: string) => void;
  onClickIcon?: () => void;
  required?: boolean;
} & InputHtmlProps;

const TextField = ({
  as = "input",
  size = "large",
  name,
  label,
  value,
  mask,
  icon,
  error: errorProp,
  containerStyle,
  disabled = false,
  required,
  onChangeValue,
  onClickIcon,
  ...props
}: TextFieldProps) => {
  const [fieldValue, setFieldValue] = useState<string>();
  const fieldRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    const { value } = event.target;

    const masked = mask ? masks[mask](value) : value;
    setFieldValue(masked);

    if (fieldRef.current) {
      fieldRef.current.value = masked || "";
    }

    onChangeValue && onChangeValue(masked);
  };

  // const setValue = useCallback(
  //   (value?: string) => {
  //     setFieldValue(() => {
  //       if (value === undefined) return "";
  //       const newValue = String(value || "");
  //       const masked = mask ? masks[mask](newValue) : newValue;
  //       return masked;
  //     });
  //   },
  //   [mask],
  // );

  useEffect(() => {
    if (fieldRef.current) {
      fieldRef.current.value = fieldValue || "";
    }
  }, [fieldValue]);

  return (
    <S.Wrapper
      inputAs={as}
      disabled={disabled}
      style={containerStyle}
      size={size}
    >
      <S.Container hasClickableIcon={!!icon && !!onClickIcon}>
        <S.Label hasValue={!!fieldValue} inputAs={as} isDisabled={disabled}>
          <span>{label}</span>
          <S.InputContainer size={size} hasIcon={!!icon}>
            <S.Input
              inputSize={size}
              onChange={handleChange}
              as={as}
              ref={mergeRefs([fieldRef])}
              name={name}
              disabled={disabled}
              value={value}
              {...props}
            />
            {icon && onClickIcon && <S.IconButton>{icon}</S.IconButton>}
          </S.InputContainer>
        </S.Label>
        {/* {!!icon && !onClickIcon && (
          <S.IconButton onClick={onClickIcon}>{icon}</S.IconButton>
        )} */}
      </S.Container>
    </S.Wrapper>
  );
};

export default TextField;
