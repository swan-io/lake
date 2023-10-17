import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { backgroundColor, colors, radii, spacings } from "../constants/design";
import { isNotNullish } from "../utils/nullish";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { LakeText } from "./LakeText";
import { Pressable } from "./Pressable";
import { Space } from "./Space";

const HEIGHT = 64;

const styles = StyleSheet.create({});

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
    <Box
      direction="row"
      style={{
        backgroundColor: colors.gray[50],
        height: HEIGHT,
        borderRadius: radii[8],
      }}
    >
      <Box
        direction="row"
        style={{
          flexGrow: 1,
          flexShrink: 1,
          padding: spacings[4],
        }}
      >
        <View
          role="none"
          style={{
            flexGrow: 1,
            flexShrink: 1,
            position: "absolute",
            width: `${(1 / items.length) * 100}%`,
            top: 0,
            left: 0,
            bottom: 0,
            transitionProperty: "transform",
            transitionDuration: "250ms",
            transitionTimingFunction: "ease",
            transform: `translateX(${selectedItemIndex * 100}%)`,
          }}
        >
          <View
            style={{
              margin: spacings[4],
              flexGrow: 1,
              flexShrink: 1,
              borderRadius: radii[4],
              backgroundColor: backgroundColor.accented,
            }}
          />
        </View>

        {items.map(item => (
          <Pressable
            key={item.id}
            style={{
              flexBasis: "0%",
              flexGrow: 1,
              flexShrink: 1,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              padding: spacings[12],
            }}
            onPress={() => {
              onValueChange(item.id);
            }}
          >
            {isNotNullish(item.icon) && (
              <>
                {item.icon}

                <Space width={12} />
              </>
            )}

            <LakeText
              color={colors.gray[900]}
              numberOfLines={1}
              style={{
                userSelect: "none",
              }}
            >
              {item.name}
            </LakeText>
          </Pressable>
        ))}
      </Box>

      <Pressable
        role="button"
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: HEIGHT,
        }}
      >
        <Icon size={24} name="more-horizontal-filled" color={colors.gray[500]} />
      </Pressable>
    </Box>
  );
};
