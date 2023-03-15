import {
  cloneElement,
  Fragment,
  ReactElement,
  ReactNode,
  RefObject,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  PressableStateCallbackType,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { backgroundColor, breakpoints, colors, spacings } from "../constants/design";
import { useHover } from "../hooks/useHover";
import { isNotNullish, isNullish } from "../utils/nullish";
import {
  ColumnCellConfig,
  ColumnTitleConfig,
  LinkConfig,
  PlainListViewPlaceholder,
} from "./FixedListView";
import { LakeHeading } from "./LakeHeading";
import { ResponsiveContainer } from "./ResponsiveContainer";

export type ColumnConfig<T, ExtraInfo> = {
  id: string;
  width: number | "grow";
  title: string;
  renderTitle: (props: ColumnTitleConfig<ExtraInfo>) => ReactNode;
  renderCell: (props: ColumnCellConfig<T, ExtraInfo>) => ReactNode;
};

const INHERIT = "inherit";

type Props<T, ExtraInfo> = {
  data: T[];
  keyExtractor: (item: T, index: number) => string;
  highlightedRowId?: string;
  headerHeight: number;
  rowHeight: number;
  groupHeaderHeight: number;
  extraInfo: ExtraInfo;
  columns: ColumnConfig<T, ExtraInfo>[];
  smallColumns?: ColumnConfig<T, ExtraInfo>[];
  onEndReached?: () => void;
  onEndReachedThresholdPx?: number;
  getRowLink?: (
    config: LinkConfig<T, ExtraInfo>,
  ) => ReactElement<{ children: (state: PressableStateCallbackType) => React.ReactNode }>;
  renderEmptyList?: () => ReactNode;
  groupBy?: (item: T) => string;
  onActiveRowChange?: (element: HTMLElement) => void;
  activeRowId?: string;
  loading?: {
    isLoading: boolean;
    count: number;
  };
  breakpoint?: number;
};

const styles = StyleSheet.create({
  root: {
    height: 1,
    alignSelf: "stretch",
    flexGrow: 1,
    backgroundColor: backgroundColor.default,
  },
  container: {
    height: 1,
    alignSelf: "stretch",
    flexGrow: 1,
  },
  contentContainer: {
    flexDirection: "column",
    alignItems: "stretch",
    flexGrow: 1,
  },
  segment: {
    flexDirection: "row",
    alignItems: "stretch",
    overflow: "hidden",
    paddingHorizontal: spacings[8],
  },
  segmentLarge: {
    paddingHorizontal: spacings[24],
  },
  row: {
    boxShadow: `inset 0 -1px ${colors.gray[100]}`,
  },
  activeRow: {
    backgroundColor: backgroundColor.accented,
  },
  hoveredRow: {
    backgroundColor: backgroundColor.accented,
  },
  segmentHeaderCell: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  stickyHeader: {
    position: "sticky",
    top: 0,
    backgroundColor: backgroundColor.default90Transparency,
    backdropFilter: "blur(4px)",
    zIndex: 10,
    paddingHorizontal: spacings[24],
    flexDirection: "row",
    alignItems: "center",
  },
  stickyHeaderLarge: {
    paddingHorizontal: spacings[40],
  },
  loadingPlaceholder: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
  },
  rowLink: {
    color: INHERIT,
    textDecorationLine: "none",
  },
  emptyListContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: spacings[48],
    backgroundColor: backgroundColor.default,
  },
});

const ONE = 1;
const ZERO = 0;

const Row = <T, ExtraInfo>({
  id,
  item,
  index,
  rowHeight,
  columns,
  extraInfo,
  isActive,
  isHovered,
  large,
  onMouseEnter,
  onMouseLeave,
}: {
  id: string;
  item: T;
  index: number;
  rowHeight: number;
  columns: ColumnConfig<T, ExtraInfo>[];
  extraInfo: ExtraInfo;
  isActive: boolean;
  isHovered: boolean;
  large: boolean;
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
}) => {
  const containerRef = useRef(null);

  useHover(containerRef, {
    onHoverStart: () => onMouseEnter(id),
    onHoverEnd: () => onMouseLeave(),
  });

  return (
    <View
      ref={containerRef}
      style={[
        styles.segment,
        large && styles.segmentLarge,
        styles.row,
        isActive && styles.activeRow,
        isHovered && styles.hoveredRow,
        { minHeight: rowHeight },
      ]}
    >
      {columns.map(({ width, id: columnId, renderCell }) => (
        <View
          style={[
            styles.segmentHeaderCell,
            {
              width: typeof width === "number" ? width : ONE,
              flexGrow: width === "grow" ? ONE : ZERO,
            },
          ]}
          nativeID={columnId}
          key={columnId}
        >
          {renderCell({ columnId, item, index, extraInfo, isHovered })}
        </View>
      ))}
    </View>
  );
};

export const PlainListView = <T, ExtraInfo>({
  data: originalData,
  keyExtractor,
  rowHeight,
  groupHeaderHeight,
  headerHeight,
  columns,
  smallColumns = columns,
  extraInfo,
  onEndReached,
  onEndReachedThresholdPx = 200,
  getRowLink,
  activeRowId,
  renderEmptyList,
  onActiveRowChange,
  groupBy,
  loading,
  breakpoint = breakpoints.large,
}: Props<T, ExtraInfo>) => {
  const viewId = useId();

  const groups: Map<string | null, T[]> = useMemo(() => {
    if (groupBy == null) {
      return new Map<null, T[]>([[null, originalData]]);
    }
    const map = new Map<string, T[]>();
    originalData.forEach(item => {
      const key = groupBy(item);
      map.set(key, [...(map.get(key) ?? []), item]);
    });
    return map;
  }, [groupBy, originalData]);

  const totalHeight = rowHeight * originalData.length + groups.size * groupHeaderHeight;

  const isLoading = isNotNullish(loading) && loading.isLoading;

  const hasEndReachedBeenCalled = useRef(false);
  const lastKnownHeight = useRef(0);

  const [hoveredRow, setHoveredRow] = useState<string | undefined>(undefined);

  const removeHoveredRow = useCallback(() => {
    setHoveredRow(undefined);
  }, []);

  const onLayout = useCallback(
    ({
      nativeEvent: {
        layout: { height },
      },
    }: LayoutChangeEvent) => {
      lastKnownHeight.current = height;
      if (
        isNotNullish(onEndReached) &&
        !hasEndReachedBeenCalled.current &&
        height >= totalHeight - onEndReachedThresholdPx
      ) {
        hasEndReachedBeenCalled.current = true;
        onEndReached();
      }
    },
    [onEndReached, onEndReachedThresholdPx, totalHeight],
  );

  useEffect(() => {
    if (
      isNotNullish(onEndReached) &&
      !hasEndReachedBeenCalled.current &&
      lastKnownHeight.current >= totalHeight - onEndReachedThresholdPx
    ) {
      hasEndReachedBeenCalled.current = true;
      onEndReached();
      return;
    }
    hasEndReachedBeenCalled.current = false;
  }, [originalData, onEndReached, onEndReachedThresholdPx, totalHeight]);

  const onScroll = useCallback(
    ({
      nativeEvent: {
        contentOffset: { y },
        layoutMeasurement: { height },
        contentSize: { height: contentHeight },
      },
    }: NativeSyntheticEvent<NativeScrollEvent>) => {
      lastKnownHeight.current = height;
      if (
        isNotNullish(onEndReached) &&
        !hasEndReachedBeenCalled.current &&
        y + height >= contentHeight - onEndReachedThresholdPx
      ) {
        hasEndReachedBeenCalled.current = true;
        onEndReached();
      }
    },
    [onEndReached, onEndReachedThresholdPx],
  );

  const createRowWrapper = useCallback(
    ({
      item,
      absoluteIndex,
      extraInfo,
    }: {
      item: T;
      absoluteIndex: number;
      extraInfo: ExtraInfo;
    }): ReactElement<{
      children: ReactNode;
      ref: RefObject<View> | null;
      style?: ViewStyle;
    }> => {
      const customLinkElement = getRowLink?.({ item, index: absoluteIndex, extraInfo });
      return isNullish(customLinkElement) ? <View /> : customLinkElement;
    },
    [getRowLink],
  );

  const activeItemRef = useRef<View>(null);

  useEffect(() => {
    const ref = activeItemRef.current;
    if (activeRowId != null && ref != null) {
      const element = ref as unknown as HTMLElement;
      element.scrollIntoView({ behavior: "smooth", block: "nearest" });
      onActiveRowChange?.(element);
    }
  }, [activeRowId, onActiveRowChange]);

  return (
    <ResponsiveContainer style={styles.root} breakpoint={breakpoint}>
      {({ large }) => {
        const displayColumns = large ? columns : smallColumns;
        return (
          <>
            {large ? (
              <View style={[styles.segment, large && styles.segmentLarge]}>
                {displayColumns.map(({ id, width, title, renderTitle }) => {
                  const columnId = `${viewId}_${id}`;

                  return (
                    <View
                      style={[
                        styles.segmentHeaderCell,
                        {
                          width: typeof width === "number" ? width : ONE,
                          flexGrow: width === "grow" ? ONE : ZERO,
                          height: headerHeight,
                        },
                      ]}
                      nativeID={columnId}
                      key={columnId}
                    >
                      {renderTitle({ title, extraInfo, id })}
                    </View>
                  );
                })}
              </View>
            ) : null}

            <ScrollView
              scrollEventThrottle={32}
              style={styles.container}
              onLayout={onLayout}
              onScroll={onScroll}
              contentContainerStyle={[
                styles.contentContainer,
                {
                  minHeight: totalHeight + (isLoading ? loading.count * rowHeight : 0),
                },
              ]}
            >
              {Array.from(groups.entries()).map(([groupName, items]) => {
                return (
                  <Fragment key={groupName}>
                    {groupName != null ? (
                      <View
                        style={[
                          styles.stickyHeader,
                          large && styles.stickyHeaderLarge,
                          { height: groupHeaderHeight },
                        ]}
                      >
                        <LakeHeading level={3} variant="h3">
                          {groupName}
                        </LakeHeading>
                      </View>
                    ) : null}

                    {items.map((item, index) => {
                      const key = keyExtractor(item, index);
                      const isActive = activeRowId === key;
                      const isHovered = isNotNullish(getRowLink) && hoveredRow === key;

                      const wrapper = createRowWrapper({ item, absoluteIndex: index, extraInfo });

                      return cloneElement(wrapper, {
                        style: { ...styles.rowLink, ...wrapper.props.style },
                        key: index,
                        ref: isActive ? activeItemRef : null,
                        children: (
                          <Row
                            id={key}
                            rowHeight={rowHeight}
                            columns={displayColumns}
                            item={item}
                            index={index}
                            extraInfo={extraInfo}
                            isActive={isActive}
                            isHovered={isHovered}
                            large={large}
                            onMouseEnter={setHoveredRow}
                            onMouseLeave={removeHoveredRow}
                          />
                        ),
                      });
                    })}
                  </Fragment>
                );
              })}

              <View>
                <View accessibilityBusy={isLoading} style={styles.loadingPlaceholder}>
                  {isLoading ? (
                    <PlainListViewPlaceholder
                      count={loading.count}
                      rowHeight={rowHeight}
                      rowVerticalSpacing={0}
                      paddingHorizontal={0}
                    />
                  ) : null}
                </View>
              </View>
            </ScrollView>

            {originalData.length === 0 && isNotNullish(renderEmptyList) && !isLoading ? (
              <View style={styles.emptyListContainer}>{renderEmptyList()}</View>
            ) : null}
          </>
        );
      }}
    </ResponsiveContainer>
  );
};
