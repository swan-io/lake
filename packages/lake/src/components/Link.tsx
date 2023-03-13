import { useLinkProps } from "@swan-io/chicane";
import { PressableText, PressableTextProps } from "@swan-io/lake/src/components/Pressable";
import { isNotNullish } from "@swan-io/lake/src/utils/nullish";
import { forwardRef, memo } from "react";
import { HrefAttrs, PressableStateCallbackType, Text, TextProps } from "react-native";
import { Except } from "type-fest";

export type LinkProps = Except<
  PressableTextProps,
  "hrefAttrs" | "style" | "onPress" | "children"
> & {
  to: string;
  replace?: boolean;
  disabled?: boolean;
  download?: boolean;
  target?: NonNullable<HrefAttrs>["target"];
  style?:
    | TextProps["style"]
    | ((state: PressableStateCallbackType & { active: boolean }) => TextProps["style"]);
  ariaCurrentValue?: "page" | "location";
  onPress?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children?:
    | TextProps["children"]
    | ((state: PressableStateCallbackType & { active: boolean }) => TextProps["children"]);
};

export const Link = memo(
  forwardRef<Text, LinkProps>(
    (
      {
        accessibilityRole = "link",
        children,
        disabled = false,
        onPress,
        replace = false,
        download = false,
        style,
        target,
        to,
        ariaCurrentValue = "page",
        focusable,
        ...props
      },
      forwardedRef,
    ) => {
      const { active, onClick } = useLinkProps({ href: to, replace, target });

      return (
        <PressableText
          {...props}
          accessibilityRole={accessibilityRole}
          accessibilityDisabled={disabled}
          focusable={isNotNullish(focusable) ? focusable : !disabled}
          accessibilityCurrent={active ? ariaCurrentValue : undefined}
          href={to}
          onPress={(event: unknown) => {
            const e = event as React.MouseEvent<HTMLAnchorElement>;
            if (disabled) {
              e.preventDefault();
            } else {
              onPress?.(e);
              onClick(e);
            }
          }}
          ref={forwardedRef}
          style={typeof style === "function" ? state => style({ ...state, active }) : style}
          hrefAttrs={{
            rel: target && target !== "self" ? "noopener noreferrer" : undefined,
            download,
            target,
          }}
        >
          {typeof children === "function" ? state => children({ ...state, active }) : children}
        </PressableText>
      );
    },
  ),
);

Link.displayName = "Link";
