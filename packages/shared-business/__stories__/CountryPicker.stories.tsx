import { Meta } from "@storybook/react";
import { LakeLabel } from "@swan-io/lake/src/components/LakeLabel";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { CountryPicker } from "../src/components/CountryPicker";
import {
  allCountries,
  CountryCCA3,
  companyCountries,
  individualCountries,
  sovereignCountries,
} from "../src/constants/countries";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  container: { maxWidth: 300 },
});

const FEW_COUNTRIES: CountryCCA3[] = ["FRA", "DEU", "ESP", "ITA", "GBR", "USA"];

export default {
  title: "Forms/CountryPicker",
  component: CountryPicker,
} as Meta<typeof CountryPicker>;

type EditableProps = {
  label?: string;
  initialValue?: CountryCCA3;
  countries?: CountryCCA3[];
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  error?: string;
};

const Editable = ({
  label = "Country or territory",
  initialValue,
  countries = allCountries,
  placeholder,
  disabled,
  readOnly,
  error,
}: EditableProps) => {
  const [value, setValue] = useState<CountryCCA3 | undefined>(initialValue);

  return (
    <View style={styles.container}>
      <LakeLabel
        label={label}
        readOnly={readOnly}
        render={id => (
          <CountryPicker
            id={id}
            value={value}
            countries={countries}
            onValueChange={setValue}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            error={error}
          />
        )}
      />
    </View>
  );
};

export const Variations = () => (
  <StoryBlock title="CountryPicker variations">
    <StoryPart title="Empty with placeholder">
      <Editable placeholder="Select a country or territory" />
    </StoryPart>

    <StoryPart title="Initial value: France">
      <Editable initialValue="FRA" />
    </StoryPart>

    <StoryPart title="Sovereign countries only (no territories)">
      <Editable label="Country" placeholder="Select a country" countries={sovereignCountries} />
    </StoryPart>

    <StoryPart title="Individual countries">
      <Editable label="Country" initialValue="FRA" countries={[...individualCountries]} />
    </StoryPart>

    <StoryPart title="Company countries">
      <Editable label="Country" initialValue="FRA" countries={[...companyCountries]} />
    </StoryPart>

    <StoryPart title="Restricted list (6 countries only)">
      <Editable label="Country" countries={FEW_COUNTRIES} placeholder="Select a country" />
    </StoryPart>

    <StoryPart title="Error">
      <Editable placeholder="Select a country or territory" error="Required" />
    </StoryPart>

    <StoryPart title="Disabled">
      <Editable initialValue="FRA" disabled={true} />
    </StoryPart>

    <StoryPart title="Readonly">
      <Editable initialValue="FRA" readOnly={true} />
    </StoryPart>
  </StoryBlock>
);
