import { ForwardedRef, Fragment, ReactNode, forwardRef } from "react";
import { ScrollView, ScrollViewProps, StyleProp, ViewStyle, WebRole } from "react-native";

export type FlatListRef = ScrollView;

export type ListRenderItemInfo<T> = {
  item: T;
  index: number;
};

type Props<T> = {
  ItemSeparatorComponent?: ReactNode;
  ListEmptyComponent?: ReactNode;
  ListFooterComponent?: ReactNode;
  ListHeaderComponent?: ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
  data: T[];
  horizontal?: boolean;
  keyExtractor: (item: T, index: number) => string;
  onKeyDown?: ScrollViewProps["onKeyDown"];
  onScroll?: ScrollViewProps["onScroll"];
  renderItem: (info: ListRenderItemInfo<T>) => ReactNode;
  role?: WebRole;
  scrollEventThrottle?: number;
  showsScrollIndicators?: boolean;
  style?: StyleProp<ViewStyle>;
};

const FlatListWithRef = <T,>(
  {
    ItemSeparatorComponent,
    ListEmptyComponent,
    ListFooterComponent,
    ListHeaderComponent,
    contentContainerStyle,
    data,
    horizontal = false,
    keyExtractor,
    onKeyDown,
    onScroll,
    renderItem,
    role,
    scrollEventThrottle = 0,
    showsScrollIndicators = true,
    style,
  }: Props<T>,
  forwardedRef: ForwardedRef<FlatListRef>,
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
      showsHorizontalScrollIndicator={showsScrollIndicators}
      showsVerticalScrollIndicator={showsScrollIndicators}
      style={style}
    >
      {ListHeaderComponent}

      {data.length > 0
        ? data.map((item, index) => (
            <Fragment key={keyExtractor(item, index)}>
              {index !== 0 && ItemSeparatorComponent}
              {renderItem({ item, index })}
            </Fragment>
          ))
        : ListEmptyComponent}

      {ListFooterComponent}
    </ScrollView>
  );
};

export const FlatList = forwardRef(FlatListWithRef) as <T>(
  props: Props<T> & { ref?: ForwardedRef<FlatListRef> },
) => ReturnType<typeof FlatListWithRef>;
