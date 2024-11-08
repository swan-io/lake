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

const styles = StyleSheet.create({});

type Align = "left" | "center" | "right";
type SortDirection = "Desc" | "Asc";
type TooltipProp = Except<ComponentProps<typeof LakeTooltip>, "children">;

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

type CellProps = {
  children: ReactNode;
  align?: Align;
  direction?: ViewStyle["flexDirection"];
  style?: StyleProp<ViewStyle>;
};

export const Cell = ({ children, align = "left", direction = "row", style }: CellProps) => (
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
          flexDirection: direction,
        },
        direction === "row" || direction === "row-reverse"
          ? { alignItems: "center" }
          : { justifyContent: "center" },
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
        style={({ hovered }) => [
          {
            alignSelf: "stretch",
            justifyContent: "center",
            marginHorizontal: negativeSpacings[8],
          },
          hovered && {
            boxShadow: "inset 0 -2px currentColor",
          },
        ]}
      >
        {({ hovered }) => (
          <LakeTooltip
            content={visibleState === "copy" ? copyWording : copiedWording}
            onHide={() => setVisibleState("copy")}
            placement="center"
            togglableOnFocus={true}
            containerStyle={{
              height: "100%",
              justifyContent: "center",
              paddingHorizontal: spacings[8],
            }}
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
  <Cell direction={buttonPosition === "end" ? "row-reverse" : "row"}>
    <Pressable
      style={({ hovered }) => [
        {
          alignSelf: "stretch",
          justifyContent: "center",
          marginHorizontal: negativeSpacings[8],
          paddingHorizontal: spacings[8],
        },

        hovered && {
          boxShadow: "inset 0 -2px currentColor",
        },
      ]}
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
