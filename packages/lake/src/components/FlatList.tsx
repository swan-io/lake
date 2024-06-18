import { ComponentType, ForwardedRef, Fragment, ReactNode, forwardRef } from "react";
import { ScrollView, ScrollViewProps, StyleProp, View, ViewStyle, WebRole } from "react-native";

export type FlatListRef = ScrollView;

type ListRenderItemInfo<T> = {
  item: T;
  index: number;
};

type Props<T> = {
  ItemSeparatorComponent?: ComponentType;
  ListEmptyComponent?: ReactNode;
  ListFooterComponent?: ReactNode;
  ListHeaderComponent?: ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
  data: T[];
  horizontal?: boolean;
  itemSize?: number;
  keyExtractor: (item: T, index: number) => string;
  onKeyDown?: ScrollViewProps["onKeyDown"];
  onScroll?: ScrollViewProps["onScroll"];
  renderItem: (info: ListRenderItemInfo<T>) => ReactNode;
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
    horizontal = false,
    itemSize,
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

      {data.length > 0
        ? data.map((item, index) => (
            <Fragment key={keyExtractor(item, index)}>
              {index !== 0 && separator}

              <View style={itemStyle}>{renderItem({ item, index })}</View>
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
