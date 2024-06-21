import { ForwardedRef, Fragment, ReactNode, forwardRef, useEffect, useId, useRef } from "react";
import { StyleProp, StyleSheet, View, ViewStyle, WebRole } from "react-native";
import { ListRenderItemInfo } from "./FlatList";
import { ScrollView, ScrollViewProps, ScrollViewRef } from "./ScrollView";

const styles = StyleSheet.create({
  scrollTracker: {
    position: "absolute",
    pointerEvents: "none",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export type SectionListRef = ScrollViewRef;

type Section<T> = {
  title: string;
  data: T[];
};

type Props<T> = {
  ItemSeparatorComponent?: ReactNode;
  ListEmptyComponent?: ReactNode;
  ListFooterComponent?: ReactNode;
  ListHeaderComponent?: ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
  horizontal?: boolean;
  keyExtractor: (item: T, index: number) => string;
  onEndReached?: () => void;
  onEndReachedThresholdPx?: number;
  onKeyDown?: ScrollViewProps["onKeyDown"];
  onScroll?: ScrollViewProps["onScroll"];
  renderItem: (info: ListRenderItemInfo<T>) => ReactNode;
  renderSectionHeader?: (section: Section<T>) => ReactNode;
  role?: WebRole;
  scrollEventThrottle?: number;
  sections: Section<T>[];
  showsScrollIndicators?: boolean;
  style?: StyleProp<ViewStyle>;
};

const SectionListWithRef = <T,>(
  {
    ItemSeparatorComponent,
    ListEmptyComponent,
    ListFooterComponent,
    ListHeaderComponent,
    contentContainerStyle,
    horizontal = false,
    keyExtractor,
    onEndReached,
    onEndReachedThresholdPx = 200,
    onKeyDown,
    onScroll,
    renderItem,
    renderSectionHeader,
    role,
    scrollEventThrottle = 16,
    sections,
    showsScrollIndicators = true,
    style,
  }: Props<T>,
  forwardedRef: ForwardedRef<SectionListRef>,
) => {
  const groupId = useId();
  const scrollTrackerRef = useRef<View>(null);

  const scrollTrackerStyle = horizontal
    ? { width: onEndReachedThresholdPx }
    : { height: onEndReachedThresholdPx };

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
  }, [sections.length]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ScrollView
      contentContainerStyle={contentContainerStyle}
      horizontal={horizontal}
      onKeyDown={onKeyDown}
      onScroll={onScroll}
      ref={forwardedRef}
      role={role}
      scrollEventThrottle={scrollEventThrottle}
      showsScrollIndicators={showsScrollIndicators}
      style={style}
    >
      {ListHeaderComponent}

      {sections.length <= 0
        ? ListEmptyComponent
        : sections.map(section => (
            <Fragment key={`group-${groupId}-${section.title}`}>
              {renderSectionHeader?.(section)}

              {section.data.map((item, index) => (
                <Fragment key={keyExtractor(item, index)}>
                  {index !== 0 && ItemSeparatorComponent}
                  {renderItem({ item, index })}
                </Fragment>
              ))}
            </Fragment>
          ))}

      <View ref={scrollTrackerRef} style={[styles.scrollTracker, scrollTrackerStyle]} />

      {ListFooterComponent}
    </ScrollView>
  );
};

export const SectionList = forwardRef(SectionListWithRef) as <T>(
  props: Props<T> & { ref?: ForwardedRef<SectionListRef> },
) => ReturnType<typeof SectionListWithRef>;
