import { ComponentProps, ReactNode, useCallback, useState } from "react";
import { GestureResponderEvent, StyleSheet, View } from "react-native";
import { match } from "ts-pattern";
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
  alternativeText: visuallyHiddenStyle,
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

type Align = "left" | "center" | "right";
type Justify = "flex-start" | "center" | "flex-end";
type SortDirection = "Desc" | "Asc";

export const HeaderCell = ({
  align = "left",
  sort,
  text,
  onPress,
}: {
  align?: Align;
  sort?: SortDirection;
  text: string;
  onPress?: (direction: SortDirection) => void;
}) => {
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

// TODO: Use `HeaderCell` instead
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

// Cell + ActionCell;
// If children is a string, add textAlign with align
export const Cell = ({ align = "left", children }: { align?: Align; children: ReactNode }) => (
  <View
    style={{
      flexDirection: "row",
      flexGrow: 1,
      flexShrink: 1,
      paddingHorizontal: spacings[16],
    }}
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

// TODO: Deprecate it (it's not visible anymore, as `isHovered` does not work)
export const ColorPatchCell = ({
  isHovered,
  alternativeText,
  color,
}: {
  isHovered: boolean;
  alternativeText?: string;
  color: ColorVariants;
}) => {
  return isHovered ? (
    <View style={[styles.colorPatch, { backgroundColor: colors[color].primary }]}>
      {isNotNullish(alternativeText) ? (
        <LakeText style={styles.alternativeText}>{alternativeText}</LakeText>
      ) : null}
    </View>
  ) : null;
};

// TODO: Merge this inside TextCell
export const SimpleTitleCell = ({
  isHighlighted = false,
  text,
  tooltip,
}: {
  isHighlighted?: boolean;
  text: string;
  tooltip?: Omit<ComponentProps<typeof LakeTooltip>, "children">;
}) => (
  <View style={styles.cell}>
    <LakeText
      numberOfLines={1}
      color={isHighlighted ? colors.current.primary : colors.gray[900]}
      style={styles.regularText}
      variant="medium"
      tooltip={tooltip}
    >
      {text}
    </LakeText>
  </View>
);

// TODO: Rename this TextCell
export const SimpleRegularTextCell = ({
  variant = "regular",
  text,
  textAlign = "left",
  color = colors.gray[900],
}: {
  variant?: TextVariant;
  text: string;
  textAlign?: "left" | "center" | "right";
  color?: string;
}) => {
  return (
    <View style={styles.cell}>
      <LakeText align={textAlign} color={color} style={styles.regularText} variant={variant}>
        {text}
      </LakeText>
    </View>
  );
};

// TODO: Rename this CopyableTextCell
export const CopyableRegularTextCell = ({
  variant = "regular",
  text,
  textToCopy,
  copyWording,
  copiedWording,
  tooltip,
}: {
  variant?: TextVariant;
  text: string;
  textToCopy?: string;
  copyWording: string;
  copiedWording: string;
  tooltip?: Omit<ComponentProps<typeof LakeTooltip>, "children">;
}) => {
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
    <View style={styles.cell}>
      <LakeTooltip
        placement="right"
        onHide={() => setVisibleState("copy")}
        togglableOnFocus={true}
        content={visibleState === "copy" ? copyWording : copiedWording}
        containerStyle={styles.iconContainer}
      >
        <Pressable
          role="button"
          aria-label={copyWording}
          onPress={onPress}
          style={({ hovered }) => [styles.icon, hovered && styles.underline]}
        >
          {({ hovered }) => (
            <Icon name={hovered ? "copy-filled" : "copy-regular"} color="currentColor" size={14} />
          )}
        </Pressable>
      </LakeTooltip>

      <Space width={4} />

      <LakeText
        tooltip={tooltip}
        color={colors.gray[900]}
        style={styles.regularText}
        variant={variant}
      >
        {text}
      </LakeText>
    </View>
  );
};

// TODO: handle `+` sign properly + reuse Cell
export const BalanceCell = ({
  value,
  currency,
  originalValue,
  formatCurrency,
  textAlign = "right",
  variant = "medium",
}: {
  value: number;
  currency: string;
  originalValue?: { value: number; currency: string };
  formatCurrency: (value: number, currency: string) => string;
  textAlign?: "left" | "center" | "right";
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
  children,
  external = false,
  onPress,
  variant = "medium",
  tooltip,
  buttonPosition = "start",
}: {
  children: ReactNode;
  onPress: () => void;
  external?: boolean;
  variant?: TextVariant;
  tooltip?: Omit<ComponentProps<typeof LakeTooltip>, "children">;
  buttonPosition?: "start" | "end";
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
 * @deprecated Use <Cell align="left" /> instead
 */
export const StartAlignedCell = ({ children }: { children: ReactNode }) => {
  return <View style={styles.cell}>{children}</View>;
};

/**
 * @deprecated Use <Cell align="center" /> instead
 */
export const CenteredCell = ({ children }: { children: ReactNode }) => {
  return <View style={[styles.cell, styles.centeredCell]}>{children}</View>;
};

/**
 * @deprecated Use <Cell align="right" /> instead
 */
export const EndAlignedCell = ({ children }: { children: ReactNode }) => {
  return <View style={[styles.cell, styles.endAlignedCell]}>{children}</View>;
};

// TODO: Rename this ActionCell

/**
 * @deprecated Use <ActionCell /> instead
 */
export const CellAction = ({ children }: { children: ReactNode }) => {
  return <View style={styles.cellAction}>{children}</View>;
};
