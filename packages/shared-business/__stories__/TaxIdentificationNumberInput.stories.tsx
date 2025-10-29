import { Meta } from "@storybook/react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TaxIdentificationNumberInput } from "../src/components/TaxIdentificationNumberInput";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  input: {
    maxWidth: 400,
  },
});

export default {
  title: "Onboarding/TaxIdentificationNumber",
  component: TaxIdentificationNumberInput,
} as Meta<typeof TaxIdentificationNumberInput>;

export const TaxIdentificationNumber = () => {
  const [value, setValue] = useState("");

  return (
    <StoryBlock title="Variations">
      <View style={styles.input}>
        <StoryPart title="German tax ID">
          <TaxIdentificationNumberInput
            required={true}
            country={"DEU"}
            isCompany={true}
            valid={false}
            error={undefined}
            value={value}
            onChange={event => setValue(event)}
          />
        </StoryPart>

        <StoryPart title="Spanish tax ID">
          <TaxIdentificationNumberInput
            required={true}
            country={"ESP"}
            isCompany={true}
            valid={false}
            error={undefined}
            value={value}
            onChange={event => setValue(event)}
          />
        </StoryPart>

        <StoryPart title="Italian tax ID">
          <TaxIdentificationNumberInput
            required={true}
            country={"ITA"}
            isCompany={false}
            valid={false}
            error={undefined}
            value={value}
            onChange={event => setValue(event)}
          />
        </StoryPart>
      </View>
    </StoryBlock>
  );
};
