import {
  Children,
  cloneElement,
  Fragment,
  ReactElement,
  ReactNode,
  useCallback,
  useState,
} from "react";
import { LayoutChangeEvent, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import {
  backgroundColor,
  colors,
  negativeSpacings,
  radii,
  shadows,
  Spacings,
  spacings,
  texts,
} from "../constants/design";
import { isNotNullish } from "../utils/nullish";
import { Box } from "./Box";
import { LakeText } from "./LakeText";
import { Space } from "./Space";

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor.accented,
    borderRadius: radii[8],
    boxShadow: shadows.tile,
    overflow: "hidden",
  },
  unselectedContainer: {
    backgroundColor: backgroundColor.default,
    boxShadow: `0 0 0 1px ${colors.gray[100]}`,
  },
  unselectedHoveredContainer: {
    backgroundColor: backgroundColor.default,
    boxShadow: `0 0 0 1px ${colors.gray[500]}`,
  },
  disabled: {
    opacity: 0.5,
  },
  hoveredContainer: {
    boxShadow: shadows.tileHover,
  },
  headerContainer: {
    zIndex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  title: {
    ...texts.h3,
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  fullWidthContent: {
    marginHorizontal: negativeSpacings[32],
  },
  fitToBottom: {
    marginBottom: negativeSpacings[32],
  },
  column: {
    flexGrow: 1,
  },
  descriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  description: {
    width: 1,
    flexGrow: 1,
  },
  headerTitleIcon: {
    flexGrow: 1,
  },
  row: {
    alignItems: "stretch",
    marginHorizontal: negativeSpacings[12],
  },
  rowCol: {
    flexGrow: 1,
    padding: spacings[12],
  },
  footer: {
    marginHorizontal: negativeSpacings[32],
    alignSelf: "stretch",
  },
});

export type TileProps = {
  icon?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  headerEnd?: ReactNode;
  paddingVertical?: Spacings;
  paddingHorizontal?: Spacings;
  children?: ReactNode;
  footer?: ReactNode;
  numberOfLines?: number;
  flexBasis?: string;
  flexGrow?: number;
  flexShrink?: number;
  hovered?: boolean;
  disabled?: boolean;
  selected?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const Tile = ({
  icon,
  title,
  description,
  headerEnd,
  footer,
  flexBasis,
  children,
  numberOfLines,
  paddingVertical = 32,
  paddingHorizontal = 32,
  hovered = false,
  flexGrow = 0,
  flexShrink = 0,
  disabled = false,
  selected,
  style,
}: TileProps) => {
  return (
    <View
      role="region"
      style={[
        styles.container,
        selected === false && styles.unselectedContainer,
        {
          paddingVertical: spacings[paddingVertical],
          paddingHorizontal: spacings[paddingHorizontal],
          flexGrow,
          flexShrink,
          flexBasis,
        },
        hovered && styles.hoveredContainer,
        selected === false && hovered && styles.unselectedHoveredContainer,
        disabled && styles.disabled,
        style,
      ]}
    >
      {(isNotNullish(title) || isNotNullish(headerEnd) || isNotNullish(description)) && (
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <View style={styles.headerTitleIcon}>
              {isNotNullish(icon) && (
                <>
                  {icon}

                  <Space height={12} />
                </>
              )}

              {isNotNullish(title) && (
                <Text style={styles.title} role="heading" aria-level={3}>
                  {title}
                </Text>
              )}
            </View>

            {isNotNullish(headerEnd) ? <View>{headerEnd}</View> : null}
          </View>

          {isNotNullish(description) && (
            <>
              {isNotNullish(title) && <Space height={12} />}

              <View style={styles.descriptionContainer}>
                <LakeText numberOfLines={numberOfLines} style={styles.description}>
                  {description}
                </LakeText>
              </View>
            </>
          )}

          {isNotNullish(children) && <Space height={24} />}
        </View>
      )}

      {children}

      {isNotNullish(footer) && (
        <View
          style={[styles.footer, { marginTop: paddingVertical, marginBottom: -paddingVertical }]}
        >
          {footer}
        </View>
      )}
    </View>
  );
};

export const TileFullWidthContent = ({
  children,
  flexGrow,
  fitToBottom = false,
}: {
  children: ReactNode;
  flexGrow?: number;
  fitToBottom?: boolean;
}) => {
  return (
    <View style={[styles.fullWidthContent, fitToBottom && styles.fitToBottom, { flexGrow }]}>
      {children}
    </View>
  );
};

type TileGridProps = {
  breakpoint?: number;
  children: ReactNode;
};

const SPACE = <Space height={24} />;

export const TileGrid = ({ children, breakpoint = 1000 }: TileGridProps) => {
  const [flexDirection, setFlexDirection] = useState<"row" | "column">("row");

  const onLayout = useCallback(
    ({
      nativeEvent: {
        layout: { width },
      },
    }: LayoutChangeEvent) => {
      setFlexDirection(() => (width < breakpoint ? "column" : "row"));
    },
    [breakpoint],
  );

  const childrenArray = Children.toArray(children);
  const leftColumn: ReactNode[] = [];
  const rightColumn: ReactNode[] = [];

  const nonNullChildren = childrenArray.filter(isNotNullish);

  nonNullChildren.forEach((item, index) => {
    if (flexDirection === "column" || index % 2 === 0) {
      leftColumn.push(
        <Fragment key={index}>
          {item}
          {SPACE}
        </Fragment>,
      );
    } else {
      rightColumn.push(
        <Fragment key={index}>
          {item}
          {SPACE}
        </Fragment>,
      );
    }
  });

  const isRow = flexDirection === "row";
  return (
    <Box direction={flexDirection} onLayout={onLayout}>
      <View style={[isRow && styles.column, isRow && { flexBasis: breakpoint / 2 }]}>
        {leftColumn}
      </View>

      <Space width={24} />

      <View style={[isRow && styles.column, isRow && { flexBasis: breakpoint / 2 }]}>
        {rightColumn}
      </View>
    </Box>
  );
};

export const TileRows = ({ children, breakpoint = 1000 }: TileGridProps) => {
  const [flexDirection, setFlexDirection] = useState<"row" | "column">("row");

  const onLayout = useCallback(
    ({
      nativeEvent: {
        layout: { width },
      },
    }: LayoutChangeEvent) => {
      setFlexDirection(() => (width < breakpoint ? "column" : "row"));
    },
    [breakpoint],
  );

  const childrenArray = Children.toArray(children);
  const nonNullChildren = childrenArray.filter(isNotNullish);

  const isRow = flexDirection === "row";

  return (
    <Box direction={flexDirection} onLayout={onLayout} style={styles.row}>
      {nonNullChildren.map((item, index) => {
        return (
          <View key={index} style={[styles.rowCol, isRow && { flexBasis: breakpoint / 2 }]}>
            {cloneElement(item as unknown as ReactElement, { flexGrow: 1 })}
          </View>
        );
      })}
    </Box>
  );
};
