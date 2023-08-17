import { Meta } from "@storybook/react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { BorderedIcon } from "../src/components/BorderedIcon";
import { Box } from "../src/components/Box";
import { Icon, IconProps } from "../src/components/Icon";
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
  iconContainer: {
    width: 200,
    height: 100,
  },
});

export default {
  title: "Informations/Icon",
  component: BorderedIcon,
  args: {
    size: 24
  }
} as Meta<typeof BorderedIcon>;

type StoryArgs = Pick<IconProps, "color" | "size" | "name">;

const getKeys = <T extends string>(obj: Record<T, unknown>): T[] => Object.keys(obj) as T[];

export const Default = ({ color, size, name }: StoryArgs) => {
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
              <Box
                key={name}
                alignItems="center"
                justifyContent="start"
                style={styles.iconContainer}
              >
                <Icon name={name} size={size} color={color} />
                <Space height={8} />
                <LakeText align="center">{name}</LakeText>
              </Box>
            ))}
        </Box>
      </StoryPart>

      <StoryPart title="Custom icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(customIcons)
            .filter(name => name.includes(search))
            .map(name => (
              <Box
                key={name}
                alignItems="center"
                justifyContent="start"
                style={styles.iconContainer}
              >
                <Icon name={name} size={size} color={colors.gray[800]} />
                <Space height={8} />
                <LakeText align="center">{name}</LakeText>
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
              <Box
                key={name}
                alignItems="center"
                justifyContent="start"
                style={styles.iconContainer}
              >
                <BorderedIcon name={name} color={color} size={40} padding={8} />
                <Space height={8} />
                <LakeText align="center">{name}</LakeText>
              </Box>
            ))}
        </Box>
      </StoryPart>

      <StoryPart title="Custom icons">
        <Box direction="row" alignItems="center" style={styles.container}>
          {getKeys(customIcons)
            .filter(name => name.includes(search))
            .map(name => (
              <Box
                key={name}
                alignItems="center"
                justifyContent="start"
                style={styles.iconContainer}
              >
                <BorderedIcon name={name} color={color} size={40} padding={8} />
                <Space height={8} />
                <LakeText align="center">{name}</LakeText>
              </Box>
            ))}
        </Box>
      </StoryPart>
    </StoryBlock>
  );
};
