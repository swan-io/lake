import { LakeButton } from "@swan-io/lake/src/components/LakeButton";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { Popover } from "@swan-io/lake/src/components/Popover";
import { Pressable } from "@swan-io/lake/src/components/Pressable";
import { Separator } from "@swan-io/lake/src/components/Separator";
import { Space } from "@swan-io/lake/src/components/Space";
import { colors, spacings } from "@swan-io/lake/src/constants/design";
import { useDisclosure } from "@swan-io/lake/src/hooks/useDisclosure";
import { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { t } from "../utils/i18n";

const styles = StyleSheet.create({
  container: {
    minWidth: 120,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacings[24],
    paddingVertical: spacings[12],
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.negative[500],
  },
});

type MenuItemsProps = {
  onEdit: () => void;
  onRemove: () => void;
  hasMissingInfo?: boolean;
};

export const OwnershipActionMenuItems = ({
  onEdit,
  onRemove,
  hasMissingInfo = false,
}: MenuItemsProps) => (
  <View style={styles.container}>
    <Pressable style={styles.menuItem} onPress={onEdit}>
      <LakeText variant="regular" color={colors.gray[700]}>
        {t("common.edit")}
      </LakeText>

      {hasMissingInfo ? (
        <>
          <Space width={8} />
          <View style={styles.dot} />
        </>
      ) : null}
    </Pressable>

    <Separator />

    <Pressable style={styles.menuItem} onPress={onRemove}>
      <LakeText variant="regular" color={colors.gray[700]}>
        {t("common.remove")}
      </LakeText>
    </Pressable>
  </View>
);

type Props = {
  onEdit: () => void;
  onRemove: () => void;
  hasMissingInfo?: boolean;
  verticalPosition?: "above" | "below";
};

export const OwnershipActionMenu = ({
  onEdit,
  onRemove,
  hasMissingInfo = false,
  verticalPosition,
}: Props) => {
  const [isOpen, { open, close }] = useDisclosure(false);
  const triggerRef = useRef<View>(null);

  return (
    <>
      <LakeButton
        ref={triggerRef}
        mode="tertiary"
        size="small"
        icon="more-horizontal-filled"
        color="gray"
        onPress={open}
        ariaLabel={t("common.edit")}
        pill={hasMissingInfo}
      />

      <Popover
        referenceRef={triggerRef}
        visible={isOpen}
        onDismiss={close}
        verticalPosition={verticalPosition}
      >
        <OwnershipActionMenuItems
          hasMissingInfo={hasMissingInfo}
          onEdit={() => {
            close();
            onEdit();
          }}
          onRemove={() => {
            close();
            onRemove();
          }}
        />
      </Popover>
    </>
  );
};
