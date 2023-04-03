import dayjs from "dayjs";
import {
  ComponentProps,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { FlatList, ListRenderItemInfo, Pressable, StyleSheet, Text, View } from "react-native";
import { ValidatorResult, hasDefinedKeys, useForm } from "react-ux-form";
import { Rifm } from "rifm";
import { P, match } from "ts-pattern";
import { Simplify } from "type-fest";
import { colors, shadows, spacings } from "../constants/design";
import { useDisclosure } from "../hooks/useDisclosure";
import { useMergeRefs } from "../hooks/useMergeRefs";
import { usePreviousValue } from "../hooks/usePreviousValue";
import { isNotNullish } from "../utils/nullish";
import { Box } from "./Box";
import { Icon } from "./Icon";
import { LakeButton } from "./LakeButton";
import { LakeCheckbox } from "./LakeCheckbox";
import { LakeLabel } from "./LakeLabel";
import { LakeRadio } from "./LakeRadio";
import { LakeTextInput } from "./LakeTextInput";
import { Popover } from "./Popover";
import { Space } from "./Space";
import { Stack } from "./Stack";
import { Tag } from "./Tag";

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
    padding: 24,
  },
  radio: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 32,
    paddingHorizontal: 24,
  },
  input: {
    width: 200,
  },
  value: {
    maxWidth: 130,
    whiteSpace: "nowrap",
  },
  buttonContainer: {
    paddingHorizontal: spacings[24],
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
  label: string;
  value: T | undefined;
  onPressRemove: () => void;
  onValueChange: (value: T | undefined) => void;
};

function FilterRadio<T>({
  label,
  items,
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
        <View style={styles.dropdown}>
          <FlatList
            role="list"
            data={items}
            contentContainerStyle={styles.content}
            keyExtractor={(_, index) => `filter-item-${index}`}
            renderItem={({ item }: ListRenderItemInfo<Item<T>>) => {
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
                  <Text>{item.label}</Text>
                </Pressable>
              );
            }}
          />
        </View>
      </Popover>
    </View>
  );
}

type FilterCheckboxProps<T> = {
  label: string;
  items: Item<T>[];
  onValueChange: (value: T[] | undefined) => void;
  value: T[] | undefined;
  onPressRemove: () => void;
  autoOpen?: boolean;
  applyButtonLabel: string;
  checkAllLabel?: string;
};

type CheckAllItem = {
  label: string;
  checked: boolean | "mixed";
};

function FilterCheckbox<T>({
  label,
  items,
  checkAllLabel,
  value,
  onValueChange,
  applyButtonLabel,
  onPressRemove,
  autoOpen = false,
}: FilterCheckboxProps<T>) {
  const inputRef = useRef<View>(null);
  const [visible, { close, toggle }] = useDisclosure(autoOpen);
  const [localValue, setLocalValue] = useState(value);

  const values = useMemo(() => new Set(localValue), [localValue]);
  const currentValue = useMemo(() => items.filter(item => values.has(item.value)), [items, values]);

  const allChecked = checkAllLabel != null && values.size === items.length;

  const listItems = useMemo(() => {
    if (checkAllLabel == null) {
      return items;
    }
    const checked: CheckAllItem["checked"] =
      values.size === 0 ? false : values.size === items.length ? true : "mixed";
    const checkAllItem: CheckAllItem = {
      label: checkAllLabel,
      checked,
    };

    return [checkAllItem, ...items];
  }, [items, checkAllLabel, values]);

  const save = useCallback(() => {
    onValueChange(localValue);
    close();
  }, [onValueChange, localValue, close]);

  useEffect(() => {
    if (!visible) {
      setLocalValue(value);
    }
  }, [visible, value]);

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
        <View style={styles.dropdown}>
          <FlatList
            role="list"
            data={listItems}
            contentContainerStyle={styles.content}
            keyExtractor={(_, index) => `filter-item-${index}`}
            renderItem={({ item }) => {
              const isSelected = match<Item<unknown> | CheckAllItem>(item)
                .with({ checked: P.any }, ({ checked }) => checked)
                .with({ value: P.any }, ({ value }) => values.has(value as T))
                .exhaustive();

              const onPress = match<Item<unknown> | CheckAllItem>(item)
                // Check all item
                .with({ checked: P.any }, ({ checked }) => () => {
                  if (checked === true) {
                    setLocalValue(undefined);
                  } else {
                    setLocalValue(items.map(item => item.value));
                  }
                })
                // Regular item
                .with({ value: P.any }, ({ value }) => () => {
                  const nextValues = new Set([...values]);
                  if (isSelected === true) {
                    nextValues.delete(value as T);
                  } else {
                    nextValues.add(value as T);
                  }
                  if (nextValues.size === 0) {
                    setLocalValue(undefined);
                  } else {
                    setLocalValue([...nextValues]);
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
                  <Text>{item.label}</Text>
                </Pressable>
              );
            }}
          />

          <Space height={8} />

          <View style={styles.buttonContainer}>
            <LakeButton color="current" onPress={save}>
              {applyButtonLabel}
            </LakeButton>
          </View>

          <Space height={24} />
        </View>
      </Popover>
    </View>
  );
}

type RifmProps = Required<
  Pick<ComponentProps<typeof Rifm>, "accept" | "append" | "format" | "mask">
>;

type FilterDateProps = {
  label: string;
  noValueText: string;
  submitText: string;
  validate?: (val: string) => ValidatorResult;
  rifmProps: RifmProps;
  dateFormat: string;
  initialValue?: string;
  onSave: (val: string) => void;
  onPressRemove: () => void;
  autoOpen?: boolean;
};
function FilterDate({
  label,
  initialValue,
  noValueText,
  submitText,
  dateFormat,
  rifmProps,
  validate,
  onSave,
  onPressRemove,
  autoOpen = false,
}: FilterDateProps) {
  const inputRef = useRef<View>(null);
  const [visible, { close, toggle }] = useDisclosure(autoOpen);

  const { Field, submitForm, setFieldValue } = useForm<{ date: string }>({
    date: {
      initialValue: isNotNullish(initialValue) ? dayjs(initialValue).format(dateFormat) : "",
      validate,
    },
  });

  useEffect(() => {
    setFieldValue("date", isNotNullish(initialValue) ? dayjs(initialValue).format(dateFormat) : "");
  }, [initialValue, dateFormat, setFieldValue]);

  const onSubmit = () => {
    submitForm(values => {
      if (hasDefinedKeys(values, ["date"])) {
        const date = dayjs(values.date, dateFormat, true).toJSON();
        onSave(date);
        close();
      }
    });
  };

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

      <Popover
        role="listbox"
        matchReferenceWidth={false}
        onDismiss={close}
        referenceRef={inputRef}
        returnFocus={false}
        visible={visible}
      >
        <View style={[styles.dropdown, styles.inputContent]}>
          <Field name="date">
            {({ value, onChange, error }) => (
              <Rifm value={value} onChange={onChange} {...rifmProps}>
                {({ value, onChange }) => (
                  <LakeLabel
                    label={label}
                    render={id => (
                      <LakeTextInput
                        nativeID={id}
                        error={error}
                        style={styles.input}
                        placeholder={dateFormat}
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                )}
              </Rifm>
            )}
          </Field>

          <LakeButton color="current" size="small" onPress={onSubmit}>
            {submitText}
          </LakeButton>
        </View>
      </Popover>
    </View>
  );
}

type FilterInputProps = {
  label: string;
  noValueText: string;
  submitText: string;
  validate?: (val: string) => ValidatorResult;
  placeholder?: string;
  initialValue?: string;
  onSave: (val: string) => void;
  onPressRemove: () => void;
  autoOpen?: boolean;
};

function FilterInput({
  label,
  initialValue = "",
  noValueText,
  submitText,
  autoOpen = false,
  placeholder,
  validate,
  onSave,
  onPressRemove,
}: FilterInputProps) {
  const inputRef = useRef<View>(null);
  const [visible, { close, toggle }] = useDisclosure(autoOpen);
  const [value, setValue] = useState(initialValue);

  const { Field, submitForm } = useForm<{ input: string }>({
    input: {
      initialValue,
      validate,
    },
  });

  const onSubmit = () => {
    submitForm(values => {
      if (hasDefinedKeys(values, ["input"])) {
        setValue(values.input);
        onSave(values.input);
        close();
      }
    });
  };

  return (
    <View style={styles.container}>
      <FilterTag
        label={label}
        onPress={toggle}
        ref={inputRef}
        onPressRemove={onPressRemove}
        isActive={visible}
        value={value === "" ? noValueText : value}
      />

      <Popover
        role="listbox"
        matchReferenceWidth={false}
        onDismiss={close}
        referenceRef={inputRef}
        returnFocus={false}
        visible={visible}
      >
        <View style={[styles.dropdown, styles.inputContent]}>
          <Field name="input">
            {({ error, value, onChange }) => (
              <LakeLabel
                label={label}
                render={id => (
                  <LakeTextInput
                    nativeID={id}
                    error={error}
                    style={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
            )}
          </Field>

          <LakeButton size="small" color="current" onPress={onSubmit}>
            {submitText}
          </LakeButton>
        </View>
      </Popover>
    </View>
  );
}

export type FilterCheckboxDef<T> = {
  type: "checkbox";
  label: string;
  items: Item<T>[];
  submitText: string;
  checkAllLabel?: string;
};

export type FilterRadioDef<T> = {
  type: "radio";
  label: string;
  items: Item<T>[];
};

export type FilterDateDef = {
  type: "date";
  label: string;
  submitText: string;
  noValueText: string;
  dateFormat: string;
  rifmProps: RifmProps;
  validate?: (value: string) => ValidatorResult;
};

export type FilterInputDef = {
  type: "input";
  label: string;
  submitText: string;
  noValueText: string;
  placeholder?: string;
  validate?: (value: string) => ValidatorResult;
};

export type FilterBooleanDef = {
  type: "boolean";
  label: string;
};

type Filter<T> =
  | FilterCheckboxDef<T>
  | FilterRadioDef<T>
  | FilterDateDef
  | FilterInputDef
  | FilterBooleanDef;

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
    <Stack direction="row" wrap={true}>
      {openedFilters.map(filterName => {
        const filterDefinition = definition[filterName];

        if (typeof filterName !== "string" || filterDefinition == null) {
          return null;
        }

        return (
          <View key={filterName}>
            {match<Filter<unknown>>(filterDefinition)
              .with({ type: "radio" }, ({ type, label, items }) => (
                <FilterRadio
                  label={label}
                  items={items}
                  autoOpen={lastOpenedFilter === filterName}
                  onPressRemove={() => {
                    onChangeFilters({ ...filters, [filterName]: undefined });
                    onChangeOpened(openedFilters.filter(f => f !== filterName));
                  }}
                  value={getFilterValue(type, filters, filterName)}
                  onValueChange={value => onChangeFilters({ ...filters, [filterName]: value })}
                />
              ))
              .with({ type: "checkbox" }, ({ type, label, items, checkAllLabel, submitText }) => (
                <FilterCheckbox
                  label={label}
                  items={items}
                  checkAllLabel={checkAllLabel}
                  autoOpen={lastOpenedFilter === filterName}
                  applyButtonLabel={submitText}
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
                ({ type, label, noValueText, submitText, dateFormat, rifmProps, validate }) => (
                  <FilterDate
                    label={label}
                    noValueText={noValueText}
                    submitText={submitText}
                    autoOpen={lastOpenedFilter === filterName}
                    dateFormat={dateFormat}
                    rifmProps={rifmProps}
                    validate={validate}
                    initialValue={getFilterValue(type, filters, filterName)}
                    onSave={value => onChangeFilters({ ...filters, [filterName]: value })}
                    onPressRemove={() => {
                      onChangeFilters({ ...filters, [filterName]: undefined });
                      onChangeOpened(openedFilters.filter(f => f !== filterName));
                    }}
                  />
                ),
              )
              .with(
                { type: "input" },
                ({ type, label, placeholder, noValueText, submitText, validate }) => (
                  <FilterInput
                    label={label}
                    placeholder={placeholder}
                    noValueText={noValueText}
                    submitText={submitText}
                    autoOpen={lastOpenedFilter === filterName}
                    validate={validate}
                    initialValue={getFilterValue(type, filters, filterName)}
                    onSave={value => onChangeFilters({ ...filters, [filterName]: value })}
                    onPressRemove={() => {
                      onChangeFilters({ ...filters, [filterName]: undefined });
                      onChangeOpened(openedFilters.filter(f => f !== filterName));
                    }}
                  />
                ),
              )
              .with({ type: "boolean" }, ({ label }) => (
                <Tag
                  color="current"
                  onPressRemove={() => {
                    onChangeFilters({ ...filters, [filterName]: undefined });
                    onChangeOpened(openedFilters.filter(f => f !== filterName));
                  }}
                >
                  {label}
                </Tag>
              ))
              .exhaustive()}
          </View>
        );
      })}
    </Stack>
  );
};
