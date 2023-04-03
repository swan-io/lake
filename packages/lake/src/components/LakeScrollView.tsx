import { ReactNode, useCallback, useState } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View,
  ViewProps,
} from "react-native";
import { backgroundColor } from "../constants/design";

const HORIZONTAL_SAFE_AREA = 20;

const styles = StyleSheet.create({
  root: {
    height: 1,
    flexGrow: 1,
  },
  container: {
    height: 1,
    flexGrow: 1,
  },
  topGradient: {
    height: 30,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    backgroundImage: `linear-gradient(to bottom, ${backgroundColor.default}, ${backgroundColor.defaultTransparent})`,
    opacity: 0,
    transition: "200ms ease-in-out opacity",
    pointerEvents: "none",
  },
  visibleTopGradient: {
    opacity: 1,
  },
});

type Props = {
  children: ReactNode;
  style?: ViewProps["style"];
  contentContainerStyle?: ViewProps["style"];
  // TODO: Refactor to remove this by default
  horizontalSafeArea?: number;
};

export const LakeScrollView = ({
  children,
  horizontalSafeArea = HORIZONTAL_SAFE_AREA,
  style,
  contentContainerStyle,
}: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setIsScrolled(event.nativeEvent.contentOffset.y > 0);
  }, []);

  return (
    <View style={styles.root}>
      <ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        style={[styles.container, { marginHorizontal: -horizontalSafeArea }, style]}
        contentContainerStyle={[{ paddingHorizontal: horizontalSafeArea }, contentContainerStyle]}
      >
        {children}
      </ScrollView>

      <View style={[styles.topGradient, isScrolled && styles.visibleTopGradient]} />
    </View>
  );
};
