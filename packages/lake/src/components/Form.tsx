import { memo, ReactNode, Ref } from "react";
import { unstable_createElement as createElement, View, ViewProps } from "react-native";
import { Except } from "type-fest";
import { commonStyles } from "../constants/commonStyles";

type Props = Except<ViewProps, "role"> & {
  ref?: Ref<View>;
  children?: ReactNode;
  onReset?: (event: React.FormEvent<HTMLElement>) => void;
  onSubmit?: (event: React.FormEvent<HTMLElement>) => void;
};

export const Form = memo(({ ref, style, onReset, onSubmit, ...props }: Props) =>
  createElement("form", {
    ...props,
    ref,
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
);

Form.displayName = "Form";
