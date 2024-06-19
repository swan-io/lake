import { ForwardedRef, Fragment, ReactNode, forwardRef } from "react";
import { ScrollView, ScrollViewProps, StyleProp, ViewStyle, WebRole } from "react-native";
import { ListRenderItemInfo } from "./FlatList";

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
  onKeyDown?: ScrollViewProps["onKeyDown"];
  onScroll?: ScrollViewProps["onScroll"];
  renderItem: (info: ListRenderItemInfo<T>) => ReactNode;
  renderSectionHeader?: (section: Section<T>) => ReactNode;
  role?: WebRole;
  scrollEventThrottle?: number;
  sections: Section<T>[];
  showsHorizontalScrollIndicator?: boolean;
  showsVerticalScrollIndicator?: boolean;
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
    onKeyDown,
    onScroll,
    renderItem,
    renderSectionHeader,
    role,
    scrollEventThrottle = 0,
    sections,
    showsHorizontalScrollIndicator = true,
    showsVerticalScrollIndicator = true,
    style,
  }: Props<T>,
  forwardedRef: ForwardedRef<SectionListRef>,
) => {
  return (
    <ScrollView
      contentContainerStyle={contentContainerStyle}
      horizontal={horizontal}
      onKeyDown={onKeyDown}
      onScroll={onScroll}
      ref={forwardedRef}
      role={role}
      scrollEventThrottle={scrollEventThrottle}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      style={style}
    >
      {ListHeaderComponent}

      {sections.length > 0
        ? sections.map(section => (
            <Fragment key={`group-${section.title}`}>
              {renderSectionHeader?.(section)}

              {section.data.map((item, index) => (
                <Fragment key={keyExtractor(item, index)}>
                  {index !== 0 && ItemSeparatorComponent}
                  {renderItem({ item, index })}
                </Fragment>
              ))}
            </Fragment>
          ))
        : ListEmptyComponent}

      {ListFooterComponent}
    </ScrollView>
  );
};

export const SectionList = forwardRef(SectionListWithRef) as <T>(
  props: Props<T> & { ref?: ForwardedRef<SectionListRef> },
) => ReturnType<typeof SectionListWithRef>;
