import { useLocation } from "@swan-io/chicane";
import {
  Fragment,
  Ref,
  forwardRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import { LayoutChangeEvent, NativeSyntheticEvent, StyleSheet, Text, View } from "react-native";
import { P, match } from "ts-pattern";
import {
  animations,
  backgroundColor,
  colors,
  negativeSpacings,
  radii,
  shadows,
  spacings,
  texts,
} from "../constants/design";
import { useHover } from "../hooks/useHover";
import { useMergeRefs } from "../hooks/useMergeRefs";
import { noop } from "../utils/function";
import { isNotNullish, isNullish } from "../utils/nullish";
import { Box } from "./Box";
import { FocusTrap } from "./FocusTrap";
import { Icon, IconName } from "./Icon";
import { LakeText } from "./LakeText";
import { Link } from "./Link";
import { PressableText } from "./Pressable";
import { Space, SpacingValue } from "./Space";
import { TransitionView } from "./TransitionView";

const TABS_HEIGHT = 40;
export const tabsViewHeight = TABS_HEIGHT + 1;

type Tab = {
  label: string;
  url: string;
  icon?: IconName;
  withSeparator?: boolean;
  count?: number;
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[100],
    backgroundColor: backgroundColor.default,
    zIndex: 10,
  },
  link: {
    ...texts.medium,
    position: "relative",
    color: colors.gray[700],
    height: TABS_HEIGHT,
    whiteSpace: "nowrap",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  activeLink: {
    color: colors.current[500],
    boxShadow: `inset 0 -2px ${colors.gray[700]}`,
  },
  hoveredLink: {
    boxShadow: `inset 0 -2px ${colors.gray[700]}`,
  },
  underline: {
    position: "absolute",
    bottom: 0,
    height: 2,
    width: 1,
    backgroundColor: colors.current[500],
  },
  animatedUnderline: {
    transformOrigin: "0 0",
    transition: "200ms ease-in-out transform",
  },
  placeholder: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    visibility: "hidden",
    flexDirection: "row",
    alignItems: "flex-end",
    overflow: "hidden",
    pointerEvents: "none",
  },
  count: {
    ...texts.smallRegular,
    color: colors.current[500],
    backgroundColor: colors.current[50],
    borderColor: colors.current[100],
    borderWidth: 1,
    borderRadius: radii[4],
    paddingHorizontal: spacings[4],
    minWidth: spacings[24],
    display: "inline-block",
    textAlign: "center",
  },
  dropdownHandleContainer: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  dropdownPlacement: {
    position: "absolute",
    right: 0,
    top: "100%",
  },
  dropdown: {
    position: "absolute",
    right: 0,
    top: "100%",
    backgroundColor: backgroundColor.accented,
    borderRadius: radii[8],
    boxShadow: shadows.modal,
    paddingVertical: spacings[8],
  },
  dropdownLink: {
    ...texts.regular,
    paddingHorizontal: spacings[16],
    paddingVertical: spacings[8],
    whiteSpace: "nowrap",
  },
  dropdownLinkTextHovered: {
    backgroundColor: colors.gray[50],
  },
  dropdownLinkTextActive: {
    boxShadow: `inset 3px 0 ${colors.current.primary}`,
    color: colors.current.primary,
  },
  separator: {
    position: "absolute",
    top: 0,
    left: negativeSpacings[16],
    bottom: 0,
    width: 1,
    backgroundColor: colors.gray[100],
  },
  sticky: {
    position: "sticky",
    top: -1,
  },
});

const Dropdown = ({
  tabs,
  onHoverStart,
  onHoverEnd,
  onLinkFocus,
  onLinkBlur,
  onLinkPress,
}: {
  tabs: Tab[];
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onLinkFocus: () => void;
  onLinkBlur: () => void;
  onLinkPress: () => void;
}) => {
  const containerRef = useRef(null);

  useHover(containerRef, {
    onHoverStart,
    onHoverEnd,
  });

  return (
    <View accessibilityRole="menu" style={styles.dropdown} ref={containerRef}>
      {tabs.map(({ url, label }) => {
        return (
          <Link
            to={url}
            key={url}
            onFocus={onLinkFocus}
            onBlur={onLinkBlur}
            onPress={onLinkPress}
            accessibilityRole="menuitem"
            ariaCurrentValue="location"
            style={({ active, hovered }) => [
              styles.dropdownLink,
              active && styles.dropdownLinkTextActive,
              hovered && styles.dropdownLinkTextHovered,
            ]}
          >
            {label}
          </Link>
        );
      })}
    </View>
  );
};

type DropdownOpeningState = "Open" | "OpenFromFocus" | "ForcedOpen" | "Closed" | "ForcedClosed";

type DropdownAction = "Open" | "FocusHandle" | "Close" | "ForceClose" | "ForceToggle";

const SHOULD_AUTOFOCUS = new Set<DropdownOpeningState>(["ForcedOpen", "OpenFromFocus"]);
const SHOULD_OPEN = new Set<DropdownOpeningState>(["Open", "ForcedOpen", "OpenFromFocus"]);
const SHOULD_LOCK_FOCUS = new Set<DropdownOpeningState>(["ForcedOpen"]);

const DropdownItems = forwardRef<
  View,
  {
    tabs: Tab[];
    currentUrl: string;
    otherLabel: string;
  }
>(({ tabs, otherLabel, currentUrl }, ref) => {
  const [openingStatus, dispatch] = useReducer(
    (state: DropdownOpeningState, action: DropdownAction): DropdownOpeningState => {
      const input = [action, state] as const;
      return match<typeof input, DropdownOpeningState>(input)
        .with(
          ["ForceToggle", "Closed"],
          ["ForceToggle", "Open"],
          ["ForceToggle", "ForcedClosed"],
          () => "ForcedOpen",
        )
        .with(["ForceToggle", "OpenFromFocus"], ["ForceToggle", "ForcedOpen"], () => "ForcedClosed")
        .with(["ForceClose", P.any], () => "ForcedClosed")
        .with(["FocusHandle", "ForcedClosed"], () => "Closed")
        .with(
          ["Open", "ForcedOpen"],
          ["FocusHandle", "ForcedOpen"],
          ["Close", "ForcedOpen"],
          () => "ForcedOpen",
        )
        .with(["Open", P.any], () => "Open")
        .with(["FocusHandle", P.any], () => "OpenFromFocus")
        .with(["Close", P.any], () => "Closed")
        .exhaustive();
    },
    "Closed",
  );

  const timeoutRef = useRef<number | undefined>(undefined);
  const handleRef = useRef<View>(null);
  const containerRef = useRef<View>(null);

  const lastFocusTimeout = useRef<number | null>(null);
  const {
    onHandleFocus,
    onLinkFocus,
    onAnyBlur,
    onHoverStart,
    onHoverEnd,
    onPress,
    onPressOutside,
    onEscapeKey,
  } = useMemo(
    () => ({
      onHandleFocus: (event: NativeSyntheticEvent<React.FocusEvent>) => {
        if (isNullish(containerRef.current)) {
          return;
        }
        lastFocusTimeout.current = Date.now();
        const container = containerRef.current as unknown as Element;
        const focusEvent = event as unknown as FocusEvent;
        // Don't reopen if leaving
        if (!container.contains(focusEvent.relatedTarget as Node | null)) {
          if (isNotNullish(timeoutRef.current)) {
            clearTimeout(timeoutRef.current);
          }
          dispatch("FocusHandle");
        }
      },
      onLinkFocus: () => {
        if (isNotNullish(timeoutRef.current)) {
          clearTimeout(timeoutRef.current);
        }
        dispatch("Open");
      },
      onAnyBlur: () => {
        if (isNotNullish(timeoutRef.current)) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = window.setTimeout(() => {
          dispatch("Close");
        }, 300);
      },
      onHoverStart: () => {
        if (isNotNullish(timeoutRef.current)) {
          clearTimeout(timeoutRef.current);
        }
        dispatch("Open");
      },

      onHoverEnd: () => {
        if (isNotNullish(timeoutRef.current)) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = window.setTimeout(() => {
          dispatch("Close");
        }, 300);
      },

      onPress: () => {
        if (lastFocusTimeout.current != null && Date.now() - lastFocusTimeout.current < 32) {
          return;
        }
        if (isNotNullish(timeoutRef.current)) {
          clearTimeout(timeoutRef.current);
        }
        dispatch("ForceToggle");
      },

      onPressOutside: (event: MouseEvent | TouchEvent) => {
        if (isNotNullish(handleRef.current)) {
          const handle = handleRef.current as unknown as Element;
          if (handle.contains(event.target as Node | null)) {
            return;
          }
        }
        if (isNotNullish(timeoutRef.current)) {
          clearTimeout(timeoutRef.current);
        }
        // Only force closing in case the focus comes directly to the handle
        // Then put it back to a regular closed state
        dispatch("ForceClose");
        timeoutRef.current = window.setTimeout(() => {
          dispatch("Close");
        }, 300);
      },

      onEscapeKey: () => {
        if (isNotNullish(timeoutRef.current)) {
          clearTimeout(timeoutRef.current);
        }
        dispatch("ForceClose");
        timeoutRef.current = window.setTimeout(() => {
          dispatch("Close");
        }, 300);
      },
    }),
    [],
  );

  useEffect(() => {
    return () => {
      if (isNotNullish(timeoutRef.current)) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const shouldOpen = SHOULD_OPEN.has(openingStatus);
  const shouldAutoFocus = SHOULD_AUTOFOCUS.has(openingStatus);
  const shouldLockFocus = SHOULD_LOCK_FOCUS.has(openingStatus);

  useHover(handleRef, {
    onHoverStart,
    onHoverEnd,
  });

  const mergedRef = useMergeRefs(containerRef, ref);

  const activeTab = tabs.find(({ url }) => url === currentUrl);

  return (
    <View style={styles.dropdownHandleContainer} ref={mergedRef}>
      <PressableText
        ref={handleRef}
        accessibilityRole="button"
        accessibilityExpanded={shouldOpen}
        accessibilityHasPopup="true"
        onFocus={onHandleFocus}
        onBlur={onAnyBlur}
        onPress={onPress}
        style={({ hovered }) => [
          styles.link,
          isNotNullish(activeTab) ? styles.activeLink : hovered ? styles.hoveredLink : null,
        ]}
      >
        <Text>{otherLabel}</Text>
        <Space width={8} />
        <Text style={styles.count}>{tabs.length}</Text>
        <Space width={4} />
        <Icon name="chevron-down-filled" size={12} />
      </PressableText>

      <TransitionView {...animations.fadeAndSlideInFromBottom} style={styles.dropdownPlacement}>
        {shouldOpen ? (
          <FocusTrap
            autoFocus={shouldAutoFocus}
            focusLock={shouldLockFocus}
            returnFocus={shouldLockFocus}
            onClickOutside={onPressOutside}
            onEscapeKey={shouldLockFocus ? onEscapeKey : undefined}
          >
            <Dropdown
              tabs={tabs}
              onHoverStart={onHoverStart}
              onHoverEnd={onHoverEnd}
              onLinkFocus={onLinkFocus}
              onLinkBlur={onAnyBlur}
              onLinkPress={onEscapeKey}
            />
          </FocusTrap>
        ) : null}
      </TransitionView>
    </View>
  );
});

type Props = {
  tabs: Tab[];
  otherLabel: string;
  hideIfSingleItem?: boolean;
  padding?: SpacingValue;
  sticky?: boolean;
};

export const TabView = ({
  tabs,
  otherLabel,
  hideIfSingleItem = true,
  sticky = false,
  padding,
}: Props) => {
  const containerRef = useRef<View | null>(null);
  const placeholderRef = useRef<View | null>(null);
  const otherPlaceholderRef = useRef<View | null>(null);

  const linksRefs: Ref<Record<string, Text | null>> = useRef({});
  const placeholderLinkRef: Ref<Record<string, Text | null>> = useRef({});
  const [{ left, width }, setUnderlinePosition] = useState({ left: 0, width: 0 });
  const [hasRendered, setHasRendered] = useState(false);
  const [[kept, collapsed], setKeptCollapsed] = useState<[Tab[], Tab[]]>([[], []]);

  const location = useLocation();
  const { path } = location;
  const currentLocationURL = location.toString();

  useEffect(() => {
    if (isNotNullish(linksRefs.current)) {
      const values = Object.entries(linksRefs.current);
      const container = containerRef.current;

      for (const [link, node] of values) {
        if ("/" + path.join("/") === link && isNotNullish(node) && isNotNullish(container)) {
          node.measureLayout(
            container as unknown as number,
            (left, _, width) => {
              const leftOffset = padding ?? 0;
              setUnderlinePosition({ left: left - leftOffset, width });
            },
            noop,
          );
          return;
        }
      }
    }

    setUnderlinePosition({ left: 0, width: 0 });
  }, [path, kept, collapsed, padding]);

  useEffect(() => {
    setHasRendered(width > 0);
  }, [width]);

  const reajustLayout = useCallback(
    ({ width }: { container: Element; width: number }) => {
      const items = tabs.map(tab => {
        if (placeholderLinkRef.current) {
          const ref = placeholderLinkRef.current[tab.url];

          if (isNotNullish(ref)) {
            const element = ref as unknown as Element;
            const width = element.getBoundingClientRect().width;

            return { tab, width: width + 32 };
          } else {
            return { tab, width: 0 };
          }
        } else {
          return { tab, width: 0 };
        }
      });

      const kept: (Tab & { width: number })[] = [];
      const collapsed: (Tab & { width: number })[] = [];

      let cummulatedWidth = 0;

      items.forEach(item => {
        cummulatedWidth += item.width;

        if (cummulatedWidth < width) {
          kept.push({ ...item.tab, width: item.width });
        } else {
          if (currentLocationURL.startsWith(item.tab.url)) {
            while (
              kept.length !== 0 &&
              kept.reduce((acc, item) => acc + item.width, 0) + (item.width + 16) >= width
            ) {
              const last = kept.pop();

              if (isNotNullish(last)) {
                collapsed.unshift(last);
                cummulatedWidth -= last.width;
              }
            }

            kept.push({ ...item.tab, width: item.width });
          } else {
            collapsed.push({ ...item.tab, width: item.width });
          }
        }
      });
      const otherLabelRef = otherPlaceholderRef.current;
      let otherLabelWidth = 100;
      if (isNotNullish(otherLabelRef)) {
        const otherLabel = otherLabelRef as unknown as Element;
        otherLabelWidth = otherLabel.getBoundingClientRect().width;
      }

      const activeInKeptIndex = kept.findIndex(item => currentLocationURL.startsWith(item.url));

      if (activeInKeptIndex !== -1) {
        const activeInKept = kept[activeInKeptIndex];
        const activeInKeptWidth = activeInKept?.width ?? 0;
        const restInKept = [
          ...kept.slice(0, activeInKeptIndex),
          ...kept.slice(activeInKeptIndex + 1),
        ];
        while (
          restInKept.length !== 0 &&
          restInKept.reduce((acc, item) => acc + item.width, 0) +
            activeInKeptWidth +
            (collapsed.length >= 1 ? otherLabelWidth : 0) >=
            width
        ) {
          const last = restInKept.pop();
          if (isNotNullish(last)) {
            collapsed.unshift(last);
          }
        }

        const finalKept = [
          ...restInKept.slice(0, activeInKeptIndex),
          ...(activeInKept != null ? [activeInKept] : []),
          ...restInKept.slice(activeInKeptIndex),
        ];

        setKeptCollapsed([finalKept, collapsed]);
      } else {
        setKeptCollapsed([kept, collapsed]);
      }
    },
    [tabs, currentLocationURL],
  );

  const onLayout = useCallback(
    ({
      target,
      nativeEvent: {
        layout: { width },
      },
    }: LayoutChangeEvent) => {
      reajustLayout({ container: target as unknown as Element, width });
    },
    [reajustLayout],
  );

  useLayoutEffect(() => {
    const ref = placeholderRef.current;
    if (ref) {
      const element = ref as unknown as Element;
      const width = element.getBoundingClientRect().width;
      reajustLayout({ container: element, width });
    }
  }, [reajustLayout]);

  if (tabs.length <= 1 && hideIfSingleItem) {
    return null;
  }

  return (
    <Box
      alignItems="center"
      direction="row"
      accessibilityRole="tablist"
      ref={containerRef}
      style={[styles.container, sticky && styles.sticky, { paddingHorizontal: padding }]}
    >
      <View
        style={styles.placeholder}
        accessibilityHidden={true}
        ref={placeholderRef}
        onLayout={onLayout}
      >
        {tabs.map(({ label, url, icon, count }) => (
          <Fragment key={url}>
            <Link
              ref={ref => {
                if (placeholderLinkRef.current) {
                  placeholderLinkRef.current[url] = ref;
                }
              }}
              to={url}
              style={({ active, hovered }) => [
                styles.link,
                active ? styles.activeLink : hovered ? styles.hoveredLink : null,
              ]}
            >
              {isNotNullish(icon) && (
                <>
                  <Icon name={icon} size={16} color="currentColor" />
                  <Space width={8} />
                </>
              )}

              <Text>{label}</Text>

              {count != null ? (
                <>
                  <Space width={8} />
                  <Text style={styles.count}>{count}</Text>
                </>
              ) : null}
            </Link>

            <Space width={32} />
          </Fragment>
        ))}

        <LakeText ref={otherPlaceholderRef} style={styles.link}>
          <Text>{otherLabel}</Text>
          <Space width={8} />
          <Text style={styles.count}>{tabs.length}</Text>
          <Space width={4} />
          <Icon name="chevron-down-filled" size={12} />
        </LakeText>
      </View>

      {kept.map(({ label, url, icon, withSeparator, count }) => (
        <Fragment key={url}>
          <Link
            accessibilityRole="tab"
            ref={ref => {
              if (linksRefs.current) {
                linksRefs.current[url] = ref;
              }
            }}
            to={url}
            style={({ active, hovered }) => [
              styles.link,
              active ? styles.activeLink : hovered ? styles.hoveredLink : null,
            ]}
          >
            {withSeparator === true && <View style={styles.separator} accessibilityRole="none" />}

            {isNotNullish(icon) && (
              <>
                <Icon name={icon} size={16} color="currentColor" />
                <Space width={8} />
              </>
            )}

            <Text>{label}</Text>

            {count != null ? (
              <>
                <Space width={8} />
                <Text style={styles.count}>{count}</Text>
              </>
            ) : null}
          </Link>

          <Space width={32} />
        </Fragment>
      ))}

      {collapsed.length > 0 ? (
        <DropdownItems
          ref={ref => {
            collapsed.forEach(item => {
              if (linksRefs.current) {
                linksRefs.current[item.url] = ref;
              }
            });
          }}
          tabs={collapsed}
          currentUrl={currentLocationURL}
          otherLabel={otherLabel}
        />
      ) : null}

      {hasRendered && (
        <View
          style={[
            styles.underline,
            styles.animatedUnderline,
            { transform: `translateX(${left}px) scaleX(${width})` },
          ]}
        />
      )}
    </Box>
  );
};
