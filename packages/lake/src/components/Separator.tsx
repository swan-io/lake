import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { commonStyles } from "../constants/commonStyles";
import { colors } from "../constants/design";
import { isNotNullish, isNullishOrEmpty } from "../utils/nullish";
import { LakeText } from "./LakeText";
import { SpacingValue } from "./Space";

const styles = StyleSheet.create({
  horizontal: {
    backgroundColor: colors.gray[100],
    width: 1,
    alignSelf: "stretch",
  },
  vertical: {
    backgroundColor: colors.gray[100],
    height: 1,
    alignSelf: "stretch",
  },
  horizontalContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  verticalContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  text: {
    padding: "5px",
  },
});

type LineProps = {
  horizontal?: boolean;
  space?: SpacingValue;
  style?: StyleProp<ViewStyle>;
};
type Props = LineProps & {
  text?: string;
};

const Line = ({ horizontal = false, style, space }: LineProps) => (
  <View
    role="none"
    style={
      horizontal
        ? [styles.horizontal, isNotNullish(space) && { marginHorizontal: space }, style]
        : [styles.vertical, isNotNullish(space) && { marginVertical: space }, style]
    }
  />
);

export const Separator = ({ horizontal = false, space, style, text }: Props) => {
  if (isNullishOrEmpty(text)) {
    return <Line horizontal={horizontal} space={space} style={style} />;
  }

  return (
    <View style={horizontal ? styles.horizontalContainer : styles.verticalContainer}>
      <Line horizontal={horizontal} space={space} style={[style, commonStyles.fill]} />

      <LakeText align="center" style={styles.text}>
        {text}
      </LakeText>

      <Line horizontal={horizontal} space={space} style={[style, commonStyles.fill]} />
    </View>
  );
};
