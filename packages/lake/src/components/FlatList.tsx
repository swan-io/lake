import { Fragment, ReactNode, Ref, useEffect, useRef } from "react";
import { StyleProp, StyleSheet, View, ViewStyle, WebRole } from "react-native";
import { ScrollView, ScrollViewProps, ScrollViewRef } from "./ScrollView";

const styles = StyleSheet.create({
  scrollTracker: {
    position: "absolute",
    pointerEvents: "none",
    right: 0,
    bottom: 0,
  },
});

export type FlatListRef = ScrollViewRef;

export type ListRenderItemInfo<T> = {
  item: T;
  index: number;
};

type Props<T> = {
  ref?: Ref<FlatListRef>;
  ItemSeparatorComponent?: ReactNode;
  ListEmptyComponent?: ReactNode;
  ListFooterComponent?: ReactNode;
  ListHeaderComponent?: ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
  data: T[];
  horizontal?: boolean;
  keyExtractor: (item: T, index: number) => string;
  onEndReached?: () => void;
  onEndReachedThresholdPx?: number;
  onKeyDown?: ScrollViewProps["onKeyDown"];
  onScroll?: ScrollViewProps["onScroll"];
  renderItem: (info: ListRenderItemInfo<T>) => ReactNode;
  role?: WebRole;
  scrollEventThrottle?: number;
  showsScrollIndicators?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const FlatList = <T,>({
  ref,
  ItemSeparatorComponent,
  ListEmptyComponent,
  ListFooterComponent,
  ListHeaderComponent,
  contentContainerStyle,
  data,
  horizontal = false,
  keyExtractor,
  onEndReached,
  onEndReachedThresholdPx = 200,
  onKeyDown,
  onScroll,
  renderItem,
  role,
  scrollEventThrottle = 16,
  showsScrollIndicators = true,
  style,
}: Props<T>) => {
  const scrollTrackerRef = useRef<View>(null);

  const scrollTrackerStyle = horizontal
    ? { top: 0, width: onEndReachedThresholdPx }
    : { left: 0, height: onEndReachedThresholdPx };

  // biome-ignore lint/correctness/useExhaustiveDependencies(onEndReached): _
  // biome-ignore lint/correctness/useExhaustiveDependencies(data.length): _
  useEffect(() => {
    const element = scrollTrackerRef.current as unknown as HTMLElement;

    if (element != null) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            onEndReached?.();
          }
        });
      });

      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    }
    // re-create an observer only on list length change
  }, [data.length]);

  return (
    <ScrollView
      contentContainerStyle={contentContainerStyle}
      horizontal={horizontal}
      onKeyDown={onKeyDown}
      onScroll={onScroll}
      ref={ref}
      role={role}
      scrollEventThrottle={scrollEventThrottle}
      showsScrollIndicators={showsScrollIndicators}
      style={style}
    >
      {ListHeaderComponent}

      {data.length <= 0
        ? ListEmptyComponent
        : data.map((item, index) => (
            <Fragment key={keyExtractor(item, index)}>
              {index !== 0 && ItemSeparatorComponent}
              {renderItem({ item, index })}
            </Fragment>
          ))}

      {ListFooterComponent}

      <View role="none" ref={scrollTrackerRef} style={[styles.scrollTracker, scrollTrackerStyle]} />
    </ScrollView>
  );
};
