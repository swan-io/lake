import { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import { commonStyles } from "../constants/commonStyles";
import { colors, spacings } from "../constants/design";
import { BottomPanel } from "./BottomPanel";
import { Icon } from "./Icon";
import { LakeHeading } from "./LakeHeading";
import { LakeRadio } from "./LakeRadio";
import { LakeText } from "./LakeText";
import { Pressable } from "./Pressable";
import { Separator } from "./Separator";
import { Space } from "./Space";

const styles = StyleSheet.create({
  head: {
    padding: 24,
    paddingBottom: 12,
  },
  option: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacings[24],
    paddingVertical: spacings[12],
  },
  arrowDown: {
    transform: "rotate(180deg)",
  },
  text: {
    ...commonStyles.fill,
  },
});

type SortDirection = "Asc" | "Desc";

export type SortField<T> = {
  name: T;
  ascLabel: string;
  descLabel: string;
};

export type SortValue<T extends string> = {
  field: T;
  direction: SortDirection;
};

export type SortBottomPanelProps<T extends string> = {
  visible: boolean;
  title: string;
  fields: SortField<T>[];
  value: SortValue<T> | undefined;
  onChange: (value: SortValue<T>) => void;
  onClose: () => void;
};

export const SortBottomPanel = <T extends string>({
  visible,
  title,
  value,
  fields,
  onChange,
  onClose,
}: SortBottomPanelProps<T>) => {
  return (
    <BottomPanel visible={visible} onPressClose={onClose}>
      <View style={styles.head}>
        <LakeHeading level={3} variant="h3">
          {title}
        </LakeHeading>
      </View>

      {fields.map((field, index) => (
        <Fragment key={field.name}>
          <Pressable
            style={styles.option}
            onPress={() => {
              onChange({ field: field.name, direction: "Asc" });
              onClose();
            }}
          >
            <Icon
              name="arrow-up-filled"
              size={12}
              color={colors.gray[600]}
              style={styles.arrowDown}
            />

            <Space width={12} />

            <LakeText variant="smallRegular" color={colors.gray[600]} style={styles.text}>
              {field.ascLabel}
            </LakeText>

            <Space width={16} />
            <LakeRadio value={value?.field === field.name && value.direction === "Asc"} />
          </Pressable>

          <Pressable
            style={styles.option}
            onPress={() => {
              onChange({ field: field.name, direction: "Desc" });
              onClose();
            }}
          >
            <Icon name="arrow-up-filled" size={12} color={colors.gray[600]} />
            <Space width={12} />

            <LakeText variant="smallRegular" color={colors.gray[600]} style={styles.text}>
              {field.descLabel}
            </LakeText>

            <Space width={16} />
            <LakeRadio value={value?.field === field.name && value.direction === "Desc"} />
          </Pressable>

          {index < fields.length - 1 && <Separator />}
        </Fragment>
      ))}

      <Space height={12} />
    </BottomPanel>
  );
};
