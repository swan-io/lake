import { Box } from "@swan-io/lake/src/components/Box";
import { InputError } from "@swan-io/lake/src/components/InputError";
import { LakeLabel } from "@swan-io/lake/src/components/LakeLabel";
import { LakeSelect } from "@swan-io/lake/src/components/LakeSelect";
import { LakeTextInput } from "@swan-io/lake/src/components/LakeTextInput";
import { Stack } from "@swan-io/lake/src/components/Stack";
import { breakpoints, colors } from "@swan-io/lake/src/constants/design";
import { useResponsive } from "@swan-io/lake/src/hooks/useResponsive";
import { isEmpty, isNotNullish, isNullish } from "@swan-io/lake/src/utils/nullish";
import { useForm } from "@swan-io/use-form";
import { StyleSheet, View } from "react-native";
import { match } from "ts-pattern";
import { extractDate, formatExtractedDate } from "../utils/date";
import { getCountry, t } from "../utils/i18n";
import { validateBirthdate } from "../utils/validation";

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
    maxWidth: 70,
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

export type BirthdatePickerProps = {
  label: string;
  value: string | undefined;
  error?: string;
  onValueChange: (value: string | undefined) => void;
};

// https://en.wikipedia.org/wiki/List_of_date_formats_by_country
const order = match(getCountry().cca2)
  .returnType<"DMY" | "MDY" | "YMD">()
  .with("US", () => "MDY")
  .with("CN", "JP", "KR", "KP", "TW", "HU", "MN", "LT", "BT", () => "YMD")
  .otherwise(() => "DMY");

export const BirthdatePicker = ({
  value,
  label,
  onValueChange,
  error: externalError,
}: BirthdatePickerProps) => {
  const { desktop } = useResponsive(breakpoints.small);

  const { Field } = useForm({
    birthdate: {
      initialValue: isNotNullish(value) ? extractDate(value) : undefined,
      sanitize: date =>
        isNotNullish(date)
          ? {
              day: date.day.trim(),
              month: date.month.trim(),
              year: date.year.trim(),
            }
          : undefined,
      strategy: "onBlur",
      validate: date => {
        const errorMessage =
          isNullish(date) || Object.values(date).some(isEmpty)
            ? t("datePicker.error.incomplete")
            : validateBirthdate(date);

        if (isNullish(errorMessage) && isNotNullish(date)) {
          return onValueChange(formatExtractedDate(date));
        } else {
          onValueChange(undefined);
          return errorMessage;
        }
      },
    },
  });

  return (
    <Field name="birthdate">
      {({ error, onBlur, onChange, value }) => (
        <LakeLabel
          label={label}
          render={id => {
            const day = (
              <View style={desktop ? styles.day : styles.dayMobile}>
                <LakeTextInput
                  id={id}
                  style={(isNotNullish(error) || isNotNullish(externalError)) && styles.error}
                  placeholder={t("datePicker.day")}
                  value={value?.day ?? undefined}
                  onBlur={onBlur}
                  hideErrors={true}
                  onChangeText={day => {
                    onChange({
                      day,
                      month: value?.month ?? "",
                      year: value?.year ?? "",
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
                value={value?.month === "" ? undefined : value?.month}
                style={(isNotNullish(error) || isNotNullish(externalError)) && styles.error}
                placeholder={t("datePicker.month")}
                hideErrors={true}
                items={months}
                onValueChange={month => {
                  onChange({
                    day: value?.day ?? "",
                    month,
                    year: value?.year ?? "",
                  });
                }}
              />
            );

            const year = (
              <View style={desktop ? styles.year : styles.yearMobile}>
                <LakeTextInput
                  value={value?.year}
                  style={(isNotNullish(error) || isNotNullish(externalError)) && styles.error}
                  placeholder={t("datePicker.year")}
                  onBlur={onBlur}
                  hideErrors={true}
                  onChangeText={year =>
                    onChange({
                      day: value?.day ?? "",
                      month: value?.month ?? "",
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
                  <Stack direction="row" space={4}>
                    {day} {month} {year}
                  </Stack>
                ) : (
                  <Stack direction="row" space={4}>
                    {month} {day} {year}
                  </Stack>
                )}

                <InputError message={error ?? externalError} />
              </Box>
            );
          }}
        />
      )}
    </Field>
  );
};
