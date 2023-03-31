import { useRef } from "react";
import { FlatList, ListRenderItemInfo, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/design";
import { typography } from "../constants/typography";
import { useDisclosure } from "../hooks/useDisclosure";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { LakeButton } from "./LakeButton";
import { Popover } from "./Popover";
import { Space } from "./Space";

const styles = StyleSheet.create({
  selected: {
    color: colors.gray[500],
  },
  list: {
    paddingVertical: 20,
    marginVertical: 4,
    width: 250,
    overflow: "hidden",
  },
  item: {
    display: "flex",
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  itemHovered: {
    backgroundColor: colors.gray[50],
  },
  availableFiltersTitle: {
    ...typography.bodyLarge,
    color: colors.current[500],
    paddingHorizontal: 24,
  },
  filterName: {
    ...typography.bodySmall,
  },
});

export function FilterChooser<FilterName extends string>({
  filters,
  openFilters,
  label,
  title,
  availableFilters,
  large = true,
  onAddFilter,
}: {
  filters: Partial<Record<FilterName, unknown>>;
  openFilters: FilterName[];
  label: string;
  title: string;
  availableFilters: { label: string; name: FilterName }[];
  large?: boolean;
  onAddFilter: (filterName: FilterName) => void;
}) {
  const inputRef = useRef<View>(null);
  const [visible, { close, toggle }] = useDisclosure(false);

  return (
    <>
      <Box direction="row" justifyContent="start" alignItems="center">
        <LakeButton
          size="small"
          mode="secondary"
          color="gray"
          onPress={toggle}
          ref={inputRef}
          icon={large ? "chevron-down-filled" : "filter-filled"}
          iconPosition="end"
          ariaLabel={label}
        >
          {large ? label : null}
        </LakeButton>
      </Box>

      <Popover
        role="listbox"
        matchReferenceMinWidth={true}
        onDismiss={close}
        referenceRef={inputRef}
        returnFocus={false}
        visible={visible}
      >
        <View style={styles.list}>
          <Text style={styles.availableFiltersTitle}>{title}</Text>
          <Space height={8} />

          <FlatList
            role="list"
            data={availableFilters}
            keyExtractor={(_, index) => `filter-item-${index}`}
            renderItem={({ item }: ListRenderItemInfo<{ name: FilterName; label: string }>) => {
              const isSet = Boolean(filters[item.name]) || openFilters.includes(item.name);
              return (
                <Pressable
                  style={({ hovered }) => [styles.item, hovered && styles.itemHovered]}
                  role="button"
                  disabled={isSet}
                  onPress={() => {
                    onAddFilter(item.name);
                    close();
                  }}
                >
                  <Text style={[styles.filterName, isSet && styles.selected]}>{item.label}</Text>

                  {isSet && <Icon color={colors.positive[500]} name="checkmark-filled" size={14} />}
                </Pressable>
              );
            }}
          />
        </View>
      </Popover>
    </>
  );
}
