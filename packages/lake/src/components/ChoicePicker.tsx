import { ReactNode, useState } from "react";
import { StyleSheet, View } from "react-native";
import { breakpoints, negativeSpacings, spacings } from "../constants/design";
import { useResponsive } from "../hooks/useResponsive";
import { LakeButton } from "./LakeButton";
import { LakeRadio } from "./LakeRadio";
import { Pressable } from "./Pressable";
import { Space } from "./Space";
import { Tile } from "./Tile";

const styles = StyleSheet.create({
  root: {
    alignSelf: "stretch",
    alignItems: "stretch",
    flexGrow: 1,
    overflow: "hidden",
    marginHorizontal: negativeSpacings[12],
  },
  container: {
    alignSelf: "stretch",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
    justifyContent: "center",
  },
  mobileContainer: {
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    transitionProperty: "transform",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-in-out",
  },
  item: {
    flexGrow: 0,
    flexBasis: "33.333%",
    maxWidth: 300,
    padding: spacings[12],
    transform: "translateZ(0px)",
    animationKeyframes: {
      from: {
        opacity: 0,
        transform: "translateZ(0px) translateX(50px)",
      },
      to: {
        opacity: 1,
        transform: "translateZ(0px) translateX(0px)",
      },
    },
    animationDuration: "200ms",
    animationFillMode: "backwards",
    animationTimingFunction: "ease-in-out",
  },
  itemLarge: {
    flexBasis: "50%",
    maxWidth: "none",
  },
  itemSmallViewport: {
    width: "100%",
    flexBasis: "auto",
    maxWidth: "none",
  },
  tileContents: {
    alignItems: "center",
    alignSelf: "stretch",
    flexGrow: 1,
  },
  tileRenderedContents: {
    alignItems: "center",
    alignSelf: "stretch",
    flexGrow: 1,
  },
  leftButton: {
    position: "absolute",
    top: "50%",
    left: negativeSpacings[24],
    transform: "translateY(-50%)",
  },
  rightButton: {
    position: "absolute",
    top: "50%",
    right: negativeSpacings[24],
    transform: "translateY(-50%)",
  },
});

type Props<T> = {
  items: T[];
  large?: boolean;
  renderItem: (value: T) => ReactNode;
  value?: T;
  getId?: (item: T) => unknown;
  onChange: (value: T) => void;
};

const identity = <T,>(x: T) => x;

export const ChoicePicker = <T,>({
  items,
  getId = identity,
  large = false,
  renderItem,
  value,
  onChange,
}: Props<T>) => {
  const { desktop } = useResponsive(breakpoints.medium);
  const [index, setIndex] = useState(0);

  return (
    <View>
      <View style={styles.root}>
        <View
          style={[
            styles.container,
            !desktop && styles.mobileContainer,
            !desktop && { transform: `translateX(-${100 * index}%)` },
          ]}
        >
          {items.map((item, index) => (
            <Pressable
              key={String(index)}
              style={[
                styles.item,
                large && styles.itemLarge,
                !desktop && styles.itemSmallViewport,
                { animationDelay: `${200 + 100 * index}ms` },
              ]}
              onPress={() => onChange(item)}
            >
              {({ hovered }) => (
                <Tile
                  hovered={hovered}
                  selected={value != null && getId(item) === getId(value)}
                  flexGrow={1}
                >
                  <View style={styles.tileContents}>
                    <View style={styles.tileRenderedContents}>{renderItem(item)}</View>
                    <Space height={24} />
                    <LakeRadio value={value != null && getId(item) === getId(value)} />
                  </View>
                </Tile>
              )}
            </Pressable>
          ))}
        </View>
      </View>

      {!desktop && (
        <View style={styles.leftButton}>
          <LakeButton
            icon="chevron-left-filled"
            mode="secondary"
            forceBackground={true}
            onPress={() => setIndex(Math.max(0, index - 1))}
            disabled={index === 0}
          />
        </View>
      )}

      {!desktop && (
        <View style={styles.rightButton}>
          <LakeButton
            icon="chevron-right-filled"
            mode="secondary"
            forceBackground={true}
            onPress={() => setIndex(Math.min(items.length - 1, index + 1))}
            disabled={index === items.length - 1}
          />
        </View>
      )}
    </View>
  );
};
