import { Box } from "@swan-io/lake/src/components/Box";
import { FlatList } from "@swan-io/lake/src/components/FlatList";
import { Icon } from "@swan-io/lake/src/components/Icon";
import { LakeCheckbox } from "@swan-io/lake/src/components/LakeCheckbox";
import { LakeLabel } from "@swan-io/lake/src/components/LakeLabel";
import { LakeRadio } from "@swan-io/lake/src/components/LakeRadio";
import { LakeTextInput } from "@swan-io/lake/src/components/LakeTextInput";
import { Popover } from "@swan-io/lake/src/components/Popover";
import { Space } from "@swan-io/lake/src/components/Space";
import { Stack } from "@swan-io/lake/src/components/Stack";
import { Tag } from "@swan-io/lake/src/components/Tag";
import { colors, shadows } from "@swan-io/lake/src/constants/design";
import { useDisclosure } from "@swan-io/lake/src/hooks/useDisclosure";
import { useMergeRefs } from "@swan-io/lake/src/hooks/useMergeRefs";
import { usePreviousValue } from "@swan-io/lake/src/hooks/usePreviousValue";
import { isNotNullish, isNullish } from "@swan-io/lake/src/utils/nullish";
import { ValidatorResult } from "@swan-io/use-form";
import dayjs from "dayjs";
import { forwardRef, useCallback, useMemo, useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { P, match } from "ts-pattern";
import { Simplify } from "type-fest";
import { DateFormat } from "../utils/i18n";
import { DatePickerDate, DatePickerModal } from "./DatePicker";

const styles = StyleSheet.create({
  container: {
    paddingRight: 12,
    paddingBottom: 8,
  },
  shadowed: {
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    borderRadius: 4,
    boxShadow: shadows.tile,
    transitionDuration: "150ms",
    transitionProperty: "opacity",
  },
  hovered: {
    opacity: 1,
  },
  dropdown: {
    maxHeight: 400,
    minWidth: 200,
  },
  itemHovered: {
    backgroundColor: colors.gray[50],
  },
  content: {
    paddingVertical: 12,
  },
  inputContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
  },
  radio: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 32,
    paddingHorizontal: 24,
  },
  itemLabel: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  input: {
    width: 250,
  },
  value: {
    maxWidth: 130,
    whiteSpace: "nowrap",
  },
});

type Item<T> = {
  label: string;
  value: T;
};

type TagProps = {
  isActive: boolean;
  label: string;
  value?: string;
  onPress: () => void;
  onPressRemove: () => void;
};

const FilterTag = forwardRef<View, TagProps>(
  ({ onPress, onPressRemove, label, value = "", isActive }, forwardRef) => {
    const ref = useRef<View>(null);
    const mergedRef = useMergeRefs(ref, forwardRef);

    return (
      <Pressable ref={mergedRef} onPress={onPress}>
        {({ hovered }) => (
          <>
            <View style={[styles.shadowed, hovered && styles.hovered]} />

            <Tag label={label} color="current" onPressRemove={onPressRemove}>
              <Box direction="row" alignItems="center">
                <Text numberOfLines={1} style={styles.value}>
                  {value}
                </Text>

                <Space width={4} />

                <Icon
                  color={colors.current.primary}
                  name={isActive ? "chevron-up-filled" : "chevron-down-filled"}
                  size={16}
                />
              </Box>
            </Tag>
          </>
        )}
      </Pressable>
    );
  },
);

type FilterRadioProps<T> = {
  autoOpen?: boolean;
  items: Item<T>[];
  width?: number;
  label: string;
  value: T | undefined;
  onPressRemove: () => void;
  onValueChange: (value: T | undefined) => void;
};

function FilterRadio<T>({
  label,
  items,
  width,
  value,
  onValueChange,
  onPressRemove,
  autoOpen = false,
}: FilterRadioProps<T>) {
  const inputRef = useRef<View>(null);
  const [visible, { close, toggle }] = useDisclosure(autoOpen);
  const currentValue = useMemo(() => items.find(i => i.value === value), [items, value]);

  return (
    <View style={styles.container}>
      <FilterTag
        label={label}
        onPress={toggle}
        ref={inputRef}
        onPressRemove={onPressRemove}
        isActive={visible}
        value={currentValue?.label}
      />

      <Popover
        role="listbox"
        matchReferenceWidth={false}
        onDismiss={close}
        referenceRef={inputRef}
        returnFocus={false}
        visible={visible}
      >
        <FlatList
          role="list"
          data={items}
          style={[styles.dropdown, { width }]}
          contentContainerStyle={styles.content}
          keyExtractor={(_, index) => `filter-item-${index}`}
          renderItem={({ item }) => {
            const isSelected = value === item.value;

            return (
              <Pressable
                role="radio"
                aria-checked={isSelected}
                style={({ hovered }) => [styles.radio, hovered && styles.itemHovered]}
                onPress={() => {
                  onValueChange(item.value);
                  close();
                }}
              >
                <LakeRadio value={isSelected} />
                <Space width={12} />
                <Text style={styles.itemLabel}>{item.label}</Text>
              </Pressable>
            );
          }}
        />
      </Popover>
    </View>
  );
}

type FilterCheckboxProps<T> = {
  label: string;
  items: Item<T>[];
  width?: number;
  onValueChange: (value: T[] | undefined) => void;
  value: T[] | undefined;
  onPressRemove: () => void;
  autoOpen?: boolean;
  checkAllLabel?: string;
};

type CheckAllItem = {
  label: string;
  checked: boolean | "mixed";
};

function FilterCheckbox<T>({
  label,
  items,
  width,
  checkAllLabel,
  value,
  onValueChange,
  onPressRemove,
  autoOpen = false,
}: FilterCheckboxProps<T>) {
  const inputRef = useRef<View>(null);
  const [visible, { close, toggle }] = useDisclosure(autoOpen);

  const valueSet = useMemo(() => new Set(value), [value]);

  const currentValue = useMemo(
    () => items.filter(item => valueSet.has(item.value)),
    [items, valueSet],
  );

  const allChecked = checkAllLabel != null && valueSet.size === items.length;

  const listItems = useMemo(() => {
    if (checkAllLabel == null) {
      return items;
    }

    const checked: CheckAllItem["checked"] =
      valueSet.size === 0 ? false : valueSet.size === items.length ? true : "mixed";

    const checkAllItem: CheckAllItem = {
      label: checkAllLabel,
      checked,
    };

    return [checkAllItem, ...items];
  }, [items, checkAllLabel, valueSet]);

  return (
    <View style={styles.container}>
      <FilterTag
        label={label}
        onPress={toggle}
        ref={inputRef}
        onPressRemove={onPressRemove}
        isActive={visible}
        value={allChecked ? checkAllLabel : currentValue.map(item => item.label).join(", ")}
      />

      <Popover
        role="listbox"
        matchReferenceWidth={false}
        onDismiss={close}
        referenceRef={inputRef}
        returnFocus={false}
        visible={visible}
      >
        <FlatList
          role="list"
          data={listItems}
          style={[styles.dropdown, { width }]}
          contentContainerStyle={styles.content}
          keyExtractor={(_, index) => `filter-item-${index}`}
          renderItem={({ item }) => {
            const isSelected = match<Item<unknown> | CheckAllItem>(item)
              .with({ checked: P.any }, ({ checked }) => checked)
              .with({ value: P.any }, ({ value }) => valueSet.has(value as T))
              .exhaustive();

            const onPress = match<Item<unknown> | CheckAllItem>(item)
              // Check all item
              .with({ checked: P.any }, ({ checked }) => () => {
                if (checked === true) {
                  onValueChange(undefined);
                } else {
                  onValueChange(items.map(item => item.value));
                }
              })
              // Regular item
              .with({ value: P.any }, ({ value }) => () => {
                const nextValues = new Set([...valueSet]);
                if (isSelected === true) {
                  nextValues.delete(value as T);
                } else {
                  nextValues.add(value as T);
                }
                if (nextValues.size === 0) {
                  onValueChange(undefined);
                } else {
                  onValueChange([...nextValues]);
                }
              })
              .exhaustive();

            return (
              <Pressable
                role="radio"
                aria-checked={isSelected}
                style={({ hovered }) => [styles.radio, hovered && styles.itemHovered]}
                onPress={onPress}
              >
                <LakeCheckbox value={isSelected} />
                <Space width={12} />
                <Text style={styles.itemLabel}>{item.label}</Text>
              </Pressable>
            );
          }}
        />
      </Popover>
    </View>
  );
}

type FilterDateProps = {
  label: string;
  noValueText: string;
  cancelText: string;
  submitText: string;
  dateFormat: DateFormat;
  isSelectable?: (date: DatePickerDate) => boolean;
  validate?: (value: string) => ValidatorResult;
  initialValue?: string;
  onValueChange: (value: string) => void;
  onPressRemove: () => void;
  autoOpen?: boolean;
};

function FilterDate({
  label,
  initialValue,
  noValueText,
  cancelText,
  submitText,
  dateFormat,
  isSelectable,
  validate,
  onValueChange,
  onPressRemove,
  autoOpen = false,
}: FilterDateProps) {
  const inputRef = useRef<View>(null);
  const [visible, { close, toggle }] = useDisclosure(autoOpen);

  const value = useMemo(
    () => (isNotNullish(initialValue) ? dayjs(initialValue).format(dateFormat) : ""),
    [initialValue, dateFormat],
  );

  return (
    <View style={styles.container}>
      <FilterTag
        label={label}
        onPress={toggle}
        ref={inputRef}
        onPressRemove={onPressRemove}
        isActive={visible}
        value={isNotNullish(initialValue) ? dayjs(initialValue).format(dateFormat) : noValueText}
      />

      <DatePickerModal
        visible={visible}
        format={dateFormat}
        firstWeekDay="monday"
        label={label}
        cancelLabel={cancelText}
        confirmLabel={submitText}
        value={value}
        isSelectable={isSelectable}
        validate={validate}
        onChange={value => {
          const formattedValue = dayjs(value, dateFormat, true).toJSON();
          onValueChange(formattedValue);
        }}
        onDismiss={close}
      />
    </View>
  );
}

type FilterInputProps = {
  label: string;
  noValueText: string;
  validate?: (value: string) => ValidatorResult;
  placeholder?: string;
  initialValue?: string;
  onValueChange: (value: string | undefined) => void;
  onPressRemove: () => void;
  autoOpen?: boolean;
};

function FilterInput({
  label,
  initialValue = "",
  noValueText,
  autoOpen = false,
  placeholder,
  validate,
  onValueChange,
  onPressRemove,
}: FilterInputProps) {
  const [visible, { close, toggle }] = useDisclosure(autoOpen);
  const tagRef = useRef<View>(null);

  const getValueState = useCallback(
    (inputValue: string, isInitialValue: boolean) => {
      const trimmed = inputValue.trim();
      const error = validate?.(trimmed) ?? undefined;
      const validValue = isNullish(error) ? trimmed : undefined;

      if (!isInitialValue) {
        onValueChange(validValue);
      }

      return {
        inputValue,
        validValue,
        error: isInitialValue ? undefined : error,
      };
    },
    [validate, onValueChange],
  );

  const [{ inputValue, validValue, error }, setState] = useState(() =>
    getValueState(initialValue, true),
  );

  const onChangeText = useCallback(
    (value: string) => setState(getValueState(value, false)),
    [getValueState],
  );

  return (
    <View style={styles.container}>
      <FilterTag
        label={label}
        onPress={toggle}
        ref={tagRef}
        onPressRemove={onPressRemove}
        isActive={visible}
        value={validValue ?? noValueText}
      />

      <Popover
        role="listbox"
        matchReferenceWidth={false}
        onDismiss={close}
        referenceRef={tagRef}
        returnFocus={false}
        visible={visible}
      >
        <View style={[styles.dropdown, styles.inputContent]}>
          <LakeLabel
            label={label}
            render={id => (
              <LakeTextInput
                id={id}
                value={inputValue}
                error={error}
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
              />
            )}
          />
        </View>
      </Popover>
    </View>
  );
}

export type FilterCheckboxDef<T> = {
  type: "checkbox";
  label: string;
  items: Item<T>[];
  width?: number;
  checkAllLabel?: string;
};

export type FilterRadioDef<T> = {
  type: "radio";
  label: string;
  items: Item<T>[];
  width?: number;
};

export type FilterDateDef<Values = unknown> = {
  type: "date";
  label: string;
  cancelText: string;
  submitText: string;
  noValueText: string;
  dateFormat: DateFormat;
  isSelectable?: (date: DatePickerDate, filters: Values) => boolean;
  validate?: (value: string, filters: Values) => ValidatorResult;
};

export type FilterInputDef = {
  type: "input";
  label: string;
  noValueText: string;
  placeholder?: string;
  validate?: (value: string) => ValidatorResult;
};

type Filter<T> = FilterCheckboxDef<T> | FilterRadioDef<T> | FilterDateDef | FilterInputDef;

type ExtractFilterValue<T extends Filter<unknown>> = T extends { type: "checkbox" }
  ? T["items"][number]["value"][] | undefined
  : T extends { type: "radio" }
    ? T["items"][number]["value"] | undefined
    : T extends { type: "boolean" }
      ? boolean | undefined
      : string | undefined;

const getFilterValue = <T extends Filter<unknown>["type"]>(
  _type: T,
  filters: FiltersState<FiltersDefinition>,
  name: string,
) => filters[name] as ExtractFilterValue<Extract<Filter<unknown>, { type: T }>>;

type FiltersDefinition = Record<string, Filter<unknown>>;

export type FiltersState<T extends FiltersDefinition> = Simplify<{
  [K in keyof T]: Simplify<ExtractFilterValue<T[K]>>;
}>;

type FiltersStackProps<
  Definition extends FiltersDefinition,
  State extends FiltersState<Definition> = FiltersState<Definition>,
> = {
  definition: Definition;
  filters: State;
  openedFilters: (keyof Definition)[];
  onChangeOpened: (value: (keyof Definition)[]) => void;
  onChangeFilters: (value: State) => void;
};

export const FiltersStack = <T extends FiltersDefinition>({
  filters,
  openedFilters,
  definition,
  onChangeOpened,
  onChangeFilters,
}: FiltersStackProps<T>) => {
  const previousOpened = usePreviousValue(openedFilters);
  const lastOpenedFilter =
    openedFilters.length > previousOpened.length
      ? openedFilters[openedFilters.length - 1]
      : undefined;

  if (openedFilters.length === 0) {
    return null;
  }

  return (
    <Stack direction="row" wrap="wrap">
      {openedFilters.map(filterName => {
        const filterDefinition = definition[filterName];

        if (typeof filterName !== "string" || filterDefinition == null) {
          return null;
        }

        return (
          <View key={filterName}>
            {match<Filter<unknown>>(filterDefinition)
              .with({ type: "radio" }, ({ type, label, items, width }) => (
                <FilterRadio
                  label={label}
                  items={items}
                  width={width}
                  autoOpen={lastOpenedFilter === filterName}
                  onPressRemove={() => {
                    onChangeFilters({ ...filters, [filterName]: undefined });
                    onChangeOpened(openedFilters.filter(f => f !== filterName));
                  }}
                  value={getFilterValue(type, filters, filterName)}
                  onValueChange={value => onChangeFilters({ ...filters, [filterName]: value })}
                />
              ))
              .with({ type: "checkbox" }, ({ type, label, items, width, checkAllLabel }) => (
                <FilterCheckbox
                  label={label}
                  items={items}
                  width={width}
                  checkAllLabel={checkAllLabel}
                  autoOpen={lastOpenedFilter === filterName}
                  value={getFilterValue(type, filters, filterName)}
                  onValueChange={value => onChangeFilters({ ...filters, [filterName]: value })}
                  onPressRemove={() => {
                    onChangeFilters({ ...filters, [filterName]: undefined });
                    onChangeOpened(openedFilters.filter(f => f !== filterName));
                  }}
                />
              ))
              .with(
                { type: "date" },
                ({
                  type,
                  label,
                  noValueText,
                  cancelText,
                  submitText,
                  dateFormat,
                  isSelectable,
                  validate,
                }) => (
                  <FilterDate
                    label={label}
                    noValueText={noValueText}
                    cancelText={cancelText}
                    submitText={submitText}
                    dateFormat={dateFormat}
                    autoOpen={lastOpenedFilter === filterName}
                    isSelectable={isSelectable ? date => isSelectable(date, filters) : undefined}
                    validate={validate ? value => validate(value, filters) : undefined}
                    initialValue={getFilterValue(type, filters, filterName)}
                    onValueChange={value => onChangeFilters({ ...filters, [filterName]: value })}
                    onPressRemove={() => {
                      onChangeFilters({ ...filters, [filterName]: undefined });
                      onChangeOpened(openedFilters.filter(f => f !== filterName));
                    }}
                  />
                ),
              )
              .with({ type: "input" }, ({ type, label, placeholder, noValueText, validate }) => (
                <FilterInput
                  label={label}
                  placeholder={placeholder}
                  noValueText={noValueText}
                  autoOpen={lastOpenedFilter === filterName}
                  validate={validate}
                  initialValue={getFilterValue(type, filters, filterName)}
                  onValueChange={value => onChangeFilters({ ...filters, [filterName]: value })}
                  onPressRemove={() => {
                    onChangeFilters({ ...filters, [filterName]: undefined });
                    onChangeOpened(openedFilters.filter(f => f !== filterName));
                  }}
                />
              ))
              .exhaustive()}
          </View>
        );
      })}
    </Stack>
  );
};
