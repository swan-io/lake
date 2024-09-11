import { ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { commonStyles } from "../constants/commonStyles";
import { isNotNullish, isNullishOrEmpty } from "../utils/nullish";
import { LakeText } from "./LakeText";
import { Space, SpacingValue } from "./Space";

const BACKGROUND_IMAGE = `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAAaADAAQAAAABAAAAAQAAAAD5Ip3+AAAADElEQVQIHWN48fwFAAVyArgPjAd5AAAAAElFTkSuQmCC")`;

const styles = StyleSheet.create({
  horizontal: {
    backgroundImage: BACKGROUND_IMAGE,
    width: 1,
    alignSelf: "stretch",
  },
  vertical: {
    backgroundColor: BACKGROUND_IMAGE,
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
});

type LineProps = {
  horizontal?: boolean;
  space?: SpacingValue;
  style?: StyleProp<ViewStyle>;
};
type Props = LineProps & {
  children?: ReactNode;
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

export const Separator = ({ horizontal = false, space, style, children }: Props) => {
  if (isNullishOrEmpty(children)) {
    return <Line horizontal={horizontal} space={space} style={style} />;
  }

  return (
    <View style={horizontal ? styles.horizontalContainer : styles.verticalContainer}>
      <Line horizontal={horizontal} space={space} style={[style, commonStyles.fill]} />
      <Space width={12} />

      <LakeText align="center" style={!horizontal && { lineHeight: 2 * (space ?? 0) }}>
        {children}
      </LakeText>

      <Space width={12} />
      <Line horizontal={horizontal} space={space} style={[style, commonStyles.fill]} />
    </View>
  );
};
