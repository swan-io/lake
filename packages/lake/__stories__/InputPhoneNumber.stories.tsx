import { Meta } from "@storybook/react";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Box } from "../src/components/Box";
import { InputPhoneNumber, PhoneCountry } from "../src/components/InputPhoneNumber";
import { LakeText } from "../src/components/LakeText";
import { colors, spacings } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  container: {
    maxWidth: 400,
  },
  countryItem: {
    paddingHorizontal: spacings[16],
    paddingVertical: spacings[12],
  },
  countryItemSelected: {
    backgroundColor: colors.gray[50],
  },
});

export default {
  title: "Forms/InputPhoneNumber",
  component: InputPhoneNumber,
} as Meta<typeof InputPhoneNumber>;

const COUNTRIES: PhoneCountry[] = [
  { cca2: "DE", idd: "49" },
  { cca2: "ES", idd: "34" },
  { cca2: "FR", idd: "33" },
  { cca2: "IT", idd: "39" },
  { cca2: "NL", idd: "31" },
];

const COUNTRY_NAMES: Record<string, string> = {
  DE: "Germany",
  ES: "Spain",
  FR: "France",
  IT: "Italy",
  NL: "Netherlands",
};

type EditablePhoneInputProps = {
  error?: string;
  valid?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  initialValue?: string;
};

const EditablePhoneInput = ({
  error,
  valid,
  disabled,
  readOnly,
  initialValue = "",
}: EditablePhoneInputProps) => {
  const [country, setCountry] = useState<PhoneCountry>({ cca2: "FR", idd: "33" });
  const [value, setValue] = useState(initialValue);

  return (
    <View style={styles.container}>
      <InputPhoneNumber
        country={country}
        value={value}
        error={error}
        valid={valid}
        disabled={disabled}
        readOnly={readOnly}
        countryList={close => (
          <Box>
            {COUNTRIES.map(c => (
              <Pressable
                key={c.cca2}
                onPress={() => {
                  setCountry(c);
                  close();
                }}
                style={[styles.countryItem, c.cca2 === country.cca2 && styles.countryItemSelected]}
              >
                <LakeText>
                  {COUNTRY_NAMES[c.cca2]} (+{c.idd})
                </LakeText>
              </Pressable>
            ))}
          </Box>
        )}
        onChangeText={setValue}
      />
    </View>
  );
};

export const Variations = () => {
  return (
    <StoryBlock title="InputPhoneNumber variations">
      <StoryPart title="Default">
        <EditablePhoneInput />
      </StoryPart>

      <StoryPart title="With value">
        <EditablePhoneInput initialValue="06 12 34 56 78" />
      </StoryPart>

      <StoryPart title="Valid">
        <EditablePhoneInput initialValue="06 12 34 56 78" valid={true} />
      </StoryPart>

      <StoryPart title="Error">
        <EditablePhoneInput error="Invalid phone number" />
      </StoryPart>

      <StoryPart title="Disabled">
        <EditablePhoneInput initialValue="06 12 34 56 78" disabled={true} />
      </StoryPart>

      <StoryPart title="Readonly">
        <EditablePhoneInput initialValue="06 12 34 56 78" readOnly={true} />
      </StoryPart>
    </StoryBlock>
  );
};
