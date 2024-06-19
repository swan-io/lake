import { ForwardedRef, Fragment, ReactNode, forwardRef, useEffect, useId, useRef } from "react";
import {
  ScrollView,
  ScrollViewProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  WebRole,
} from "react-native";
import { ListRenderItemInfo } from "./FlatList";

const styles = StyleSheet.create({
  scrollTracker: {
    position: "absolute",
    pointerEvents: "none",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export type SectionListRef = ScrollView;

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
    scrollEventThrottle = 0,
    sections,
    showsScrollIndicators = true,
    style,
  }: Props<T>,
  forwardedRef: ForwardedRef<SectionListRef>,
) => {
  const groupId = useId();
  const scrollTrackerRef = useRef<View>(null);

  useEffect(() => {
    const element = scrollTrackerRef.current as unknown as HTMLElement;

    if (element != null && onEndReached != null) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            onEndReached();
          }
        });
      });

      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    }
  }, [onEndReached]);

  return (
    <ScrollView
      contentContainerStyle={contentContainerStyle}
      horizontal={horizontal}
      onKeyDown={onKeyDown}
      onScroll={onScroll}
      ref={forwardedRef}
      role={role}
      scrollEventThrottle={scrollEventThrottle}
      showsHorizontalScrollIndicator={showsScrollIndicators}
      showsVerticalScrollIndicator={showsScrollIndicators}
      style={style}
    >
      {ListHeaderComponent}

      {sections.length > 0 ? (
        <View>
          {sections.map(section => (
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

          <View
            ref={scrollTrackerRef}
            style={[styles.scrollTracker, { height: onEndReachedThresholdPx }]}
          />
        </View>
      ) : (
        ListEmptyComponent
      )}

      {ListFooterComponent}
    </ScrollView>
  );
};

export const SectionList = forwardRef(SectionListWithRef) as <T>(
  props: Props<T> & { ref?: ForwardedRef<SectionListRef> },
) => ReturnType<typeof SectionListWithRef>;
