import { CSSProperties, ReactNode, memo, useMemo } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { P, match } from "ts-pattern";
import { Box } from "../src/components/Box";
import { LakeText } from "../src/components/LakeText";
import { ScrollView } from "../src/components/ScrollView";
import { Separator } from "../src/components/Separator";
import { Space } from "../src/components/Space";
import { colors, radii, texts } from "../src/constants/design";

const styles = StyleSheet.create({
  storyTitle: {
    ...texts.h1,
  },
  partTitle: {
    ...texts.smallSemibold,
    textTransform: "uppercase",
  },
  codeBlock: {
    backgroundColor: colors.gray[0],
    borderRadius: radii[8],
    padding: 16,
  },
});

type StoryIntroductionProps = {
  title: string;
  description?: string | string[];
  children: ReactNode;
};

export const StoryBlock = ({ title, description, children }: StoryIntroductionProps) => {
  return (
    <ScrollView>
      <LakeText dataSet={{ a11y: false }} style={styles.storyTitle}>
        {title}
      </LakeText>
      <Space height={8} />

      {match(description)
        .with(P.string, description => <LakeText>{description}</LakeText>)
        .with(P.array(P.string), description =>
          description.map((description, index) => (
            <View key={index}>
              <LakeText dataSet={{ a11y: false }}>{description}</LakeText>
            </View>
          )),
        )
        .with(P.nullish, () => null)
        .exhaustive()}

      <Space height={32} />

      {children}
    </ScrollView>
  );
};

type StoryPartProps = {
  title: string;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const StoryPart = ({ title, children, style }: StoryPartProps) => {
  return (
    <Box>
      <LakeText dataSet={{ a11y: false }} style={styles.partTitle}>
        {title}
      </LakeText>
      <Space height={24} />
      <View style={style}>{children}</View>
      <Space height={12} />
      <Separator />
      <Space height={24} />
    </Box>
  );
};
