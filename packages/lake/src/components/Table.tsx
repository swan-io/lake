import {
  ComponentProps,
  ComponentType,
  Fragment,
  ReactElement,
  ReactNode,
  ReactText,
  useEffect,
} from "react";
import { FlatList, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { match } from "ts-pattern";
import { colors } from "../constants/colors";
import { commonStyles } from "../constants/commonStyles";
import { typography } from "../constants/typography";
import { Box } from "./Box";
import { Separator } from "./Separator";
import { Space } from "./Space";

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
  },
  header: {
    height: 44,
    paddingHorizontal: 16,
  },
  head: {
    ...typography.bodySmall,
    fontWeight: typography.fontWeights.demi,
    color: colors.gray[100],
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    height: 56,
    paddingHorizontal: 16,
    transitionDuration: "300ms",
    transitionProperty: "background-color",
  },
  rowHover: {
    backgroundColor: colors.gray[3],
  },
  rowPressed: {
    opacity: 0.75,
  },
  text: {
    ...typography.bodySmall,
    color: colors.gray[80],
  },
});

/**
 * `fixed` set the column width in px
 * `percentage` set the column with in remaining percentage (by using flex-basis)
 */
type ColumnWidth = { type: "fixed"; value: number } | { type: "remainingPercent"; value: number };

export type TableColumn<T> = {
  key: string;
  width: ColumnWidth;
  label: string;
  render: (item: T) => ReactNode;
};

type Props<T> = {
  keyExtractor?: (item: T, index: number) => string;
  columns: TableColumn<T>[];
  data: T[];
  hideColumns?: boolean;
  ListEmptyComponent?: ComponentType<unknown> | ReactElement | null;
  ListFooterComponent?: ComponentType<unknown> | ReactElement | null;
  ListHeaderComponent?: ComponentType<unknown> | ReactElement | null;
  onPressLine?: (item: T) => void;
  isDisabledLine?: (item: T) => boolean;
  onEndReached?: ComponentProps<typeof FlatList>["onEndReached"];
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const getColumnStyle = (width: ColumnWidth): StyleProp<ViewStyle> => {
  return match(width.type)
    .with("remainingPercent", () => ({
      flexBasis: `${width.value}%`,
      flexShrink: 1,
    }))
    .with("fixed", () => ({
      width: width.value,
      flexShrink: 0,
    }))
    .exhaustive();
};

const isText = (node: ReactNode): node is ReactText => ["string", "number"].includes(typeof node);

export function Table<T>({
  keyExtractor,
  columns,
  data,
  ListEmptyComponent,
  ListFooterComponent,
  ListHeaderComponent,
  onPressLine,
  isDisabledLine,
  onEndReached,
  contentContainerStyle,
  hideColumns = false,
}: Props<T>) {
  // Add width checker which run only during development
  if (process.env.NODE_ENV === "development") {
    // We use useEffect to avoid spaming development console with warning message
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const columnsInPercent = columns.filter(({ width }) => width.type === "remainingPercent");
      const percentWidth = columnsInPercent.reduce((acc, { width }) => acc + width.value, 0);

      if (process.env.NODE_ENV === "development" && percentWidth !== 100) {
        console.warn(
          `Invalid Table width: total remaining width is ${percentWidth}, please check columns config where 'width.type' is 'remainingPercent'`,
        );
      }
    }, [columns]);
  }

  return (
    <View style={commonStyles.fill}>
      {!hideColumns && (
        <Box direction="row" alignItems="center" style={styles.header}>
          {columns.map(({ key, width, label }, index) => (
            <Fragment key={key}>
              {index > 0 && <Space width={4} />}

              <Text numberOfLines={1} style={[styles.head, getColumnStyle(width)]}>
                {label}
              </Text>
            </Fragment>
          ))}
        </Box>
      )}

      <FlatList
        keyExtractor={keyExtractor}
        contentContainerStyle={StyleSheet.flatten([styles.content, contentContainerStyle])}
        accessibilityRole="list"
        data={data}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={({ hovered, pressed }) => [
                styles.row,
                hovered && styles.rowHover,
                pressed && styles.rowPressed,
              ]}
              disabled={!onPressLine || isDisabledLine?.(item) === true}
              onPress={() => onPressLine?.(item)}
            >
              {columns.map(({ key, width, render }, index) => {
                const content = render(item);

                return (
                  <Fragment key={key}>
                    {index > 0 && <Space width={4} />}

                    <View style={getColumnStyle(width)}>
                      {isText(content) ? (
                        <Text numberOfLines={1} style={styles.text}>
                          {content}
                        </Text>
                      ) : (
                        content
                      )}
                    </View>
                  </Fragment>
                );
              })}
            </Pressable>
          );
        }}
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  );
}
