import { Box } from "@swan-io/lake/src/components/Box";
import { InputError } from "@swan-io/lake/src/components/InputError";
import { LakeLabel } from "@swan-io/lake/src/components/LakeLabel";
import { LakeSelect } from "@swan-io/lake/src/components/LakeSelect";
import { LakeTextInput } from "@swan-io/lake/src/components/LakeTextInput";
import { Stack } from "@swan-io/lake/src/components/Stack";
import { breakpoints, colors } from "@swan-io/lake/src/constants/design";
import { useResponsive } from "@swan-io/lake/src/hooks/useResponsive";
import { isNotNullish } from "@swan-io/lake/src/utils/nullish";
import { StyleSheet, View } from "react-native";
import { ExtractedDate } from "../utils/date";
import { t } from "../utils/i18n";

const months = [
  { value: "01", name: t("datePicker.month.january") },
  { value: "02", name: t("datePicker.month.february") },
  { value: "03", name: t("datePicker.month.march") },
  { value: "04", name: t("datePicker.month.april") },
  { value: "05", name: t("datePicker.month.may") },
  { value: "06", name: t("datePicker.month.june") },
  { value: "07", name: t("datePicker.month.july") },
  { value: "08", name: t("datePicker.month.august") },
  { value: "09", name: t("datePicker.month.september") },
  { value: "10", name: t("datePicker.month.october") },
  { value: "11", name: t("datePicker.month.november") },
  { value: "12", name: t("datePicker.month.december") },
];

const styles = StyleSheet.create({
  dayMobile: {
    maxWidth: 60,
    flexGrow: 0,
  },
  day: {
    maxWidth: 90,
    flexGrow: 0,
  },
  yearMobile: {
    maxWidth: 80,
    flexGrow: 0,
  },
  year: {
    maxWidth: 120,
    flexGrow: 0,
  },
  error: {
    borderColor: colors.negative[400],
  },
});

export type InlineDatePickerProps = {
  label: string;
  value: ExtractedDate | undefined;
  onValueChange: (value: ExtractedDate) => void;
  error?: string;
  onBlur?: () => void;
  order: "DMY" | "MDY" | "YMD";
};

export const InlineDatePicker = ({
  value = { day: "", month: "", year: "" },
  label,
  onValueChange,
  error,
  onBlur,
  order,
}: InlineDatePickerProps) => {
  const { desktop } = useResponsive(breakpoints.small);

  return (
    <LakeLabel
      label={label}
      render={id => {
        const day = (
          <View style={desktop ? styles.day : styles.dayMobile}>
            <LakeTextInput
              id={id}
              style={isNotNullish(error) && styles.error}
              placeholder={t("datePicker.day")}
              value={value.day}
              onBlur={onBlur}
              hideErrors={true}
              onChangeText={day => {
                onValueChange({
                  day,
                  month: value.month,
                  year: value.year,
                });
              }}
              pattern="[0-9]"
              maxLength={2}
              autoComplete="bday-day"
            />
          </View>
        );

        const month = (
          <LakeSelect
            value={value.month === "" ? undefined : value.month}
            style={isNotNullish(error) && styles.error}
            placeholder={t("datePicker.month")}
            hideErrors={true}
            items={months}
            onValueChange={month => {
              onValueChange({
                day: value.day,
                month,
                year: value.year,
              });
            }}
          />
        );

        const year = (
          <View style={desktop ? styles.year : styles.yearMobile}>
            <LakeTextInput
              value={value.year}
              style={isNotNullish(error) && styles.error}
              placeholder={t("datePicker.year")}
              onBlur={onBlur}
              hideErrors={true}
              onChangeText={year =>
                onValueChange({
                  day: value.day,
                  month: value.month,
                  year,
                })
              }
              pattern="[0-9]"
              maxLength={4}
              autoComplete="bday-year"
            />
          </View>
        );

        return (
          <Box>
            {order === "DMY" ? (
              <Stack direction="row" space={12}>
                {day} {month} {year}
              </Stack>
            ) : (
              <Stack direction="row" space={12}>
                {month} {day} {year}
              </Stack>
            )}

            <InputError message={error} />
          </Box>
        );
      }}
    />
  );
};
