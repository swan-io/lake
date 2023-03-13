import { forwardRef, memo, ReactNode } from "react";
import { unstable_createElement as createElement, View, ViewProps } from "react-native";
import { Except } from "type-fest";
import { commonStyles } from "../constants/commonStyles";

type Props = Except<ViewProps, "accessibilityRole"> & {
  children?: ReactNode;
  onReset?: (event: React.FormEvent<HTMLElement>) => void;
  onSubmit?: (event: React.FormEvent<HTMLElement>) => void;
};

export const Form = memo(
  forwardRef<View, Props>(({ style, onReset, onSubmit, ...props }, forwardedRef) =>
    createElement("form", {
      ...props,
      ref: forwardedRef,
      onReset: (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        onReset?.(event);
      },
      onSubmit: (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        onSubmit?.(event);
      },
      style: [commonStyles.view, style],
    }),
  ),
);

Form.displayName = "Form";
