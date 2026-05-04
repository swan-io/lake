import { ReactNode, useEffect, useState } from "react";
import { LayoutChangeEvent, Pressable, StyleSheet, View } from "react-native";
import { colors, invariantColors } from "../constants/design";
import { LakeText } from "./LakeText";
import { Space } from "./Space";

const HORIZONTAL_PADDING = 4;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
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
  onValueChange: (value: T) => void;
};

export const SegmentedControl2 = <T extends string>({
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
            <LakeText color={isSelected ? colors.live[500] : colors.gray[500]}>
              {item.name}
            </LakeText>
          </Pressable>
        );
      })}
    </View>
  );
};
