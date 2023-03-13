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
import { isNotNullish } from "../utils/nullish";
import { Icon, IconName } from "./Icon";
import { Space } from "./Space";

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderColor: colors.gray[10],
    borderRadius: 4,
    borderWidth: 1,
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
  hovered: {
    backgroundColor: colors.gray[3],
  },
  pressed: {
    backgroundColor: colors.gray[10],
  },
  disabled: {
    backgroundColor: colors.gray[3],
    borderColor: colors.gray[3],
    cursor: "not-allowed",
  },
  text: {
    ...typography.bodyLarge,
    fontWeight: typography.fontWeights.demi,
    lineHeight: 48,
  },
  textSmall: {
    ...typography.bodySmall,
    fontWeight: typography.fontWeights.demi,
    lineHeight: 40,
  },
  textDisabled: {
    color: colors.gray[50],
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    backgroundColor: colors.white,
    justifyContent: "center",
  },
});

type Props = {
  accessibilityLabel?: string;
  children?: ReactText;
  color?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: IconName;
  onPress?: (event: GestureResponderEvent) => void;
  size?: "large" | "small";
  style?: StyleProp<ViewStyle>;
};

export const BorderedButton = memo(
  forwardRef<View, Props>(
    (
      {
        accessibilityLabel,
        children = "",
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
      const hasText = children !== "";
      const isSmall = size === "small";
      const iconSize = isSmall ? 18 : 20;

      return (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={accessibilityLabel}
          accessibilityBusy={loading}
          accessibilityDisabled={disabled}
          disabled={loading || disabled}
          ref={forwardedRef}
          onPress={onPress}
          style={({ hovered, pressed }) => [
            styles.base,
            isSmall && styles.small,

            isNotNullish(icon) && (isSmall ? styles.withIconSmall : styles.withIcon),
            !hasText && (isSmall ? styles.iconOnlySmall : styles.iconOnly),

            disabled
              ? styles.disabled
              : pressed
              ? styles.pressed
              : hovered
              ? styles.hovered
              : false,

            style,
          ]}
        >
          {icon && <Icon color={color} name={icon} size={iconSize} />}
          {hasText && isNotNullish(icon) && <Space width={isSmall ? 8 : 12} />}

          {hasText && (
            <Text
              numberOfLines={1}
              selectable={false}
              style={[
                isSmall ? styles.textSmall : styles.text,
                disabled ? styles.textDisabled : { color },
              ]}
            >
              {children}
            </Text>
          )}

          {loading && (
            <View accessibilityRole="none" style={styles.loaderContainer}>
              <ActivityIndicator
                color={disabled ? colors.gray[50] : colors.gray[100]}
                size={iconSize}
              />
            </View>
          )}
        </Pressable>
      );
    },
  ),
);

BorderedButton.displayName = "BorderedButton";
