import { Meta } from "@storybook/react";
import { Box } from "@swan-io/lake/src/components/Box";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { Space } from "@swan-io/lake/src/components/Space";
import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { Flag } from "../src/components/Flag";
import { countries } from "../src/constants/countries";
import { StoryBlock } from "./_StoriesComponents";

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
  },
  flag: {
    flexBasis: "0%",
    flexGrow: 1,
    minWidth: 250,
    padding: 16,
  },
});

export default {
  title: "Informations/Flag",
  component: Flag,
} as Meta<typeof Flag>;

export const Default = () => {
  const items = useMemo(
    () => [
      { name: "European Union", code: "EU" as const },
      ...countries.map(({ cca2, name }) => ({ name, code: cca2 })),
    ],
    [],
  );

  return (
    <StoryBlock title="Flag">
      <Box direction="row" style={styles.container}>
        {items.map((country, index) => (
          <Box key={`${country.code}-${index}`} alignItems="center" style={styles.flag}>
            <Flag code={country.code} width={18} />
            <Space height={4} />

            <LakeText align="center" variant="smallMedium" numberOfLines={1}>
              {country.name}
            </LakeText>
          </Box>
        ))}
      </Box>
    </StoryBlock>
  );
};
