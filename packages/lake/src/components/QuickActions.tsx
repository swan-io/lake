import { ActivityIndicator, StyleSheet, View } from "react-native";
import { colors, spacings } from "../constants/design";
import { isNullishOrEmpty } from "../utils/nullish";
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
    flexWrap: "wrap",
  },
  icon: {
    borderColor: colors.gray[300],
    borderWidth: 1,
    borderStyle: "solid",
    paddingHorizontal: spacings[24],
    paddingVertical: spacings[12],
    borderRadius: 32,
  },
  actionContainer: {
    flex: 1,
    minWidth: 100,
  },
  action: {
    alignItems: "center",
    paddingHorizontal: spacings[12],
    paddingVertical: spacings[8],
  },
  disabled: {
    opacity: 0.4,
  },
  label: {
    lineHeight: 16,
  },
});

export type QuickAction = {
  icon: IconName;
  label: string;
  tooltipText?: string;
  tooltipDisabled?: boolean;
  onPress: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  backgroundColor?: string;
  color?: string;
};

type Props = {
  actions: QuickAction[];
};

export const QuickActions = ({ actions }: Props) => {
  return (
    <View style={styles.container}>
      {actions.map((action, index) => (
        <LakeTooltip
          content={action.tooltipText}
          placement="top"
          key={index}
          containerStyle={styles.actionContainer}
          disabled={action.tooltipDisabled === true || isNullishOrEmpty(action.tooltipText)}
        >
          <Pressable
            key={index}
            onPress={action.onPress}
            style={[styles.action, action.disabled === true && styles.disabled]}
            disabled={action.isLoading === true || action.disabled === true}
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
