import { ComponentProps, ReactNode, useCallback, useState } from "react";
import { GestureResponderEvent, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { match } from "ts-pattern";
import { Except } from "type-fest";
import { visuallyHiddenStyle } from "../constants/commonStyles";
import { ColorVariants, colors, spacings } from "../constants/design";
import { setClipboardText } from "../utils/clipboard";
import { identity } from "../utils/function";
import { isNotNullish, isNullish } from "../utils/nullish";
import { Icon } from "./Icon";
import { LakeText, TextVariant } from "./LakeText";
import { LakeTooltip } from "./LakeTooltip";
import { Pressable } from "./Pressable";
import { Space } from "./Space";

const styles = StyleSheet.create({
  cellContainer: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  balanceCellContainer: {
    width: "100%",
  },
  cell: {
    display: "flex",
    paddingHorizontal: spacings[16],
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  disabledCellHeader: {
    cursor: "text",
  },
  icon: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacings[4],
  },
  iconContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "stretch",
    justifyContent: "center",
  },
  centeredCell: {
    justifyContent: "center",
  },
  endAlignedCell: {
    justifyContent: "flex-end",
  },
  regularText: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: 1,
    flexGrow: 1,
    whiteSpace: "nowrap",
  },
  mediumText: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: 1,
    flexGrow: 1,
    whiteSpace: "nowrap",
    flexDirection: "row",
    alignItems: "center",
  },
  colorPatch: {
    flexGrow: 1,
  },
  alternativeText: {
    ...visuallyHiddenStyle,
  },
  sortIcon: {
    transitionProperty: "transform",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-in-out",
  },
  sortIconReversed: {
    transform: "rotate(-180deg)",
  },
  cellAction: {
    paddingVertical: spacings[16],
    paddingHorizontal: spacings[8],
  },
  underline: {
    boxShadow: "inset 0 -2px currentColor",
  },
  sortHorizontalBar: {
    position: "absolute",
    width: "100%",
    height: 2,
    bottom: -10,
    backgroundColor: colors.current[500],
    borderBottomColor: colors.current[500],
  },
});

type TooltipProp = Except<ComponentProps<typeof LakeTooltip>, "children">;
type Align = "left" | "center" | "right";
type SortDirection = "Desc" | "Asc";

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
      style={[
        {
          flexDirection: "row",
          flexGrow: 1,
          flexShrink: 1,
          paddingHorizontal: spacings[16],
        },
        disabled && {
          cursor: "text",
        },
      ]}
      onPress={() => {
        onPress?.(
          match(sort)
            .returnType<SortDirection>()
            .with("Desc", () => "Asc")
            .with("Asc", () => "Desc")
            .otherwise(() => "Desc"),
        );
      }}
    >
      {({ hovered }) => (
        <View
          style={[
            {
              flexShrink: 1,
              flexDirection: "row",
              alignItems: "center",
            },
            {
              marginLeft: align === "right" || align === "center" ? "auto" : undefined,
              marginRight: align === "left" || align === "center" ? "auto" : undefined,
            },
          ]}
        >
          <LakeText
            numberOfLines={1}
            variant="medium"
            color={sortActive ? colors.current[500] : colors.gray[900]}
            style={{ textAlign: align }}
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
                style={[
                  {
                    transitionProperty: "transform",
                    transitionDuration: "300ms",
                    transitionTimingFunction: "ease-in-out",
                  },
                  sort === "Asc" && {
                    transform: "rotate(-180deg)",
                  },
                ]}
              />
            </>
          )}

          {(hovered || sortActive) && (
            <View
              style={[
                {
                  position: "absolute",
                  width: "100%",
                  height: 2,
                  bottom: -10,
                  backgroundColor: colors.gray[900],
                  borderBottomColor: colors.current[500],
                },
                sortActive && {
                  backgroundColor: colors.current[500],
                },
              ]}
            />
          )}
        </View>
      )}
    </Pressable>
  );
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

type CellProps = {
  align?: Align;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

// Cell + ActionCell;
// If children is a string, add textAlign with align
export const Cell = ({ align = "left", children, style }: CellProps) => (
  <View
    style={[
      {
        flexDirection: "row",
        flexGrow: 1,
        flexShrink: 1,
        paddingHorizontal: spacings[16],
      },
      style,
    ]}
  >
    <View
      style={[
        {
          flexShrink: 1,
          flexDirection: "row",
          alignItems: "center",
        },
        {
          marginLeft: align === "right" || align === "center" ? "auto" : undefined,
          marginRight: align === "left" || align === "center" ? "auto" : undefined,
        },
      ]}
    >
      {children}
    </View>
  </View>
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
    <View style={[styles.colorPatch, { backgroundColor: colors[color].primary }]}>
      {isNotNullish(alternativeText) ? (
        <LakeText style={styles.alternativeText}>{alternativeText}</LakeText>
      ) : null}
    </View>
  ) : null;
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
    <LakeText
      numberOfLines={1}
      color={color}
      style={{ textAlign: align }}
      tooltip={tooltip}
      variant={variant}
    >
      {text}
    </LakeText>
  </Cell>
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
  textAlign?: "left" | "center" | "right";
  variant?: TextVariant;
}) => <TextCell align={textAlign} color={color} text={text} variant={variant} />;

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
      <LakeTooltip
        placement="right"
        onHide={() => setVisibleState("copy")}
        togglableOnFocus={true}
        content={visibleState === "copy" ? copyWording : copiedWording}
        containerStyle={{
          flexDirection: "row",
          alignSelf: "stretch",
          alignItems: "stretch",
          justifyContent: "center",
        }}
      >
        <Pressable
          role="button"
          aria-label={copyWording}
          onPress={onPress}
          style={({ hovered }) => [
            {
              alignSelf: "stretch",
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: spacings[4],
            },
            hovered && {
              boxShadow: "inset 0 -2px currentColor",
            },
          ]}
        >
          {({ hovered }) => (
            <Icon name={hovered ? "copy-filled" : "copy-regular"} color="currentColor" size={14} />
          )}
        </Pressable>
      </LakeTooltip>

      <Space width={4} />

      <LakeText numberOfLines={1} color={colors.gray[900]} tooltip={tooltip} variant={variant}>
        {text}
      </LakeText>
    </Cell>
  );
};

/**
 * @deprecated Use `CopyableTextCell` instead
 */
export const CopyableRegularTextCell = (props: CopyableTextCellProps) => (
  <CopyableTextCell {...props} />
);

// TODO: handle `+` sign properly + reuse Cell
export const BalanceCell = ({
  currency,
  formatCurrency,
  originalValue,
  textAlign = "right",
  value,
  variant = "medium",
}: {
  currency: string;
  formatCurrency: (value: number, currency: string) => string;
  originalValue?: { value: number; currency: string };
  textAlign?: "left" | "center" | "right";
  value: number;
  variant?: TextVariant;
}) => {
  return (
    <View style={styles.balanceCellContainer}>
      <View style={styles.cell}>
        <LakeText
          align={textAlign}
          color={colors.gray[900]}
          variant={variant}
          style={[
            styles.mediumText,
            {
              justifyContent: match(textAlign)
                .with("left", () => "flex-start" as const)
                .with("center", () => "center" as const)
                .with("right", () => "flex-end" as const)
                .exhaustive(),
            },
            value > 0 && { color: colors.positive.primary },
            value < 0 && { color: colors.negative.primary },
          ]}
        >
          {value > 0 && "+"}
          {formatCurrency(value, currency)}
        </LakeText>
      </View>

      {isNotNullish(originalValue) && originalValue.currency !== currency && (
        <View style={styles.cell}>
          <LakeText
            style={styles.mediumText}
            align={textAlign}
            color={colors.gray[500]}
            variant="smallRegular"
          >
            {originalValue.value > 0 && "+"}
            {formatCurrency(originalValue.value, originalValue.currency)}
          </LakeText>
        </View>
      )}
    </View>
  );
};

// TODO: Reuse Cell
export const LinkCell = ({
  buttonPosition = "start",
  children,
  external = false,
  onPress,
  tooltip,
  variant = "medium",
}: {
  buttonPosition?: "start" | "end";
  children: ReactNode;
  external?: boolean;
  onPress: () => void;
  tooltip?: TooltipProp;
  variant?: TextVariant;
}) => {
  const ArrowButton = () => (
    <Pressable
      style={({ hovered }) => [styles.icon, hovered && styles.underline]}
      onPress={event => {
        event.preventDefault();
        onPress();
      }}
    >
      <Icon size={14} name={external ? "open-regular" : "arrow-right-filled"} />
    </Pressable>
  );

  return (
    <View style={styles.cell}>
      {buttonPosition === "start" && (
        <>
          <ArrowButton />
          <Space width={8} />
        </>
      )}

      <LakeText
        color={colors.gray[900]}
        variant={variant}
        style={styles.mediumText}
        tooltip={tooltip}
      >
        {children}
      </LakeText>

      {buttonPosition === "end" && (
        <>
          <Space width={8} />
          <ArrowButton />
        </>
      )}
    </View>
  );
};

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
  <Cell
    {...props}
    style={[
      style,
      {
        paddingVertical: spacings[16],
        paddingHorizontal: spacings[8],
      },
    ]}
  />
);

/**
 * @deprecated Use <ActionCell /> instead
 */
export const CellAction = ({ children }: { children: ReactNode }) => (
  <ActionCell>{children}</ActionCell>
);
