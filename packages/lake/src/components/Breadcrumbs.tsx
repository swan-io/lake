import { FocusTrap } from "@swan-io/lake/src/components/FocusTrap";
import { Icon } from "@swan-io/lake/src/components/Icon";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { Link } from "@swan-io/lake/src/components/Link";
import { Space } from "@swan-io/lake/src/components/Space";
import { TransitionView } from "@swan-io/lake/src/components/TransitionView";
import {
  animations,
  backgroundColor,
  colors,
  gray75,
  radii,
  shadows,
  spacings,
  texts,
} from "@swan-io/lake/src/constants/design";
import { useHover } from "@swan-io/lake/src/hooks/useHover";
import { usePreviousValue } from "@swan-io/lake/src/hooks/usePreviousValue";
import { isNotNullish, isNullish } from "@swan-io/lake/src/utils/nullish";
import {
  createContext,
  Dispatch,
  MutableRefObject,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import {
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  TargetedEvent,
  Text,
  View,
} from "react-native";
import { match, P } from "ts-pattern";
import { SetRequired } from "type-fest";
import { v4 as uuid } from "uuid";
import { noop } from "../utils/function";
import { Box } from "./Box";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    zIndex: 10,
    transform: [{ translateZ: 0 }],
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: radii[6],
    transitionProperty: "opacity",
    transitionDuration: "0.15s",
  },
  itemPressed: {
    opacity: 0.2,
  },
  itemForcedOpen: {
    backgroundColor: colors.gray[50],
  },
  chevron: {
    padding: spacings[8],
  },
  horizontalLink: {
    paddingVertical: spacings[8],
  },
  horizontalLinkText: {
    paddingHorizontal: spacings[8],
    alignItems: "center",
    display: "inline-flex",
  },
  horizontalLinkTextHovered: {
    color: colors.gray[900],
    boxShadow: `0 1px currentColor`,
  },
  activeHorizontalLinkText: {
    color: colors.gray[800],
    backgroundColor: gray75,
    borderRadius: radii[4],
    boxShadow: "none",
  },
  dropdown: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: "-50%" }],
    top: "100%",
    backgroundColor: backgroundColor.accented,
    borderRadius: radii[8],
    boxShadow: shadows.modal,
    paddingVertical: spacings[8],
  },
  siblingsDropdown: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: "-50%" }],
    top: "100%",
    backgroundColor: backgroundColor.accented,
    borderRadius: radii[8],
    boxShadow: shadows.modal,
    paddingVertical: spacings[8],
    alignItems: "stretch",
  },
  dropdownLink: {
    paddingHorizontal: spacings[16],
    paddingVertical: spacings[8],
    flexDirection: "row",
    alignItems: "center",
  },
  dropdownLinkText: {
    ...texts.regular,
    whiteSpace: "nowrap",
  },
  dropdownLinkTextHovered: {
    color: colors.gray[500],
  },
  dropdownLinkActive: {
    backgroundColor: colors.gray[50],
  },
  dropdownContainer: {
    position: "absolute",
    left: "50%",
    top: "100%",
  },
  dropdownLinkContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
  tick: {
    position: "absolute",
    top: "50%",
    right: spacings[16],
    transform: [{ translateY: "-50%" }],
  },
});

export type Crumb = {
  label: string;
  link: string;
  siblings?: { label: string; url: string; isMatching: boolean }[];
};

type CrumbWithId = {
  id: string;
  crumb?: Crumb;
  isRootCrumb: boolean;
  index?: number;
};

type CrumbWithIdAndPosition = {
  id: string;
  crumb: Crumb;
  isFirst: boolean;
  isLast: boolean;
  isRootCrumb: boolean;
};

const emptyCrumbWithIdArray: readonly CrumbWithId[] = [];
const emptyCrumbArray: readonly Crumb[] = [];

const defaultContext: readonly [
  readonly CrumbWithId[],
  readonly CrumbWithId[],
  Dispatch<SetStateAction<readonly CrumbWithId[]>>,
  MutableRefObject<number>,
] = [emptyCrumbWithIdArray, emptyCrumbWithIdArray, noop, { current: -1 }];

const BreadcrumbsContext = createContext(defaultContext);

type Props = {
  rootLevelCrumbs?: readonly Crumb[];
  children: ReactNode;
};

export const BreadcrumbsRoot = ({ rootLevelCrumbs = emptyCrumbArray, children }: Props) => {
  const [crumbs, setCrumbs] = useState(emptyCrumbWithIdArray);
  const isFirstRenderRef = useRef(true);
  const currentIndexRef = useRef(-1);

  const [rootCrumbs, setRootCrumbs] = useState(() =>
    rootLevelCrumbs.map(crumb => ({ id: uuid(), crumb, isRootCrumb: true })),
  );

  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }
    setRootCrumbs(rootLevelCrumbs.map(crumb => ({ id: uuid(), crumb, isRootCrumb: true })));
  }, [rootLevelCrumbs]);

  const orderedCrumbs = useMemo(
    () => [...crumbs].sort((a, b) => ((b.index ?? -1) > (a.index ?? -1) ? -1 : 1)),
    [crumbs],
  );

  const value = useMemo(
    () => [rootCrumbs, orderedCrumbs, setCrumbs, currentIndexRef] as const,
    [rootCrumbs, orderedCrumbs, setCrumbs, currentIndexRef],
  );

  return <BreadcrumbsContext.Provider value={value}>{children}</BreadcrumbsContext.Provider>;
};

const useBreadcrumbs = () => {
  const [initialCrumbs, crumbs] = useContext(BreadcrumbsContext);
  return useMemo(() => [...initialCrumbs, ...crumbs], [initialCrumbs, crumbs]);
};

export const useCrumb = (crumb?: Crumb) => {
  const [, , setValue, currentIndex] = useContext(BreadcrumbsContext);
  const [id] = useState(() => uuid());
  const initialCrumb = useRef(crumb);

  const [index] = useState(() => ++currentIndex.current);

  useEffect(() => {
    setValue(existingCrumbs => {
      const nextCrumbs = existingCrumbs.concat([
        { id, crumb: initialCrumb.current, isRootCrumb: false, index },
      ]);
      return nextCrumbs;
    });
    return () => {
      setValue(existingCrumbs => existingCrumbs.filter(existingCrumb => existingCrumb.id !== id));
    };
  }, [id, setValue, index]);

  useEffect(() => {
    setValue(existingCrumbs => {
      const exisitingCrumb = existingCrumbs.find(existingCrumb => existingCrumb.id === id);
      if (isNotNullish(exisitingCrumb) && exisitingCrumb.crumb !== crumb) {
        return existingCrumbs.map(existingCrumb => {
          return existingCrumb.id === id
            ? { id, crumb, isRootCrumb: exisitingCrumb.isRootCrumb, index }
            : existingCrumb;
        });
      }
      return existingCrumbs;
    });
  }, [id, crumb, setValue, index]);
};

const CHEVRON = (
  <View style={styles.chevron}>
    <Icon name="chevron-right-filled" color={colors.gray[500]} size={16} />
  </View>
);

const BreadcrumbsSiblingsDropdown = ({
  siblings,
  onPress,
}: {
  siblings: NonNullable<Crumb["siblings"]>;
  onPress: () => void;
}) => {
  return (
    <View style={styles.siblingsDropdown}>
      {siblings.map(({ url, label, isMatching }) => {
        return (
          <Link
            to={url}
            key={url}
            ariaCurrentValue="location"
            onPress={(event: React.MouseEvent<HTMLAnchorElement>) => {
              if (isMatching) {
                event.preventDefault();
              }
              onPress();
            }}
            style={styles.dropdownLinkContainer}
          >
            {({ hovered }) => (
              <View style={[styles.dropdownLink, isMatching && styles.dropdownLinkActive]}>
                <LakeText
                  style={[styles.dropdownLinkText, hovered && styles.dropdownLinkTextHovered]}
                >
                  {label}
                </LakeText>

                {isMatching && (
                  <>
                    <Space width={32} />

                    <Icon
                      color={colors.positive[500]}
                      name="checkmark-filled"
                      size={14}
                      style={styles.tick}
                    />
                  </>
                )}
              </View>
            )}
          </Link>
        );
      })}
    </View>
  );
};

const BreadcrumbsItem = ({
  crumb,
  isFirstItem = false,
  isLastItem = false,
  shouldAnimate,
}: {
  isFirstItem?: boolean;
  isLastItem?: boolean;
  crumb: Crumb;
  shouldAnimate: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(() => false);
  const hoverRef = useRef(null);
  const [siblings, setSiblings] = useState<Crumb["siblings"] | null>(null);

  useHover(hoverRef, {
    onHoverStart: () => setIsHovered(true),
    onHoverEnd: () => setIsHovered(false),
  });

  const handlePress = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (crumb.siblings != null) {
        event.preventDefault();
        setSiblings(crumb.siblings);
      }
    },
    [crumb.siblings],
  );

  return (
    <View style={[styles.item, shouldAnimate ? animations.fadeAndSlideInFromRight.enter : null]}>
      {!isFirstItem ? CHEVRON : null}

      <View>
        <Link to={crumb.link} ariaCurrentValue="location" onPress={handlePress}>
          <View
            ref={hoverRef}
            style={[
              styles.horizontalLink,
              shouldAnimate && animations.fadeAndSlideInFromRight.enter,
            ]}
          >
            <LakeText
              color={colors.gray[800]}
              style={[styles.horizontalLinkText, isLastItem && styles.activeHorizontalLinkText]}
            >
              <Text style={isHovered && !isLastItem ? styles.horizontalLinkTextHovered : undefined}>
                {crumb.label}
              </Text>

              {crumb.siblings != null ? (
                <>
                  <Space width={4} />
                  <Icon name="chevron-down-filled" color={colors.gray[500]} size={16} />
                </>
              ) : null}
            </LakeText>
          </View>
        </Link>

        <View style={styles.dropdownContainer}>
          <TransitionView {...animations.fadeAndSlideInFromBottom}>
            {siblings ? (
              <FocusTrap
                autoFocus={true}
                focusLock={true}
                returnFocus={true}
                onClickOutside={() => setSiblings(null)}
                onEscapeKey={() => setSiblings(null)}
              >
                <BreadcrumbsSiblingsDropdown
                  siblings={siblings}
                  onPress={() => setSiblings(null)}
                />
              </FocusTrap>
            ) : null}
          </TransitionView>
        </View>
      </View>
    </View>
  );
};

const BreadcrumbsDropdown = ({
  crumbs,
  onHoverStart,
  onHoverEnd,
  onLinkFocus,
  onLinkBlur,
  onLinkPress,
}: {
  crumbs: CrumbWithIdAndPosition[];
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
    <View style={styles.dropdown} ref={containerRef}>
      {crumbs.map(({ id, crumb }) => {
        return (
          <Link
            to={crumb.link}
            key={id}
            onFocus={onLinkFocus}
            onBlur={onLinkBlur}
            onPress={onLinkPress}
            ariaCurrentValue="location"
          >
            {({ hovered }) => (
              <View style={styles.dropdownLink}>
                <LakeText
                  style={[styles.dropdownLinkText, hovered && styles.dropdownLinkTextHovered]}
                >
                  {crumb.label}
                </LakeText>
              </View>
            )}
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

const BreadcrumbsDropdownItems = ({ crumbs }: { crumbs: CrumbWithIdAndPosition[] }) => {
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
        .with(["ForceClose", P._], () => "ForcedClosed")
        .with(["FocusHandle", "ForcedClosed"], () => "Closed")
        .with(
          ["Open", "ForcedOpen"],
          ["FocusHandle", "ForcedOpen"],
          ["Close", "ForcedOpen"],
          () => "ForcedOpen",
        )
        .with(["Open", P._], () => "Open")
        .with(["FocusHandle", P._], () => "OpenFromFocus")
        .with(["Close", P._], () => "Closed")
        .exhaustive();
    },
    "Closed",
  );

  const timeoutRef = useRef<number | undefined>(undefined);
  const handleRef = useRef<View>(null);
  const containerRef = useRef<View>(null);

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
      onHandleFocus: (event: NativeSyntheticEvent<TargetedEvent>) => {
        if (isNullish(containerRef.current)) {
          return;
        }
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

  return (
    <Box direction="row" alignItems="center">
      {CHEVRON}

      <View ref={containerRef}>
        <Pressable
          ref={handleRef}
          style={({ pressed }) => [
            styles.item,
            pressed && styles.itemPressed,
            openingStatus === "ForcedOpen" && styles.itemForcedOpen,
          ]}
          focusable={true}
          onFocus={onHandleFocus}
          onBlur={onAnyBlur}
          onPress={onPress}
        >
          <View style={styles.horizontalLink}>
            <LakeText style={[styles.horizontalLinkText, styles.activeHorizontalLinkText]}>
              {"…"}
            </LakeText>
          </View>
        </Pressable>

        <TransitionView {...animations.fadeAndSlideInFromBottom}>
          {shouldOpen ? (
            <FocusTrap
              autoFocus={shouldAutoFocus}
              focusLock={shouldLockFocus}
              returnFocus={shouldLockFocus}
              onClickOutside={onPressOutside}
              onEscapeKey={shouldLockFocus ? onEscapeKey : undefined}
            >
              <BreadcrumbsDropdown
                crumbs={crumbs}
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
    </Box>
  );
};

// In order to preserve the horizontal space, we collapse the breadcrumbs once
// there's strictly more than three crumbs. In that case, the expected behavior
// is as follows:
// - Display the root crumb (the first one) inline
// - Collapse any crumb between the first and the penultimate item in a dropdown
// - Display the last two crumbs inline
const arrangeArray = <T,>(array: T[]): { start: T[]; collapsed: T[]; end: T[] } => {
  if (array.length <= 3) {
    return {
      start: array,
      collapsed: [],
      end: [],
    };
  }
  return {
    start: array.slice(0, 1),
    collapsed: array.slice(1, -2),
    end: array.slice(-2),
  };
};

export const Breadcrumbs = () => {
  const crumbs = useBreadcrumbs();

  const cleanCrumbs = useMemo(() => {
    const hasCrumb = (value: CrumbWithId): value is SetRequired<CrumbWithId, "crumb"> =>
      isNotNullish(value.crumb);

    return crumbs.filter(hasCrumb);
  }, [crumbs]);

  const previousCrumbs = usePreviousValue(
    useMemo(() => {
      return new Set(cleanCrumbs.map(crumb => crumb.id));
    }, [cleanCrumbs]),
  );

  const { start, collapsed, end } = useMemo(() => {
    return arrangeArray(
      cleanCrumbs.map(
        ({ id, crumb, isRootCrumb }, index): CrumbWithIdAndPosition => ({
          id,
          crumb,
          isFirst: index === 0,
          isLast: index === cleanCrumbs.length - 1,
          isRootCrumb,
        }),
      ),
    );
  }, [cleanCrumbs]);

  return (
    <View accessibilityRole="navigation" style={styles.container}>
      {start.map(({ id, crumb, isFirst, isLast, isRootCrumb }) => (
        <BreadcrumbsItem
          key={id}
          crumb={crumb}
          isFirstItem={isFirst}
          isLastItem={isLast}
          shouldAnimate={!previousCrumbs.has(id) && !isRootCrumb}
        />
      ))}

      {collapsed.length > 0 ? <BreadcrumbsDropdownItems crumbs={collapsed} /> : null}

      {end.map(({ id, crumb, isLast, isRootCrumb }) => (
        <BreadcrumbsItem
          key={id}
          crumb={crumb}
          isLastItem={isLast}
          shouldAnimate={!previousCrumbs.has(id) && !isRootCrumb}
        />
      ))}
    </View>
  );
};
