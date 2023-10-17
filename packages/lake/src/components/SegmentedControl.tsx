import { ReactNode, useRef, useState } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { commonStyles } from "../constants/commonStyles";
import { colors } from "../constants/design";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { LakeText } from "./LakeText";
import { Pressable } from "./Pressable";

const HEIGHT = 26;
const BORDER_WIDTH = 1;

const styles = StyleSheet.create({
  switch: {
    userSelect: "none",
    flexDirection: "row",
    borderRadius: HEIGHT / 2,
    transform: "translateZ(0px)",
    width: "min-content",
    borderColor: colors.gray[100],
    borderWidth: BORDER_WIDTH,
  },
  handle: {
    position: "absolute",
    width: HEIGHT,
    height: HEIGHT,
    top: -BORDER_WIDTH,
    borderRadius: HEIGHT / 2,
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-in-out",
    borderWidth: BORDER_WIDTH,
  },
  switchItem: {
    paddingHorizontal: 8,
    height: HEIGHT - BORDER_WIDTH * 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export type Item<V> = {
  name: string;
  value: V;
  icon?: ReactNode;
  active: boolean;
};

type Props<V> = {
  items: Item<V>[];
  disabled?: boolean;
  onValueChange: (value: V) => void;
  mode?: "desktop" | "mobile";
};

export const SegmentedControl = <V,>({
  onValueChange,
  items,
  disabled = false,
  mode = "desktop",
}: Props<V>) => {
  const [active, setActive] = useState<boolean>(false);

  const containerRef = useRef<View | null>(null);
  const onItemRef = useRef<Text | null>(null);
  const [handleStyle, setHandleStyle] = useState<ViewStyle>();
  const isMobile = mode === "mobile";
  const onColor = active ? colors.positive[500] : colors.gray[500];
  // const offColor = active ? colors.negative[500] : colors.gray[500];

  // const reajustLayout = useCallback(() => {
  //   (values != null ? onItemRef : offItemRef).current?.measureLayout(
  //     containerRef.current as unknown as number,
  //     (left, _, width) => {
  //       setHandleStyle(prev => ({
  //         transitionProperty: prev ? "width, transform" : "none",
  //         width: width + 2 * BORDER_WIDTH,
  //         transform: `translateX(${values != null ? -BORDER_WIDTH : left - 2 * BORDER_WIDTH}px)`,
  //       }));
  //     },
  //     () => {},
  //   );
  // }, [values]);

  // useEffect(reajustLayout, [reajustLayout, values, isMobile]);

  return items.map(value => (
    <Pressable
      style={[styles.switch, disabled && commonStyles.disabled]}
      onPress={() => {
        console.log("value", value);
        onValueChange(value.value);
        setActive(!active);
      }}
      aria-disabled={disabled}
      disabled={disabled}
      ref={containerRef}
      role="switch"
      // onLayout={reajustLayout}
    >
      <View
        style={[
          styles.handle,
          handleStyle,
          {
            borderColor: active ? colors.positive[500] : colors.gray[100],
            backgroundColor: active ? colors.positive[50] : colors.gray[50],
          },
        ]}
      />

      <Box style={styles.switchItem} ref={onItemRef}>
        {isMobile ? (
          <Icon size={16} name="checkmark-circle-regular" color={onColor} />
        ) : (
          <LakeText variant="smallMedium" color={onColor}>
            {value.name}
          </LakeText>
        )}
      </Box>
    </Pressable>
  ));
};
