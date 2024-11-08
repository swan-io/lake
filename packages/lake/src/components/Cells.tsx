import { ComponentProps, ReactNode, useCallback, useState } from "react";
import { GestureResponderEvent, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { match } from "ts-pattern";
import { Except } from "type-fest";
import { visuallyHiddenStyle } from "../constants/commonStyles";
import { ColorVariants, colors, negativeSpacings, spacings } from "../constants/design";
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
  column: {
    flexShrink: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  columnReverse: {
    flexShrink: 1,
    flexDirection: "column-reverse",
    justifyContent: "center",
  },
  row: {
    flexShrink: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  rowReverse: {
    flexShrink: 1,
    flexDirection: "row-reverse",
    alignItems: "center",
  },
});
/* eslint-enable react-native/no-unused-styles */

const styles = StyleSheet.create({
  cell: {
    flexDirection: "row",
    flexGrow: 1,
    flexShrink: 1,
    paddingHorizontal: spacings[16],
  },
  noCursor: {
    cursor: "text",
  },
  marginLeftAuto: {
    marginLeft: "auto",
  },
  marginRightAuto: {
    marginRight: "auto",
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
  buttonUnderline: {
    boxShadow: "inset 0 -2px currentColor",
  },
  copyButton: {
    justifyContent: "center",
    alignSelf: "stretch",
    marginHorizontal: negativeSpacings[8],
  },
  copyButtonTooltip: {
    justifyContent: "center",
    height: "100%",
    paddingHorizontal: spacings[8],
  },
  linkButton: {
    justifyContent: "center",
    alignSelf: "stretch",
    marginHorizontal: negativeSpacings[8],
    paddingHorizontal: spacings[8],
  },
  actionCell: {
    paddingVertical: spacings[16],
    paddingHorizontal: spacings[8],
  },
});

type Align = "left" | "center" | "right";
type SortDirection = "Desc" | "Asc";
type TooltipProp = Except<ComponentProps<typeof LakeTooltip>, "children">;

type CellProps = {
  children: ReactNode;
  align?: Align;
  direction?: keyof typeof directionStyles;
  style?: StyleProp<ViewStyle>;
};

export const Cell = ({ children, align = "left", direction = "row", style }: CellProps) => (
  <View style={[styles.cell, style]}>
    <View
      style={[
        directionStyles[direction],
        (align === "right" || align === "center") && styles.marginLeftAuto,
        (align === "left" || align === "center") && styles.marginRightAuto,
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
            directionStyles["row"],
            (align === "right" || align === "center") && styles.marginLeftAuto,
            (align === "left" || align === "center") && styles.marginRightAuto,
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
    <Cell>
      <Pressable
        aria-label={copyWording}
        role="button"
        onPress={onPress}
        style={({ hovered }) => [styles.copyButton, hovered && styles.buttonUnderline]}
      >
        {({ hovered }) => (
          <LakeTooltip
            content={visibleState === "copy" ? copyWording : copiedWording}
            onHide={() => setVisibleState("copy")}
            placement="center"
            togglableOnFocus={true}
            containerStyle={styles.copyButtonTooltip}
          >
            <Icon name={hovered ? "copy-filled" : "copy-regular"} color="currentColor" size={14} />
          </LakeTooltip>
        )}
      </Pressable>

      <Space width={8} />

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
  textAlign = "right",
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
  onPress: () => void;
  tooltip?: TooltipProp;
  variant?: TextVariant;
};

export const LinkCell = ({
  buttonPosition = "start",
  children,
  external = false,
  onPress,
  tooltip,
  variant = "medium",
}: LinkCellProps) => (
  <Cell direction={buttonPosition === "end" ? "rowReverse" : "row"}>
    <Pressable
      style={({ hovered }) => [styles.linkButton, hovered && styles.buttonUnderline]}
      onPress={event => {
        event.preventDefault();
        onPress();
      }}
    >
      <Icon size={14} name={external ? "open-regular" : "arrow-right-filled"} />
    </Pressable>

    <Space width={8} />

    <LakeText numberOfLines={1} color={colors.gray[900]} variant={variant} tooltip={tooltip}>
      {children}
    </LakeText>
  </Cell>
);

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

export const ActionCell = ({ style, ...props }: CellProps) => (
  <Cell {...props} style={[styles.actionCell, style]} />
);

/**
 * @deprecated Use <ActionCell /> instead
 */
export const CellAction = ({ children }: { children: ReactNode }) => (
  <ActionCell>{children}</ActionCell>
);
