import { forwardRef, memo, ReactNode, ReactText } from "react";
import {
  Modal as BaseModal,
  Pressable,
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { backgroundColor, colors, radii } from "../constants/design";
import { useResponsive } from "../hooks/useResponsive";
import { Box } from "./Box";
import { Fill } from "./Fill";
import { Heading } from "./Heading";
import { Icon } from "./Icon";
import { Separator } from "./Separator";

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  blanket: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
    cursor: "default",
    flexGrow: 1,
    flexShrink: 1,
  },
  outbox: {
    margin: 16,
    pointerEvents: "box-none",
    flexGrow: 1,
    flexShrink: 1,
  },
  desktopOutbox: {
    margin: 32,
  },
  modal: {
    backgroundColor: backgroundColor.accented,
    borderRadius: radii[8],
    flexGrow: 1,
    flexShrink: 1,
    overflow: "hidden",
  },
  wrapped: {
    flexGrow: 0,
    margin: "auto",
  },
  desktopModal: {
    flexGrow: 0,
    margin: "auto",
    width: 800,
    maxWidth: "100%",
  },
  content: {
    minHeight: "100%",
    padding: 20,
  },
  contentDesktop: {
    padding: 40,
  },
  title: {
    flexGrow: 1,
    flexShrink: 1,
    paddingLeft: 20,
    paddingVertical: 20,
  },
  titleHeader: {
    paddingLeft: 40,
    paddingVertical: 32,
  },
  dismissButton: {
    padding: 20,
    right: 0,
    transitionProperty: "opacity",
    transitionDuration: "150ms",
  },
  dismissButtonPressed: {
    opacity: 0.5,
  },
  dismissButtonDesktop: {
    marginVertical: 12,
    marginRight: 20,
  },
});

type Props = {
  children?: ReactNode;
  onDismiss?: () => void;
  title?: ReactText;
  style?: StyleProp<ViewStyle>;
  visible?: boolean;
  wrapContent?: boolean;
};

export const Modal = memo(
  forwardRef<BaseModal, Props>(
    (
      { children, onDismiss, title = "", style, visible = false, wrapContent = false },
      forwardedRef,
    ) => {
      const { desktop, media } = useResponsive();

      return (
        <BaseModal
          ref={forwardedRef}
          animationType="fade"
          visible={visible}
          transparent={true}
          onDismiss={onDismiss}
          onRequestClose={onDismiss}
        >
          <Pressable role="none" tabIndex={-1} onPress={onDismiss} style={styles.blanket} />

          <View style={[styles.outbox, desktop && styles.desktopOutbox]}>
            <View
              style={[
                styles.modal,
                desktop && styles.desktopModal,
                wrapContent && styles.wrapped,
                style,
              ]}
            >
              <Box direction="row" role="banner" alignItems="center">
                {title !== "" ? (
                  <Heading
                    size={media({ mobile: 20, desktop: 24 })}
                    level={2}
                    style={[styles.title, desktop && styles.titleHeader]}
                  >
                    {title}
                  </Heading>
                ) : (
                  <Fill />
                )}

                {onDismiss && (
                  <Pressable
                    role="button"
                    onPress={onDismiss}
                    style={({ pressed }) => [
                      styles.dismissButton,
                      desktop && styles.dismissButtonDesktop,
                      pressed && styles.dismissButtonPressed,
                    ]}
                  >
                    <Icon name="dismiss-filled" size={18} color={colors.gray[500]} />
                  </Pressable>
                )}
              </Box>

              {title !== "" && <Separator />}

              <ScrollView contentContainerStyle={desktop ? styles.contentDesktop : styles.content}>
                {children}
              </ScrollView>
            </View>
          </View>
        </BaseModal>
      );
    },
  ),
);

Modal.displayName = "Modal";
