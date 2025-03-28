import { Array, Dict, Option } from "@swan-io/boxed";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { ColorVariants, backgroundColor, colors, radii, shadows, texts } from "../constants/design";
import { useBoolean } from "../hooks/useBoolean";
import { useDisclosure } from "../hooks/useDisclosure";
import { groupBy } from "../utils/array";
import { isNotNullish, isNotNullishOrEmpty } from "../utils/nullish";
import { safeSplitAround } from "../utils/string";
import { Box } from "./Box";
import { FlatList } from "./FlatList";
import { Icon } from "./Icon";
import { InputError } from "./InputError";
import { Popover } from "./Popover";
import { PressableText } from "./Pressable";
import { SectionList } from "./SectionList";
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
  filterFocused: {
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

export type MultiSelectItem<Value> = {
  disabled?: boolean;
  group: string;
  label: string;
  value: Value;
};

export type MultiSelectProps<Value> = {
  color?: ColorVariants;
  disabled?: boolean;
  error?: string;
  emptyResultText?: string;
  enableGroups?: boolean;
  filterPlaceholder?: string;
  items: MultiSelectItem<Value>[];
  onValueChange: (values: Value[]) => void;
  placeholder?: string;
  renderTagGroup?: (items: readonly MultiSelectItem<Value>[]) => string;
  style?: StyleProp<ViewStyle>;
  values: Value[];
  id?: string;
};

export const MultiSelect = <Value,>({
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
}: MultiSelectProps<Value>) => {
  const [filter, setFilter] = useState<string>("");
  const [filterFocused, setFilterFocused] = useBoolean(false);

  const shouldScrollToBottomRef = useRef(false);
  const selectedTagListRef = useRef<View & Element>(null);
  const inputRef = useRef<View>(null);
  const [visible, { open, close }] = useDisclosure(false);

  const tint50 = colors[color][50];
  const tint100 = colors[color][100];

  useEffect(() => {
    if (!visible) {
      setFilter("");
    }
  }, [visible]);

  // biome-ignore lint/correctness/useExhaustiveDependencies(values):
  useEffect(() => {
    if (shouldScrollToBottomRef.current) {
      const top = selectedTagListRef.current?.scrollHeight;
      selectedTagListRef.current?.scrollTo({ top });
    }

    shouldScrollToBottomRef.current = false;
  }, [values]);

  const handleSelectItem = (item: MultiSelectItem<Value>) => {
    shouldScrollToBottomRef.current = true;
    onValueChange([...values, item.value]);
  };

  const handleRemoveItem = (item: MultiSelectItem<Value>) => {
    onValueChange(values.filter(index => index !== item.value));
  };

  const handleClearAll = () => {
    onValueChange([]);
  };

  const handleSelectGroup = (groupItems: readonly MultiSelectItem<Value>[]) => {
    shouldScrollToBottomRef.current = true;
    const items = groupItems.map(item => item.value);
    const newValue = [...new Set([...values, ...items])];
    onValueChange(newValue);
  };

  // Used to get full selected value informations in O(1).
  const valueItemMapping = useMemo(() => {
    const map = new Map<Value, MultiSelectItem<Value>>();
    items.forEach(item => {
      map.set(item.value, item);
    });
    return map;
  }, [items]);

  const selectedTags = useMemo(
    () => values.map(value => valueItemMapping.get(value)).filter(isNotNullish),
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
        <TextInput
          autoComplete="off"
          inputMode="search"
          multiline={false}
          rows={1}
          onChangeText={filterValue => setFilter(filterValue)}
          placeholder={filterPlaceholder}
          value={filter}
          onFocus={setFilterFocused.on}
          onBlur={setFilterFocused.off}
          style={[styles.filterInput, filterFocused && styles.filterFocused]}
        />

        <Icon
          name="search-filled"
          color={colors[color].primary}
          size={20}
          style={styles.searchIcon}
        />
      </Box>
    ),
    [filter, filterFocused, setFilterFocused, filterPlaceholder, color],
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
                key={String(item.value)}
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
      >
        <View style={styles.list}>
          {enableGroups ? (
            <SectionList
              role="listbox"
              aria-multiselectable={true}
              keyExtractor={(item, index) => `group-field-${String(item.value)}-${index}`}
              ListHeaderComponent={ListHeaderComponent}
              ListEmptyComponent={ListEmptyComponent}
              ListFooterComponent={<Space height={16} />}
              sections={sections}
              renderSectionHeader={({ title, data }) => (
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

                  {isNotNullish(renderTagGroup) && <Tag color={color}>{renderTagGroup(data)}</Tag>}
                </Pressable>
              )}
              renderItem={({ item }) => (
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
              role="list"
              data={filteredItems}
              keyExtractor={item => `field-${String(item.value)}`}
              ListHeaderComponent={ListHeaderComponent}
              ListEmptyComponent={ListEmptyComponent}
              ListFooterComponent={<Space height={8} />}
              renderItem={({ item }) => (
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
};

type LineItemProps<Value> = {
  color: ColorVariants;
  filter: string;
  handleSelectItem: (item: MultiSelectItem<Value>) => void;
  item: MultiSelectItem<Value>;
  style?: StyleProp<TextStyle>;
};

const LineItem = <Value,>({
  item,
  color,
  filter,
  handleSelectItem,
  style,
}: LineItemProps<Value>) => {
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
