import { Meta } from "@storybook/react";
import { Box } from "@swan-io/lake/src/components/Box";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TaxIdentificationNumberInput } from "../src/components/TaxIdentificationNumberInput";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  grid: {
    gap: 24,
  },
  column: {
    flex: 1,
  },
  columnHeader: {
    marginBottom: 8,
  },
});

const COUNTRIES = [
  { country: "DEU", label: "Germany" },
  { country: "ESP", label: "Spain" },
  { country: "ITA", label: "Italy" },
  { country: "FRA", label: "France" },
  { country: "BEL", label: "Belgium" },
  { country: "NLD", label: "Netherlands" },
] as const;

export default {
  title: "Onboarding/TaxIdentificationNumber",
  component: TaxIdentificationNumberInput,
} as Meta<typeof TaxIdentificationNumberInput>;

export const TaxIdentificationNumber = () => {
  const [value, setValue] = useState("");

  return (
    <StoryBlock title="Tax identification number: Individual vs Company">
      {COUNTRIES.map(({ country, label }) => (
        <StoryPart key={country} title={label}>
          <Box direction="row" style={styles.grid}>
            <View style={styles.column}>
              <LakeText style={styles.columnHeader}>Individual</LakeText>
              <TaxIdentificationNumberInput
                required={true}
                country={country}
                isCompany={false}
                valid={false}
                error={undefined}
                value={value}
                onChange={setValue}
              />
            </View>

            <View style={styles.column}>
              <LakeText style={styles.columnHeader}>Company</LakeText>
              <TaxIdentificationNumberInput
                required={true}
                country={country}
                isCompany={true}
                valid={false}
                error={undefined}
                value={value}
                onChange={setValue}
              />
            </View>
          </Box>
        </StoryPart>
      ))}
    </StoryBlock>
  );
};
