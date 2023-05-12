import { ReactNode } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { backgroundColor, colors, spacings } from "../constants/design";
import { useDisclosure } from "../hooks/useDisclosure";
import { Icon } from "./Icon";
import { LakeText } from "./LakeText";
import { Space } from "./Space";

const styles = StyleSheet.create({
  trigger: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: backgroundColor.accented,
    paddingVertical: spacings[12],
    paddingHorizontal: spacings[20],
  },
  arrow: {
    transitionProperty: "transform",
    transitionDuration: "200ms",
  },
  arrowOpen: {
    transform: "rotate(90deg)",
  },
  content: {
    display: "none",
    paddingVertical: spacings[12],
    paddingHorizontal: spacings[20],
  },
  contentDisplayed: {
    display: "flex",
  },
});

type Props = {
  trigger: ReactNode;
  children: ReactNode;
};

export const Accordion = ({ trigger, children }: Props) => {
  const [isOpen, { toggle }] = useDisclosure(false);

  return (
    <View>
      <Pressable style={styles.trigger} onPress={toggle}>
        <Icon
          name="chevron-right-filled"
          size={12}
          color={colors.gray[500]}
          style={[styles.arrow, isOpen && styles.arrowOpen]}
        />

        <Space width={20} />

        {typeof trigger === "string" ? (
          <LakeText variant="smallMedium" color={colors.gray[900]}>
            {trigger}
          </LakeText>
        ) : (
          trigger
        )}
      </Pressable>

      <View style={[styles.content, isOpen && styles.contentDisplayed]}>{children}</View>
    </View>
  );
};
