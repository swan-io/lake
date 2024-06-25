/**
 * ## FixedListView
 *
 * The FixedListView is a component designed to render big amounts of tabular data.
 *
 * For usability, the data can be display in three types of columns:
 *
 * - Sticked to start columns (usually the main identifier, always visible)
 * - Center columns (scrollable columns, with additional information)
 * - Sticked to end columns (so that some actions are always accesible at the end of each line)
 *
 * ┌────────────────────────────────────────────────────────────────────────────────────────┐
 * │ ┌────────────────┐ ┌────────────────────────────────────────┐ ┌────────────────┐       │
 * │ │ ╔════════════╗ │ │ ╔════════════════════════════════════╗ │ │ ╔════════════╗ │       │
 * │ │ ║   Header   ║ │ │ ║               Header               ║ │ │ ║   Header   ║ │ ▲     │
 * │ │ ║            ║ │ │ ║◀──────────────────────────────────▶║ │ │ ║            ║ │ │     │
 * │ │ ╚════════════╝ │ │ ╚════════════════════════════════════╝ │ │ ╚════════════╝ │ │     │
 * │ │                │ │                                        │ │                │ │     │
 * │ │ ┌───────────┐  │ │ ┌────────────────────────────────────┐ │ │ ┌────────────┐ │ │     │
 * │ │ │  Cell A1  │──┼─┼▷│              Cell B1               ├─┼─┼─▷  Cell C1   │ │ │     │
 * │ │ └───────────┘  │ │ └────────────────────────────────────┘ │ │ └────────────┘ │ │     │
 * │ │ ┌───────────┐  │ │ ┌────────────────────────────────────┐ │ │ ┌────────────┐ │ │     │
 * │ │ │  Cell A2  │──┼─┼▷│              Cell B2               │─┼─┼─▷  Cell C2   │ │ │     │
 * │ │ └───────────┘  │ │ └────────────────────────────────────┘ │ │ └────────────┘ │ │     │
 * │ │                │ │                                        │ │                │ │     │
 * │ │                │ │ ◀────────────────────────────────────▶ │ │                │ ▼     │
 * └─┴────────────────┴─┴────────────────────────────────────────┴─┴────────────────┴───────┘
 *
 * ╔════╗
 * ║    ║   Sticky
 * ╚════╝
 * ◀────▶   Scrollable
 * ─────▷   Emulated tab order
 *
 */
import {
  cloneElement,
  Fragment,
  memo,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
  ViewProps,
} from "react-native";
import { match } from "ts-pattern";
import { v4 as uuid } from "uuid";
import {
  backgroundColor,
  colors,
  invariantColors,
  radii,
  shadows,
  spacings,
} from "../constants/design";
import { useHover } from "../hooks/useHover";
import { getFocusableElements } from "../utils/a11y";
import { first, last, sortedIndexOf } from "../utils/array";
import { noop } from "../utils/function";
import { isNotNullish, isNullish } from "../utils/nullish";
import { BorderedIcon } from "./BorderedIcon";
import { Icon, IconName } from "./Icon";
import { LakeHeading } from "./LakeHeading";
import { LakeText } from "./LakeText";
import { ScrollView, ScrollViewRef } from "./ScrollView";
import { Space, SpacingValue } from "./Space";

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

export type LinkConfig<T, ExtraInfo> = {
  item: T;
  index: number;
  extraInfo: ExtraInfo;
};

export type ColumnConfig<T, ExtraInfo> = {
  id: string;
  width: number;
  title: string;
  renderTitle: (props: ColumnTitleConfig<ExtraInfo>) => ReactNode;
  renderCell: (props: ColumnCellConfig<T, ExtraInfo>) => ReactNode;
};

type Mode = "tile" | "plain";

export type FixedListViewProps<T, ExtraInfo> = {
  mode?: Mode;
  data: T[];
  keyExtractor: (item: T, index: number) => string;
  highlightedRowId?: string;
  headerBackgroundColor?: string;
  headerHeight: number;
  rowHeight: number;
  rowVerticalSpacing: number;
  horizontalPadding?: number;
  extraInfo: ExtraInfo;
  stickedToStartColumns?: ColumnConfig<T, ExtraInfo>[];
  columns: ColumnConfig<T, ExtraInfo>[];
  stickedToEndColumns?: ColumnConfig<T, ExtraInfo>[];
  renderThreshold?: number;
  onEndReached?: () => void;
  onEndReachedThresholdPx?: number;
  getRowLink?: (config: LinkConfig<T, ExtraInfo>) => ReactElement | undefined;
  renderEmptyList?: () => ReactNode;
  loading?: {
    isLoading: boolean;
    count: number;
  };
};

const HORIZONTAL_SAFE_AREA = 10;
export const SCROLLBAR_RESERVED_SPACE = 20;

const styles = StyleSheet.create({
  root: {
    height: 1,
    alignSelf: "stretch",
    flexGrow: 1,
  },
  container: {
    height: 1,
    alignSelf: "stretch",
    flexGrow: 1,
  },
  containerTile: {
    marginHorizontal: -HORIZONTAL_SAFE_AREA,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    flexGrow: 1,
  },
  scrollContentContainer: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "stretch",
  },
  centerColumnsContainer: {
    width: 1,
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "stretch",
  },
  centerColumns: {
    flexGrow: 1,
  },
  centerColumnsContentContainer: {
    flexDirection: "column",
    flexGrow: 1,
  },
  stickyColumn: {
    flexGrow: 0,
    zIndex: 1,
  },
  stickyColumnStartOverflow: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: "100%",
  },
  stickyColumnEndOverflow: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "100%",
  },
  rowSegment: {
    position: "absolute",
    left: 0,
    right: 0,
    display: "flex",
    flexGrow: 1,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "stretch",
    transitionProperty: "top",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-in-out",
    overflow: "hidden",
  },
  headingSegment: {
    position: "sticky",
    top: 0,
    flexDirection: "row",
    alignItems: "stretch",
    zIndex: 2,
  },
  segment: {
    flexDirection: "row",
    alignItems: "stretch",
    overflow: "hidden",
  },
  segmentOverflow: {
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "stretch",
  },
  visibleGradient: {
    opacity: 1,
  },
  leftToRightGradient: {
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: 10,
    backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0))",
    opacity: 0,
    transition: "150ms ease-in-out opacity",
    pointerEvents: "none",
  },
  rightToLeftGradient: {
    position: "absolute",
    right: 0,
    top: 0,
    height: "100%",
    width: 10,
    backgroundImage: "linear-gradient(to left, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0))",
    opacity: 0,
    transition: "150ms ease-in-out opacity",
    pointerEvents: "none",
  },
  horizontalScrollbar: {
    position: "sticky",
    bottom: 0,
    borderBottomWidth: 5,
    borderBottomColor: invariantColors.transparent,
    flexGrow: 0,
    height: SCROLLBAR_RESERVED_SPACE,
  },
  cell: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  evenRow: {
    backgroundColor: backgroundColor.accented,
  },
  oddRow: {
    backgroundColor: backgroundColor.default,
  },
  rowShadow: {
    boxShadow: shadows.tile,
  },
  hoveredRowShadow: {
    boxShadow: shadows.tileHover,
  },
  highlightedRow: {
    borderColor: colors.current.primary,
    borderWidth: 1,
  },
  segmentHeaderCell: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "center",
  },
  rowBackground: {
    borderRadius: radii[4],
    transitionProperty: "top",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-in-out",
  },
  rowPlainBackground: {
    transitionProperty: "top",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-in-out",
  },
  rowBackgroundContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    transitionProperty: "top",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-in-out",
  },
  rowBackgroundContainerPlain: {
    left: -10,
    right: -10,
    boxShadow: `inset 0 -1px ${colors.gray[100]}`,
  },
  backgroundRows: {
    position: "absolute",
    left: HORIZONTAL_SAFE_AREA,
    right: HORIZONTAL_SAFE_AREA,
    top: 0,
    bottom: 0,
  },
  placeholderRowContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 20,
    right: 20,
    animationKeyframes: {
      "50%": {
        opacity: 0.6,
      },
    },
    animationDuration: "2000ms",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
  placeholderRowContainerPlain: {
    left: 10,
  },
  placeholderRow: {
    height: 14,
    width: "30%",
    backgroundColor: colors.gray[200],
    borderRadius: radii[6],
  },
  placeholderRowEnd: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  smallPlaceholderRow: {
    width: "10%",
  },
  centerSegmentContainer: {
    flexGrow: 1,
  },
  rowLeftRadii: {
    borderTopLeftRadius: radii[4],
    borderBottomLeftRadius: radii[4],
  },
  rowRightRadii: {
    borderTopRightRadius: radii[4],
    borderBottomRightRadius: radii[4],
  },
  emptyListContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: backgroundColor.default,
  },
  emptyListContentContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: spacings[48],
    minHeight: "100%",
  },
  emptyList: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingPlaceholder: {
    position: "absolute",
    left: 0,
    right: 0,
  },
  topGradient: {
    height: 30,
    position: "absolute",
    left: 0,
    right: 0,
    top: "100%",
    backgroundImage: `linear-gradient(to bottom, ${backgroundColor.default}, ${backgroundColor.defaultTransparent})`,
    opacity: 0,
    transition: "200ms ease-in-out opacity",
    pointerEvents: "none",
  },
  visibleTopGradient: {
    opacity: 1,
  },
});

type RowBackgroundProps = {
  absoluteIndex: number;
  id: string;
  isHovered: boolean;
  isHighlighted: boolean;
  top: number;
  rowVerticalSpacing: number;
  rowHeight: number;
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
  mode: Mode;
};

const RowBackground = ({
  absoluteIndex,
  id,
  isHovered,
  isHighlighted,
  top,
  rowHeight,
  rowVerticalSpacing,
  onMouseEnter,
  onMouseLeave,
  mode,
}: RowBackgroundProps) => {
  const containerRef = useRef(null);

  useHover(containerRef, {
    onHoverStart: () => onMouseEnter(id),
    onHoverEnd: () => onMouseLeave(),
  });

  return (
    <View
      style={[
        styles.rowBackgroundContainer,
        mode === "plain" && styles.rowBackgroundContainerPlain,
        { top, paddingVertical: rowVerticalSpacing / 2 },
      ]}
      ref={containerRef}
    >
      {mode === "tile" ? (
        <View
          style={[
            styles.rowBackground,
            isHovered ? styles.hoveredRowShadow : styles.rowShadow,
            isHighlighted && styles.highlightedRow,
            absoluteIndex % 2 === 0 ? styles.evenRow : styles.oddRow,
            { height: rowHeight },
          ]}
        />
      ) : (
        <View style={[styles.rowPlainBackground, { height: rowHeight }]} />
      )}
    </View>
  );
};

const MemoizedRowBackground = memo<RowBackgroundProps>(RowBackground);

type RowSegmentProps<T, ExtraInfo> = {
  mode?: Mode;
  columns: ColumnConfig<T, ExtraInfo>[];
  item: T;
  style: ViewProps["style"];
  absoluteIndex: number;
  viewId: string;
  segmentColumn: "start" | "center" | "end";
  width: number;
  rowVerticalSpacing: number;
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
  id: string;
  isHovered: boolean;
  onEndReached?: () => void;
  extraInfo: ExtraInfo;
  createRowWrapper: (props: {
    item: T;
    absoluteIndex: number;
    extraInfo: ExtraInfo;
  }) => ReactElement;
  focusId: string;
  top: number;
  totalRowHeight: number;
  minWidth?: number;
};

const SEGMENTS_MAP = {
  start: "0",
  center: "1",
  end: "2",
};

const RowSegment = <T, ExtraInfo>({
  columns,
  item,
  style,
  absoluteIndex,
  viewId,
  segmentColumn,
  rowVerticalSpacing,
  width,
  id,
  isHovered,
  extraInfo,
  onMouseEnter,
  onMouseLeave,
  createRowWrapper,
  focusId,
  top,
  totalRowHeight,
  minWidth,
}: RowSegmentProps<T, ExtraInfo>) => {
  const containerRef = useRef(null);

  useHover(containerRef, {
    onHoverStart: () => onMouseEnter(id),
    onHoverEnd: () => onMouseLeave(),
  });

  const wrapper = createRowWrapper({ item, absoluteIndex, extraInfo });

  return cloneElement(
    wrapper,
    {
      id: focusId,
      tabIndex: 0,
      style: [
        styles.rowSegment,
        {
          top,
          height: totalRowHeight,
          width: isNullish(minWidth) ? width : undefined,
          minWidth,
        },
      ],
    },
    <View
      style={[
        styles.segment,
        { width, paddingVertical: rowVerticalSpacing / 2 },
        segmentColumn === "center" && styles.centerSegmentContainer,
        segmentColumn === "start" && {
          borderTopLeftRadius: radii[4],
          borderBottomLeftRadius: radii[4],
        },
        segmentColumn === "end" && {
          borderTopRightRadius: radii[4],
          borderBottomRightRadius: radii[4],
        },
      ]}
      ref={containerRef}
      aria-hidden={false}
    >
      <View style={[styles.segmentOverflow, style]}>
        {columns.map(({ id, width, renderCell }, index) => {
          const columnId = `${viewId}_${id}`;
          const paddedIndex = String(absoluteIndex).padStart(10, "0");
          const paddedCellIndex = String(index).padStart(10, "0");

          // The reason we use this shape is so that the IDs alphabetical order matches the semantical one:
          // 1. Row index
          // 2. Column index
          // 3. Cell index
          // -> See the `onKeyDown` handler
          const focusId = `${viewId}__Row_${paddedIndex}_Segment_${SEGMENTS_MAP[segmentColumn]}_Cell_${paddedCellIndex}`;

          return (
            <View
              style={[styles.cell, { width }]}
              key={columnId}
              aria-describedby={columnId}
              id={focusId}
            >
              {renderCell({ columnId, item, index: absoluteIndex, extraInfo, isHovered })}
            </View>
          );
        })}
      </View>
    </View>,
  );
};

const MemoizedRowSegment = memo(RowSegment) as typeof RowSegment;

type HeaderSegmentProps<T, ExtraInfo> = {
  columns: ColumnConfig<T, ExtraInfo>[];
  viewId: string;
  extraInfo: ExtraInfo;
  width: number;
};

const HeaderSegment = <T, ExtraInfo>({
  columns,
  viewId,
  extraInfo,
  width,
}: HeaderSegmentProps<T, ExtraInfo>) => {
  return (
    <View style={[styles.segment, { width }]}>
      {columns.map(({ id, width, title, renderTitle }) => {
        const columnId = `${viewId}_${id}`;

        return (
          <View style={[styles.segmentHeaderCell, { width }]} id={columnId} key={columnId}>
            {renderTitle({ title, extraInfo, id })}
          </View>
        );
      })}
    </View>
  );
};

const findNextFocusableElement = (
  sortedCellIds: string[],
  currentCellIndex: number,
  direction: -1 | 1,
) => {
  let index = currentCellIndex + direction;

  while (index >= 0 && index < sortedCellIds.length) {
    const nextCellId = sortedCellIds[index];

    if (isNotNullish(nextCellId)) {
      const previousCell = document.getElementById(nextCellId);

      if (isNotNullish(previousCell)) {
        const focusableElements = getFocusableElements(previousCell, false);
        const nextFocusableElement =
          direction === -1 ? last(focusableElements) : first(focusableElements);

        if (isNotNullish(nextFocusableElement)) {
          return nextFocusableElement;
        }
      }
    }
    index = index + direction;
  }
};

const EMPTY_COLUMNS: ColumnConfig<unknown, unknown>[] = [];
const ZERO = 0;

export const FixedListView = <T, ExtraInfo>({
  data: originalData,
  mode = "tile",
  keyExtractor,
  highlightedRowId,
  rowHeight,
  rowVerticalSpacing,
  horizontalPadding = HORIZONTAL_SAFE_AREA,
  headerBackgroundColor = backgroundColor.default,
  headerHeight,
  renderThreshold = 1000,
  stickedToStartColumns: initialStickedToStartColumns = EMPTY_COLUMNS,
  columns: initialColumns,
  stickedToEndColumns: initialStickedToEndColumns = EMPTY_COLUMNS,
  extraInfo,
  onEndReached,
  onEndReachedThresholdPx = 200,
  getRowLink,
  renderEmptyList,
  loading,
}: FixedListViewProps<T, ExtraInfo>) => {
  const [viewId] = useState(() => uuid());
  // Those three refs are used to synchronize the horizontal scroll in the center columns
  const centerHeadersRef = useRef<ScrollViewRef | null>(null);
  const centerColumnsRef = useRef<ScrollViewRef | null>(null);
  const horizontalScrollbarRef = useRef<ScrollViewRef | null>(null);
  const totalRowHeight = rowHeight + rowVerticalSpacing;
  const rowsHeight = originalData.length * totalRowHeight;
  const totalHeight = headerHeight + rowsHeight;
  // It might seem off to use the range in state instead of storing scroll/layout and deriving it,
  // but it saves a lot of render phases by allowing to bail out from rendering when the range doesn't change
  const [
    {
      data,
      range: [renderedRangeStartIndex, renderedRangeEndIndex],
    },
    setDataAndRenderRange,
  ] = useState({ data: originalData, range: [0, 20] });

  const startFocusAnchorRef = useRef<View | null>(null);
  const endFocusAnchorRef = useRef<View | null>(null);

  const [hasHorizontalScroll, setHasHorizontalScroll] = useState(false);
  const [shouldAvoidStickyColumns, setShouldAvoidStickyColumns] = useState(false);
  const [shouldShowStartGradient, setShouldShowStartGradient] = useState(false);
  const [shouldShowEndGradient, setShouldShowEndGradient] = useState(true);
  const [hoveredRow, setHoveredRow] = useState<string | undefined>(undefined);
  const currentScrollY = useRef(0);
  const lastKnownHeight = useRef(0);

  const { stickedToStartColumns, columns, stickedToEndColumns } = useMemo(() => {
    if (shouldAvoidStickyColumns) {
      return {
        stickedToStartColumns: [],
        columns: [
          ...initialStickedToStartColumns,
          ...initialColumns,
          ...initialStickedToEndColumns,
        ],
        stickedToEndColumns: [],
      };
    } else {
      return {
        stickedToStartColumns: initialStickedToStartColumns,
        columns: initialColumns,
        stickedToEndColumns: initialStickedToEndColumns,
      };
    }
  }, [
    initialStickedToStartColumns,
    initialColumns,
    initialStickedToEndColumns,
    shouldAvoidStickyColumns,
  ]);

  const [isScrolled, setIsScrolled] = useState(false);

  const removeHoveredRow = useCallback(() => {
    setHoveredRow(undefined);
  }, []);

  const initialStickedToStartColumnsWidth = useMemo(
    () => initialStickedToStartColumns.reduce((total, { width }) => total + width, 0),
    [initialStickedToStartColumns],
  );

  const initialStickedToEndColumnsWidth = useMemo(
    () => initialStickedToEndColumns.reduce((total, { width }) => total + width, 0),
    [initialStickedToEndColumns],
  );

  const stickedToStartColumnsWidth = useMemo(
    () => stickedToStartColumns.reduce((total, { width }) => total + width, 0),
    [stickedToStartColumns],
  );

  const stickedToEndColumnsWidth = useMemo(
    () => stickedToEndColumns.reduce((total, { width }) => total + width, 0),
    [stickedToEndColumns],
  );

  const centerColumnsWidth = useMemo(
    () => columns.reduce((total, { width }) => total + width, 0),
    [columns],
  );

  const centerSegmentStyle = useMemo(
    () => [
      stickedToStartColumns.length === 0 && styles.rowLeftRadii,
      stickedToEndColumns.length === 0 && styles.rowRightRadii,
    ],
    [stickedToStartColumns, stickedToEndColumns],
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
    }) => {
      const customLinkElement = getRowLink?.({ item, index: absoluteIndex, extraInfo });
      return isNullish(customLinkElement) ? <View /> : customLinkElement;
    },
    [getRowLink],
  );

  const [backgroundRows, startRows, centerRows, endRows] = useMemo(() => {
    const length = Math.max(0, renderedRangeEndIndex - renderedRangeStartIndex);

    const backgroundRows = Array(length) as ReactNode[];
    const startRows = Array(length) as ReactNode[];
    const centerRows = Array(length) as ReactNode[];
    const endRows = Array(length) as ReactNode[];

    let index = -1;

    while (++index < length) {
      const absoluteIndex = renderedRangeStartIndex + index;
      const item = data[absoluteIndex];

      if (isNullish(item)) {
        continue;
      }

      const key = keyExtractor(item, absoluteIndex);
      const top = absoluteIndex * totalRowHeight;
      const isHoveredRow = hoveredRow === key;
      const isHighlightedRow = highlightedRowId === key;

      const paddedIndex = String(absoluteIndex).padStart(10, "0");
      const focusId = `${viewId}__Row_${paddedIndex}`;

      backgroundRows[index] = (
        <MemoizedRowBackground
          key={key}
          mode={mode}
          isHovered={isHoveredRow}
          isHighlighted={isHighlightedRow}
          absoluteIndex={absoluteIndex}
          top={top}
          id={key}
          rowHeight={rowHeight}
          rowVerticalSpacing={rowVerticalSpacing}
          onMouseEnter={setHoveredRow}
          onMouseLeave={removeHoveredRow}
        />
      );

      if (stickedToStartColumns.length > 0) {
        startRows[index] = (
          <MemoizedRowSegment<T, ExtraInfo>
            key={key}
            createRowWrapper={createRowWrapper}
            focusId={focusId}
            top={top}
            totalRowHeight={totalRowHeight}
            id={key}
            style={styles.rowLeftRadii}
            onMouseEnter={setHoveredRow}
            onMouseLeave={removeHoveredRow}
            segmentColumn="start"
            columns={stickedToStartColumns}
            width={stickedToStartColumnsWidth}
            item={item}
            absoluteIndex={absoluteIndex}
            rowVerticalSpacing={rowVerticalSpacing}
            viewId={viewId}
            isHovered={isHoveredRow}
            extraInfo={extraInfo}
          />
        );
      }

      centerRows[index] = (
        <MemoizedRowSegment<T, ExtraInfo>
          key={key}
          mode={mode}
          createRowWrapper={createRowWrapper}
          focusId={focusId}
          top={top}
          totalRowHeight={totalRowHeight}
          minWidth={centerColumnsWidth}
          id={key}
          style={centerSegmentStyle}
          onMouseEnter={setHoveredRow}
          onMouseLeave={removeHoveredRow}
          segmentColumn="center"
          columns={columns}
          width={centerColumnsWidth}
          item={item}
          absoluteIndex={absoluteIndex}
          rowVerticalSpacing={rowVerticalSpacing}
          viewId={viewId}
          isHovered={isHoveredRow}
          extraInfo={extraInfo}
        />
      );

      if (stickedToEndColumns.length > 0) {
        endRows[index] = (
          <MemoizedRowSegment<T, ExtraInfo>
            key={key}
            createRowWrapper={createRowWrapper}
            focusId={focusId}
            top={top}
            totalRowHeight={totalRowHeight}
            id={key}
            style={styles.rowLeftRadii}
            onMouseEnter={setHoveredRow}
            onMouseLeave={removeHoveredRow}
            segmentColumn="end"
            columns={stickedToEndColumns}
            width={stickedToEndColumnsWidth}
            item={item}
            absoluteIndex={absoluteIndex}
            rowVerticalSpacing={rowVerticalSpacing}
            viewId={viewId}
            isHovered={isHoveredRow}
            extraInfo={extraInfo}
          />
        );
      }
    }

    return [backgroundRows, startRows, centerRows, endRows];
  }, [
    data,
    renderedRangeStartIndex,
    renderedRangeEndIndex,
    keyExtractor,
    highlightedRowId,
    rowHeight,
    totalRowHeight,
    columns,
    stickedToEndColumns,
    stickedToStartColumns,
    viewId,
    stickedToStartColumnsWidth,
    centerColumnsWidth,
    stickedToEndColumnsWidth,
    hoveredRow,
    rowVerticalSpacing,
    extraInfo,
    removeHoveredRow,
    centerSegmentStyle,
    createRowWrapper,
    mode,
  ]);

  // Used to fix some scrollbar behavior. See `main.css`.
  useLayoutEffect(() => {
    centerHeadersRef.current?.element?.setAttribute("data-hide-scrollbar", String(true));
    centerColumnsRef.current?.element?.setAttribute("data-hide-scrollbar", String(true));
    horizontalScrollbarRef.current?.element?.setAttribute("data-force-scrollbar", String(true));
  }, []);

  // To synchronize scrolls, we keep track of the initiator in order to ignore the scroll events
  // we provoke ourselves with the sync.
  const lastHorizontalScroll = useRef<{
    initiator: "headers" | "columns" | "scrollbar";
    date: number;
  }>({
    initiator: "columns",
    date: 0,
  });

  useEffect(() => {
    if (
      isNotNullish(centerHeadersRef.current) &&
      isNotNullish(centerColumnsRef.current) &&
      isNotNullish(horizontalScrollbarRef.current)
    ) {
      const SCROLL_THRESHOLD_MS = 500;
      const centerColumns = centerColumnsRef.current.element as HTMLElement;
      const centerHeaders = centerHeadersRef.current.element as HTMLElement;
      const horizontalScrollbar = horizontalScrollbarRef.current.element as HTMLElement;
      const onColumnsScroll = () => {
        const now = Date.now();
        if (
          lastHorizontalScroll.current.initiator === "columns" ||
          now - lastHorizontalScroll.current.date > SCROLL_THRESHOLD_MS
        ) {
          const scrollLeft = centerColumns.scrollLeft;
          setShouldShowStartGradient(scrollLeft > 0);
          setShouldShowEndGradient(
            centerColumns.scrollWidth - horizontalPadding * 2 >=
              scrollLeft + centerColumns.clientWidth,
          );
          centerHeaders.scrollLeft = scrollLeft;
          horizontalScrollbar.scrollLeft = scrollLeft;
          lastHorizontalScroll.current = { initiator: "columns", date: now };
        }
      };
      const onHeadersScroll = () => {
        const now = Date.now();
        if (
          lastHorizontalScroll.current.initiator === "headers" ||
          now - lastHorizontalScroll.current.date > SCROLL_THRESHOLD_MS
        ) {
          const scrollLeft = centerHeaders.scrollLeft;
          setShouldShowStartGradient(scrollLeft > 0);
          setShouldShowEndGradient(
            centerHeaders.scrollWidth - horizontalPadding * 2 >=
              scrollLeft + centerHeaders.clientWidth,
          );
          centerColumns.scrollLeft = scrollLeft;
          horizontalScrollbar.scrollLeft = scrollLeft;
          lastHorizontalScroll.current = { initiator: "headers", date: now };
        }
      };
      const onScrollbarScroll = () => {
        const now = Date.now();
        if (
          lastHorizontalScroll.current.initiator === "scrollbar" ||
          now - lastHorizontalScroll.current.date > SCROLL_THRESHOLD_MS
        ) {
          const scrollLeft = horizontalScrollbar.scrollLeft;
          setShouldShowStartGradient(scrollLeft > 0);
          setShouldShowEndGradient(
            horizontalScrollbar.scrollWidth - horizontalPadding * 2 >=
              scrollLeft + horizontalScrollbar.clientWidth,
          );
          centerHeaders.scrollLeft = scrollLeft;
          centerColumns.scrollLeft = scrollLeft;
          lastHorizontalScroll.current = { initiator: "scrollbar", date: now };
        }
      };
      centerColumns.addEventListener("scroll", onColumnsScroll, { passive: true });
      centerHeaders.addEventListener("scroll", onHeadersScroll, { passive: true });
      horizontalScrollbar.addEventListener("scroll", onScrollbarScroll, { passive: true });
      return () => {
        centerColumns.removeEventListener("scroll", onColumnsScroll);
        centerHeaders.removeEventListener("scroll", onHeadersScroll);
        horizontalScrollbar.removeEventListener("scroll", onScrollbarScroll);
      };
    }
  }, [horizontalPadding]);

  const onKeyDown = useCallback(
    (event: NativeSyntheticEvent<React.KeyboardEvent>) => {
      const target = event.nativeEvent.target as Element;
      const currentTarget = event.nativeEvent.currentTarget;
      const currentCell = target.closest(`[id^="${viewId}__Row"]`);
      const currentCellId = currentCell?.id;
      if (event.nativeEvent.key === "Tab" && isNotNullish(currentCell)) {
        const focusableElements = getFocusableElements(currentCell, false);
        const firstFocusableElement = first(focusableElements);
        const lastFocusableElement = last(focusableElements);
        const sortedCellIds = Array.from(
          currentTarget.querySelectorAll(`[id^="${viewId}__Row"]`),
          item => item.id,
        ).sort();
        const currentCellIndex = sortedIndexOf(sortedCellIds, currentCellId);
        const isTargetFirst = isNullish(firstFocusableElement) || firstFocusableElement === target;
        const isTargetLast = isNullish(lastFocusableElement) || lastFocusableElement === target;
        if (isTargetFirst && event.nativeEvent.shiftKey && first(sortedCellIds) !== currentCellId) {
          const lastFocusableElement = findNextFocusableElement(
            sortedCellIds,
            currentCellIndex,
            -1,
          );
          if (isNotNullish(lastFocusableElement)) {
            event.preventDefault();
            lastFocusableElement.focus();
          } else {
            event.preventDefault();
            startFocusAnchorRef.current?.focus();
          }
        }
        if (isTargetLast && !event.nativeEvent.shiftKey && last(sortedCellIds) !== currentCellId) {
          const firstFocusableElement = findNextFocusableElement(
            sortedCellIds,
            currentCellIndex,
            1,
          );
          if (isNotNullish(firstFocusableElement)) {
            event.preventDefault();
            firstFocusableElement.focus();
          } else {
            event.preventDefault();
            endFocusAnchorRef.current?.focus();
          }
        }
      }
    },
    [viewId],
  );

  useLayoutEffect(() => {
    const renderedRangeStartIndex = Math.max(
      0,
      Math.floor((currentScrollY.current - renderThreshold) / totalRowHeight),
    );

    const renderedRangeEndIndex = Math.min(
      originalData.length,
      renderedRangeStartIndex +
        Math.ceil((lastKnownHeight.current + renderThreshold * 2) / totalRowHeight),
    );
    setDataAndRenderRange(prevRenderRange => {
      const {
        data,
        range: [prevRenderedRangeStartIndex, prevRenderedRangeEndIndex],
      } = prevRenderRange;
      if (
        prevRenderedRangeStartIndex === renderedRangeStartIndex &&
        prevRenderedRangeEndIndex === renderedRangeEndIndex &&
        data === originalData
      ) {
        return prevRenderRange;
      }
      return { data: originalData, range: [renderedRangeStartIndex, renderedRangeEndIndex] };
    });
  }, [originalData, renderThreshold, totalRowHeight]);

  const onLayout = useCallback(
    ({
      nativeEvent: {
        layout: { height, width },
      },
    }: LayoutChangeEvent) => {
      lastKnownHeight.current = height;
      const renderedRangeStartIndex = Math.max(
        0,
        Math.floor((currentScrollY.current - renderThreshold) / totalRowHeight),
      );
      const renderedRangeEndIndex = Math.min(
        originalData.length,
        renderedRangeStartIndex + Math.ceil((height + renderThreshold * 2) / totalRowHeight),
      );
      setDataAndRenderRange(prevRenderRange => {
        const {
          data,
          range: [prevRenderedRangeStartIndex, prevRenderedRangeEndIndex],
        } = prevRenderRange;
        if (
          prevRenderedRangeStartIndex === renderedRangeStartIndex &&
          prevRenderedRangeEndIndex === renderedRangeEndIndex &&
          data === originalData
        ) {
          return prevRenderRange;
        }
        return { data: originalData, range: [renderedRangeStartIndex, renderedRangeEndIndex] };
      });

      if (
        isNotNullish(onEndReached) &&
        !hasEndReachedBeenCalled.current &&
        height >= totalHeight - onEndReachedThresholdPx
      ) {
        hasEndReachedBeenCalled.current = true;
        onEndReached();
      }
      setShouldAvoidStickyColumns(
        width - (initialStickedToStartColumnsWidth + initialStickedToEndColumnsWidth) < 300,
      );
    },
    [
      originalData,
      renderThreshold,
      totalRowHeight,
      onEndReached,
      onEndReachedThresholdPx,
      totalHeight,
      initialStickedToStartColumnsWidth,
      initialStickedToEndColumnsWidth,
    ],
  );

  const scrollTimeoutRef = useRef<number | undefined>(undefined);
  const scrollContentsRef = useRef<View | null>(null);

  const hasEndReachedBeenCalled = useRef(false);

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
  }, [data, onEndReached, onEndReachedThresholdPx, totalHeight]);

  const onScroll = useCallback(
    ({
      nativeEvent: {
        contentOffset: { y },
        layoutMeasurement: { height },
        contentSize: { height: contentHeight },
      },
    }: NativeSyntheticEvent<NativeScrollEvent>) => {
      setIsScrolled(y > 0);

      lastKnownHeight.current = height;
      currentScrollY.current = y;
      if (isNotNullish(scrollTimeoutRef.current)) {
        clearTimeout(scrollTimeoutRef.current);
      }
      if (scrollContentsRef.current instanceof HTMLElement) {
        scrollContentsRef.current.style.pointerEvents = "none";
      }
      scrollTimeoutRef.current = window.setTimeout(() => {
        if (scrollContentsRef.current instanceof HTMLElement) {
          scrollContentsRef.current.style.pointerEvents = "auto";
        }
      }, 100);

      const renderedRangeStartIndex = Math.max(
        0,
        Math.floor((currentScrollY.current - renderThreshold) / totalRowHeight),
      );

      const renderedRangeEndIndex = Math.min(
        data.length,
        renderedRangeStartIndex + Math.ceil((height + renderThreshold * 2) / totalRowHeight),
      );

      setDataAndRenderRange(prevRenderRange => {
        const {
          data,
          range: [prevRenderedRangeStartIndex, prevRenderedRangeEndIndex],
        } = prevRenderRange;

        return prevRenderedRangeStartIndex === renderedRangeStartIndex &&
          prevRenderedRangeEndIndex === renderedRangeEndIndex &&
          data === data
          ? prevRenderRange
          : { data, range: [renderedRangeStartIndex, renderedRangeEndIndex] };
      });

      if (
        isNotNullish(onEndReached) &&
        !hasEndReachedBeenCalled.current &&
        y + height >= contentHeight - onEndReachedThresholdPx
      ) {
        hasEndReachedBeenCalled.current = true;
        onEndReached();
      }
    },
    [data.length, renderThreshold, totalRowHeight, onEndReached, onEndReachedThresholdPx],
  );

  const onCenterTrackLayout = useCallback(
    ({
      nativeEvent: {
        layout: { width },
      },
    }: LayoutChangeEvent) => {
      setHasHorizontalScroll(centerColumnsWidth > width);
    },
    [centerColumnsWidth],
  );

  const isLoading = isNotNullish(loading) && loading.isLoading;

  return (
    <View style={styles.root}>
      <View ref={startFocusAnchorRef} tabIndex={0} />

      <ScrollView
        onKeyDown={onKeyDown}
        onLayout={onLayout}
        onScroll={onScroll}
        scrollEventThrottle={32}
        style={[styles.container, mode === "tile" && styles.containerTile]}
        contentContainerStyle={[
          styles.contentContainer,
          {
            height:
              totalHeight +
              SCROLLBAR_RESERVED_SPACE +
              (isLoading ? loading.count * (rowHeight + rowVerticalSpacing) : 0),
          },
        ]}
      >
        <View
          aria-busy={isLoading}
          style={[
            styles.loadingPlaceholder,
            {
              top: rowsHeight,
              marginLeft: horizontalPadding * 2,
              marginRight: horizontalPadding * 2,
            },
          ]}
        >
          {isLoading
            ? match(mode)
                .with("tile", () => (
                  <FixedListViewPlaceholder
                    count={loading.count}
                    headerHeight={headerHeight}
                    rowHeight={rowHeight}
                    rowVerticalSpacing={rowVerticalSpacing}
                    paddingHorizontal={0}
                  />
                ))
                .with("plain", () => (
                  <PlainListViewPlaceholder
                    count={loading.count}
                    headerHeight={headerHeight}
                    rowHeight={rowHeight}
                    rowVerticalSpacing={rowVerticalSpacing}
                    paddingHorizontal={0}
                  />
                ))
                .exhaustive()
            : null}
        </View>

        <View style={[styles.backgroundRows, { top: headerHeight }]}>{backgroundRows}</View>

        <View style={styles.scrollContentContainer} ref={scrollContentsRef}>
          {stickedToStartColumns.length > 0 ? (
            <View
              style={[
                styles.stickyColumn,
                {
                  width: stickedToStartColumnsWidth + horizontalPadding,
                  paddingLeft: horizontalPadding,
                },
              ]}
            >
              <View
                style={[
                  styles.headingSegment,
                  { height: headerHeight, backgroundColor: headerBackgroundColor },
                ]}
              >
                <HeaderSegment
                  columns={stickedToStartColumns}
                  extraInfo={extraInfo}
                  viewId={viewId}
                  width={stickedToStartColumnsWidth}
                />

                <View
                  style={[
                    styles.stickyColumnStartOverflow,
                    { width: horizontalPadding, backgroundColor: headerBackgroundColor },
                  ]}
                />

                <View style={[styles.topGradient, isScrolled && styles.visibleTopGradient]} />
              </View>

              <View style={{ height: rowsHeight }}>{startRows}</View>
            </View>
          ) : null}

          <View
            style={[
              styles.centerColumnsContainer,
              {
                paddingLeft: stickedToStartColumns.length === 0 ? horizontalPadding : ZERO,
                paddingRight: stickedToEndColumns.length === 0 ? horizontalPadding : ZERO,
              },
            ]}
          >
            <View
              style={[
                styles.headingSegment,
                { height: headerHeight, backgroundColor: headerBackgroundColor },
              ]}
            >
              <ScrollView
                ref={centerHeadersRef}
                horizontal={true}
                onLayout={onCenterTrackLayout}
                style={styles.centerColumns}
                contentContainerStyle={{
                  minWidth:
                    centerColumnsWidth +
                    (stickedToStartColumns.length === 0 ? horizontalPadding : 0) +
                    (stickedToEndColumns.length === 0 ? horizontalPadding : 0),
                }}
              >
                <HeaderSegment
                  columns={columns}
                  extraInfo={extraInfo}
                  viewId={viewId}
                  width={centerColumnsWidth}
                />
              </ScrollView>

              <View style={[styles.topGradient, isScrolled && styles.visibleTopGradient]} />
            </View>

            <ScrollView
              horizontal={true}
              ref={centerColumnsRef}
              style={styles.centerColumns}
              contentContainerStyle={[
                styles.centerColumnsContentContainer,
                {
                  minWidth:
                    centerColumnsWidth +
                    (stickedToStartColumns.length === 0 ? horizontalPadding : 0) +
                    (stickedToEndColumns.length === 0 ? horizontalPadding : 0),
                },
              ]}
            >
              {centerRows}
            </ScrollView>

            <ScrollView
              ref={horizontalScrollbarRef}
              horizontal={true}
              style={styles.horizontalScrollbar}
              contentContainerStyle={{
                minWidth:
                  centerColumnsWidth +
                  (stickedToStartColumns.length === 0 ? horizontalPadding : 0) +
                  (stickedToEndColumns.length === 0 ? horizontalPadding : 0),
              }}
            />

            {stickedToStartColumns.length > 0 && hasHorizontalScroll ? (
              <View
                style={[
                  styles.leftToRightGradient,
                  {
                    maxHeight: data.length * totalRowHeight,
                    top: headerHeight,
                    bottom: SCROLLBAR_RESERVED_SPACE + rowVerticalSpacing / 2,
                  },
                  shouldShowStartGradient && styles.visibleGradient,
                ]}
              ></View>
            ) : null}

            {stickedToEndColumns.length > 0 && hasHorizontalScroll ? (
              <View
                style={[
                  styles.rightToLeftGradient,
                  {
                    maxHeight: data.length * totalRowHeight,
                    top: headerHeight,
                    bottom: SCROLLBAR_RESERVED_SPACE + rowVerticalSpacing / 2,
                  },
                  shouldShowEndGradient && styles.visibleGradient,
                ]}
              ></View>
            ) : null}
          </View>

          {stickedToEndColumns.length > 0 ? (
            <View
              style={[
                styles.stickyColumn,
                {
                  width: stickedToEndColumnsWidth + horizontalPadding,
                  paddingRight: horizontalPadding,
                },
              ]}
            >
              <View
                style={[
                  styles.headingSegment,
                  { height: headerHeight, backgroundColor: headerBackgroundColor },
                ]}
              >
                <View
                  style={[
                    styles.stickyColumnEndOverflow,
                    { width: horizontalPadding, backgroundColor: headerBackgroundColor },
                  ]}
                />

                <HeaderSegment
                  columns={stickedToEndColumns}
                  extraInfo={extraInfo}
                  viewId={viewId}
                  width={stickedToEndColumnsWidth}
                />

                <View style={[styles.topGradient, isScrolled && styles.visibleTopGradient]} />
              </View>

              <View style={{ height: rowsHeight }}>{endRows}</View>
            </View>
          ) : null}
        </View>
      </ScrollView>

      {data.length === 0 && isNotNullish(renderEmptyList) && !isLoading ? (
        <ScrollView
          style={styles.emptyListContainer}
          contentContainerStyle={styles.emptyListContentContainer}
        >
          {renderEmptyList()}
        </ScrollView>
      ) : null}

      <View ref={endFocusAnchorRef} tabIndex={0} />
    </View>
  );
};

type PlaceholderProps = {
  count: number;
  rowHeight: number;
  rowVerticalSpacing: number;
  groupHeaderHeight?: number;
  headerHeight?: number;
  paddingHorizontal?: number;
};

export const FixedListViewPlaceholder = ({
  count,
  rowHeight,
  rowVerticalSpacing,
  groupHeaderHeight,
  headerHeight,
  paddingHorizontal = HORIZONTAL_SAFE_AREA,
}: PlaceholderProps) => {
  const totalRowHeight = rowHeight + rowVerticalSpacing;

  return (
    <View style={[styles.container, styles.containerTile, { paddingHorizontal }]}>
      {isNotNullish(headerHeight) ? <View style={{ height: headerHeight }} /> : null}
      {isNotNullish(groupHeaderHeight) ? <View style={{ height: headerHeight }} /> : null}

      <View>
        {Array.from({ length: count }, (_, index) => {
          const top = index * totalRowHeight + rowVerticalSpacing / 2;

          return (
            <Fragment key={String(index)}>
              <MemoizedRowBackground
                isHovered={false}
                isHighlighted={false}
                absoluteIndex={index}
                top={top}
                rowVerticalSpacing={rowVerticalSpacing}
                id={String(index)}
                rowHeight={rowHeight}
                onMouseEnter={noop}
                onMouseLeave={noop}
                mode="tile"
              />

              <View
                style={[styles.placeholderRowContainer, { top, height: totalRowHeight }]}
                key={String(index)}
              >
                <View style={styles.placeholderRow} />
                <Space width={32} />
                <View style={[styles.placeholderRow, styles.smallPlaceholderRow]} />
                <Space width={32} />

                <View style={styles.placeholderRowEnd}>
                  <View style={[styles.placeholderRow, styles.smallPlaceholderRow]} />
                </View>
              </View>
            </Fragment>
          );
        })}
      </View>
    </View>
  );
};

export const PlainListViewPlaceholder = ({
  count,
  rowHeight,
  rowVerticalSpacing,
  groupHeaderHeight,
  headerHeight,
  paddingHorizontal = HORIZONTAL_SAFE_AREA,
}: PlaceholderProps) => {
  const totalRowHeight = rowHeight + rowVerticalSpacing;

  return (
    <View style={[styles.container, { paddingHorizontal }]}>
      {isNotNullish(headerHeight) ? <View style={{ height: headerHeight }} /> : null}
      {isNotNullish(groupHeaderHeight) ? <View style={{ height: headerHeight }} /> : null}

      <View>
        {Array.from({ length: count }, (_, index) => {
          const top = index * totalRowHeight + rowVerticalSpacing / 2;

          return (
            <Fragment key={String(index)}>
              <MemoizedRowBackground
                isHovered={false}
                isHighlighted={false}
                absoluteIndex={index}
                top={top}
                rowVerticalSpacing={rowVerticalSpacing}
                id={String(index)}
                rowHeight={rowHeight}
                onMouseEnter={noop}
                onMouseLeave={noop}
                mode="plain"
              />

              <View
                style={[
                  styles.placeholderRowContainer,
                  styles.placeholderRowContainerPlain,
                  { top, height: totalRowHeight },
                ]}
                key={String(index)}
              >
                <View style={styles.placeholderRow} />
                <Space width={32} />
                <View style={[styles.placeholderRow, styles.smallPlaceholderRow]} />
                <Space width={32} />

                <View style={styles.placeholderRowEnd}>
                  <View style={[styles.placeholderRow, styles.smallPlaceholderRow]} />
                </View>
              </View>
            </Fragment>
          );
        })}
      </View>
    </View>
  );
};

type EmptyProps = {
  icon: IconName;
  borderedIcon?: boolean;
  borderedIconPadding?: SpacingValue | 0;
  title?: string;
  subtitle?: ReactNode;
  children?: ReactNode;
};

export const FixedListViewEmpty = ({
  icon,
  borderedIcon = false,
  borderedIconPadding,
  title,
  subtitle,
  children,
}: EmptyProps) => (
  <View style={styles.emptyList}>
    {borderedIcon ? (
      <BorderedIcon name={icon} padding={borderedIconPadding} />
    ) : (
      <Icon name={icon} size={96} color={colors.current.primary} />
    )}

    <Space height={24} />

    {isNotNullish(title) && (
      <>
        <LakeHeading align="center" level={3} variant="h5">
          {title}
        </LakeHeading>

        <Space height={8} />
      </>
    )}

    {isNotNullish(subtitle) && <LakeText align="center">{subtitle}</LakeText>}
    {children}
  </View>
);
