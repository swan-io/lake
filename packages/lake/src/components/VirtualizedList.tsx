import { Option } from "@swan-io/boxed";
import {
  cloneElement,
  memo,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { StyleSheet, View } from "react-native";
import { commonStyles } from "../constants/commonStyles";
import { backgroundColor as backgroundColorVariants, colors, spacings } from "../constants/design";
import { useHover } from "../hooks/useHover";
import { ScrollView, ScrollViewRef } from "./ScrollView";
import { Space } from "./Space";

const HORIZONTAL_ROW_PADDING = 16;

const styles = StyleSheet.create({
  container: {
    ...commonStyles.fill,
    height: 1,
    alignSelf: "stretch",
  },
  grow: {
    flexGrow: 1,
  },
  contentContainer: {
    minWidth: "100%",
  },
  emptyListContentContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: spacings[48],
    minHeight: "100%",
  },
  headerRow: {
    position: "sticky",
    top: 0,
    flexDirection: "row",
    alignItems: "stretch",
    zIndex: 2,
  },
  cellsContainer: {
    boxShadow: `0 -1px ${colors.gray[100]}`,
    flexDirection: "row",
    transform: "translateZ(0)",
  },
  stickedToStartColumnGroup: {
    position: "sticky",
    left: 0,
    zIndex: 1,
  },
  stickedToStartColumnGroupLocked: {
    position: "relative",
  },
  centerColumnGroup: {
    flexGrow: 1,
  },
  stickedToEndColumnGroup: {
    position: "sticky",
    right: 0,
    zIndex: 1,
  },
  stickedToEndColumnGroupLocked: {
    position: "relative",
  },
  rowsContainer: {
    position: "relative",
  },
  row: {
    position: "absolute",
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    transitionProperty: "top",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-in-out",
  },
  headerCell: {
    flexDirection: "row",
    flexGrow: 0,
    alignItems: "center",
  },
  cell: {
    flexDirection: "row",
    flexGrow: 0,
    alignItems: "stretch",
  },
  shadowsLayerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
    zIndex: 4,
  },
  shadowsLayer: {
    position: "sticky",
    top: 12,
    flexDirection: "row",
    alignItems: "stretch",
  },
  startColumnsShadow: {
    position: "sticky",
    left: 0,
    top: 0,
    boxShadow: "15px 0 10px -12px rgba(0, 0, 0, 0.1)",
    transition: "100ms ease-in-out opacity",
  },
  endColumnsShadow: {
    position: "sticky",
    right: 0,
    top: 0,
    boxShadow: "-15px 0 10px -12px rgba(0, 0, 0, 0.1)",
    transition: "100ms ease-in-out opacity",
  },
  scrollTracker: {
    pointerEvents: "none",
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
  },
  placeholderRowContainer: {
    position: "absolute",
    alignItems: "flex-start",
    top: 0,
    left: 0,
    right: 0,
    animationKeyframes: {
      "50%": {
        opacity: 0.6,
      },
    },
    animationDuration: "2000ms",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    boxShadow: `inset 0 -1px ${colors.gray[100]}`,
  },
  placeholderRowContents: {
    position: "sticky",
    width: "50%",
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexGrow: 1,
    paddingHorizontal: spacings[24],
  },
  loadingPlaceholder: {
    position: "absolute",
    left: 0,
    right: 0,
  },
  placeholderRow: {
    height: 14,
    width: "30%",
    backgroundColor: colors.gray[100],
  },
  placeholderRowEnd: {
    paddingHorizontal: spacings[20],
    position: "sticky",
    right: 0,
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  smallPlaceholderRow: {
    width: "10%",
  },
});

export type ColumnTitleConfig<ExtraInfo> = {
  title: string;
  extraInfo: ExtraInfo;
  id: string;
};

export type ColumnCellConfig<T, ExtraInfo> = {
  columnId: string;
  item: T;
  isHovered: boolean;
  index: number;
  extraInfo: ExtraInfo;
};

export type ColumnConfig<T, ExtraInfo> = {
  id: string;
  grow?: boolean;
  width: number;
  title: string;
  renderTitle: (props: ColumnTitleConfig<ExtraInfo>) => ReactNode;
  renderCell: (props: ColumnCellConfig<T, ExtraInfo>) => ReactNode;
};

export type LinkConfig<T, ExtraInfo> = {
  item: T;
  index: number;
  extraInfo: ExtraInfo;
};

export type VirtualizedListProps<T, ExtraInfo> = {
  variant: "default" | "accented";
  data: T[];
  keyExtractor: (item: T, index: number) => string;
  headerHeight: number;
  rowHeight: number;
  extraInfo: ExtraInfo;
  stickedToStartColumns?: ColumnConfig<T, ExtraInfo>[];
  columns: ColumnConfig<T, ExtraInfo>[];
  stickedToEndColumns?: ColumnConfig<T, ExtraInfo>[];
  renderThreshold?: number;
  onEndReached?: () => void;
  onEndReachedThreshold?: number;
  getRowLink?: (config: LinkConfig<T, ExtraInfo>) => ReactElement | undefined;
  renderEmptyList: () => ReactNode;
  marginHorizontal?: string;
  loading?: {
    isLoading: boolean;
    count: number;
  };
};

export const VirtualizedList = <T, ExtraInfo>({
  variant,
  data,
  stickedToStartColumns,
  columns,
  stickedToEndColumns,
  headerHeight,
  rowHeight,
  renderThreshold = 1000,
  onEndReached,
  onEndReachedThreshold = 200,
  loading,
  extraInfo,
  keyExtractor,
  marginHorizontal,
  renderEmptyList,
  getRowLink,
}: VirtualizedListProps<T, ExtraInfo>) => {
  // Used for unique IDs generation (usefull for header IDs and cells aria-describedBy pointing to them)
  const viewId = useId();
  const scrollViewRef = useRef<ScrollViewRef>(null);
  const scrollTrackerRef = useRef<View>(null);

  // Theoretical height of all actual data if rendered
  const fullDataHeight = rowHeight * data.length;

  const loadingDataPlaceholderHeight = Option.fromNullable(loading)
    .flatMap(({ isLoading, count }) => (isLoading ? Option.Some(rowHeight * count) : Option.None()))
    .getOr(0);

  const containerContainerHeight = headerHeight + fullDataHeight + loadingDataPlaceholderHeight;

  const stickedToStartFirstCellLeftPadding = Option.fromNullable(stickedToStartColumns)
    .map(() => HORIZONTAL_ROW_PADDING)
    .getOr(0);

  const centerFirstCellLeftPadding = Option.fromNullable(stickedToStartColumns)
    .map(() => 0)
    .getOr(HORIZONTAL_ROW_PADDING);

  const centerLastCellLeftPadding = Option.fromNullable(stickedToEndColumns)
    .map(() => 0)
    .getOr(HORIZONTAL_ROW_PADDING);

  const stickedToEndLastCellRightPadding = Option.fromNullable(stickedToEndColumns)
    .map(() => HORIZONTAL_ROW_PADDING)
    .getOr(0);

  const stickedToStartColumnsWidth = useMemo(
    () =>
      Option.fromNullable(stickedToStartColumns)
        .map(columns => columns.reduce((acc, column) => acc + column.width, 0))
        .getOr(0) + stickedToStartFirstCellLeftPadding,
    [stickedToStartColumns, stickedToStartFirstCellLeftPadding],
  );

  const centerColumnsWidth = useMemo(
    () =>
      columns.reduce((acc, column) => acc + column.width, 0) +
      centerFirstCellLeftPadding +
      centerLastCellLeftPadding,
    [columns, centerFirstCellLeftPadding, centerLastCellLeftPadding],
  );

  const stickedToEndColumnsWidth = useMemo(
    () =>
      Option.fromNullable(stickedToEndColumns)
        .map(columns => columns.reduce((acc, column) => acc + column.width, 0))
        .getOr(0) + stickedToEndLastCellRightPadding,
    [stickedToEndColumns, stickedToEndLastCellRightPadding],
  );

  const contentContainerWidth =
    stickedToStartColumnsWidth + centerColumnsWidth + stickedToEndColumnsWidth;

  const backgroundColor = backgroundColorVariants[variant];

  // We store the `startIndex` and `endIndex` rather than the scroll position
  // so that it triggers way less re-renders
  const [rangeToRender, setRangeToRender] = useState<
    { startIndex: number; endIndex: number } | undefined
  >(undefined);

  const [clientHeight, setClientHeight] = useState<number | undefined>(undefined);

  const [horizontalScrollPosition, setHasHorizontalScrollPosition] = useState<
    "Start" | "Middle" | "End" | "NoScroll" | undefined
  >(undefined);

  const rowsToRender = useMemo(() => {
    return Option.fromNullable(rangeToRender).map(({ startIndex, endIndex }) => {
      const clampedEndIndex = Math.min(data.length, endIndex);
      return {
        startIndex,
        endIndex: clampedEndIndex,
        data: data.slice(startIndex, clampedEndIndex),
      };
    });
  }, [data, rangeToRender]);

  const onLayoutUpdate = useCallback(() => {
    const element = Option.fromNullable(scrollViewRef.current).flatMap(ref =>
      Option.fromNullable(ref.element),
    );
    setRangeToRender(previousRangeToRender =>
      element
        .map(scrollView => {
          const startIndex = Math.max(
            0,
            Math.floor((scrollView.scrollTop - renderThreshold) / rowHeight),
          );

          const endIndex =
            startIndex + Math.ceil((scrollView.scrollHeight + renderThreshold * 2) / rowHeight);

          if (
            previousRangeToRender?.startIndex === startIndex &&
            previousRangeToRender.endIndex === endIndex
          ) {
            return previousRangeToRender;
          }

          return { startIndex, endIndex };
        })
        .toUndefined(),
    );

    setClientHeight(element.map(scrollView => scrollView.clientHeight).toUndefined());

    setHasHorizontalScrollPosition(
      element
        .map(scrollView =>
          scrollView.scrollWidth === scrollView.clientWidth ||
          scrollView.clientWidth - (stickedToEndColumnsWidth + stickedToStartColumnsWidth) < 400
            ? "NoScroll"
            : scrollView.scrollLeft <= 0
              ? "Start"
              : scrollView.scrollLeft >= scrollView.scrollWidth - scrollView.clientWidth
                ? "End"
                : "Middle",
        )
        .toUndefined(),
    );
  }, [renderThreshold, rowHeight, stickedToStartColumnsWidth, stickedToEndColumnsWidth]);

  useLayoutEffect(() => {
    onLayoutUpdate();
  }, [onLayoutUpdate]);

  const scrollTimeoutRef = useRef<number | undefined>(undefined);
  const rowsContainerRef = useRef<View>(null);

  const onScroll = useCallback(() => {
    // Disable interactions in cells during scroll, avoids useless
    // re-renders
    if (scrollTimeoutRef.current != null) {
      clearTimeout(scrollTimeoutRef.current);
    }
    if (rowsContainerRef.current instanceof HTMLElement) {
      rowsContainerRef.current.style.pointerEvents = "none";
    }
    scrollTimeoutRef.current = window.setTimeout(() => {
      if (rowsContainerRef.current instanceof HTMLElement) {
        rowsContainerRef.current.style.pointerEvents = "auto";
      }
    }, 100);

    onLayoutUpdate();
  }, [onLayoutUpdate]);

  useEffect(() => {
    const element = Option.fromNullable(scrollViewRef.current).flatMap(ref =>
      Option.fromNullable(ref.element),
    );
    return element
      .map(element => {
        const resizeObserver = new ResizeObserver(() => {
          onLayoutUpdate();
        });
        resizeObserver.observe(element);
        return () => resizeObserver.unobserve(element);
      })
      .toUndefined();
  }, [onLayoutUpdate]);

  // tracks if the threshold to initiate the next data load is reached
  useEffect(() => {
    const scrollTracker = scrollTrackerRef.current;
    if (scrollTracker != null) {
      const scrollTrackerElement = scrollTracker as unknown as HTMLElement;
      const intersectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (onEndReached != null) {
              onEndReached();
            }
          }
        });
      });
      intersectionObserver.observe(scrollTrackerElement);
      return () => intersectionObserver.unobserve(scrollTrackerElement);
    }
  }, [onEndReached, data.length]);

  const header = useMemo(() => {
    return (
      <View style={[styles.headerRow, { height: headerHeight }]}>
        {Option.fromNullable(stickedToStartColumns)
          .map(columns => (
            <View
              style={[
                styles.cellsContainer,
                styles.stickedToStartColumnGroup,
                horizontalScrollPosition === "NoScroll" && styles.stickedToStartColumnGroupLocked,
                { width: stickedToStartColumnsWidth, backgroundColor, height: headerHeight },
              ]}
            >
              {columns.map(({ id, width, title, renderTitle }, index) => {
                const columnId = `${viewId}_${id}`;
                const paddingLeft = index === 0 ? stickedToStartFirstCellLeftPadding : 0;

                return (
                  <View
                    style={[styles.headerCell, { width: width + paddingLeft, paddingLeft }]}
                    id={columnId}
                    key={columnId}
                  >
                    {renderTitle({ title, extraInfo, id })}
                  </View>
                );
              })}
            </View>
          ))
          .toNull()}

        <View
          style={[
            styles.cellsContainer,
            styles.centerColumnGroup,
            { width: centerColumnsWidth, backgroundColor, height: headerHeight },
          ]}
        >
          {columns.map(({ id, grow = false, width, title, renderTitle }, index) => {
            const columnId = `${viewId}_${id}`;
            const paddingLeft = index === 0 ? centerFirstCellLeftPadding : 0;
            const paddingRight = index === columns.length - 1 ? centerLastCellLeftPadding : 0;

            return (
              <View
                style={[
                  styles.headerCell,
                  grow && styles.grow,
                  { width: width + paddingLeft + paddingRight, paddingLeft, paddingRight },
                ]}
                id={columnId}
                key={columnId}
              >
                {renderTitle({ title, extraInfo, id })}
              </View>
            );
          })}
        </View>

        {Option.fromNullable(stickedToEndColumns)
          .map(columns => (
            <View
              style={[
                styles.cellsContainer,
                styles.stickedToEndColumnGroup,
                horizontalScrollPosition === "NoScroll" && styles.stickedToEndColumnGroupLocked,
                { width: stickedToEndColumnsWidth, backgroundColor, height: headerHeight },
              ]}
            >
              {columns.map(({ id, width, title, renderTitle }, index) => {
                const columnId = `${viewId}_${id}`;
                const paddingRight =
                  index === columns.length - 1 ? stickedToEndLastCellRightPadding : 0;

                return (
                  <View
                    style={[styles.headerCell, { width: width + paddingRight, paddingRight }]}
                    id={columnId}
                    key={columnId}
                  >
                    {renderTitle({ title, extraInfo, id })}
                  </View>
                );
              })}
            </View>
          ))
          .toNull()}
      </View>
    );
  }, [
    backgroundColor,
    stickedToStartColumnsWidth,
    centerColumnsWidth,
    stickedToEndColumnsWidth,
    headerHeight,
    extraInfo,
    stickedToStartColumns,
    columns,
    stickedToEndColumns,
    viewId,
    horizontalScrollPosition,
    stickedToStartFirstCellLeftPadding,
    centerFirstCellLeftPadding,
    centerLastCellLeftPadding,
    stickedToEndLastCellRightPadding,
  ]);

  const startColumnShadow = useMemo(() => {
    if (stickedToStartColumnsWidth === 0) {
      return Option.None();
    }
    return Option.Some(
      <View
        style={[
          styles.startColumnsShadow,
          {
            width: stickedToStartColumnsWidth,
            opacity: Option.fromNullable(horizontalScrollPosition)
              .map(value => (value === "Start" || value === "NoScroll" ? 0 : 1))
              .getOr(0),
          },
        ]}
      />,
    );
  }, [stickedToStartColumnsWidth, horizontalScrollPosition]);

  const endColumnShadow = useMemo(() => {
    if (stickedToEndColumnsWidth === 0) {
      return Option.None();
    }
    return Option.Some(
      <View
        style={[
          styles.endColumnsShadow,
          {
            width: stickedToEndColumnsWidth,
            opacity: Option.fromNullable(horizontalScrollPosition)
              .map(value => (value === "End" || value === "NoScroll" ? 0 : 1))
              .getOr(0),
          },
        ]}
      />,
    );
  }, [stickedToEndColumnsWidth, horizontalScrollPosition]);

  if (
    data.length === 0 &&
    !Option.fromNullable(loading)
      .map(({ isLoading }) => isLoading)
      .getOr(false)
  ) {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.emptyListContentContainer}>
        {renderEmptyList()}
      </ScrollView>
    );
  }

  return (
    <ScrollView
      ref={scrollViewRef}
      both={true}
      style={[styles.container, { marginHorizontal }]}
      onScroll={onScroll}
      scrollEventThrottle={32}
      contentContainerStyle={[
        styles.contentContainer,
        {
          height: containerContainerHeight,
          width: contentContainerWidth,
        },
      ]}
    >
      {header}

      {rowsToRender
        .map(({ startIndex, endIndex, data }) => (
          <View style={styles.rowsContainer} ref={rowsContainerRef}>
            {data.map((item, index) => (
              <VirtualizedRow<T, ExtraInfo>
                key={keyExtractor(item, startIndex + index)}
                viewId={viewId}
                item={item}
                rowHeight={rowHeight}
                absoluteIndex={startIndex + index}
                variant={variant}
                stickedToStartColumnsWidth={stickedToStartColumnsWidth}
                centerColumnsWidth={centerColumnsWidth}
                stickedToEndColumnsWidth={stickedToEndColumnsWidth}
                stickedToStartColumns={stickedToStartColumns}
                columns={columns}
                stickedToEndColumns={stickedToEndColumns}
                extraInfo={extraInfo}
                getRowLink={getRowLink}
                horizontalScrollPosition={horizontalScrollPosition ?? "NoScroll"}
                stickedToStartFirstCellLeftPadding={stickedToStartFirstCellLeftPadding}
                centerFirstCellLeftPadding={centerFirstCellLeftPadding}
                centerLastCellLeftPadding={centerLastCellLeftPadding}
                stickedToEndLastCellRightPadding={stickedToEndLastCellRightPadding}
              />
            ))}

            {Option.fromNullable(loading)
              .flatMap(({ isLoading, count }) => (isLoading ? Option.Some(count) : Option.None()))
              .map(count => (
                <View
                  aria-busy={true}
                  style={[
                    styles.loadingPlaceholder,
                    {
                      top: endIndex * rowHeight,
                    },
                  ]}
                >
                  <VirtualizedListPlaceholder
                    count={count}
                    headerHeight={0}
                    rowHeight={rowHeight}
                  />
                </View>
              ))
              .toNull()}
          </View>
        ))
        .toNull()}

      {Option.fromNullable(clientHeight)
        .map(clientHeight => (
          <View style={styles.shadowsLayerContainer}>
            <View style={[styles.shadowsLayer, { height: clientHeight - 12 }]}>
              {startColumnShadow.toNull()}

              <View style={[styles.centerColumnGroup, { width: centerColumnsWidth }]}></View>

              {endColumnShadow.toNull()}
            </View>
          </View>
        ))
        .toNull()}

      <View
        style={[styles.scrollTracker, { height: onEndReachedThreshold }]}
        ref={scrollTrackerRef}
      />
    </ScrollView>
  );
};

type VirtualizedRowProps<T, ExtraInfo> = {
  viewId: string;
  rowHeight: number;
  absoluteIndex: number;
  variant: "accented" | "default";
  stickedToStartColumnsWidth: number;
  centerColumnsWidth: number;
  stickedToEndColumnsWidth: number;
  stickedToStartColumns?: ColumnConfig<T, ExtraInfo>[];
  columns: ColumnConfig<T, ExtraInfo>[];
  stickedToEndColumns?: ColumnConfig<T, ExtraInfo>[];
  extraInfo: ExtraInfo;
  getRowLink?: (config: LinkConfig<T, ExtraInfo>) => ReactElement | undefined;
  horizontalScrollPosition: "NoScroll" | "Start" | "Middle" | "End";
  item: T;
  stickedToStartFirstCellLeftPadding: number;
  centerFirstCellLeftPadding: number;
  centerLastCellLeftPadding: number;
  stickedToEndLastCellRightPadding: number;
};

const RawVirtualizedRow = <T, ExtraInfo>({
  viewId,
  rowHeight,
  absoluteIndex,
  variant,
  stickedToStartColumnsWidth,
  centerColumnsWidth,
  stickedToEndColumnsWidth,
  stickedToStartColumns,
  columns,
  stickedToEndColumns,
  extraInfo,
  item,
  horizontalScrollPosition,
  getRowLink,
  stickedToStartFirstCellLeftPadding,
  centerFirstCellLeftPadding,
  centerLastCellLeftPadding,
  stickedToEndLastCellRightPadding,
}: VirtualizedRowProps<T, ExtraInfo>) => {
  const [isHovered, setIsHovered] = useState(false);

  const elementRef = useRef<View>(null);

  useHover(elementRef, {
    onHoverStart: () => setIsHovered(true),
    onHoverEnd: () => setIsHovered(false),
  });

  const rootElement =
    getRowLink != null ? (
      (getRowLink({ item, index: absoluteIndex, extraInfo }) ?? <View />)
    ) : (
      <View />
    );

  return cloneElement(rootElement, {
    ref: elementRef,
    style: [
      styles.row,
      {
        backgroundColor: backgroundColorVariants[variant],
        top: absoluteIndex * rowHeight,
        height: rowHeight,
      },
      isHovered && {
        backgroundColor:
          variant === "accented"
            ? backgroundColorVariants.default
            : backgroundColorVariants.accented,
      },
    ],
    children: (
      <>
        {Option.fromNullable(stickedToStartColumns)
          .map(columns => (
            <View
              style={[
                styles.cellsContainer,
                styles.stickedToStartColumnGroup,
                horizontalScrollPosition === "NoScroll" && styles.stickedToStartColumnGroupLocked,
                {
                  height: rowHeight,
                  width: stickedToStartColumnsWidth,
                  backgroundColor: isHovered
                    ? backgroundColorVariants[variant === "accented" ? "default" : "accented"]
                    : backgroundColorVariants[variant],
                },
              ]}
            >
              {columns.map(({ id, width, renderCell }, index) => {
                const columnId = `${viewId}_${id}`;
                const paddingLeft = index === 0 ? stickedToStartFirstCellLeftPadding : 0;

                return (
                  <View
                    style={[styles.cell, { width: width + paddingLeft, paddingLeft }]}
                    key={columnId}
                    aria-describedby={columnId}
                  >
                    {renderCell({
                      columnId,
                      item,
                      index: absoluteIndex,
                      extraInfo,
                      isHovered,
                    })}
                  </View>
                );
              })}
            </View>
          ))
          .toNull()}

        <View
          style={[
            styles.cellsContainer,
            styles.centerColumnGroup,
            {
              width: centerColumnsWidth,
              height: rowHeight,
              backgroundColor: isHovered
                ? backgroundColorVariants[variant === "accented" ? "default" : "accented"]
                : backgroundColorVariants[variant],
            },
          ]}
        >
          {columns.map(({ id, grow = false, width, renderCell }, index) => {
            const columnId = `${viewId}_${id}`;
            const paddingLeft = index === 0 ? centerFirstCellLeftPadding : 0;
            const paddingRight = index === columns.length - 1 ? centerLastCellLeftPadding : 0;

            return (
              <View
                style={[
                  styles.cell,
                  grow && styles.grow,
                  { width: width + paddingLeft + paddingRight, paddingLeft, paddingRight },
                ]}
                key={columnId}
                aria-describedby={columnId}
              >
                {renderCell({
                  columnId,
                  item,
                  index: absoluteIndex,
                  extraInfo,
                  isHovered,
                })}
              </View>
            );
          })}
        </View>

        {Option.fromNullable(stickedToEndColumns)
          .map(columns => (
            <View
              style={[
                styles.cellsContainer,
                styles.stickedToEndColumnGroup,
                horizontalScrollPosition === "NoScroll" && styles.stickedToEndColumnGroupLocked,
                {
                  width: stickedToEndColumnsWidth,
                  height: rowHeight,
                  backgroundColor: isHovered
                    ? backgroundColorVariants[variant === "accented" ? "default" : "accented"]
                    : backgroundColorVariants[variant],
                },
              ]}
            >
              {columns.map(({ id, width, renderCell }, index) => {
                const columnId = `${viewId}_${id}`;
                const paddingRight =
                  index === columns.length - 1 ? stickedToEndLastCellRightPadding : 0;

                return (
                  <View
                    style={[styles.cell, { width: width + paddingRight, paddingRight }]}
                    key={columnId}
                    aria-describedby={columnId}
                  >
                    {renderCell({
                      columnId,
                      item,
                      index: absoluteIndex,
                      extraInfo,
                      isHovered,
                    })}
                  </View>
                );
              })}
            </View>
          ))
          .toNull()}
      </>
    ),
  });
};

const VirtualizedRow = memo(RawVirtualizedRow) as typeof RawVirtualizedRow;

type VirtualizedListPlaceholderProps = {
  count: number;
  rowHeight: number;
  groupHeaderHeight?: number;
  headerHeight?: number;
  marginHorizontal?: string;
};

export const VirtualizedListPlaceholder = ({
  count,
  rowHeight,
  groupHeaderHeight,
  headerHeight,
  marginHorizontal,
}: VirtualizedListPlaceholderProps) => {
  return (
    <View style={[styles.container, { marginHorizontal }]}>
      {headerHeight != null ? <View style={{ height: headerHeight }} /> : null}
      {groupHeaderHeight != null ? <View style={{ height: groupHeaderHeight }} /> : null}

      <View>
        {Array.from({ length: count }, (_, index) => {
          const top = index * rowHeight;

          return (
            <View
              key={String(index)}
              style={[styles.placeholderRowContainer, { height: rowHeight, top }]}
            >
              <View style={styles.placeholderRowContents}>
                <View style={styles.placeholderRow} />
                <Space width={32} />
                <View style={[styles.placeholderRow, styles.smallPlaceholderRow]} />
                <Space width={32} />

                <View style={styles.placeholderRowEnd}>
                  <View style={[styles.placeholderRow, styles.smallPlaceholderRow]} />
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};
