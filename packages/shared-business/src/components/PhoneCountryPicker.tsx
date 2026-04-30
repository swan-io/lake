import { Box } from "@swan-io/lake/src/components/Box";
import { FlatList } from "@swan-io/lake/src/components/FlatList";
import { Icon } from "@swan-io/lake/src/components/Icon";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { Popover } from "@swan-io/lake/src/components/Popover";
import { Pressable } from "@swan-io/lake/src/components/Pressable";
import { Separator } from "@swan-io/lake/src/components/Separator";
import { Space } from "@swan-io/lake/src/components/Space";
import { colors, radii, spacings, texts } from "@swan-io/lake/src/constants/design";
import { useDebounce } from "@swan-io/lake/src/hooks/useDebounce";
import { useDisclosure } from "@swan-io/lake/src/hooks/useDisclosure";
import { isNotNullish, isNotNullishOrEmpty } from "@swan-io/lake/src/utils/nullish";
import { deburr } from "@swan-io/lake/src/utils/string";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { StyleProp, StyleSheet, TextInput, View, ViewStyle } from "react-native";
import { Country, CountryCCA3, getCountryByCCA3 } from "../constants/countries";
import { Flag } from "./Flag";

const ROW_HEIGHT = 48;

const styles = StyleSheet.create({
  trigger: {
    alignItems: "center",
    backgroundColor: colors.gray[50],
    borderColor: colors.gray[100],
    borderTopLeftRadius: radii[4],
    borderTopRightRadius: radii[4],
    borderBottomLeftRadius: radii[4],
    borderBottomRightRadius: radii[4],
    borderWidth: 1,
    flexDirection: "row",
    height: 40,
    justifyContent: "center",
    outlineStyle: "none",
    paddingLeft: spacings[16],
    paddingRight: spacings[12],
    transitionDuration: "150ms",
    transitionProperty: "background-color",
  },
  triggerPressed: { backgroundColor: colors.gray[100] },
  triggerErrored: { borderColor: colors.negative[500] },
  triggerDisabled: { borderColor: colors.gray[50] },
  list: { height: 230 },
  searchIcon: { position: "absolute", left: 16 },
  searchInput: {
    ...texts.regular,
    color: colors.gray[700],
    flexGrow: 1,
    height: ROW_HEIGHT,
    outlineStyle: "none",
    paddingLeft: 44,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    height: ROW_HEIGHT,
    paddingHorizontal: 16,
    transitionProperty: "background-color",
    transitionDuration: "150ms",
  },
  rowHovered: { backgroundColor: colors.gray[50] },
  rowPressed: { backgroundColor: colors.gray[100] },
  rowName: { flexGrow: 1 },
});

type Props = {
  value: Country;
  onValueChange: (country: Country) => void;
  countries: CountryCCA3[];
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  readOnly?: boolean;
  error?: string;
  ariaLabel?: string;
};

export const PhoneCountryPicker = ({
  value,
  onValueChange,
  countries,
  style,
  disabled = false,
  readOnly = false,
  error,
  ariaLabel = "Select country",
}: Props) => {
  const referenceRef = useRef<View>(null);
  const inputRef = useRef<TextInput>(null);
  const [visible, { open, close }] = useDisclosure(false);

  const allowedCountries = useMemo(
    () =>
      countries
        .filter((cca3, index, array) => array.indexOf(cca3) === index)
        .map(cca3 => getCountryByCCA3(cca3)),
    [countries],
  );

  const [filteredCountries, setFilteredCountries] = useState(allowedCountries);

  useEffect(() => {
    setFilteredCountries(allowedCountries);
  }, [allowedCountries]);

  useEffect(() => {
    if (visible) {
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [visible]);

  const handleOnChangeText = useDebounce(
    useCallback(
      (text: string) => {
        const cleaned = deburr(text.trim().toLowerCase());

        if (cleaned === "") {
          setFilteredCountries(allowedCountries);
          return;
        }

        const filtered = allowedCountries.filter(
          country =>
            country.deburr.includes(cleaned) ||
            country.idd.includes(cleaned) ||
            `+${country.idd}`.includes(cleaned),
        );

        setFilteredCountries(filtered);
      },
      [allowedCountries],
    ),
    200,
  );

  return (
    <>
      <Pressable
        ref={referenceRef}
        role="button"
        aria-label={ariaLabel}
        disabled={visible || disabled || readOnly}
        onPress={open}
        style={({ pressed }) => [
          styles.trigger,
          style,
          !visible && pressed && styles.triggerPressed,
          (disabled || readOnly) && styles.triggerDisabled,
          isNotNullishOrEmpty(error) && styles.triggerErrored,
        ]}
      >
        <Flag code={value.cca2} width={16} />
        <Space width={8} />

        <LakeText
          color={colors.gray[600]}
          numberOfLines={1}
          userSelect="none"
          variant="smallSemibold"
        >
          +{value.idd}
        </LakeText>

        <Space width={8} />
        <Icon name="chevron-down-filled" color={colors.gray[600]} size={16} />
      </Pressable>

      <Popover
        referenceRef={referenceRef}
        visible={visible}
        onDismiss={close}
        matchReferenceWidth={false}
      >
        <View style={styles.list}>
          <Box direction="row" alignItems="center">
            <Icon
              name="search-filled"
              color={colors.gray[300]}
              size={18}
              style={styles.searchIcon}
            />

            <TextInput
              ref={inputRef}
              inputMode="search"
              style={styles.searchInput}
              onChangeText={handleOnChangeText}
              onSubmitEditing={() => {
                if (isNotNullish(filteredCountries[0])) {
                  onValueChange(filteredCountries[0]);
                  close();
                }
              }}
            />
          </Box>

          <Separator />

          <FlatList
            data={filteredCountries}
            ItemSeparatorComponent={<Separator />}
            keyExtractor={item => item.uid}
            renderItem={({ item }) => (
              <Pressable
                role="button"
                aria-label={item.name}
                style={({ hovered, pressed }) => [
                  styles.row,
                  hovered && styles.rowHovered,
                  pressed && styles.rowPressed,
                ]}
                onPress={() => {
                  onValueChange(item);
                  close();
                }}
              >
                <Flag code={item.cca2} width={16} />
                <Space width={12} />

                <LakeText
                  numberOfLines={1}
                  style={styles.rowName}
                  userSelect="none"
                  variant="smallRegular"
                >
                  {item.name}
                </LakeText>

                {item.uid === value.uid && (
                  <>
                    <Space width={12} />
                    <Icon name="checkmark-filled" color={colors.positive[500]} size={16} />
                  </>
                )}

                <Space width={12} />

                <LakeText userSelect="none" variant="smallRegular">
                  +{item.idd}
                </LakeText>
              </Pressable>
            )}
          />
        </View>
      </Popover>
    </>
  );
};
