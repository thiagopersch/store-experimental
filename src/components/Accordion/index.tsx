import { ReactNode, useEffect, useRef, useState } from "react";
import * as S from "./styles";

export type AccordionProps = {
  children: string | ReactNode;
  label?: string | ReactNode;
  disabled?: boolean;
  expanded?: boolean;
  onChange?: (event: any) => void;
};

const Accordion = ({
  children,
  label,
  disabled,
  expanded,
  onChange,
}: AccordionProps) => {
  const [isexpanded, setIsexpanded] = useState(expanded);
  const [height, setHeight] = useState<number | undefined>(
    expanded ? undefined : 0,
  );

  const ref = useRef<HTMLDivElement>(null);

  const handleFilterOpening = () => {
    setIsexpanded((prev) => !prev);
  };

  useEffect(() => {
    if (!height || !isexpanded || !ref.current) return undefined;

    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isexpanded]);

  useEffect(() => {
    if (isexpanded) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isexpanded]);

  return (
    <S.Wrapper
      label={label}
      expanded={expanded}
      disabled={disabled}
      onChange={onChange}
    >
      {children}
    </S.Wrapper>
  );
};

export default Accordion;
