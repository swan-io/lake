import { ReactNode, useContext, useRef } from "react";
import { createPortal } from "react-dom";
import { CurrentColorContext, useCurrentColor } from "./WithCurrentColor";

type Props = {
  children: ReactNode;
  container: Element;
};

export const Portal = ({ children, container }: Props) => {
  const currentColor = useContext(CurrentColorContext);
  const containerRef = useRef(container as HTMLElement);

  useCurrentColor(containerRef, currentColor);

  return createPortal(children, container);
};
