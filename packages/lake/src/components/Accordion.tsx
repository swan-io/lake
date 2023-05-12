import { ReactNode, useEffect, useRef } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { backgroundColor, colors, spacings } from "../constants/design";
import { useDisclosure } from "../hooks/useDisclosure";
import { useFirstMountState } from "../hooks/useFirstMountState";
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
  const isFirstMount = useFirstMountState();
  const content = useRef<View | null>(null);
  const [isOpen, { toggle }] = useDisclosure(false);

  useEffect(() => {
    if (!isFirstMount && content.current instanceof HTMLDivElement) {
      if (isOpen) {
        console.log("OPEN ANIMATION");
      } else {
        console.log("CLOSE ANIMATION");
      }
    }
  }, [isFirstMount, isOpen]);

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

      <View ref={content} style={[styles.content, isOpen && styles.contentDisplayed]}>
        {children}
      </View>
    </View>
  );
};
