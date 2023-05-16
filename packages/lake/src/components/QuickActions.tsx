import { ActivityIndicator, StyleSheet, View } from "react-native";
import { colors, spacings } from "../constants/design";
import { Icon, IconName } from "./Icon";
import { LakeText } from "./LakeText";
import { LakeTooltip } from "./LakeTooltip";
import { Pressable } from "./Pressable";
import { Space } from "./Space";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  icon: {
    borderColor: colors.gray[300],
    borderWidth: 1,
    borderStyle: "solid",
    paddingHorizontal: spacings[24],
    paddingVertical: spacings[12],
    borderRadius: 32,
  },
  action: {
    alignItems: "center",
    paddingHorizontal: spacings[12],
    flexBasis: "30%",
  },
  disabled: {
    alignItems: "center",
    paddingHorizontal: spacings[12],
    flexBasis: "30%",
    opacity: 0.4,
  },
  label: {
    lineHeight: 16,
  },
});

export type QuickAction = {
  icon: IconName;
  label: string;
  onPress: () => void;
  isLoading?: boolean;
  backgroundColor?: string;
  color?: string;
};

type Props = {
  actions: QuickAction[];
  showTooltip?: boolean;
  tooltipText?: string;
};

export const QuickActions = ({ actions, showTooltip, tooltipText }: Props) => {
  return (
    <View style={styles.container}>
      {actions.map((action, index) => (
        <LakeTooltip
          content={tooltipText}
          placement="bottom"
          key={index}
          showTooltip={showTooltip === false}
        >
          <Pressable
            key={index}
            onPress={action.onPress}
            style={showTooltip === false ? styles.action : styles.disabled}
            disabled={action.isLoading === true || showTooltip === true}
          >
            <View
              style={[
                styles.icon,
                action.backgroundColor != null
                  ? { backgroundColor: action.backgroundColor, borderColor: action.backgroundColor }
                  : null,
              ]}
            >
              {action.isLoading === true ? (
                <ActivityIndicator color={action.color ?? colors.gray[300]} size={16} />
              ) : (
                <Icon name={action.icon} size={16} color={action.color ?? colors.gray[300]} />
              )}
            </View>

            <Space height={8} />

            <LakeText variant="smallRegular" align="center" style={styles.label}>
              {action.label}
            </LakeText>
          </Pressable>
        </LakeTooltip>
      ))}
    </View>
  );
};
