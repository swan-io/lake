import { ComponentProps, ReactNode, useCallback, useState } from "react";
import { GestureResponderEvent, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { match } from "ts-pattern";
import { Except } from "type-fest";
import { visuallyHiddenStyle } from "../constants/commonStyles";
import { ColorVariants, colors, invariantColors, spacings } from "../constants/design";
import { setClipboardText } from "../utils/clipboard";
import { identity } from "../utils/function";
import { isNotNullish, isNullish } from "../utils/nullish";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { LakeText, TextVariant } from "./LakeText";
import { LakeTooltip } from "./LakeTooltip";
import { Pressable } from "./Pressable";
import { Space } from "./Space";

/* eslint-disable react-native/no-unused-styles */
const directionStyles = StyleSheet.create({
  column: { flexDirection: "column" },
  row: { flexDirection: "row" },
});

const alignItemsStyles = StyleSheet.create({
  left: { alignItems: "flex-start" },
  center: { alignItems: "center" },
  right: { alignItems: "flex-end" },
});

const justifyContentStyles = StyleSheet.create({
  left: { justifyContent: "flex-start" },
  center: { justifyContent: "center" },
  right: { justifyContent: "flex-end" },
});
/* eslint-enable react-native/no-unused-styles */

const fadeOnLeftMask = `linear-gradient(to right, ${invariantColors.transparent}, ${invariantColors.black} ${spacings[8]})`;
const fadeOnRightMask = `linear-gradient(to left, ${invariantColors.transparent}, ${invariantColors.black} ${spacings[8]})`;

const styles = StyleSheet.create({
  cell: {
    flexDirection: "row",
    flexGrow: 1,
    flexShrink: 1,
    paddingHorizontal: spacings[8],
  },
  cellContentContainer: {
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
  },
  fadeOnLeft: {
    maskImage: fadeOnLeftMask,
    WebkitMaskImage: fadeOnLeftMask,
  },
  fadeOnRight: {
    maskImage: fadeOnRightMask,
    WebkitMaskImage: fadeOnRightMask,
  },
  noCursor: {
    cursor: "text",
  },
  sortIcon: {
    transitionProperty: "transform",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-in-out",
  },
  rotated: {
    transform: "rotate(-180deg)",
  },
  headerUnderline: {
    backgroundColor: colors.gray[900],
    borderBottomColor: colors.current[500],
    bottom: -10,
    height: 2,
    position: "absolute",
    width: "100%",
  },
  headerUnderlineActive: {
    backgroundColor: colors.current[500],
  },
  // eslint-disable-next-line react-native/no-color-literals
  buttonUnderline: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: spacings[8],
    height: 2,
    backgroundColor: "currentColor",
  },
  buttonEndUnderline: {
    right: 0,
    left: spacings[8],
  },
  fullHeight: {
    height: "100%",
  },
  button: {
    justifyContent: "center",
    height: "100%",
    paddingRight: spacings[8],
  },
  buttonEnd: {
    paddingRight: 0,
    paddingLeft: spacings[8],
  },
});

type Align = "left" | "center" | "right";
type FadeOn = "left" | "right";
type SortDirection = "Desc" | "Asc";
type TooltipProp = Except<ComponentProps<typeof LakeTooltip>, "children">;

type CellProps = {
  children: ReactNode;
  align?: Align;
  direction?: keyof typeof directionStyles;
  fadeOn?: FadeOn;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

export const Cell = ({
  children,
  align = "left",
  direction = "row",
  fadeOn,
  style,
  contentContainerStyle,
}: CellProps) => (
  <View style={[styles.cell, style]}>
    <View
      style={[
        styles.cellContentContainer,
        directionStyles[direction],
        alignItemsStyles[direction === "row" ? "center" : align],
        justifyContentStyles[direction === "row" ? align : "center"],
        fadeOn === "left" && styles.fadeOnLeft,
        fadeOn === "right" && styles.fadeOnRight,
        contentContainerStyle,
      ]}
    >
      {children}
    </View>
  </View>
);

type HeaderCellProps = {
  align?: Align;
  sort?: SortDirection;
  text: string;
  onPress?: (direction: SortDirection) => void;
};

export const HeaderCell = ({ align = "left", sort, text, onPress }: HeaderCellProps) => {
  const sortActive = isNotNullish(sort) && isNotNullish(onPress);
  const disabled = isNullish(onPress);

  return (
    <Pressable
      role="columnheader"
      disabled={disabled}
      style={[styles.cell, disabled && styles.noCursor]}
      onPress={() => {
        onPress?.(
          match(sort)
            .returnType<SortDirection>()
            .with("Desc", () => "Asc")
            .otherwise(() => "Desc"),
        );
      }}
    >
      {({ hovered }) => (
        <View
          style={[
            styles.cellContentContainer,
            directionStyles["row"],
            alignItemsStyles["center"],
            justifyContentStyles[align],
          ]}
        >
          <LakeText
            numberOfLines={1}
            align={align}
            color={sortActive ? colors.current[500] : colors.gray[900]}
            variant="medium"
          >
            {text}
          </LakeText>

          {isNotNullish(onPress) && (
            <>
              <Space width={8} />

              <Icon
                size={15}
                color={sortActive ? colors.current[500] : colors.gray[500]}
                name={sortActive ? "arrow-down-filled" : "chevron-up-down-regular"}
                style={[styles.sortIcon, sort === "Asc" && styles.rotated]}
              />
            </>
          )}

          {(hovered || sortActive) && (
            <View style={[styles.headerUnderline, sortActive && styles.headerUnderlineActive]} />
          )}
        </View>
      )}
    </Pressable>
  );
};

type TextCellProps = {
  align?: Align;
  color?: string;
  text: string;
  tooltip?: TooltipProp;
  variant?: TextVariant;
};

export const TextCell = ({
  align = "left",
  color = colors.gray[900],
  text,
  tooltip,
  variant = "regular",
}: TextCellProps) => (
  <Cell align={align}>
    <LakeText numberOfLines={1} align={align} color={color} tooltip={tooltip} variant={variant}>
      {text}
    </LakeText>
  </Cell>
);

type CopyableTextCellProps = {
  copiedWording: string;
  copyWording: string;
  text: string;
  textToCopy?: string;
  tooltip?: TooltipProp;
  variant?: TextVariant;
};

export const CopyableTextCell = ({
  copiedWording,
  copyWording,
  text,
  textToCopy,
  tooltip,
  variant = "regular",
}: CopyableTextCellProps) => {
  const [visibleState, setVisibleState] = useState<"copy" | "copied">("copy");
  const clipboardText = textToCopy ?? text;

  const onPress = useCallback(
    (event: GestureResponderEvent) => {
      event.preventDefault();
      setClipboardText(clipboardText);
      setVisibleState("copied");
    },
    [clipboardText],
  );

  return (
    <Cell style={styles.fullHeight}>
      <LakeTooltip
        content={visibleState === "copy" ? copyWording : copiedWording}
        onHide={() => setVisibleState("copy")}
        placement="left"
        togglableOnFocus={true}
        containerStyle={styles.fullHeight}
      >
        <Pressable aria-label={copyWording} role="button" onPress={onPress} style={styles.button}>
          {({ hovered }) => (
            <>
              <Icon
                name={hovered ? "copy-filled" : "copy-regular"}
                color="currentColor"
                size={14}
              />

              {hovered && <View role="none" style={styles.buttonUnderline} />}
            </>
          )}
        </Pressable>
      </LakeTooltip>

      <LakeText numberOfLines={1} color={colors.gray[900]} tooltip={tooltip} variant={variant}>
        {text}
      </LakeText>
    </Cell>
  );
};

type BalanceCellProps = {
  align?: Align;
  currency: string;
  formatCurrency: (value: number, currency: string) => string;
  originalValue?: { value: number; currency: string };
  /**
   * @deprecated Use `align` prop instead
   */
  textAlign?: Align;
  value: number;
  variant?: TextVariant;
};

// TODO: handle `+` sign properly
export const BalanceCell = ({
  textAlign = "left",
  align = textAlign,
  currency,
  formatCurrency,
  originalValue,
  value,
  variant = "medium",
}: BalanceCellProps) => (
  <Cell align={align} direction="column">
    <LakeText
      numberOfLines={1}
      align={align}
      color={colors.gray[900]}
      variant={variant}
      style={[
        value > 0 && { color: colors.positive.primary },
        value < 0 && { color: colors.negative.primary },
      ]}
    >
      {(value > 0 ? "+" : "") + formatCurrency(value, currency)}
    </LakeText>

    {isNotNullish(originalValue) && originalValue.currency !== currency && (
      <LakeText numberOfLines={1} align={align} color={colors.gray[500]} variant="smallRegular">
        {(originalValue.value > 0 ? "+" : "") +
          formatCurrency(originalValue.value, originalValue.currency)}
      </LakeText>
    )}
  </Cell>
);

type LinkCellProps = {
  buttonPosition?: "start" | "end";
  children: ReactNode;
  external?: boolean;
  fadeOn?: FadeOn;
  onPress: () => void;
  tooltip?: TooltipProp;
  variant?: TextVariant;
};

export const LinkCell = ({
  buttonPosition = "start",
  children,
  external = false,
  fadeOn,
  onPress,
  tooltip,
  variant = "medium",
}: LinkCellProps) => {
  const atEnd = buttonPosition === "end";

  const button = (
    <Pressable
      style={[styles.button, atEnd && styles.buttonEnd]}
      onPress={event => {
        event.preventDefault();
        onPress();
      }}
    >
      {({ hovered }) => (
        <>
          <Icon size={14} name={external ? "open-regular" : "arrow-right-filled"} />

          {hovered && (
            <View
              role="none"
              style={[styles.buttonUnderline, atEnd && styles.buttonEndUnderline]}
            />
          )}
        </>
      )}
    </Pressable>
  );

  const text = (
    <LakeText numberOfLines={1} color={colors.gray[900]} variant={variant} tooltip={tooltip}>
      {children}
    </LakeText>
  );

  return (
    <Cell fadeOn={fadeOn}>
      {atEnd ? (
        <>
          {text}
          {button}
        </>
      ) : (
        <>
          {button}
          {text}
        </>
      )}
    </Cell>
  );
};

/**
 * @deprecated Avoid usage
 */
export const ColorPatchCell = ({
  alternativeText,
  color,
  isHovered,
}: {
  alternativeText?: string;
  color: ColorVariants;
  isHovered: boolean;
}) => {
  return isHovered ? (
    <Box grow={1} style={{ backgroundColor: colors[color].primary }}>
      {isNotNullish(alternativeText) ? (
        <LakeText style={visuallyHiddenStyle}>{alternativeText}</LakeText>
      ) : null}
    </Box>
  ) : null;
};

/**
 * @deprecated Use `HeaderCell` instead
 */
export const SimpleHeaderCell = ({
  justifyContent = "flex-start",
  ...props
}: {
  justifyContent?: "flex-start" | "center" | "flex-end";
  text: string;
  sort?: SortDirection;
  onPress?: (direction: SortDirection) => void;
}) => (
  <HeaderCell
    {...props}
    align={match(justifyContent)
      .returnType<Align>()
      .with("flex-start", () => "left")
      .with("flex-end", () => "right")
      .otherwise(identity)}
  />
);

/**
 * @deprecated Use `TextCell` with color={…} and variant="medium" instead
 */
export const SimpleTitleCell = ({
  isHighlighted = false,
  text,
  tooltip,
}: {
  isHighlighted?: boolean;
  text: string;
  tooltip?: TooltipProp;
}) => (
  <TextCell
    color={isHighlighted ? colors.current.primary : colors.gray[900]}
    text={text}
    tooltip={tooltip}
    variant="medium"
  />
);

/**
 * @deprecated Use `TextCell` instead
 */
export const SimpleRegularTextCell = ({
  color = colors.gray[900],
  text,
  textAlign = "left",
  variant = "regular",
}: {
  color?: string;
  text: string;
  textAlign?: Align;
  variant?: TextVariant;
}) => <TextCell align={textAlign} color={color} text={text} variant={variant} />;

/**
 * @deprecated Use `CopyableTextCell` instead
 */
export const CopyableRegularTextCell = CopyableTextCell;

/**
 * @deprecated Use `<Cell align="left" />` instead
 */
export const StartAlignedCell = (props: Except<CellProps, "align">) => (
  <Cell align="left" {...props} />
);

/**
 * @deprecated Use `<Cell align="center" />` instead
 */
export const CenteredCell = (props: Except<CellProps, "align">) => (
  <Cell align="center" {...props} />
);

/**
 * @deprecated Use `<Cell align="right" />` instead
 */
export const EndAlignedCell = (props: Except<CellProps, "align">) => (
  <Cell align="right" {...props} />
);

/**
 * @deprecated Use `<Cell align="right" />` instead
 */
export const ActionCell = (props: CellProps) => <Cell align="right" {...props} />;

/**
 * @deprecated Use <ActionCell /> instead
 */
export const CellAction = ({ children }: { children: ReactNode }) => (
  <ActionCell>{children}</ActionCell>
);
