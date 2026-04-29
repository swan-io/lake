import { Meta } from "@storybook/react";
import { LakeButton } from "@swan-io/lake/src/components/LakeButton";
import { LakeLabel } from "@swan-io/lake/src/components/LakeLabel";
import { Space } from "@swan-io/lake/src/components/Space";
import { useForm } from "@swan-io/use-form";
import { StyleSheet, View } from "react-native";
import { InputPhoneNumber } from "../src/components/InputPhoneNumber";
import { Country, getCountryByCCA3 } from "../src/constants/countries";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  container: { maxWidth: 400 },
});

export default {
  title: "Forms/InputPhoneNumber",
  component: InputPhoneNumber,
} as Meta<typeof InputPhoneNumber>;

type FormProps = {
  initialCountry?: Country;
  initialValue?: string;
  help?: string;
  disabled?: boolean;
  readOnly?: boolean;
};

const PhoneNumberForm = ({
  initialCountry = getCountryByCCA3("FRA"),
  initialValue = "",
  help,
  disabled,
  readOnly,
}: FormProps) => {
  const { Field, submitForm } = useForm({
    phoneNumber: {
      initialValue: { country: initialCountry, nationalNumber: initialValue },
      sanitize: ({ country, nationalNumber }) => ({
        country,
        nationalNumber: nationalNumber.trim(),
      }),
      validate: ({ nationalNumber }) => {
        if (nationalNumber.trim() === "") {
          return "Phone number is required";
        }
        if (nationalNumber.replace(/\D/g, "").length < 6) {
          return "Invalid phone number";
        }
      },
    },
  });

  return (
    <View style={styles.container}>
      <Field name="phoneNumber">
        {({ value, onBlur, onChange, valid, error, ref }) => (
          <LakeLabel
            label="Phone number"
            render={id => (
              <InputPhoneNumber
                id={id}
                ref={ref}
                country={value.country}
                value={value.nationalNumber}
                valid={valid}
                error={error}
                help={help}
                disabled={disabled}
                readOnly={readOnly}
                onCountryChange={country =>
                  onChange({ country, nationalNumber: value.nationalNumber })
                }
                onChangeText={text => onChange({ country: value.country, nationalNumber: text })}
                onBlur={onBlur}
              />
            )}
          />
        )}
      </Field>

      <Space height={8} />

      <LakeButton
        size="small"
        color="current"
        onPress={() => submitForm({ onSuccess: values => console.log(values) })}
      >
        Submit
      </LakeButton>
    </View>
  );
};

export const Variations = () => (
  <StoryBlock title="InputPhoneNumber variations">
    <StoryPart title="Default (France)">
      <PhoneNumberForm />
    </StoryPart>

    <StoryPart title="With initial value">
      <PhoneNumberForm initialValue="06 12 34 56 78" />
    </StoryPart>

    <StoryPart title="Different initial country (UK)">
      <PhoneNumberForm initialCountry={getCountryByCCA3("GBR")} initialValue="07 1234 5678" />
    </StoryPart>

    <StoryPart title="With help">
      <PhoneNumberForm help="Required for permissions" />
    </StoryPart>

    <StoryPart title="Disabled">
      <PhoneNumberForm initialValue="06 12 34 56 78" disabled={true} />
    </StoryPart>

    <StoryPart title="Readonly">
      <PhoneNumberForm initialValue="06 12 34 56 78" readOnly={true} />
    </StoryPart>
  </StoryBlock>
);
