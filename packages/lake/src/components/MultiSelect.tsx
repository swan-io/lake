import { Array, Dict, Option } from "@swan-io/boxed";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  Pressable,
  SectionList,
  SectionListData,
  SectionListRenderItemInfo,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { ColorVariants, backgroundColor, colors, radii, shadows, texts } from "../constants/design";
import { useDisclosure } from "../hooks/useDisclosure";
import { groupBy } from "../utils/array";
import { isNotNullish, isNotNullishOrEmpty } from "../utils/nullish";
import { safeSplitAround } from "../utils/string";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { InputError } from "./InputError";
import { Popover } from "./Popover";
import { PressableText, PressableTextInput } from "./Pressable";
import { Space } from "./Space";
import { Tag } from "./Tag";

const MAX_INPUT_HEIGHT = 120;
const ITEM_ELEMENT_HEIGHT = 32;
const NB_SUGGESTION_DISPLAYED = 10.5;

const styles = StyleSheet.create({
  base: {
    ...texts.regular,
    backgroundColor: backgroundColor.accented,
    borderColor: colors.gray[100],
    borderRadius: radii[6],
    borderWidth: 1,
    cursor: "default",
    overflow: "hidden",
    transitionDuration: "150ms",
    transitionProperty: "border-color, box-shadow",
  },
  errored: {
    borderColor: colors.negative[500],
  },
  tag: {
    marginRight: 4,
    marginVertical: 2,
  },
  hovered: {
    boxShadow: shadows.tile,
  },
  focused: {
    borderColor: colors.gray[500],
    boxShadow: shadows.tile,
    outlineStyle: "none",
  },
  disabled: {
    backgroundColor: colors.gray[50],
    borderColor: colors.gray[100],
    cursor: "not-allowed",
  },
  actions: {
    marginVertical: "auto",
    position: "absolute",
    bottom: 0,
    top: 0,
    right: 20,
  },
  placeholder: {
    ...texts.regular,
    color: colors.gray[300],
    userSelect: "none",
  },
  list: {
    marginVertical: 4,
    maxHeight: ITEM_ELEMENT_HEIGHT * NB_SUGGESTION_DISPLAYED,
    minHeight: 224,
  },
  filterContainer: {
    flexGrow: 1,
    flexShrink: 1,
    margin: 16,
  },
  filterInput: {
    ...texts.regular,
    backgroundColor: backgroundColor.accented,
    borderColor: colors.gray[100],
    borderRadius: 4,
    borderWidth: 1,
    flexGrow: 1,
    flexShrink: 1,
    height: 40,
    outlineStyle: "none",
    paddingHorizontal: 12,
    paddingLeft: 40,
    placeholderTextColor: colors.gray[300],
  },
  filterfocused: {
    borderColor: colors.gray[200],
  },
  searchIcon: {
    position: "absolute",
    left: 14,
  },
  tagsList: {
    flexWrap: "wrap",
    maxHeight: MAX_INPUT_HEIGHT,
    minHeight: 40,
    overflowY: "auto",
    paddingHorizontal: 16,
    paddingRight: 60,
    paddingVertical: 8,
  },
  groupTitleBase: {
    alignItems: "center",
    flexDirection: "row",
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    transitionDuration: "200ms",
    transitionProperty: "background-color",
  },
  groupTitle: {
    ...texts.semibold,
    userSelect: "none",
  },
  line: {
    ...texts.regular,
    paddingHorizontal: 16,
    paddingVertical: 8,
    transitionDuration: "200ms",
    transitionProperty: "background-color",
    userSelect: "none",
  },
  lineInGroup: {
    paddingLeft: 24,
  },
  emptyList: {
    height: 136,
  },
  emptyListText: {
    color: colors.gray.primary,
  },
});

export type MultiSelectItem = {
  disabled?: boolean;
  group: string;
  label: string;
  value: string;
};

export type MultiSelectProps<I> = {
  color?: ColorVariants;
  disabled?: boolean;
  error?: string;
  emptyResultText?: string;
  enableGroups?: boolean;
  filterPlaceholder?: string;
  items: I[];
  onValueChange: (values: string[]) => void;
  placeholder?: string;
  renderTagGroup?: (items: readonly MultiSelectItem[]) => string;
  style?: StyleProp<ViewStyle>;
  values: string[];
  id?: string;
};

export const MultiSelect = memo<MultiSelectProps<MultiSelectItem>>(
  ({
    color = "gray",
    disabled = false,
    emptyResultText,
    enableGroups = true,
    filterPlaceholder,
    items,
    onValueChange,
    placeholder,
    renderTagGroup,
    error,
    style,
    values,
    id,
  }) => {
    const [filter, setFilter] = useState<string>("");

    const shouldScrollToBottomRef = useRef(false);
    const selectedTagListRef = useRef<View & Element>(null);
    const inputRef = useRef<View>(null);
    const listRef = useRef<FlatList>(null);
    const [visible, { open, close }] = useDisclosure(false);

    const tint50 = colors[color][50];
    const tint100 = colors[color][100];

    useEffect(() => {
      if (!visible) {
        setFilter("");
      }
    }, [visible]);

    useEffect(() => {
      if (shouldScrollToBottomRef.current) {
        const top = selectedTagListRef.current?.scrollHeight;
        selectedTagListRef.current?.scrollTo({ top });
      }

      shouldScrollToBottomRef.current = false;
    }, [values]);

    const handleSelectItem = (item: MultiSelectItem) => {
      shouldScrollToBottomRef.current = true;
      onValueChange([...values, item.value]);
    };

    const handleRemoveItem = (item: MultiSelectItem) => {
      onValueChange(values.filter(index => index !== item.value));
    };

    const handleClearAll = () => {
      onValueChange([]);
    };

    const handleSelectGroup = (groupItems: readonly MultiSelectItem[]) => {
      shouldScrollToBottomRef.current = true;
      const items = groupItems.map(item => item.value);
      const newValue = [...new Set([...values, ...items])];
      onValueChange(newValue);
    };

    // Used to get full selected value informations in O(1).
    const valueItemMapping = useMemo(
      () =>
        items.reduce((acc: Record<string, MultiSelectItem>, item) => {
          acc[item.value] = item;
          return acc;
        }, {}),
      [items],
    );

    const selectedTags = useMemo(
      () => values.map(value => valueItemMapping[value]).filter(isNotNullish),
      [values, valueItemMapping],
    );

    const filteredItems = useMemo(() => {
      const remainingTags = items.filter(item => !values.includes(item.value));
      const cleanedFilter = filter.trim().toLowerCase();

      return cleanedFilter === ""
        ? remainingTags
        : remainingTags.filter(({ label }) => label.toLowerCase().includes(cleanedFilter));
    }, [filter, items, values]);

    const sections = useMemo(() => {
      return Array.filterMap(
        Dict.entries(groupBy(filteredItems, ({ group }) => group)),
        ([groupName, data]) =>
          data === undefined ? Option.None() : Option.Some({ title: groupName, data }),
      );
    }, [filteredItems]);

    const ListHeaderComponent = useMemo(
      () => (
        <Box direction="row" alignItems="center" style={styles.filterContainer}>
          <PressableTextInput
            autoComplete="off"
            inputMode="search"
            multiline={false}
            rows={1}
            onChangeText={filterValue => setFilter(filterValue)}
            placeholder={filterPlaceholder}
            value={filter}
            style={({ focused }) => [styles.filterInput, focused && styles.filterfocused]}
          />

          <Icon
            name="search-filled"
            color={colors[color].primary}
            size={20}
            style={styles.searchIcon}
          />
        </Box>
      ),
      [filter, filterPlaceholder, color],
    );

    const ListEmptyComponent = useMemo(
      () => (
        <Box justifyContent="center" alignItems="center" style={styles.emptyList}>
          <Icon name="clipboard-search-regular" size={24} color={colors.gray.primary} />

          {isNotNullishOrEmpty(emptyResultText) && (
            <>
              <Space height={8} />
              <Text style={styles.emptyListText}>{emptyResultText}</Text>
            </>
          )}
        </Box>
      ),
      [emptyResultText],
    );

    return (
      <View style={style}>
        <Pressable
          id={id}
          ref={inputRef}
          aria-haspopup="listbox"
          role="button"
          aria-expanded={visible}
          disabled={disabled}
          onPress={open}
          style={({ hovered, focused }) => [
            styles.base,
            hovered && styles.hovered,
            (focused || visible) && styles.focused,
            disabled && styles.disabled,
            isNotNullish(error) && styles.errored,
          ]}
        >
          <Box ref={selectedTagListRef} alignItems="center" direction="row" style={styles.tagsList}>
            {selectedTags.length > 0 ? (
              selectedTags.map(item => (
                <Tag
                  key={item.value}
                  color={color}
                  onPressRemove={disabled ? undefined : () => handleRemoveItem(item)}
                  style={styles.tag}
                >
                  {item.label}
                </Tag>
              ))
            ) : placeholder !== "" ? (
              <Text role="label" numberOfLines={1} style={styles.placeholder}>
                {placeholder}
              </Text>
            ) : null}
          </Box>

          <Box direction="row" alignItems="center" style={styles.actions}>
            {selectedTags.length >= 1 && !disabled && (
              <>
                <Pressable role="button" onPress={handleClearAll}>
                  <Icon name="dismiss-filled" color={colors.gray.primary} size={15} />
                </Pressable>

                <Space width={8} />
              </>
            )}

            <Icon
              color={colors.gray.primary}
              name={visible ? "chevron-up-filled" : "chevron-down-filled"}
              size={20}
            />
          </Box>
        </Pressable>

        <Popover
          role="listbox"
          matchReferenceWidth={true}
          onDismiss={close}
          referenceRef={inputRef}
          returnFocus={true}
          visible={visible}
          field={true}
        >
          <View style={styles.list}>
            {enableGroups ? (
              <SectionList
                role="listbox"
                aria-multiselectable={true}
                keyExtractor={(item, index) => `group-field-${item.value}-${index}`}
                extraData={filter}
                ListHeaderComponent={ListHeaderComponent}
                ListEmptyComponent={ListEmptyComponent}
                ListFooterComponent={<Space height={16} />}
                sections={sections}
                renderSectionHeader={({
                  section: { title, data },
                }: {
                  section: SectionListData<MultiSelectItem>;
                }) => (
                  <Pressable
                    role="listitem"
                    onPress={() => handleSelectGroup(data)}
                    style={({ hovered, pressed, focused }) => [
                      styles.groupTitleBase,
                      (hovered || focused) && { backgroundColor: tint50 },
                      pressed && { backgroundColor: tint100 },
                    ]}
                  >
                    <Text numberOfLines={1} style={styles.groupTitle}>
                      {title}
                    </Text>

                    {isNotNullish(renderTagGroup) && (
                      <Tag color={color}>{renderTagGroup(data)}</Tag>
                    )}
                  </Pressable>
                )}
                renderItem={({ item }: SectionListRenderItemInfo<MultiSelectItem>) => (
                  <LineItem
                    color={color}
                    filter={filter}
                    item={item}
                    handleSelectItem={handleSelectItem}
                    style={styles.lineInGroup}
                  />
                )}
              />
            ) : (
              <FlatList
                ref={listRef}
                role="list"
                data={filteredItems}
                extraData={filter}
                keyExtractor={item => `field-${item.value}`}
                ListHeaderComponent={ListHeaderComponent}
                ListEmptyComponent={ListEmptyComponent}
                ListFooterComponent={<Space height={8} />}
                renderItem={({ item }: ListRenderItemInfo<MultiSelectItem>) => (
                  <LineItem
                    color={color}
                    filter={filter}
                    item={item}
                    handleSelectItem={handleSelectItem}
                  />
                )}
              />
            )}
          </View>
        </Popover>

        <InputError message={error} />
      </View>
    );
  },
);

type LineItemProps = {
  color: ColorVariants;
  filter: string;
  handleSelectItem: (item: MultiSelectItem) => void;
  item: MultiSelectItem;
  style?: StyleProp<TextStyle>;
};

const LineItem = ({ item, color, filter, handleSelectItem, style }: LineItemProps) => {
  const { label, disabled = false } = item;
  const cleanFilter = filter.trim().toLowerCase();

  const tint50 = colors[color][50];
  const tint100 = colors[color][100];

  const tokens = useMemo(
    () => (disabled || cleanFilter === "" ? label : safeSplitAround(label, cleanFilter)),
    [label, disabled, cleanFilter],
  );

  return (
    <PressableText
      role="listitem"
      disabled={disabled}
      numberOfLines={1}
      onPress={() => handleSelectItem(item)}
      style={({ hovered, pressed }) => [
        styles.line,
        style,
        hovered && { backgroundColor: tint50 },
        pressed && { backgroundColor: tint100 },
        disabled && { backgroundColor: colors.gray[50], color: colors.gray[100] },
      ]}
    >
      {typeof tokens === "string"
        ? tokens
        : tokens.map((token, index) => {
            const colored = token.toLowerCase() === cleanFilter;

            if (!colored) {
              return token;
            }

            return (
              <Text key={index} style={{ color }}>
                {token}
              </Text>
            );
          })}
    </PressableText>
  );
};
