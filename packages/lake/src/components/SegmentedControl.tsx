import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { backgroundColor, colors, radii, spacings, texts } from "../constants/design";
import { isNotNullish } from "../utils/nullish";
import { Box } from "./Box";
import { LakeText } from "./LakeText";
import { Pressable } from "./Pressable";
import { Space } from "./Space";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[50],
    borderRadius: radii[8],
    padding: spacings[4],
  },
  selectedItem: {
    position: "absolute",
    left: 0,
    top: 0,
    flexGrow: 1,
    flexShrink: 1,
    transitionProperty: "transform",
    transitionDuration: "250ms",
    transitionTimingFunction: "ease",
    padding: spacings[4],
    borderRadius: radii[4],
    backgroundColor: backgroundColor.accented,
  },
  item: {
    flexBasis: "0%",
    flexGrow: 1,
    flexShrink: 1,
    alignItems: "center",
    padding: spacings[12],
    flexDirection: "row",
  },
  itemMobile: {
    flexDirection: "column",
    justifyContent: "center",
  },
  textItem: {
    userSelect: "none",
    lineHeight: texts.regular.fontSize,
  },
});

export type Item<T extends string> = {
  name: string;
  id: T;
  icon?: ReactNode;
};

type Props<T extends string> = {
  mode?: "desktop" | "mobile";
  selected: T;
  items: ReadonlyArray<Item<T>>;
  onValueChange: (value: T) => void;
};

export const SegmentedControl = <T extends string>({
  mode = "desktop",
  selected,
  items,
  onValueChange,
}: Props<T>) => {
  const selectedItemIndex = items.findIndex(item => item.id === selected);

  return (
    <Box style={styles.container}>
      <Box direction={mode === "mobile" ? "column" : "row"}>
        <View
          role="none"
          style={[
            styles.selectedItem,
            // eslint-disable-next-line react-native/no-inline-styles
            mode === "mobile" && {
              right: 0,
              height: `${(1 / items.length) * 100}%`,
              transform: `translateY(${selectedItemIndex * 100}%)`,
            },
            // eslint-disable-next-line react-native/no-inline-styles
            mode === "desktop" && {
              bottom: 0,
              width: `${(1 / items.length) * 100}%`,
              transform: `translateX(${selectedItemIndex * 100}%)`,
            },
          ]}
        />

        {items.map(item => (
          <Pressable
            key={item.id}
            style={[styles.item, mode === "desktop" && styles.itemMobile]}
            onPress={() => {
              onValueChange(item.id);
            }}
          >
            {isNotNullish(item.icon) && (
              <>
                {item.icon}

                <Space height={8} width={12} />
              </>
            )}

            <LakeText
              color={colors.gray[900]}
              numberOfLines={1}
              variant="regular"
              style={styles.textItem}
            >
              {item.name}
            </LakeText>
          </Pressable>
        ))}
      </Box>
    </Box>
  );
};
