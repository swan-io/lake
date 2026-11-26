import { Box } from "@swan-io/lake/src/components/Box";
import { BulletList } from "@swan-io/lake/src/components/BulletList";
import { LakeButton } from "@swan-io/lake/src/components/LakeButton";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { ResponsiveContainer } from "@swan-io/lake/src/components/ResponsiveContainer";
import { Space } from "@swan-io/lake/src/components/Space";
import { Tile } from "@swan-io/lake/src/components/Tile";
import { breakpoints, colors } from "@swan-io/lake/src/constants/design";
import { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { formatNestedMessage, t } from "../../utils/i18n";

const styles = StyleSheet.create({
  root: {
    alignSelf: "stretch",
  },
});

const bold = (chunks: ReactNode) => (
  <LakeText variant="smallMedium" color={colors.gray[500]}>
    {chunks}
  </LakeText>
);

type Props = {
  onStart: () => void;
};

export const IntroStep = ({ onStart }: Props) => (
  // The intro has no stepper, so it renders outside FraudReportLayout and measures the width itself
  <ResponsiveContainer breakpoint={breakpoints.medium} style={styles.root}>
    {({ small }) => {
      const padding = small ? 24 : 32;

      return (
        <>
          <Tile
            title={t("fraudReport.intro.title")}
            description={t("fraudReport.intro.description")}
            paddingVertical={padding}
            paddingHorizontal={padding}
          />

          <Space height={small ? 24 : 48} />

          <Tile
            title={t("fraudReport.intro.rulesTitle")}
            paddingVertical={padding}
            paddingHorizontal={padding}
          >
            <BulletList
              variant="smallRegular"
              color={colors.gray[500]}
              items={[
                formatNestedMessage("fraudReport.intro.rule.oneVictim", { bold }),
                formatNestedMessage("fraudReport.intro.rule.transactions", { bold }),
                formatNestedMessage("fraudReport.intro.rule.refund", { bold }),
                formatNestedMessage("fraudReport.intro.rule.deadline", { bold }),
                formatNestedMessage("fraudReport.intro.rule.saved", { bold }),
                formatNestedMessage("fraudReport.intro.rule.policeReport", { bold }),
              ]}
            />

            <Space height={small ? 24 : 32} />

            <LakeText variant="medium" color={colors.gray[500]}>
              {t("fraudReport.intro.falseInformation")}
            </LakeText>
          </Tile>

          <Space height={small ? 24 : 48} />

          <Box direction="row">
            <LakeButton color="current" onPress={onStart}>
              {t("fraudReport.intro.start")}
            </LakeButton>
          </Box>
        </>
      );
    }}
  </ResponsiveContainer>
);
