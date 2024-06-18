import { ComponentType, ForwardedRef, Fragment, ReactNode, forwardRef } from "react";
import { ScrollView, ScrollViewProps, StyleProp, View, ViewStyle, WebRole } from "react-native";

export type SectionListRef = ScrollView;

type ListRenderItemInfo<T> = {
  item: T;
  index: number;
};

type Section<T> = {
  title: string;
  data: T[];
};

type Props<T> = {
  ItemSeparatorComponent?: ComponentType;
  ListEmptyComponent?: ReactNode;
  ListFooterComponent?: ReactNode;
  ListHeaderComponent?: ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
  horizontal?: boolean;
  itemSize?: number;
  keyExtractor: (item: T, index: number) => string;
  onKeyDown?: ScrollViewProps["onKeyDown"];
  onScroll?: ScrollViewProps["onScroll"];
  renderItem: (info: ListRenderItemInfo<T>) => ReactNode;
  renderSectionHeader?: (section: Section<T>) => ReactNode;
  role?: WebRole;
  scrollEventThrottle?: number;
  sections: Section<T>[];
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
    itemSize,
    keyExtractor,
    onKeyDown,
    onScroll,
    renderItem,
    renderSectionHeader,
    role,
    scrollEventThrottle = 16,
    sections,
    style,
  }: Props<T>,
  forwardedRef: ForwardedRef<SectionListRef>,
) => {
  const separator = ItemSeparatorComponent != null ? <ItemSeparatorComponent /> : null;
  const vertical = !horizontal;

  const itemStyle =
    itemSize != null
      ? { height: vertical ? itemSize : undefined, width: horizontal ? itemSize : undefined }
      : undefined;

  return (
    <ScrollView
      ref={forwardedRef}
      horizontal={horizontal}
      onKeyDown={onKeyDown}
      onScroll={onScroll}
      role={role}
      scrollEventThrottle={scrollEventThrottle}
      style={style}
      contentContainerStyle={contentContainerStyle}
    >
      {ListHeaderComponent}

      {sections.length > 0
        ? sections.map(section => (
            <Fragment key={`group-${section.title}`}>
              {renderSectionHeader?.(section)}

              {section.data.map((item, index) => (
                <Fragment key={keyExtractor(item, index)}>
                  {index !== 0 && separator}

                  <View style={itemStyle}>{renderItem({ item, index })}</View>
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
