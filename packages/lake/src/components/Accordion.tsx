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
  contentContainer: {
    display: "none",
    overflow: "hidden",
    transitionDuration: "300ms",
  },
  contentContainerDisplayed: {
    display: "flex",
  },
  content: {
    paddingVertical: spacings[12],
    paddingHorizontal: spacings[20],
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
    const contentElement = content.current;

    if (!isFirstMount && contentElement instanceof HTMLDivElement) {
      const handleTransitionEnd = () => {
        contentElement.removeAttribute("style"); // remove inline styles after transition
        contentElement.removeEventListener("transitionend", handleTransitionEnd);
      };

      contentElement.addEventListener("transitionend", handleTransitionEnd);

      if (isOpen) {
        const contentHeight = contentElement.clientHeight;
        contentElement.style.height = "0px";

        requestAnimationFrame(() => {
          // wait for rerender to set height and enable css transition
          contentElement.style.height = `${contentHeight}px`;
        });
      } else {
        // we must set display to flex before we can get the height
        contentElement.style.display = "flex";

        requestAnimationFrame(() => {
          // wait for rerender to get height
          const contentHeight = contentElement.clientHeight;
          contentElement.style.height = `${contentHeight}px`;

          requestAnimationFrame(() => {
            // wait rerender to set height to 0 and enable css transition
            contentElement.style.height = "0px";
          });
        });

        return () => {
          contentElement.removeEventListener("transitionend", handleTransitionEnd);
        };
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

      <View
        ref={content}
        style={[styles.contentContainer, isOpen && styles.contentContainerDisplayed]}
      >
        <View style={styles.content}>{children}</View>
      </View>
    </View>
  );
};
