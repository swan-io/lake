import { Meta } from "@storybook/react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { BorderedIcon } from "../src/components/BorderedIcon";
import { Box } from "../src/components/Box";
import { Icon } from "../src/components/Icon";
import { LakeLabel } from "../src/components/LakeLabel";
import { LakeText } from "../src/components/LakeText";
import { LakeTextInput } from "../src/components/LakeTextInput";
import { Space } from "../src/components/Space";
import { colors, ColorVariants } from "../src/constants/design";
import customIcons from "../src/icons/custom-icons.json";
import fluentIcons from "../src/icons/fluent-icons.json";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
  },
  icon: {
    flexBasis: "0%",
    flexGrow: 1,
    minWidth: 250,
    paddingVertical: 16,
  },
});

export default {
  title: "Informations/Icon",
  component: BorderedIcon,
} as Meta<typeof BorderedIcon>;

const getKeys = <T extends string>(obj: Record<T, unknown>): T[] => Object.keys(obj) as T[];

export const Default = () => {
  const [search, setSearch] = useState("");

  return (
    <StoryBlock title="Icon">
      <LakeLabel
        label="Search"
        render={() => (
          <LakeTextInput icon="search-filled" value={search} onChangeText={setSearch} />
        )}
      />

      <StoryPart title="Fluent icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(fluentIcons)
            .filter(name => name.includes(search))
            .map(name => (
              <Box key={name} alignItems="center" style={styles.icon}>
                <Icon name={name} size={30} color={colors.gray[800]} />
                <Space height={8} />

                <LakeText align="center" numberOfLines={1}>
                  {name}
                </LakeText>
              </Box>
            ))}
        </Box>
      </StoryPart>

      <StoryPart title="Custom icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(customIcons)
            .filter(name => name.includes(search))
            .map(name => (
              <Box key={name} alignItems="center" style={styles.icon}>
                <Icon name={name} size={30} color={colors.gray[800]} />
                <Space height={8} />

                <LakeText align="center" numberOfLines={1}>
                  {name}
                </LakeText>
              </Box>
            ))}
        </Box>
      </StoryPart>
    </StoryBlock>
  );
};

type BorderedArgs = {
  color?: ColorVariants;
};

export const Bordered = ({ color }: BorderedArgs) => {
  const [search, setSearch] = useState("");

  return (
    <StoryBlock
      title="BorderedIcon"
      description="You can change the color in 'Controls' panel (Press A to open it)"
    >
      <LakeLabel
        label="Search"
        render={() => (
          <LakeTextInput icon="search-filled" value={search} onChangeText={setSearch} />
        )}
      />

      <StoryPart title="Fluent icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(fluentIcons)
            .filter(name => name.includes(search))
            .map(name => (
              <Box key={name} alignItems="center" style={styles.icon}>
                <BorderedIcon name={name} color={color} size={40} padding={8} />
                <Space height={8} />

                <LakeText align="center" numberOfLines={1}>
                  {name}
                </LakeText>
              </Box>
            ))}
        </Box>
      </StoryPart>

      <StoryPart title="Custom icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(customIcons)
            .filter(name => name.includes(search))
            .map(name => (
              <Box key={name} alignItems="center" style={styles.icon}>
                <BorderedIcon name={name} color={color} size={100} padding={8} />
                <Space height={8} />

                <LakeText align="center" numberOfLines={1}>
                  {name}
                </LakeText>
              </Box>
            ))}
        </Box>
      </StoryPart>
    </StoryBlock>
  );
};
