import { ReactNode, useCallback, useState } from "react";
import { Clipboard, GestureResponderEvent, StyleSheet, View } from "react-native";
import { match } from "ts-pattern";
import { visuallyHiddenStyle } from "../constants/commonStyles";
import { ColorVariants, colors, spacings } from "../constants/design";
import { isNotNullish, isNullish } from "../utils/nullish";
import { Box } from "./Box";
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
  cell: {
    display: "flex",
    paddingHorizontal: spacings[16],
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    width: 1,
    alignSelf: "stretch",
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

type Justify = "flex-start" | "center" | "flex-end";
type SortDirection = "Desc" | "Asc";

export const SimpleHeaderCell = ({
  text,
  sort,
  justifyContent = "flex-start",
  onPress,
}: {
  text: string;
  justifyContent?: Justify;
  sort?: SortDirection;
  onPress?: (direction: SortDirection) => void;
}) => {
  const sortActive = isNotNullish(sort) && isNotNullish(onPress);

  return (
    <Pressable
      onPress={() => {
        onPress?.(
          match<SortDirection | undefined, SortDirection>(sort)
            .with("Desc", () => "Asc")
            .with("Asc", () => "Desc")
            .otherwise(() => "Desc"),
        );
      }}
      disabled={isNullish(onPress)}
      style={styles.cellContainer}
    >
      {({ hovered }) => (
        <View style={[styles.cell, { justifyContent }]}>
          <View>
            <Box direction="row" alignItems="center">
              <LakeText
                numberOfLines={1}
                variant="medium"
                color={sortActive ? colors.current[500] : colors.gray[900]}
                style={{
                  textAlign: match(justifyContent)
                    .with("flex-start", () => "left" as const)
                    .with("center", () => "center" as const)
                    .with("flex-end", () => "right" as const)
                    .exhaustive(),
                }}
              >
                {text}
              </LakeText>

              {isNotNullish(onPress) ? (
                <>
                  <Space width={8} />

                  <Box style={[styles.sortIcon, sort === "Asc" && styles.sortIconReversed]}>
                    <Icon
                      size={15}
                      color={sortActive ? colors.current[500] : colors.gray[500]}
                      name={sortActive ? "arrow-down-filled" : "chevron-up-down-regular"}
                    />
                  </Box>
                </>
              ) : null}
            </Box>

            {sortActive ? (
              <View style={styles.sortHorizontalBar} />
            ) : hovered ? (
              <View style={[styles.sortHorizontalBar, { backgroundColor: colors.gray[900] }]} />
            ) : null}
          </View>
        </View>
      )}
    </Pressable>
  );
};

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

export const SimpleTitleCell = ({
  isHighlighted = false,
  text,
}: {
  isHighlighted?: boolean;
  text: string;
}) => (
  <View style={styles.cell}>
    <LakeText
      numberOfLines={1}
      color={colors.gray[900]}
      variant="medium"
      {...(isHighlighted && {
        color: colors.current.primary,
      })}
    >
      {text}
    </LakeText>
  </View>
);

export const SimpleRegularTextCell = ({
  variant = "regular",
  text,
  textAlign = "left",
}: {
  variant?: TextVariant;
  text: string;
  textAlign?: "left" | "center" | "right";
}) => {
  return (
    <View style={styles.cell}>
      <LakeText
        align={textAlign}
        color={colors.gray[900]}
        style={styles.regularText}
        variant={variant}
      >
        {text}
      </LakeText>
    </View>
  );
};

export const CopyableRegularTextCell = ({
  variant = "regular",
  text,
  copyWording,
  copiedWording,
}: {
  variant?: TextVariant;
  text: string;
  copyWording: string;
  copiedWording: string;
}) => {
  const [visibleState, setVisibleState] = useState<"copy" | "copied">("copy");

  const onPress = useCallback(
    (event: GestureResponderEvent) => {
      event.preventDefault();
      Clipboard.setString(text);
      setVisibleState("copied");
    },
    [text],
  );

  return (
    <View style={styles.cell}>
      <LakeTooltip
        placement="top"
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

      <LakeText color={colors.gray[900]} style={styles.regularText} variant={variant}>
        {text}
      </LakeText>
    </View>
  );
};

// TODO: handle `+` sign properly
export const BalanceCell = ({
  value,
  currency,
  formatCurrency,
  textAlign = "right",
}: {
  value: number;
  currency: string;
  formatCurrency: (value: number, currency: string) => string;
  textAlign?: "left" | "center" | "right";
}) => {
  return (
    <View style={styles.cell}>
      <LakeText
        align={textAlign}
        color={colors.gray[900]}
        variant="medium"
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
  );
};

export const LinkCell = ({
  children,
  external = false,
  onPress,
}: {
  children: ReactNode;
  onPress: () => void;
  external?: boolean;
}) => {
  return (
    <View style={styles.cell}>
      <Pressable
        style={({ hovered }) => [styles.icon, hovered && styles.underline]}
        onPress={event => {
          event.preventDefault();
          onPress();
        }}
      >
        <Icon size={14} name={external ? "open-regular" : "arrow-right-filled"} />
      </Pressable>

      <Space width={8} />

      <LakeText color={colors.gray[900]} variant="medium" style={styles.mediumText}>
        {children}
      </LakeText>
    </View>
  );
};

export const StartAlignedCell = ({ children }: { children: ReactNode }) => {
  return <View style={styles.cell}>{children}</View>;
};

export const CenteredCell = ({ children }: { children: ReactNode }) => {
  return <View style={[styles.cell, styles.centeredCell]}>{children}</View>;
};

export const EndAlignedCell = ({ children }: { children: ReactNode }) => {
  return <View style={[styles.cell, styles.endAlignedCell]}>{children}</View>;
};

export const CellAction = ({ children }: { children: ReactNode }) => {
  return <View style={styles.cellAction}>{children}</View>;
};
