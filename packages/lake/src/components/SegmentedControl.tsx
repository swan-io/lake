import { ReactNode, useState } from "react";
import { StyleSheet, View } from "react-native";
import { P, match } from "ts-pattern";
import { backgroundColor, colors, radii, spacings, texts } from "../constants/design";
import { isNotNullish } from "../utils/nullish";
import { BottomPanel } from "./BottomPanel";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { LakeButton } from "./LakeButton";
import { LakeText } from "./LakeText";
import { Pressable } from "./Pressable";
import { ResponsiveContainer } from "./ResponsiveContainer";
import { Space } from "./Space";

const styles = StyleSheet.create({
  container: {
    padding: spacings[4],
    backgroundColor: colors.gray[50],
    borderRadius: radii[8],
  },
  selectedItemIndicator: {
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
  itemMobile: {
    backgroundColor: backgroundColor.accented,
    borderRadius: radii[4],
    padding: spacings[16],
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  dropdownItem: {
    backgroundColor: backgroundColor.accented,
    borderRadius: radii[4],
    padding: spacings[16],
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    flexGrow: 1,
  },
  dropdownItemSelected: {
    backgroundColor: colors.gray[50],
    borderRadius: radii[4],
    padding: spacings[16],
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    flexGrow: 1,
  },
  button: {
    width: 60,
    height: 60,
  },
  itemDesktop: {
    flexBasis: "0%",
    flexGrow: 1,
    flexShrink: 1,
    alignItems: "center",
    padding: spacings[16],
    flexDirection: "row",
    justifyContent: "center",
  },
  itemText: {
    userSelect: "none",
    lineHeight: texts.regular.fontSize,
  },
  selectedItemDesktop: {
    bottom: 0,
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
  onValueChange: (value: T) => void;
  minItemWidth?: number;
};

export const SegmentedControl = <T extends string>({
  selected,
  items,
  onValueChange,
  minItemWidth = 250,
}: Props<T>) => {
  const selectedItemIndex = items.findIndex(item => item.id === selected);

  const selectedItem = items[selectedItemIndex];

  const [pressed, setPressed] = useState<boolean>(false);

  return (
    <ResponsiveContainer breakpoint={items.length * minItemWidth} style={styles.container}>
      {({ small }) =>
        small ? (
          <Box direction="row" alignItems="center" justifyContent="spaceBetween">
            <Pressable
              style={styles.itemMobile}
              onPress={() => {
                setPressed(true);
              }}
            >
              {isNotNullish(selectedItem?.icon) &&
                match(selectedItem)
                  .with(
                    { icon: P.nonNullable, activeIcon: P.nonNullable },
                    () => selectedItem.activeIcon,
                  )
                  .with({ icon: P.nonNullable }, () => selectedItem.icon)
                  .otherwise(() => null)}

              <Space height={8} width={12} />

              <LakeText
                color={colors.gray[900]}
                numberOfLines={1}
                variant="regular"
                style={styles.itemText}
              >
                {selectedItem?.name}
              </LakeText>
            </Pressable>

            <BottomPanel
              visible={pressed === true}
              onPressClose={() => {
                setPressed(false);
              }}
            >
              {items.map(item => (
                <Box direction="row" key={item.id}>
                  <Pressable
                    style={
                      selectedItem?.id === item.id
                        ? styles.dropdownItemSelected
                        : styles.dropdownItem
                    }
                    onPress={() => {
                      onValueChange(item.id);
                      setPressed(false);
                    }}
                  >
                    {isNotNullish(item.icon) &&
                      match(item)
                        .with({ icon: P.nonNullable, activeIcon: P.nonNullable }, () =>
                          selectedItem?.id === item.id ? selectedItem.activeIcon : item.icon,
                        )
                        .with({ icon: P.nonNullable }, () => item.icon)
                        .otherwise(() => null)}

                    <Space height={8} width={12} />

                    <LakeText
                      color={colors.gray[900]}
                      numberOfLines={1}
                      variant="regular"
                      style={styles.itemText}
                    >
                      {item.name}
                    </LakeText>
                  </Pressable>

                  {selectedItem?.id === item.id && (
                    <Box
                      justifyContent="center"
                      style={{ paddingHorizontal: spacings[24], backgroundColor: colors.gray[50] }}
                    >
                      <Icon size={16} name="lake-check" color={colors.positive[500]} />
                    </Box>
                  )}
                </Box>
              ))}
            </BottomPanel>

            <Space width={4} />

            <LakeButton
              mode="tertiary"
              style={styles.button}
              size="small"
              icon="more-horizontal-filled"
              onPress={() => setPressed(true)}
              ariaLabel="Previous"
            />
          </Box>
        ) : (
          <Box direction="row">
            <View
              role="none"
              style={[
                styles.selectedItemIndicator,
                styles.selectedItemDesktop,
                {
                  width: `${(1 / items.length) * 100}%`,
                  transform: `translateX(${selectedItemIndex * 100}%)`,
                },
              ]}
            />

            {items.map(item => (
              <Pressable
                key={item.id}
                style={styles.itemDesktop}
                onPress={() => {
                  onValueChange(item.id);
                }}
              >
                <>
                  {isNotNullish(item.icon) &&
                    match(item)
                      .with({ icon: P.nonNullable, activeIcon: P.nonNullable }, () =>
                        selectedItem?.id === item.id ? selectedItem.activeIcon : item.icon,
                      )
                      .with({ icon: P.nonNullable }, () => item.icon)
                      .otherwise(() => null)}

                  <Space height={8} width={12} />
                </>

                <LakeText
                  color={colors.gray[900]}
                  numberOfLines={1}
                  variant="regular"
                  style={styles.itemText}
                >
                  {item.name}
                </LakeText>
              </Pressable>
            ))}
          </Box>
        )
      }
    </ResponsiveContainer>
  );
};
