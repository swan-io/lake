import {
  Children,
  cloneElement,
  Fragment,
  ReactElement,
  ReactNode,
  useCallback,
  useId,
  useState,
} from "react";
import {
  LayoutChangeEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import {
  backgroundColor,
  colors,
  negativeSpacings,
  radii,
  Spacings,
  shadows,
  spacings,
  texts,
} from "../constants/design";
import { useDisclosure } from "../hooks/useDisclosure";
import { isNotNullish } from "../utils/nullish";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { LakeText } from "./LakeText";
import { ResponsiveContainer } from "./ResponsiveContainer";
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
  chevron: {
    transitionProperty: "transform",
    transitionDuration: "200ms",
  },
  chevronOpen: {
    transform: "rotate(180deg)",
  },
  collapsibleContent: {
    display: "grid",
    gridTemplateRows: "0fr",
    transitionProperty: "grid-template-rows",
    transitionDuration: "300ms",
  },
  collapsibleContentOpen: {
    gridTemplateRows: "1fr",
  },
  collapsibleInner: {
    overflow: "hidden",
  },
});

type Props = {
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
  collapsible?: boolean;
  defaultExpanded?: boolean;
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
  collapsible = false,
  defaultExpanded = true,
  style,
}: Props) => {
  const contentId = useId();
  const [expanded, { toggle }] = useDisclosure(defaultExpanded);

  const hasHeader =
    isNotNullish(title) || isNotNullish(headerEnd) || isNotNullish(description) || collapsible;

  const header = (
    <>
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

        {collapsible ? (
          <Icon
            name="chevron-down-filled"
            size={16}
            color={colors.gray[500]}
            style={[styles.chevron, expanded && styles.chevronOpen]}
          />
        ) : isNotNullish(headerEnd) ? (
          <View>{headerEnd}</View>
        ) : null}
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
    </>
  );

  const content = (
    <>
      {children}

      {isNotNullish(footer) && (
        <View
          style={[styles.footer, { marginTop: paddingVertical, marginBottom: -paddingVertical }]}
        >
          {footer}
        </View>
      )}
    </>
  );

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
      {collapsible ? (
        <>
          {hasHeader && (
            <Pressable
              role="button"
              aria-expanded={expanded}
              aria-controls={contentId}
              onPress={toggle}
              style={styles.headerContainer}
            >
              {header}
            </Pressable>
          )}

          <View
            role="region"
            nativeID={contentId}
            aria-hidden={!expanded}
            style={[styles.collapsibleContent, expanded && styles.collapsibleContentOpen]}
          >
            <View style={styles.collapsibleInner}>
              {isNotNullish(children) && hasHeader && <Space height={24} />}

              {content}
            </View>
          </View>
        </>
      ) : (
        <>
          {hasHeader && (
            <View style={styles.headerContainer}>
              {header}

              {isNotNullish(children) && <Space height={24} />}
            </View>
          )}

          {content}
        </>
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
  return (
    <ResponsiveContainer breakpoint={breakpoint}>
      {({ small, large }) => {
        const childrenArray = Children.toArray(children);
        const leftColumn: ReactNode[] = [];
        const rightColumn: ReactNode[] = [];

        const nonNullChildren = childrenArray.filter(isNotNullish);

        nonNullChildren.forEach((item, index) => {
          if (small || index % 2 === 0) {
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

        return (
          <Box direction={small ? "column" : "row"}>
            <View style={[large && styles.column, large && { flexBasis: breakpoint / 2 }]}>
              {leftColumn}
            </View>

            <Space width={24} />

            <View style={[large && styles.column, large && { flexBasis: breakpoint / 2 }]}>
              {rightColumn}
            </View>
          </Box>
        );
      }}
    </ResponsiveContainer>
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
            {cloneElement(
              item as ReactElement,
              // @ts-expect-error
              { flexGrow: 1 },
            )}
          </View>
        );
      })}
    </Box>
  );
};
