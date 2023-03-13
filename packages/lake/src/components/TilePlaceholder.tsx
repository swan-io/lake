import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { colors, radii } from "../constants/design";
import { Tile, TileGrid } from "./Tile";

const styles = StyleSheet.create({
  placeholderTitle: {
    height: 14,
    width: "40%",
    backgroundColor: colors.gray[200],
    borderRadius: radii[6],
    animationKeyframes: {
      "50%": {
        opacity: 0.6,
      },
    },
    animationDuration: "2000ms",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
  placeholderText: {
    height: 10,
    width: "50%",
    backgroundColor: colors.gray[100],
    borderRadius: radii[6],
    marginVertical: 24,
  },
  content: {
    animationKeyframes: {
      "50%": {
        opacity: 0.6,
      },
    },
    animationDuration: "2000ms",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
  withTabs: {
    // This is the actual height of spacing + tab bar
    // TODO: Make a shared (non-per-app) TabView for that, and providing Link/Router from outside
    paddingTop: 61,
  },
});

export const TilePlaceholder = () => {
  return (
    <Tile title={<View style={styles.placeholderTitle} />}>
      <View style={styles.content}>
        <View style={styles.placeholderText} />
        <View style={styles.placeholderText} />
        <View style={styles.placeholderText} />
        <View style={styles.placeholderText} />
      </View>
    </Tile>
  );
};

export const TileGridPlaceholder = ({
  numberOfItems = 2,
  withTabs = true,
}: {
  numberOfItems?: number;
  withTabs?: boolean;
}) => {
  return (
    <View style={withTabs && styles.withTabs}>
      <TileGrid>
        {useMemo(
          () =>
            Array(numberOfItems)
              .fill(null)
              .map((_, index) => <TilePlaceholder key={`placeholder-${index}`} />),
          [numberOfItems],
        )}
      </TileGrid>
    </View>
  );
};
