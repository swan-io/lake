import { ComponentType, ForwardedRef, Fragment, ReactNode, forwardRef } from "react";
import { ScrollView, ScrollViewProps, StyleProp, View, ViewStyle, WebRole } from "react-native";

export type FlatListRef = ScrollView;

export type ListRenderItemInfo<T> = {
  item: T;
  index: number;
};

export type ListRenderItem<T> = (info: ListRenderItemInfo<T>) => ReactNode;

type Props<T> = {
  ItemSeparatorComponent?: ComponentType;
  ListEmptyComponent?: ReactNode;
  ListFooterComponent?: ReactNode;
  ListHeaderComponent?: ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
  data: T[];
  itemHeight?: number;
  keyExtractor: (item: T, index: number) => string;
  onKeyDown?: ScrollViewProps["onKeyDown"];
  onScroll?: ScrollViewProps["onScroll"];
  renderItem: ListRenderItem<T>;
  role?: WebRole;
  scrollEventThrottle?: number;
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
    itemHeight,
    keyExtractor,
    onKeyDown,
    onScroll,
    renderItem,
    role,
    scrollEventThrottle = 16,
    style,
  }: Props<T>,
  forwardedRef: ForwardedRef<FlatListRef>,
) => {
  const separator = ItemSeparatorComponent != null ? <ItemSeparatorComponent /> : null;

  return (
    <ScrollView
      ref={forwardedRef}
      onKeyDown={onKeyDown}
      onScroll={onScroll}
      role={role}
      scrollEventThrottle={scrollEventThrottle}
      style={style}
      contentContainerStyle={contentContainerStyle}
    >
      {ListHeaderComponent}

      {data.length > 0
        ? data.map((item, index) => (
            <Fragment key={keyExtractor(item, index)}>
              {index !== 0 && separator}

              <View style={{ height: itemHeight }}>{renderItem({ item, index })}</View>
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
