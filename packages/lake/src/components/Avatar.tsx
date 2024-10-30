import { memo } from "react";
import { StyleSheet, View } from "react-native";
import { commonStyles } from "../constants/commonStyles";
import { ColorVariants, colors } from "../constants/design";
import { Icon } from "./Icon";
import { LakeText } from "./LakeText";

const styles = StyleSheet.create({
  text: {
    userSelect: "none",
  },
  container: {
    borderWidth: 1,
  },
});

type User = {
  firstName: string | null | undefined;
  preferredLastName: string | null | undefined;
};

type Props =
  | { size: number; user: User | null | undefined }
  /**
   * @deprecated
   */
  | { size: number; initials?: string };

const initialsToVariant = (initials: string): ColorVariants => {
  const value = (initials.charCodeAt(0) + initials.charCodeAt(1)) % 3;

  switch (value) {
    case 2:
      return "darkPink";
    case 1:
      return "live";
    default:
      return "shakespear";
  }
};

export const Avatar = memo<Props>(props => {
  const { size } = props;

  const initials =
    "user" in props
      ? (props.user?.firstName?.charAt(0) ?? "") + (props.user?.preferredLastName?.charAt(0) ?? "")
      : (props.initials ?? "");

  const variant = initialsToVariant(initials);

  return (
    <View
      role="img"
      style={[
        commonStyles.center,
        styles.container,
        {
          backgroundColor: colors[variant][100],
          borderColor: colors[variant][200],
          height: size,
          width: size,
          borderRadius: size / 2,
        },
      ]}
    >
      {initials !== "" ? (
        <LakeText
          variant="semibold"
          align="center"
          style={[styles.text, { color: colors[variant][500], fontSize: size * 0.4 }]}
        >
          {initials}
        </LakeText>
      ) : (
        <Icon name="person-filled" size={size - 8} color={colors[variant][50]} />
      )}
    </View>
  );
});
