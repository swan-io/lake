import { forwardRef, memo, ReactText } from "react";
import {
  ActivityIndicator,
  GestureResponderEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { colors } from "../constants/colors";
import { typography } from "../constants/typography";
import { useComputedColors } from "../hooks/useComputedColors";
import { isNotNullish, isNullish } from "../utils/nullish";
import { Icon, IconName } from "./Icon";
import { Space } from "./Space";

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    backgroundColor: colors.black,
    borderRadius: 4,
    flexDirection: "row",
    flexShrink: 1,
    height: 48,
    justifyContent: "center",
    overflow: "hidden",
    paddingLeft: 20,
    paddingRight: 20,
    transitionDuration: "150ms",
    transitionProperty: "background-color",
  },
  small: {
    height: 40,
    paddingLeft: 16,
    paddingRight: 16,
  },
  withIcon: {
    paddingLeft: 18,
  },
  withIconSmall: {
    paddingLeft: 14,
  },
  iconOnly: {
    paddingLeft: 13,
    paddingRight: 13,
  },
  iconOnlySmall: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    ...typography.bodyLarge,
    fontWeight: typography.fontWeights.demi,
    userSelect: "none",
  },
  textSmall: {
    ...typography.bodySmall,
    fontWeight: typography.fontWeights.demi,
    userSelect: "none",
  },
  disabled: {
    cursor: "not-allowed",
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
});

type Props = {
  children?: ReactText;
  color?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: IconName;
  onPress?: (event: GestureResponderEvent) => void;
  size?: "large" | "small";
  style?: StyleProp<ViewStyle>;
};

export const Button = memo(
  forwardRef<View, Props>(
    (
      {
        children,
        color = colors.gray[100],
        disabled = false,
        loading = false,
        icon,
        onPress,
        size = "large",
        style,
      },
      forwardedRef,
    ) => {
      const computedColors = useComputedColors(color);
      const isSmall = size === "small";
      const iconSize = isSmall ? 18 : 20;

      return (
        <Pressable
          accessibilityRole="button"
          accessibilityBusy={loading}
          accessibilityDisabled={disabled}
          disabled={loading || disabled}
          ref={forwardedRef}
          onPress={onPress}
          style={({ hovered, pressed }) => [
            styles.base,
            isSmall && styles.small,

            isNotNullish(icon) && (isSmall ? styles.withIconSmall : styles.withIcon),
            isNullish(children) && (isSmall ? styles.iconOnlySmall : styles.iconOnly),

            disabled && styles.disabled,
            style,

            {
              backgroundColor: disabled
                ? computedColors.disabled
                : pressed
                ? computedColors.pressed
                : hovered
                ? computedColors.hovered
                : computedColors.original,
            },
          ]}
        >
          {icon && <Icon color={computedColors.text} name={icon} size={iconSize} />}
          {isNotNullish(icon) && isNotNullish(children) && <Space width={isSmall ? 8 : 12} />}

          <Text
            numberOfLines={1}
            style={[isSmall ? styles.textSmall : styles.text, { color: computedColors.text }]}
          >
            {children}
          </Text>

          {loading && (
            <View
              accessibilityRole="none"
              style={[styles.loaderContainer, { backgroundColor: computedColors.original }]}
            >
              <ActivityIndicator color={computedColors.text} size={iconSize} />
            </View>
          )}
        </Pressable>
      );
    },
  ),
);

Button.displayName = "Button";
