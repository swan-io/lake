import { LakeButton } from "@swan-io/lake/src/components/LakeButton";
import { animations } from "@swan-io/lake/src/constants/design";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { t } from "../utils/i18n";

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: -100,
    left: 10,
    zIndex: 1000,
  },
  focused: {
    top: 10,
    ...animations.fadeAndSlideInFromTop.enter,
  },
});

export const CONTENT_ID = "content";

export const SkipToContent = () => {
  const [contentElement, setContentElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.querySelector(`#${CONTENT_ID}`);
    setContentElement(element as HTMLElement | null);
  }, []);

  const onPress = useCallback(() => {
    if (contentElement != null) {
      contentElement.focus();
    }
  }, [contentElement]);

  if (contentElement == null) {
    return null;
  }
  return (
    <LakeButton
      style={({ focused }) => [styles.button, focused && styles.focused]}
      onPress={onPress}
      color="current"
    >
      {t("common.skipToContent")}
    </LakeButton>
  );
};
