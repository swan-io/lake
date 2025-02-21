import { FlatList } from "@swan-io/lake/src/components/FlatList";
import { Icon } from "@swan-io/lake/src/components/Icon";
import { LakeButton } from "@swan-io/lake/src/components/LakeButton";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { Popover } from "@swan-io/lake/src/components/Popover";
import { colors } from "@swan-io/lake/src/constants/design";
import { useDisclosure } from "@swan-io/lake/src/hooks/useDisclosure";
import { useRef } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { t } from "../utils/i18n";

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

export function FilterChooser<FilterName extends string>({
  filters,
  openFilters,
  availableFilters,
  large = true,
  onAddFilter,
}: {
  filters: Partial<Record<FilterName, unknown>>;
  openFilters: FilterName[];
  availableFilters: { label: string; name: FilterName }[];
  large?: boolean;
  onAddFilter: (filterName: FilterName) => void;
}) {
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
        ariaLabel={t("common.filters")}
      >
        {large ? t("common.filters") : null}
      </LakeButton>

      <Popover
        role="listbox"
        matchReferenceMinWidth={true}
        onDismiss={close}
        referenceRef={inputRef}
        returnFocus={false}
        visible={visible}
      >
        <FlatList
          role="list"
          data={availableFilters}
          style={styles.list}
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
      </Popover>
    </>
  );
}
