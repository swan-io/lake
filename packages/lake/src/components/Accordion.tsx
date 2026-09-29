import { ReactNode, useId } from "react";
import { Pressable, StyleSheet, View, ViewProps } from "react-native";
import { backgroundColor, colors, spacings } from "../constants/design";
import { useBoolean } from "../hooks/useBoolean";
import { isNotNullish } from "../utils/nullish";
import { Icon } from "./Icon";
import { LakeText } from "./LakeText";
import { Space } from "./Space";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  trigger: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: backgroundColor.accented,
    paddingVertical: spacings[12],
    paddingHorizontal: spacings[20],
  },
  triggerEnd: {
    justifyContent: "center",
    backgroundColor: backgroundColor.accented,
    paddingRight: spacings[20],
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
    transitionProperty: "grid-template-rows, visibility",
    transitionDuration: "300ms",
    visibility: "hidden",
  },
  contentContainerDisplayed: {
    gridTemplateRows: "1fr",
    visibility: "visible",
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
  children: ReactNode;
  trigger: ReactNode;
  triggerEnd?: ReactNode;
  style?: ViewProps["style"];
  contentContainerStyle?: ViewProps["style"];
};

export const Accordion = ({
  children,
  trigger,
  triggerEnd,
  style,
  contentContainerStyle,
}: Props) => {
  const triggerId = useId();
  const contentId = useId();
  const [isOpen, { toggle }] = useBoolean(false);

  return (
    <View>
      <View style={styles.header}>
        <Pressable
          id={triggerId}
          aria-controls={contentId}
          role="button"
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

          <Space width={20} />

          {typeof trigger === "string" ? (
            <LakeText variant="smallMedium" color={colors.gray[900]}>
              {trigger}
            </LakeText>
          ) : (
            trigger
          )}
        </Pressable>

        {isNotNullish(triggerEnd) && <View style={styles.triggerEnd}>{triggerEnd}</View>}
      </View>

      <View
        id={contentId}
        aria-labelledby={triggerId}
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
