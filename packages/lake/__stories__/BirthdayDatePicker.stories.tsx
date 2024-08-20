import { Meta } from "@storybook/react";
import { BirthDatePicker } from "@swan-io/shared-business/src/components/BirthDatePicker";
import { DatePickerProps } from "@swan-io/shared-business/src/components/DatePicker";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Except } from "type-fest";
import { LakeText } from "../src/components/LakeText";
import { Space } from "../src/components/Space";
import { WithPartnerAccentColor } from "../src/components/WithPartnerAccentColor";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  container: {
    maxWidth: 430,
  },
});

const FIFTEEN_DAYS_AGO = new Date();
FIFTEEN_DAYS_AGO.setDate(FIFTEEN_DAYS_AGO.getDate() - 15);

const FIFTEEN_DAYS_LATER = new Date();
FIFTEEN_DAYS_LATER.setDate(FIFTEEN_DAYS_LATER.getDate() + 15);

export default {
  title: "Forms/BirthDatePicker",
  component: BirthDatePicker,
} as Meta<typeof BirthDatePicker>;

const InteractiveDatePicker = ({ ...props }: Except<DatePickerProps, "value" | "onChange">) => {
  const [value, setValue] = useState("2024-08-20");

  return <BirthDatePicker {...props} value={value} onChange={setValue} />;
};

export const Default = () => {
  const [value, setValue] = useState({ start: "", end: "" });

  return (
    <WithPartnerAccentColor color="#0F6FDE">
      <StoryBlock title="DatePicker">
        <StoryPart title="BirthDate Picker">
          <View style={styles.container}>
            <LakeText>
              Selected date: {value.start} - {value.end}
            </LakeText>

            <Space height={20} />
            <InteractiveDatePicker />
          </View>
        </StoryPart>
      </StoryBlock>
    </WithPartnerAccentColor>
  );
};
