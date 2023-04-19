import { Meta } from "@storybook/react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Except } from "type-fest";
import { DatePicker, DatePickerProps } from "../src/components/DatePicker";
import { WithPartnerAccentColor } from "../src/components/WithPartnerAccentColor";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  container: {
    width: 430,
  },
});

export default {
  title: "Forms/DatePicker",
  component: DatePicker,
} as Meta<typeof DatePicker>;

const InteractiveDatePicker = ({ ...props }: Except<DatePickerProps, "value" | "onChange">) => {
  const [value, setValue] = useState<string>();

  return <DatePicker {...props} value={value} onChange={setValue} />;
};

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

export const Default = () => {
  return (
    <StoryBlock title="DatePicker">
      <StoryPart title="Default">
        <WithPartnerAccentColor color="#0F6FDE">
          <View style={styles.container}>
            <InteractiveDatePicker
              firstWeekDay="monday"
              monthNames={monthNames}
              weekDayNames={dayNames}
              format="DD/MM/YYYY"
            />
          </View>
        </WithPartnerAccentColor>
      </StoryPart>
    </StoryBlock>
  );
};
