import { ReactNode, useEffect, useState } from "react";
import { LayoutChangeEvent, Pressable, StyleSheet, View } from "react-native";
import {
  backgroundColor,
  breakpoints,
  colors,
  invariantColors,
  radii,
  spacings,
} from "../constants/design";
import { BottomPanel } from "./BottomPanel";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { LakeButton } from "./LakeButton";
import { LakeText } from "./LakeText";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { Space } from "./Space";

const HORIZONTAL_PADDING = 4;

const styles = StyleSheet.create({
  responsiveContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.gray[50],
    borderRadius: 30,
    paddingVertical: 4,
    paddingHorizontal: HORIZONTAL_PADDING,
  },
  containerFullWidth: {
    width: "100%",
  },
  selectedIndicator: {
    position: "absolute",
    top: 4,
    bottom: 4,
    backgroundColor: invariantColors.white,
    borderRadius: 30,
    transitionProperty: "transform, width",
    transitionTimingFunction: "ease",
  },
  fill: {
    flex: 1,
  },
  item: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 30,
  },
  itemSelected: {
    backgroundColor: invariantColors.white,
  },
  button: {
    borderRadius: 30,
  },
  dropdownItem: {
    backgroundColor: backgroundColor.accented,
    borderRadius: radii[4],
    padding: spacings[16],
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    flex: 1,
  },
  dropdownItemSelected: {
    backgroundColor: colors.gray[50],
  },
  dropdownCheckIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacings[24],
    backgroundColor: colors.gray[50],
  },
});

export type Item<T extends string> = {
  name: string;
  id: T;
  icon?: ReactNode;
  activeIcon?: ReactNode;
};

type Props<T extends string> = {
  selected: T;
  items: ReadonlyArray<Item<T>>;
  fullWidth?: boolean;
  mobileBreakpoint?: number;
  onValueChange: (value: T) => void;
};

export const SegmentedControl = <T extends string>(props: Props<T>) => {
  const { mobileBreakpoint = breakpoints.small } = props;

  return (
    <ResponsiveContainer breakpoint={mobileBreakpoint} style={styles.responsiveContainer}>
      {({ small }) =>
        small ? <SegmentedControlMobile {...props} /> : <SegmentedControlDesktop {...props} />
      }
    </ResponsiveContainer>
  );
};

const SegmentedControlDesktop = <T extends string>({
  selected,
  items,
  fullWidth = false,
  onValueChange,
}: Props<T>) => {
  const selectedItemIndex = items.findIndex(item => item.id === selected);
  const [itemSizes, setItemSizes] = useState<{ left: number; width: number }[]>([]);
  const indicatorPosition = itemSizes[selectedItemIndex] ?? { left: 0, width: 0 };
  const [indicatorRendered, setIndicatorRendered] = useState(false); // use to prevent animation on first render

  const updateItemSize = (event: LayoutChangeEvent) => {
    // @ts-expect-error target exists in react-native-web
    const target: HTMLDivElement = event.nativeEvent.target;
    const sizes = Array.from(target.children)
      .slice(1) // first child is the selected indicator
      .map(child => ({
        left: (child as HTMLElement).offsetLeft - HORIZONTAL_PADDING,
        width: (child as HTMLElement).offsetWidth,
      }));
    setItemSizes(sizes);
  };

  useEffect(() => {
    if (indicatorPosition.width > 0) {
      setIndicatorRendered(true);
    }
  }, [indicatorPosition]);

  return (
    <View
      style={[styles.container, fullWidth && styles.containerFullWidth]}
      onLayout={updateItemSize}
    >
      <View
        role="none"
        style={[
          styles.selectedIndicator,
          indicatorPosition
            ? {
                transitionDuration: indicatorRendered ? "250ms" : "0ms",
                transform: `translateX(${indicatorPosition.left}px)`,
                width: indicatorPosition.width,
              }
            : null,
        ]}
      />
      {items.map(item => {
        const isSelected = item.id === selected;
        return (
          <Pressable
            key={item.id}
            style={[styles.item, fullWidth && styles.fill]}
            onPress={() => onValueChange(item.id)}
          >
            {item.icon != null && (
              <>
                {isSelected && item.activeIcon != null ? item.activeIcon : item.icon}
                <Space width={12} />
              </>
            )}
            <LakeText color={isSelected ? colors.current[500] : colors.gray[500]}>
              {item.name}
            </LakeText>
          </Pressable>
        );
      })}
    </View>
  );
};

const SegmentedControlMobile = <T extends string>({ selected, items, onValueChange }: Props<T>) => {
  // biome-ignore lint/style/noNonNullAssertion: we're sure to have at least 2 items
  const selectedItem = items.find(item => item.id === selected) ?? items[0]!;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View style={[styles.container, styles.containerFullWidth]}>
      <Pressable
        style={[styles.item, styles.itemSelected, styles.fill]}
        onPress={() => setMenuOpen(true)}
      >
        {selectedItem.icon != null && (
          <>
            {selectedItem.activeIcon != null ? selectedItem.activeIcon : selectedItem.icon}
            <Space width={12} />
          </>
        )}
        <LakeText color={colors.current[500]}>{selectedItem.name}</LakeText>
      </Pressable>

      <Space width={4} />

      <LakeButton
        mode="tertiary"
        size="small"
        icon="more-horizontal-filled"
        style={styles.button}
        onPress={() => setMenuOpen(true)}
        ariaLabel="Open options"
      />

      <BottomPanel
        visible={menuOpen === true}
        onPressClose={() => {
          setMenuOpen(false);
        }}
      >
        {items.map(item => {
          const isSelected = item.id === selected;

          return (
            <Box direction="row" key={item.id}>
              <Pressable
                style={[styles.dropdownItem, isSelected && styles.dropdownItemSelected]}
                onPress={() => {
                  onValueChange(item.id);
                  setMenuOpen(false);
                }}
              >
                {item.icon != null && (
                  <>
                    {isSelected && item.activeIcon != null ? item.activeIcon : item.icon}
                    <Space width={12} />
                  </>
                )}

                <Space height={8} width={12} />

                <LakeText color={colors.gray[900]} numberOfLines={1} variant="regular">
                  {item.name}
                </LakeText>
              </Pressable>

              {isSelected && (
                <View style={styles.dropdownCheckIconContainer}>
                  <Icon size={16} name="lake-check" color={colors.positive[500]} />
                </View>
              )}
            </Box>
          );
        })}
      </BottomPanel>
    </View>
  );
};
