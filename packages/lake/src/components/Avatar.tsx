import { memo } from "react";
import { StyleSheet, View } from "react-native";
import { match, P } from "ts-pattern";
import { commonStyles } from "../constants/commonStyles";
import { colors, ColorVariants } from "../constants/design";
import { identity } from "../utils/function";
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
  birthLastName?: string | null;
  lastName?: string | null;
  preferredLastName?: string | null;
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

  const initials = match(props)
    .with({ user: P.select(P.nonNullable) }, user => {
      const lastName = user.preferredLastName ?? user.lastName ?? user.birthLastName;
      return (user.firstName?.charAt(0) ?? "") + (lastName?.charAt(0) ?? "");
    })
    .with({ initials: P.select(P.nonNullable) }, identity)
    .otherwise(() => "");

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
