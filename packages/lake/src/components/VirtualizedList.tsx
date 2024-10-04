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

const styles = StyleSheet.create({
  container: {
    ...commonStyles.fill,
    height: 1,
    alignSelf: "stretch",
  },
  headerRow: {
    position: "sticky",
    top: 0,
    flexDirection: "row",
    alignItems: "stretch",
    zIndex: 2,
  },
  cellsContainer: {
    flexDirection: "row",
    transform: "translateZ(0)",
  },
  stickedToStartColumnGroup: {
    position: "sticky",
    left: 0,
    zIndex: 1,
  },
  stickedToEndColumnGroup: {
    position: "sticky",
    right: 0,
    zIndex: 1,
  },
  rowsContainer: {
    position: "relative",
  },
  row: {
    position: "absolute",
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "stretch",
  },
  headerCell: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "center",
  },
  cell: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "stretch",
    boxShadow: `inset 0 -1px ${colors.gray[100]}`,
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
    paddingHorizontal: spacings[20],
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
  index: number;
  extraInfo: ExtraInfo;
  isHovered: boolean;
};

export type ColumnConfig<T, ExtraInfo> = {
  id: string;
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
  highlightedRowId?: string;
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
  renderEmptyList?: () => ReactNode;
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

  const stickedToStartColumnsWidth = useMemo(
    () =>
      Option.fromNullable(stickedToStartColumns)
        .map(columns => columns.reduce((acc, column) => acc + column.width, 0))
        .getOr(0),
    [stickedToStartColumns],
  );

  const centerColumnsWidth = useMemo(
    () => columns.reduce((acc, column) => acc + column.width, 0),
    [columns],
  );

  const stickedToEndColumnsWidth = useMemo(
    () =>
      Option.fromNullable(stickedToEndColumns)
        .map(columns => columns.reduce((acc, column) => acc + column.width, 0))
        .getOr(0),
    [stickedToEndColumns],
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
    return Option.fromNullable(rangeToRender).map(({ startIndex, endIndex }) => ({
      startIndex,
      endIndex,
      data: data.slice(startIndex, endIndex),
    }));
  }, [data, rangeToRender]);

  useLayoutEffect(() => {
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

          const endIndex = Math.min(
            data.length,
            startIndex + Math.ceil((scrollView.scrollHeight + renderThreshold * 2) / rowHeight),
          );

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
          scrollView.scrollWidth === scrollView.clientWidth
            ? "NoScroll"
            : scrollView.scrollLeft <= 0
              ? "Start"
              : scrollView.scrollLeft >= scrollView.scrollWidth - scrollView.clientWidth
                ? "End"
                : "Middle",
        )
        .toUndefined(),
    );
  }, [data, renderThreshold, rowHeight]);

  const scrollTimeoutRef = useRef<number | undefined>(undefined);
  const rowsContainerRef = useRef<View>(null);

  const onScroll = useCallback(() => {
    const element = Option.fromNullable(scrollViewRef.current).flatMap(ref =>
      Option.fromNullable(ref.element),
    );

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

    setRangeToRender(previousRangeToRender =>
      element
        .map(scrollView => {
          const startIndex = Math.max(
            0,
            Math.floor((scrollView.scrollTop - renderThreshold) / rowHeight),
          );

          const endIndex = Math.min(
            data.length,
            startIndex + Math.ceil((scrollView.scrollHeight + renderThreshold * 2) / rowHeight),
          );

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

    setHasHorizontalScrollPosition(
      element
        .map(scrollView =>
          scrollView.scrollWidth === scrollView.clientWidth
            ? "NoScroll"
            : scrollView.scrollLeft <= 0
              ? "Start"
              : scrollView.scrollLeft >= scrollView.scrollWidth - scrollView.clientWidth
                ? "End"
                : "Middle",
        )
        .toUndefined(),
    );
  }, [data, renderThreshold, rowHeight]);

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
                { width: stickedToStartColumnsWidth, backgroundColor },
              ]}
            >
              {columns.map(({ id, width, title, renderTitle }) => {
                const columnId = `${viewId}_${id}`;

                return (
                  <View style={[styles.headerCell, { width }]} id={columnId} key={columnId}>
                    {renderTitle({ title, extraInfo, id })}
                  </View>
                );
              })}
            </View>
          ))
          .toNull()}

        <View style={[styles.cellsContainer, { width: centerColumnsWidth, backgroundColor }]}>
          {columns.map(({ id, width, title, renderTitle }) => {
            const columnId = `${viewId}_${id}`;

            return (
              <View style={[styles.headerCell, { width }]} id={columnId} key={columnId}>
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
                { width: stickedToEndColumnsWidth, backgroundColor },
              ]}
            >
              {columns.map(({ id, width, title, renderTitle }) => {
                const columnId = `${viewId}_${id}`;

                return (
                  <View style={[styles.headerCell, { width }]} id={columnId} key={columnId}>
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

  return (
    <ScrollView
      ref={scrollViewRef}
      both={true}
      style={styles.container}
      onScroll={onScroll}
      scrollEventThrottle={32}
      contentContainerStyle={{
        height: containerContainerHeight,
        width: contentContainerWidth,
      }}
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

              <View style={{ width: centerColumnsWidth }}></View>

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
  item: T;
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
  getRowLink,
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
      isHovered && {
        backgroundColor:
          variant === "accented"
            ? backgroundColorVariants.default
            : backgroundColorVariants.accented,
      },
      {
        backgroundColor: backgroundColorVariants[variant],
        top: absoluteIndex * rowHeight,
        height: rowHeight,
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
                {
                  width: stickedToStartColumnsWidth,
                  backgroundColor: isHovered
                    ? backgroundColorVariants[variant === "accented" ? "default" : "accented"]
                    : backgroundColorVariants[variant],
                },
              ]}
            >
              {columns.map(({ id, width, renderCell }) => {
                const columnId = `${viewId}_${id}`;

                return (
                  <View style={[styles.cell, { width }]} key={columnId} aria-describedby={columnId}>
                    {renderCell({
                      columnId,
                      item,
                      index: absoluteIndex,
                      extraInfo,
                      isHovered: false,
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
            {
              width: centerColumnsWidth,
              backgroundColor: isHovered
                ? backgroundColorVariants[variant === "accented" ? "default" : "accented"]
                : backgroundColorVariants[variant],
            },
          ]}
        >
          {columns.map(({ id, width, renderCell }) => {
            const columnId = `${viewId}_${id}`;

            return (
              <View style={[styles.cell, { width }]} key={columnId} aria-describedby={columnId}>
                {renderCell({
                  columnId,
                  item,
                  index: absoluteIndex,
                  extraInfo,
                  isHovered: false,
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
                {
                  width: stickedToEndColumnsWidth,
                  backgroundColor: isHovered
                    ? backgroundColorVariants[variant === "accented" ? "default" : "accented"]
                    : backgroundColorVariants[variant],
                },
              ]}
            >
              {columns.map(({ id, width, renderCell }) => {
                const columnId = `${viewId}_${id}`;

                return (
                  <View style={[styles.cell, { width }]} key={columnId} aria-describedby={columnId}>
                    {renderCell({
                      columnId,
                      item,
                      index: absoluteIndex,
                      extraInfo,
                      isHovered: false,
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
};

export const VirtualizedListPlaceholder = ({
  count,
  rowHeight,
  groupHeaderHeight,
  headerHeight,
}: VirtualizedListPlaceholderProps) => {
  return (
    <View style={styles.container}>
      {headerHeight != null ? <View style={{ height: headerHeight }} /> : null}
      {groupHeaderHeight != groupHeaderHeight ? <View style={{ height: headerHeight }} /> : null}

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
