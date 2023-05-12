import { Meta } from "@storybook/react";
import { StyleSheet, View } from "react-native";
import { Accordion } from "../src/components/Accordion";
import { BorderedIcon } from "../src/components/BorderedIcon";
import { Box } from "../src/components/Box";
import { Fill } from "../src/components/Fill";
import { IconName } from "../src/components/Icon";
import { LakeButton } from "../src/components/LakeButton";
import { LakeText } from "../src/components/LakeText";
import { Space } from "../src/components/Space";
import { commonStyles } from "../src/constants/commonStyles";
import { colors } from "../src/constants/design";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  accordionContainer: {
    maxWidth: 800,
  },
});

export default {
  title: "Layout/Accordion",
  component: Accordion,
} as Meta<typeof Accordion>;

type PaymentMethodContentProps = {
  name: string;
  icon: IconName;
};

const PaymentMethodContent = ({ name, icon }: PaymentMethodContentProps) => {
  return (
    <Box direction="row" alignItems="center" style={commonStyles.fill}>
      <BorderedIcon name={icon} size={32} padding={4} />
      <Space width={12} />

      <LakeText variant="smallMedium" color={colors.gray[900]}>
        {name}
      </LakeText>

      <Fill minWidth={12} />

      <LakeButton
        size="small"
        color="sandbox"
        onPress={() => {
          console.log("Press on payment method", name);
        }}
      >
        Activate
      </LakeButton>
    </Box>
  );
};

export const Default = () => {
  return (
    <StoryBlock title="Accordion">
      <StoryPart title="Default">
        <View style={styles.accordionContainer}>
          <Accordion trigger="Frederic">
            <LakeText>
              Frederic is a creative and detail-oriented front-end developer who loves to experiment
              with new design trends and push the boundaries of user experience. He's always eager
              to learn and try out new technologies, and he's not afraid to take risks to achieve
              his goals.
            </LakeText>
          </Accordion>

          <Accordion trigger="Mathieu">
            <LakeText>
              Mathieu is a meticulous and analytical front-end developer who takes a data-driven
              approach to design and development. He's skilled at analyzing user behavior and making
              data-informed decisions to optimize the user experience. He's also an excellent
              problem-solver who loves to dig deep into complex technical challenges.
            </LakeText>
          </Accordion>

          <Accordion trigger="Matthias">
            <LakeText>
              Matthias is a versatile and adaptable front-end developer who excels at creating
              user-friendly interfaces across a wide range of platforms and devices. He's skilled at
              working with different programming languages and frameworks, and he's always looking
              for ways to optimize his code for maximum performance.
            </LakeText>
          </Accordion>

          <Accordion trigger="Sandrine">
            <LakeText>
              Sandrine is a collaborative and communicative front-end developer who thrives in team
              environments. She's passionate about creating user-centered designs that meet the
              needs of diverse audiences, and she's skilled at collaborating with designers and
              other developers to bring those designs to life. She's also a skilled communicator who
              can explain complex technical concepts in plain language.
            </LakeText>
          </Accordion>
        </View>
      </StoryPart>

      <StoryPart title="Trigger with content">
        <View style={styles.accordionContainer}>
          <Accordion trigger={<PaymentMethodContent icon="lake-card" name="Card" />}>
            <LakeText>
              This feature allows users to manage their debit or credit cards within the app. Users
              can view their card details, track their spending, set spending limits, and freeze or
              unfreeze their card if it's lost or stolen.
            </LakeText>
          </Accordion>

          <Accordion
            trigger={<PaymentMethodContent icon="lake-transfer" name="SEPA Direct Debit" />}
          >
            <LakeText>
              This feature enables users to authorize regular payments to be made from their bank
              account to a third party. Users can set up recurring payments for bills or
              subscriptions, and can easily manage and cancel these payments within the app.
            </LakeText>
          </Accordion>

          <Accordion trigger={<PaymentMethodContent icon="lake-card" name="Check" />}>
            <LakeText>
              This feature allows users to deposit checks into their account by taking a photo of
              the check with their phone. Users can see the status of their check deposit and
              receive notifications when the deposit is complete.
            </LakeText>
          </Accordion>

          <Accordion
            trigger={<PaymentMethodContent icon="lake-transfer" name="Internal Direct Debit" />}
          >
            <LakeText>
              This feature allows users to set up automatic payments between their own accounts
              within the same bank. For example, users can set up a recurring transfer from their
              checking account to their savings account each month. Users can manage and cancel
              these payments within the app.
            </LakeText>
          </Accordion>
        </View>
      </StoryPart>
    </StoryBlock>
  );
};
