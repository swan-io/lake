import { ReactElement, ReactFragment, ReactText, isValidElement } from "react";
import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { ColorVariants, colors, radii, spacings } from "../constants/design";
import { isNotNullish, isNotNullishOrEmpty } from "../utils/nullish";
import { Box } from "./Box";
import { Icon, IconName } from "./Icon";
import { LakeText } from "./LakeText";

const styles = StyleSheet.create({
  container: {
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: radii[4],
    height: spacings[24],
  },
  border: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: radii[4],
    pointerEvents: "none",
  },
  icon: {
    aspectRatio: "1 / 1",
  },
  larger: {
    height: spacings[40],
  },
  label: {
    paddingHorizontal: spacings[8],
    alignSelf: "stretch",
    borderTopLeftRadius: radii[4],
    borderBottomLeftRadius: radii[4],
  },
  contents: {
    flexGrow: 1,
    flexShrink: 1,
  },
  text: {
    paddingHorizontal: spacings[8],
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
  },
  textWithIcon: {
    paddingLeft: 0,
  },
  textContent: {
    flexGrow: 1,
    flexShrink: 1,
  },
  unselectable: {
    userSelect: "none",
  },
  dismiss: {
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: "1 / 1",
    borderTopRightRadius: radii[4],
    borderBottomRightRadius: radii[4],
  },
  dismissIcon: {
    transform: "translateX(-0.5px)",
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
  ariaLabel,
  onPressRemove,
  style,
}: Props) => {
  const hasLabel = isNotNullishOrEmpty(label);

  const { primary, ...variant } = colors[color];

  const tint50 = variant[50];
  const tint100 = variant[100];
  const tint200 = variant[200];

  return (
    <Box direction="row">
      <View
        style={[
          styles.container,
          size === "large" && styles.larger,
          { backgroundColor: tint50 },
          style,
        ]}
      >
        {hasLabel && (
          <Box
            alignItems="center"
            direction="row"
            style={[styles.label, { backgroundColor: tint100, borderColor: tint200 }]}
          >
            <LakeText
              numberOfLines={1}
              variant="smallMedium"
              style={styles.unselectable}
              color={primary}
            >
              {label}
            </LakeText>
          </Box>
        )}

        <Box alignItems="center" direction="row" aria-label={ariaLabel} style={styles.contents}>
          {isNotNullish(icon) ? (
            <Box
              style={[styles.icon, { width: size === "large" ? spacings[40] : spacings[24] }]}
              alignItems="center"
              justifyContent="center"
            >
              <Icon name={icon} color={primary} size={16} />
            </Box>
          ) : null}

          {children != null ? (
            <Box
              direction="row"
              alignItems="center"
              style={[styles.text, isNotNullish(icon) ? styles.textWithIcon : null]}
            >
              {isValidElement(children) ? (
                children
              ) : (
                <LakeText
                  numberOfLines={1}
                  variant="smallMedium"
                  color={primary}
                  style={styles.textContent}
                >
                  {children}
                </LakeText>
              )}
            </Box>
          ) : null}
        </Box>

        {onPressRemove != null ? (
          <Pressable
            role="button"
            onPress={onPressRemove}
            style={({ hovered, pressed }) => [
              styles.dismiss,
              {
                color: primary,
                width: size === "large" ? spacings[40] : spacings[24],
                boxShadow: `-1px 0 ${tint200}`,
              },
              hovered && { backgroundColor: tint100 },
              pressed && { backgroundColor: tint200 },
            ]}
          >
            <Icon name="dismiss-regular" color={primary} size={14} style={styles.dismissIcon} />
          </Pressable>
        ) : null}

        <View style={[styles.border, { boxShadow: `inset 0 0 0 1px ${tint200}` }]} />
      </View>
    </Box>
  );
};
