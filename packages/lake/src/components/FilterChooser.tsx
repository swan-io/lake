import { useRef } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { colors } from "../constants/design";
import { useDisclosure } from "../hooks/useDisclosure";
import { isNotNullishOrEmpty } from "../utils/nullish";
import { FlatList } from "./FlatList";
import { Icon } from "./Icon";
import { LakeButton } from "./LakeButton";
import { LakeText } from "./LakeText";
import { Popover } from "./Popover";
import { Space } from "./Space";

const styles = StyleSheet.create({
  selected: {
    color: colors.gray[500],
  },
  list: {
    paddingVertical: 20,
    marginVertical: 4,
    minWidth: 250,
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
    paddingHorizontal: 24,
  },
});

export const FilterChooser = <FilterName extends string>({
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
  title?: string;
  availableFilters: { label: string; name: FilterName }[];
  large?: boolean;
  onAddFilter: (filterName: FilterName) => void;
}) => {
  const inputRef = useRef<View>(null);
  const [visible, { close, toggle }] = useDisclosure(false);

  return (
    <>
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

      <Popover
        role="listbox"
        matchReferenceMinWidth={true}
        onDismiss={close}
        referenceRef={inputRef}
        returnFocus={false}
        visible={visible}
      >
        <View style={styles.list}>
          {isNotNullishOrEmpty(title) ? (
            <>
              <LakeText style={styles.availableFiltersTitle}>{title}</LakeText>
              <Space height={8} />
            </>
          ) : null}

          <FlatList
            role="list"
            data={availableFilters}
            keyExtractor={(_, index) => `filter-item-${index}`}
            renderItem={({ item }) => {
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
                  <LakeText variant="smallRegular" style={isSet && styles.selected}>
                    {item.label}
                  </LakeText>

                  {isSet && <Icon color={colors.positive[500]} name="checkmark-filled" size={14} />}
                </Pressable>
              );
            }}
          />
        </View>
      </Popover>
    </>
  );
};
