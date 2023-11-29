import { ReactNode, useId } from "react";
import { Pressable, StyleSheet, View, ViewProps } from "react-native";
import { Spacings, backgroundColor, colors, spacings } from "../constants/design";
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
  contentContainer: {
    display: "grid",
    gridTemplateRows: "0fr",
    transitionProperty: "grid-template-rows",
    transitionDuration: "300ms",
  },
  contentContainerDisplayed: {
    gridTemplateRows: "1fr",
  },
  contentInner: {
    overflow: "hidden",
  },
  content: {
    paddingVertical: spacings[12],
    paddingHorizontal: spacings[20],
  },
});

type Props = {
  chevronGap?: Spacings;
  children: ReactNode;
  contentContainerStyle?: ViewProps["style"];
  style?: ViewProps["style"];
  trigger: ReactNode;
};

export const Accordion = ({
  chevronGap = 20,
  children,
  contentContainerStyle,
  style,
  trigger,
}: Props) => {
  const id = useId();
  const [isOpen, { toggle }] = useDisclosure(false);

  return (
    <View>
      <Pressable
        aria-controls={id}
        aria-expanded={isOpen}
        onPress={toggle}
        style={[styles.trigger, style]}
      >
        <Icon
          name="chevron-right-filled"
          size={12}
          color={colors.gray[500]}
          style={[styles.arrow, isOpen && styles.arrowOpen]}
        />

        <Space width={chevronGap} />

        {typeof trigger === "string" ? (
          <LakeText variant="smallMedium" color={colors.gray[900]}>
            {trigger}
          </LakeText>
        ) : (
          trigger
        )}
      </Pressable>

      <View
        aria-labelledby={id}
        aria-hidden={!isOpen}
        role="region"
        style={[styles.contentContainer, isOpen && styles.contentContainerDisplayed]}
      >
        <View style={styles.contentInner}>
          <View style={[styles.content, contentContainerStyle]}>{children}</View>
        </View>
      </View>
    </View>
  );
};
