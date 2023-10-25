import { ComponentProps, forwardRef, ReactNode } from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";
import { animations, gray75, texts } from "../constants/design";
import { isNotNullish } from "../utils/nullish";
import { LakeTooltip } from "./LakeTooltip";
import { TransitionView } from "./TransitionView";

const alignments = StyleSheet.create({
  center: { textAlign: "center" },
  left: { textAlign: "left" },
  right: { textAlign: "right" },
});

const variants = StyleSheet.create({
  semibold: texts.semibold,
  medium: texts.medium,
  regular: texts.regular,
  light: texts.light,
  smallSemibold: texts.smallSemibold,
  smallMedium: texts.smallMedium,
  smallRegular: texts.smallRegular,
});

type TextAlign = keyof typeof alignments;
export type TextVariant = keyof typeof variants;

type Props = TextProps & {
  align?: TextAlign;
  children: ReactNode;
  color?: string;
  userSelect?: TextStyle["userSelect"];
  variant?: TextVariant;
  tooltip?: Omit<ComponentProps<typeof LakeTooltip>, "children">;
  refreshing?: boolean;
};

const styles = StyleSheet.create({
  tooltip: {
    width: "100%",
  },
  ellipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  refreshing: {
    backgroundColor: gray75,
    borderRadius: 24,
  },
  hidden: {
    visibility: "hidden",
  },
});

export const LakeText = forwardRef<Text, Props>(
  (
    {
      align = "left",
      children,
      color,
      style,
      userSelect,
      variant = "regular",
      tooltip,
      refreshing = false,
      ...props
    }: Props,
    forwardedRef,
  ) => (
    <TransitionView
      style={refreshing && styles.refreshing}
      {...(refreshing && animations.heartbeat)}
    >
      <Text
        ref={forwardedRef}
        style={[
          variants[variant],
          alignments[align],
          isNotNullish(color) && { color },
          isNotNullish(userSelect) && { userSelect },
          refreshing && styles.hidden,
          style,
        ]}
        aria-busy={refreshing}
        {...props}
      >
        {tooltip ? (
          <LakeTooltip containerStyle={styles.tooltip} {...tooltip}>
            <Text style={styles.ellipsis}>{children}</Text>
          </LakeTooltip>
        ) : (
          children
        )}
      </Text>
    </TransitionView>
  ),
);
