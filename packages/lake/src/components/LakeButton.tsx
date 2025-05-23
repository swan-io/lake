import { Option } from "@swan-io/boxed";
import { Children, Fragment, memo, ReactNode, Ref, useEffect, useState } from "react";
import {
  ActivityIndicator,
  GestureResponderEvent,
  HrefAttrs,
  PressableStateCallbackType,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { match, P } from "ts-pattern";
import { commonStyles } from "../constants/commonStyles";
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
import { Box } from "./Box";
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
  },
  transition: {
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
    borderRadius: radii[6],
  },
  loaderContainerProgress: {
    opacity: 0.5,
    backgroundColor: colors.gray[900],
    transformOrigin: "0 0",
    ...StyleSheet.absoluteFillObject,
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
  resetOpacity: {
    opacity: 1,
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    transform: "translateZ(0px)",
    borderRadius: radii[6],
    overflow: "hidden",
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
  vertical: {
    flexDirection: "column",
    height: "auto",
    paddingVertical: spacings[12],
  },
  verticalSmall: {
    paddingVertical: spacings[8],
  },
  hidden: {
    visibility: "hidden",
  },
});

export type ButtonProps = {
  ref?: Ref<View>;
  ariaControls?: string;
  ariaExpanded?: boolean;
  color?: ColorVariants;
  disabled?: boolean;
  direction?: "column" | "row";
  loading?: boolean;
  grow?: boolean;
  icon?: IconName;
  iconPosition?: "start" | "end";
  mode?: "primary" | "secondary" | "tertiary";
  onPress?: (event: GestureResponderEvent) => void;
  size?: "large" | "small";
  iconSize?: number;
  style?: StyleProp<ViewStyle> | ((props: PressableStateCallbackType) => StyleProp<ViewStyle>);
  forceBackground?: boolean;
  href?: string;
  hrefAttrs?: HrefAttrs;
  pill?: boolean;
  disabledUntil?: string;
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
  ({
    ref,
    ariaControls,
    ariaExpanded,
    ariaLabel,
    children,
    color = "gray",
    direction = "row",
    disabled = false,
    icon,
    grow = false,
    iconPosition = "start",
    loading = false,
    mode = "primary",
    onPress,
    size = "large",
    iconSize = size === "small" ? 18 : 20,
    style,
    forceBackground = false,
    href,
    hrefAttrs,
    pill = false,
    disabledUntil,
  }: ButtonProps) => {
    const [progressAnimation, setProgressAnimation] = useState<
      Option<{
        startTime: number;
        duration: number;
        now: number;
      }>
    >(() => Option.None());

    const isPrimary = mode === "primary";
    const isSmall = size === "small";

    const vertical = direction === "column";
    const spaceHeight = vertical ? 4 : undefined;
    const spaceWidth = vertical ? undefined : isSmall ? 8 : 12;

    const hasIcon = isNotNullish(icon);
    const hasIconStart = hasIcon && iconPosition === "start";
    const hasIconEnd = hasIcon && iconPosition === "end";
    const hasOnlyIcon = hasIcon && isNullish(children);

    useEffect(() => {
      if (disabledUntil == null) {
        return;
      }

      const startTime = Date.now();
      const endTime = new Date(disabledUntil).getTime();

      const config = {
        startTime,
        duration: endTime - startTime,
        endTime,
      };

      const tick = () => {
        const now = Date.now();
        if (now >= config.endTime) {
          setProgressAnimation(Option.None());
        } else {
          setProgressAnimation(
            Option.Some({
              startTime: config.startTime,
              duration: config.duration,
              now: Date.now(),
            }),
          );
          animationFrameId = requestAnimationFrame(tick);
        }
      };
      let animationFrameId = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(animationFrameId);
    }, [disabledUntil]);

    const shouldHideContents = loading || progressAnimation.isSome();

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
        disabled={loading || disabled || progressAnimation.isSome()}
        ref={ref}
        onPress={onPress}
        style={({ hovered, pressed, focused }) => [
          styles.base,

          (hovered || pressed) && styles.transition,

          grow && styles.grow,
          isSmall && styles.small,

          vertical && [styles.vertical, isSmall && styles.verticalSmall],
          hasIconStart && isSmall ? styles.withIconStartSmall : styles.withIconStart,
          hasIconEnd && (isSmall ? styles.withIconEndSmall : styles.withIconEnd),
          hasOnlyIcon && (isSmall ? styles.iconSmallOnly : styles.iconOnly),

          (disabled || progressAnimation.isSome()) && commonStyles.disabled,
          disabled && forceBackground && styles.resetOpacity,

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

          typeof style === "function" ? style({ hovered, pressed, focused }) : style,
        ]}
      >
        {({ pressed, hovered }) => {
          const textColor = isPrimary
            ? colors[color].contrast
            : disabled && forceBackground
              ? colors[color][300]
              : hovered || pressed
                ? colors[color][700]
                : colors[color][600];

          return (
            <>
              {hasIconStart && (
                <>
                  <Icon
                    color={textColor}
                    name={icon}
                    size={iconSize}
                    style={shouldHideContents && styles.hidden}
                  />

                  {isNotNullish(children) && <Space height={spaceHeight} width={spaceWidth} />}
                </>
              )}

              {typeof children === "string" || typeof children === "number" ? (
                <LakeText
                  numberOfLines={1}
                  userSelect="none"
                  style={[
                    isSmall ? styles.textSmall : styles.text,
                    shouldHideContents && styles.hidden,
                    { color: textColor },
                  ]}
                >
                  {children}
                </LakeText>
              ) : (
                <Box
                  alignItems="center"
                  direction="row"
                  justifyContent="center"
                  style={[vertical && styles.vertical, shouldHideContents && styles.hidden]}
                >
                  {children}
                </Box>
              )}

              {hasIconEnd && (
                <>
                  {isNotNullish(children) && <Space height={spaceHeight} width={spaceWidth} />}

                  <Icon
                    color={textColor}
                    name={icon}
                    size={iconSize}
                    style={shouldHideContents && styles.hidden}
                  />
                </>
              )}

              {loading && (
                <View style={styles.loaderContainer}>
                  <ActivityIndicator
                    color={isPrimary ? colors[color].contrast : colors[color].primary}
                    size={iconSize}
                  />
                </View>
              )}

              {isPrimary && <View style={[styles.hiddenView, pressed && styles.pressed]} />}

              {match(progressAnimation)
                .with(Option.P.Some(P.select()), ({ startTime, now, duration }) => (
                  <View style={styles.loaderContainer}>
                    <View
                      style={[
                        styles.loaderContainerProgress,
                        { transform: `scaleX(${((now - startTime) / duration) * 100}%)` },
                      ]}
                    />

                    <LakeText color={isPrimary ? colors[color].contrast : colors[color].primary}>
                      {Math.ceil((duration - (now - startTime)) / 1000)}
                    </LakeText>
                  </View>
                ))
                .otherwise(() => null)}

              {pill && <View style={styles.pill} />}
            </>
          );
        }}
      </Pressable>
    );
  },
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
