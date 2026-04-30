import { Meta } from "@storybook/react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { PhoneCountryPicker } from "../src/components/PhoneCountryPicker";
import {
  Country,
  CountryCCA3,
  france,
  getCountryByCCA3,
  phoneCountries,
} from "../src/constants/countries";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  container: { width: 120 },
});

const FEW_COUNTRIES: CountryCCA3[] = ["FRA", "DEU", "ESP", "ITA", "GBR", "USA"];

export default {
  title: "Forms/PhoneCountryPicker",
  component: PhoneCountryPicker,
} as Meta<typeof PhoneCountryPicker>;

type EditableProps = {
  initialCountry?: Country;
  countries?: CountryCCA3[];
  disabled?: boolean;
  readOnly?: boolean;
  error?: string;
};

const Editable = ({
  initialCountry = france,
  countries = phoneCountries,
  disabled,
  readOnly,
  error,
}: EditableProps) => {
  const [country, setCountry] = useState<Country>(initialCountry);

  return (
    <View style={styles.container}>
      <PhoneCountryPicker
        value={country}
        countries={countries}
        onValueChange={setCountry}
        disabled={disabled}
        readOnly={readOnly}
        error={error}
      />
    </View>
  );
};

export const Variations = () => (
  <StoryBlock title="PhoneCountryPicker variations">
    <StoryPart title="Default (France)">
      <Editable />
    </StoryPart>

    <StoryPart title="Initial country: United States">
      <Editable initialCountry={getCountryByCCA3("USA")} />
    </StoryPart>

    <StoryPart title="Initial country: Portugal (long IDD)">
      <Editable initialCountry={getCountryByCCA3("PRT")} />
    </StoryPart>

    <StoryPart title="Restricted list (6 countries only)">
      <Editable countries={FEW_COUNTRIES} />
    </StoryPart>

    <StoryPart title="Error">
      <Editable error="Required" />
    </StoryPart>

    <StoryPart title="Disabled">
      <Editable disabled={true} />
    </StoryPart>

    <StoryPart title="Readonly">
      <Editable readOnly={true} />
    </StoryPart>
  </StoryBlock>
);
