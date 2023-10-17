import { ReactNode, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { commonStyles } from "../constants/commonStyles";
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

const Item = () => {};

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
  const indicatorWidth = useRef(0);
  const itemWidths = useRef<number[]>([]);
  const selectedItemIndex = items.findIndex(item => item.id === selected);
  // const visibleItems = useState(items.length);

  // TODO: Update logic (this is not a god path)
  const maybeHideItems = () => {
    const maxWidth = items.length * indicatorWidth.current;
    const allItemsWidth = itemWidths.current.reduce((acc, width) => acc + width, 0);

    if (allItemsWidth > maxWidth) {
      console.log("SHOULD HIDE");
    }
  };

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
        role="none"
        aria-hidden={true}
        direction="row"
        style={{
          position: "absolute",
          visibility: "hidden",
        }}
      >
        {items.map((item, index) => {
          return (
            <Box
              key={`${item.id}-hidden`}
              direction="row"
              alignItems="center"
              onLayout={({ nativeEvent: { layout } }) => {
                itemWidths.current[index] = layout.width;
              }}
              style={{
                padding: spacings[12],
                backgroundColor: "green",
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
            </Box>
          );
        })}
      </Box>

      <View
        onLayout={({ nativeEvent: { layout } }) => {
          console.log("available width", layout.width);
        }}
        style={{
          flexGrow: 1,
          flexShrink: 1,
          padding: spacings[4],
        }}
      >
        <Box direction="row" style={commonStyles.fill}>
          <View
            role="none"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              flexGrow: 1,
              flexShrink: 1,
              width: `${(1 / items.length) * 100}%`,
              transitionProperty: "transform",
              transitionDuration: "250ms",
              transitionTimingFunction: "ease",
              transform: `translateX(${selectedItemIndex * 100}%)`,
            }}
            onLayout={({ nativeEvent: { layout } }) => {
              indicatorWidth.current = layout.width;
              maybeHideItems();
            }}
          >
            <View
              style={{
                flexGrow: 1,
                flexShrink: 1,
                borderRadius: radii[4],
                backgroundColor: backgroundColor.accented,
              }}
            />
          </View>

          {items.map((item, i) => (
            <Pressable
              key={item.id}
              style={{
                flexBasis: "0%",
                flexGrow: 1,
                flexShrink: 1,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
              onPress={() => {
                onValueChange(item.id);
              }}
            >
              <Box
                direction="row"
                alignItems="center"
                onLayout={({ nativeEvent: { layout } }) => {
                  // itemsWidths.current[index] = layout.width;
                  // maybeUpdateItems();
                }}
                style={{
                  padding: spacings[12],
                  // backgroundColor: "hotpink",
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
              </Box>
            </Pressable>
          ))}
        </Box>
      </View>

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
