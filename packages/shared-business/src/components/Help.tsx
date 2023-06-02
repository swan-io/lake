import { BottomPanel } from "@swan-io/lake/src/components/BottomPanel";
import { LakeButton } from "@swan-io/lake/src/components/LakeButton";
import { LakeHeading } from "@swan-io/lake/src/components/LakeHeading";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { LakeTooltip } from "@swan-io/lake/src/components/LakeTooltip";
import { Space } from "@swan-io/lake/src/components/Space";
import { spacings } from "@swan-io/lake/src/constants/design";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

const { matches: canHover } = window.matchMedia("(hover: hover)");

export const styles = StyleSheet.create({
  panelContent: {
    padding: spacings[24],
  },
});

type Props = {
  title: string;
  content: string;
  tooltipWidth?: number;
};

export const Help = ({ title, content, tooltipWidth }: Props) => {
  const [showBottomPanel, setShowBottomPanel] = useState(false);

  if (canHover) {
    return (
      <LakeTooltip content={content} width={tooltipWidth} placement="top">
        <LakeButton mode="tertiary" size="small" color="gray" icon="question-circle-regular" />
      </LakeTooltip>
    );
  }

  return (
    <>
      <LakeButton
        mode="tertiary"
        size="small"
        color="gray"
        icon="question-circle-regular"
        onPress={() => setShowBottomPanel(true)}
      />

      <BottomPanel visible={showBottomPanel} onPressClose={() => setShowBottomPanel(false)}>
        <View style={styles.panelContent}>
          <LakeHeading level={3} variant="h3">
            {title}
          </LakeHeading>

          <Space height={24} />
          <LakeText variant="smallRegular">{content}</LakeText>
        </View>
      </BottomPanel>
    </>
  );
};
