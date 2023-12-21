import { ReactElement, ReactFragment, ReactText, isValidElement } from "react";
import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from "react-native";
import { ColorVariants, colors, texts } from "../constants/design";
import { isNotNullish, isNotNullishOrEmpty, isNullish } from "../utils/nullish";
import { Box } from "./Box";
import { Icon, IconName } from "./Icon";
import { Space } from "./Space";

const styles = StyleSheet.create({
  base: {
    borderRadius: 4,
    borderWidth: 1,
    height: 28,
    overflow: "hidden",
  },
  onlyIcon: {
    height: 28,
    padding: 0,
  },
  larger: {
    height: 40,
  },
  label: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRightWidth: 0,
    paddingHorizontal: 8,
  },
  withLabel: {
    borderLeftWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  center: {
    paddingHorizontal: 8,
    flexGrow: 1,
    flexShrink: 1,
  },
  text: {
    ...texts.smallMedium,
  },
  unselectable: {
    userSelect: "none",
  },
  dismiss: {
    justifyContent: "center",
    height: "100%",
    paddingHorizontal: 8,
    borderLeftWidth: 1,
  },
});

type Props = {
  children?: ReactElement | ReactText | ReactFragment;
  label?: string;
  icon?: IconName;
  iconSize?: number;
  size?: "small" | "large";
  color?: ColorVariants;
  onPressRemove?: () => void;
  style?: StyleProp<ViewStyle>;
  ariaLabel?: string;
};

export const Tag = ({
  children,
  label,
  color = "gray",
  size = "small",
  icon,
  iconSize = 16,
  ariaLabel,
  onPressRemove,
  style,
}: Props) => {
  const hasRemoveButton = isNotNullish(onPressRemove);
  const hasLabel = isNotNullishOrEmpty(label);
  const hasOnlyIcon = isNullish(children) && isNotNullish(icon);

  const { primary, ...variant } = colors[color];

  const tint50 = variant[50];
  const tint100 = variant[100];
  const tint200 = variant[200];

  return (
    <Box direction="row">
      {hasLabel && (
        <Box
          alignItems="center"
          direction="row"
          style={[
            styles.base,
            styles.label,
            size === "large" && styles.larger,
            hasOnlyIcon && styles.onlyIcon,
            { backgroundColor: tint100, borderColor: tint200 },
          ]}
        >
          <Text numberOfLines={1} style={[styles.text, styles.unselectable, { color: primary }]}>
            {label}
          </Text>
        </Box>
      )}

      <Box
        alignItems="center"
        direction="row"
        aria-label={ariaLabel}
        style={[
          styles.base,
          size === "large" && styles.larger,
          hasOnlyIcon && styles.onlyIcon,
          { backgroundColor: tint50, borderColor: tint200 },
          hasLabel && styles.withLabel,
          style,
        ]}
      >
        <Box
          direction="row"
          alignItems="center"
          style={[styles.center, hasOnlyIcon && styles.onlyIcon]}
        >
          {isNotNullish(icon) ? (
            <>
              <Icon name={icon} color={primary} size={iconSize} />

              {isNotNullish(children) && <Space width={8} />}
            </>
          ) : null}

          {isValidElement(children) ? (
            children
          ) : (
            <Text
              numberOfLines={1}
              style={[
                styles.text,
                {
                  color: primary,
                },
              ]}
            >
              {children}
            </Text>
          )}
        </Box>

        {hasRemoveButton && (
          <Pressable
            role="button"
            onPress={onPressRemove}
            style={({ hovered, pressed }) => [
              styles.dismiss,
              { color: primary, borderColor: tint100 },
              hovered && { backgroundColor: tint100 },
              pressed && { backgroundColor: tint200 },
            ]}
          >
            <Icon name="dismiss-regular" color={primary} size={10} />
          </Pressable>
        )}
      </Box>
    </Box>
  );
};
