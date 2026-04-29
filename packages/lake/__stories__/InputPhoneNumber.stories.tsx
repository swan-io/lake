import { Meta } from "@storybook/react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { InputPhoneNumber } from "../src/components/InputPhoneNumber";
import { LakeSelect } from "../src/components/LakeSelect";
import { colors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  container: { maxWidth: 400 },
  pickerBackground: { backgroundColor: colors.gray[50] },
});

const COUNTRIES = [
  { name: "+33", value: "FR", searchTerms: ["France"] },
  { name: "+49", value: "DE", searchTerms: ["Germany"] },
  { name: "+34", value: "ES", searchTerms: ["Spain"] },
  { name: "+39", value: "IT", searchTerms: ["Italy"] },
  { name: "+31", value: "NL", searchTerms: ["Netherlands"] },
  { name: "+44", value: "GB", searchTerms: ["United Kingdom"] },
];

export default {
  title: "Forms/InputPhoneNumber",
  component: InputPhoneNumber,
} as Meta<typeof InputPhoneNumber>;

type EditablePhoneInputProps = {
  error?: string;
  help?: string;
  valid?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  initialValue?: string;
  initialCountry?: string;
};

const EditablePhoneInput = ({
  error,
  help,
  valid,
  disabled,
  readOnly,
  initialValue = "",
  initialCountry = "FR",
}: EditablePhoneInputProps) => {
  const [country, setCountry] = useState(initialCountry);
  const [value, setValue] = useState(initialValue);

  return (
    <View style={styles.container}>
      <InputPhoneNumber
        value={value}
        error={error}
        help={help}
        valid={valid}
        disabled={disabled}
        readOnly={readOnly}
        onChangeText={setValue}
        phoneCountryPicker={style => (
          <LakeSelect
            items={COUNTRIES}
            value={country}
            onValueChange={setCountry}
            disabled={disabled}
            readOnly={readOnly}
            error={error}
            hideErrors={true}
            style={[styles.pickerBackground, style]}
          />
        )}
      />
    </View>
  );
};

export const Variations = () => (
  <StoryBlock title="InputPhoneNumber variations">
    <StoryPart title="Default">
      <EditablePhoneInput />
    </StoryPart>

    <StoryPart title="With value">
      <EditablePhoneInput initialValue="06 12 34 56 78" />
    </StoryPart>

    <StoryPart title="Different initial country">
      <EditablePhoneInput initialCountry="GB" initialValue="07 1234 5678" />
    </StoryPart>

    <StoryPart title="Valid">
      <EditablePhoneInput initialValue="06 12 34 56 78" valid={true} />
    </StoryPart>

    <StoryPart title="With help">
      <EditablePhoneInput help="Required for permissions" />
    </StoryPart>

    <StoryPart title="Error">
      <EditablePhoneInput error="Invalid phone number" />
    </StoryPart>

    <StoryPart title="Error takes precedence over help">
      <EditablePhoneInput error="Invalid phone number" help="Required for permissions" />
    </StoryPart>

    <StoryPart title="Disabled">
      <EditablePhoneInput initialValue="06 12 34 56 78" disabled={true} />
    </StoryPart>

    <StoryPart title="Readonly">
      <EditablePhoneInput initialValue="06 12 34 56 78" readOnly={true} />
    </StoryPart>
  </StoryBlock>
);
