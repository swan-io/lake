import { Children, forwardRef, Fragment, memo, ReactNode, ReactText } from "react";
import {
  ActivityIndicator,
  GestureResponderEvent,
  PressableStateCallbackType,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { match } from "ts-pattern";
import {
  backgroundColor,
  colors,
  ColorVariants,
  invariantColors,
  radii,
  Spacings,
  spacings,
  texts,
} from "../constants/design";
import { isNotNullish, isNullish } from "../utils/nullish";
import { Icon, IconName } from "./Icon";
import { LakeText } from "./LakeText";
import { Pressable } from "./Pressable";
import { Space } from "./Space";

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    backgroundColor: colors.gray[900],
    borderRadius: radii[6],
    flexDirection: "row",
    flexShrink: 0,
    height: 48,
    minWidth: 90,
    justifyContent: "center",
    paddingHorizontal: 20,
    transitionDuration: "150ms",
    transitionProperty: "background-color, color",
  },
  grow: {
    flexGrow: 1,
  },
  iconOnly: {
    minWidth: 48,
    width: 48,
    paddingRight: 0,
    paddingLeft: 0,
  },
  iconSmallOnly: {
    minWidth: 40,
    width: 40,
    paddingRight: 0,
    paddingLeft: 0,
  },
  hiddenView: {
    position: "absolute",
    width: "100%",
    height: "100%",
    transitionDuration: "150ms",
    transitionProperty: "opacity",
    opacity: 0,
  },
  pressed: {
    opacity: 0.15,
    backgroundColor: colors.gray[900],
  },
  small: {
    height: 40,
    paddingLeft: 16,
    paddingRight: 16,
  },
  withIconStart: {
    paddingRight: 24,
    paddingLeft: 26,
  },
  withIconStartSmall: {
    paddingRight: 19.5,
    paddingLeft: 21.5,
  },
  withIconEnd: {
    paddingRight: 20,
    paddingLeft: 24,
  },
  withIconEndSmall: {
    paddingRight: 20.5,
    paddingLeft: 21.5,
  },
  text: texts.semibold,
  textSmall: texts.smallSemibold,
  disabled: {
    cursor: "not-allowed",
    opacity: 0.3,
  },
  resetOpacity: {
    opacity: 1,
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    transform: "translateZ(0px)",
    borderRadius: radii[6],
  },
  group: {
    flexDirection: "row",
    alignItems: "stretch",
    paddingVertical: spacings[16],
  },
  pill: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: backgroundColor.default,
    backgroundColor: colors.negative[500],
    position: "absolute",
    top: -3,
    right: -3,
  },
});

const isReactText = (node: ReactNode): node is ReactText =>
  ["string", "number"].includes(typeof node);

export type ButtonProps = {
  ariaControls?: string;
  ariaExpanded?: boolean;
  color?: ColorVariants;
  disabled?: boolean;
  loading?: boolean;
  grow?: boolean;
  icon?: IconName;
  iconPosition?: "start" | "end";
  mode?: "primary" | "secondary" | "tertiary";
  onPress?: (event: GestureResponderEvent) => void;
  size?: "large" | "small";
  style?: StyleProp<ViewStyle> | ((props: PressableStateCallbackType) => StyleProp<ViewStyle>);
  forceBackground?: boolean;
  href?: string;
  hrefAttrs?: { download?: boolean; rel?: string; target?: string };
  pill?: boolean;
} & (
  | {
      ariaLabel: string;
      children?: never;
    }
  | {
      ariaLabel?: string;
      children: ReactNode;
    }
);

export const LakeButton = memo(
  forwardRef<View, ButtonProps>(
    (
      {
        ariaControls,
        ariaExpanded,
        ariaLabel,
        children,
        color = "gray",
        disabled = false,
        icon,
        grow = false,
        iconPosition = "start",
        loading = false,
        mode = "primary",
        onPress,
        size = "large",
        style,
        forceBackground = false,
        href,
        hrefAttrs,
        pill,
      },
      forwardedRef,
    ) => {
      const isSmall = size === "small";
      const iconSize = isSmall ? 18 : 20;

      const hasIconStart = isNotNullish(icon) && iconPosition === "start";
      const hasIconEnd = isNotNullish(icon) && iconPosition === "end";
      const hasOnlyIcon = isNullish(children) && isNotNullish(icon);

      return (
        <Pressable
          href={href}
          hrefAttrs={hrefAttrs}
          role={href != null ? "link" : "button"}
          aria-busy={loading}
          aria-disabled={disabled}
          aria-controls={ariaControls}
          aria-expanded={ariaExpanded}
          aria-label={ariaLabel}
          disabled={loading || disabled}
          ref={forwardedRef}
          onPress={onPress}
          style={({ hovered, pressed, focused }) => [
            styles.base,

            isSmall && styles.small,
            hasIconStart && isSmall ? styles.withIconStartSmall : styles.withIconStart,
            hasIconEnd && (isSmall ? styles.withIconEndSmall : styles.withIconEnd),
            hasOnlyIcon && (isSmall ? styles.iconSmallOnly : styles.iconOnly),
            disabled && styles.disabled,
            disabled && forceBackground && styles.resetOpacity,
            grow && styles.grow,

            match(mode)
              .with("primary", () => ({
                backgroundColor:
                  color === "warning"
                    ? hovered
                      ? colors[color][600]
                      : colors[color][500]
                    : hovered
                    ? colors[color].secondary
                    : colors[color].primary,
              }))
              .with("secondary", () => ({
                backgroundColor: pressed
                  ? colors[color][100]
                  : hovered
                  ? colors[color][50]
                  : forceBackground
                  ? backgroundColor.accented
                  : invariantColors.transparent,
                borderWidth: 1,
                borderColor:
                  disabled && forceBackground
                    ? colors[color][100]
                    : hovered
                    ? colors[color][600]
                    : colors[color][300],
              }))
              .with("tertiary", () => ({
                backgroundColor: pressed
                  ? colors[color][200]
                  : hovered
                  ? colors[color][100]
                  : invariantColors.transparent,
              }))
              .exhaustive(),

            typeof style == "function" ? style({ hovered, pressed, focused }) : style,
          ]}
        >
          {({ pressed, hovered }) => {
            const textColor =
              mode === "secondary" || mode === "tertiary"
                ? disabled && forceBackground
                  ? colors[color][300]
                  : hovered || pressed
                  ? colors[color][700]
                  : colors[color][600]
                : colors[color].contrast;

            return (
              <>
                {hasIconStart && (
                  <>
                    <Icon color={textColor} name={icon} size={iconSize} />

                    {isNotNullish(children) && <Space width={isSmall ? 8 : 12} />}
                  </>
                )}

                {isReactText(children) ? (
                  <LakeText
                    numberOfLines={1}
                    userSelect="none"
                    style={[isSmall ? styles.textSmall : styles.text, { color: textColor }]}
                  >
                    {children}
                  </LakeText>
                ) : (
                  children
                )}

                {hasIconEnd && (
                  <>
                    {isNotNullish(children) && <Space width={isSmall ? 8 : 12} />}

                    <Icon color={textColor} name={icon} size={iconSize} />
                  </>
                )}

                {loading && (
                  <View
                    role="none"
                    style={[
                      styles.loaderContainer,
                      {
                        backgroundColor:
                          mode === "secondary" || mode === "tertiary"
                            ? backgroundColor.accented
                            : colors[color].primary,
                      },
                    ]}
                  >
                    <ActivityIndicator
                      color={
                        mode === "secondary" || mode === "tertiary"
                          ? colors[color].primary
                          : colors[color].contrast
                      }
                      size={iconSize}
                    />
                  </View>
                )}

                <View
                  style={[styles.hiddenView, pressed && mode === "primary" && styles.pressed]}
                />

                {pill === true ? <View style={styles.pill} /> : null}
              </>
            );
          }}
        </Pressable>
      );
    },
  ),
);

LakeButton.displayName = "Button";

type GroupProps = {
  children: ReactNode;
  justifyContent?: ViewStyle["justifyContent"];
  paddingBottom?: 0 | Spacings;
};

const ZERO = 0;

export const LakeButtonGroup = ({
  children,
  justifyContent = "flex-start",
  paddingBottom = 16,
}: GroupProps) => (
  <View
    style={[
      styles.group,
      { justifyContent, paddingBottom: paddingBottom === 0 ? ZERO : spacings[paddingBottom] },
    ]}
  >
    {Children.toArray(children).map((item, index) => (
      <Fragment key={index}>
        {index > 0 ? <Space width={16} /> : null}
        {item}
      </Fragment>
    ))}
  </View>
);
