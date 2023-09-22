import { StyleSheet, View } from "react-native";
import { colors, invariantColors } from "../constants/design";
import { Icon } from "./Icon";
import { LakeText } from "./LakeText";
import { Pressable } from "./Pressable";

const HEIGHT = 26;
const BORDER_WIDTH = 1;

const styles = StyleSheet.create({
  container: {
    display: "inline-block",
  },
  switch: {
    flexDirection: "row",
    borderRadius: HEIGHT / 2,
    transform: "translateZ(0px)",
    display: "inline-flex",
    borderColor: colors.gray[100],
    borderWidth: BORDER_WIDTH,
  },
  handle: {
    position: "absolute",
    width: HEIGHT,
    height: HEIGHT,
    top: -BORDER_WIDTH,
    borderRadius: HEIGHT / 2,
    transitionProperty: "transform",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-in-out",
    borderWidth: BORDER_WIDTH,
  },
  switchItem: {
    height: HEIGHT - BORDER_WIDTH * 2,
    borderRadius: (HEIGHT - BORDER_WIDTH * 2) / 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  switchItemUnchecked: {
    color: colors.negative[500],
    borderColor: colors.negative[500],
    backgroundColor: colors.negative[50],
  },
  switchItemChecked: {
    color: colors.positive[500],
    borderColor: colors.positive[500],
    backgroundColor: colors.positive[50],
  },
  desktopSwitchItem: {
    paddingLeft: 8,
    paddingRight: 8,
    borderColor: invariantColors.transparent,
    borderWidth: BORDER_WIDTH,
    borderRadius: (HEIGHT - BORDER_WIDTH * 2) / 2,
  },
});

type Props = {
  value: boolean;
  disabled?: boolean;
  onToggle: (next: boolean) => void;
  mode?: "desktop" | "mobile";
  labels: {
    true: string;
    false: string;
  };
};

export const Toggle = ({ onToggle, value, disabled = false, mode = "desktop", labels }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.switch} onPress={() => onToggle(!value)} disabled={disabled}>
        {mode === "mobile" && (
          <View
            style={[
              styles.handle,

              {
                transform: `translateX(${!value ? HEIGHT - 3 * BORDER_WIDTH : -BORDER_WIDTH}px)`,
                borderColor: value ? colors.positive[500] : colors.negative[500],
              },
            ]}
          />
        )}

        <LakeText style={[styles.switchItem, value && styles.switchItemChecked]}>
          {mode === "mobile" ? (
            <Icon
              style={{ width: HEIGHT - BORDER_WIDTH * 2 }}
              name="checkmark-circle-regular"
              size={16}
            />
          ) : (
            <LakeText style={[styles.desktopSwitchItem, value && styles.switchItemChecked]}>
              {labels.true}
            </LakeText>
          )}
        </LakeText>

        <LakeText style={[styles.switchItem, !value && styles.switchItemUnchecked]}>
          {mode === "mobile" ? (
            <Icon
              style={{ width: HEIGHT - BORDER_WIDTH * 2 }}
              name="subtract-circle-regular"
              size={16}
            />
          ) : (
            <LakeText style={[styles.desktopSwitchItem, !value && styles.switchItemUnchecked]}>
              {labels.false}
            </LakeText>
          )}
        </LakeText>
      </Pressable>
    </View>
  );
};
