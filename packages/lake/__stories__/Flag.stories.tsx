import { Meta } from "@storybook/react";
import { countries } from "@swan-io/shared-business/src/constants/countries";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Box } from "../src/components/Box";
import { Flag } from "../src/components/Flag";
import { LakeLabel } from "../src/components/LakeLabel";
import { LakeText } from "../src/components/LakeText";
import { LakeTextInput } from "../src/components/LakeTextInput";
import { Space } from "../src/components/Space";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
  },
  flagContainer: {
    width: 200,
    height: 100,
  },
});

export default {
  title: "Informations/Flag",
  component: Flag,
} as Meta<typeof Flag>;

export const Default = () => {
  const [search, setSearch] = useState("");

  return (
    <StoryBlock title="Flag">
      <LakeLabel
        label="Search"
        render={() => (
          <LakeTextInput icon="search-filled" value={search} onChangeText={setSearch} />
        )}
      />

      <StoryPart title="Flags">
        <Box direction="row" alignItems="center" style={styles.container}>
          {countries
            .filter(({ deburr }) => deburr.includes(search))
            .map(({ cca3, name, uid }) => (
              <Box
                key={uid}
                alignItems="center"
                justifyContent="start"
                style={styles.flagContainer}
              >
                <Flag icon={cca3} width={20} />
                <Space height={8} />
                <LakeText align="center">{name}</LakeText>
              </Box>
            ))}
        </Box>
      </StoryPart>
    </StoryBlock>
  );
};
