import { Option } from "@swan-io/boxed";
import { Box } from "@swan-io/lake/src/components/Box";
import { LakeLabel } from "@swan-io/lake/src/components/LakeLabel";
import { LakeSelect } from "@swan-io/lake/src/components/LakeSelect";
import { LakeTextInput } from "@swan-io/lake/src/components/LakeTextInput";
import { Space } from "@swan-io/lake/src/components/Space";
import { Validator, combineValidators, useForm } from "@swan-io/use-form";
import dayjs from "dayjs";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { t } from "../utils/i18n";
import { validateRequired } from "../utils/validation";

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
  day: {
    maxWidth: 90,
    flexGrow: 0,
  },
  year: {
    maxWidth: 120,
    flexGrow: 0,
  },
});

type Props = {
  label: string;
  value: string;
  // onChange: (date: string) => void;
};

const validateBirthDay: Validator<string> = value => {
  if (!dayjs(value, "DD", true).isValid()) {
    return "INVALID DAY";
  }
};

const validateBirthYear: Validator<string> = value => {
  const date = dayjs(value, "YYYY", true);

  if (!date.isValid()) {
    return "pas valide date";
  }

  const tomorrow = dayjs().startOf("day").add(1, "day");

  if (date.isAfter(tomorrow)) {
    return "cannot be in the future";
  }
};

export const BirthDatePicker = ({ value, label }: Props) => {
  const date = useMemo(() => {
    const date = dayjs(value, "YYYY-MM-DD", true);

    if (!date.isValid()) {
      return Option.None();
    }

    return Option.Some({
      day: date.format("DD"),
      month: date.format("MM"),
      year: date.format("YYYY"),
    });
  }, [value]);

  const { Field, getFieldValue, submitForm } = useForm({
    birthDay: {
      initialValue: date.map(date => date.day).getOr(""),
      sanitize: value => value.trim().padStart(2, "0"),
      validate: value => {
        const message = combineValidators(validateRequired, validateBirthDay)(value);

        if (message != null) {
          return message;
        }

        // DO SOMETHING
      },
    },
    birthMonth: {
      initialValue: date.map(date => date.month).getOr(""),
      sanitize: value => value.trim().padStart(2, "0"),
      validate: () => {
        const message = validateRequired(value);

        if (message != null) {
          return message;
        }

        // DO SOMETHING
      },
    },
    birthYear: {
      initialValue: date.map(date => date.year).getOr(""),
      sanitize: value => value.trim().padStart(4, "0"),
      validate: value => {
        const message = combineValidators(validateRequired, validateBirthYear)(value);

        if (message != null) {
          return message;
        }

        // DO SOMETHING
      },
    },
  });

  const handleOnConfirm = () => {
    submitForm({
      onSuccess: values => {
        console.log(values);
        // TODO: validate full date
      },
    });
  };

  return (
    <LakeLabel
      label={label}
      render={id => (
        <Box direction="row">
          <Field name="birthDay">
            {({ error, onBlur, onChange, value }) => (
              <View style={styles.day}>
                <LakeTextInput
                  id={id}
                  error={error}
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                  pattern="[0-9]"
                  maxLength={2}
                  autoComplete="bday-day"
                  placeholder={t("datePicker.day")}
                />
              </View>
            )}
          </Field>

          <Space width={12} />

          <Field name="birthMonth">
            {({ error, onChange, value }) => (
              <LakeSelect
                error={error}
                value={value === "" ? undefined : value}
                items={months}
                placeholder={t("datePicker.month")}
                onValueChange={onChange}
              />
            )}
          </Field>

          <Space width={12} />

          <Field name="birthYear">
            {({ error, onBlur, onChange, value }) => (
              <View style={styles.year}>
                <LakeTextInput
                  error={error}
                  onBlur={onBlur}
                  value={value}
                  onChangeText={onChange}
                  pattern="[0-9]"
                  maxLength={4}
                  autoComplete="bday-year"
                  placeholder={t("datePicker.year")}
                />
              </View>
            )}
          </Field>
        </Box>
      )}
    />
  );
};
