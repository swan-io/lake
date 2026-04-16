import { createContext, ReactNode, useContext, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { colors, spacings } from "../constants/design";
import { VerticalPlacement } from "../hooks/useContextualLayer";
import { useDisclosure } from "../hooks/useDisclosure";
import { noop } from "../utils/function";
import { LakeButton } from "./LakeButton";
import { LakeText } from "./LakeText";
import { Popover } from "./Popover";
import { Pressable } from "./Pressable";
import { Space } from "./Space";

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
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.negative[500],
  },
});

const ContextMenuContext = createContext<{ close: () => void }>({ close: noop });

type ContextMenuProps = {
  children: ReactNode;
  ariaLabel: string;
  withPill?: boolean;
  verticalPlacement?: VerticalPlacement;
};

export const ContextMenu = ({
  children,
  ariaLabel,
  withPill = false,
  verticalPlacement,
}: ContextMenuProps) => {
  const [isOpen, { open, close }] = useDisclosure(false);
  const triggerRef = useRef<View>(null);

  return (
    <ContextMenuContext.Provider value={{ close }}>
      <LakeButton
        ref={triggerRef}
        mode="tertiary"
        size="small"
        icon="more-horizontal-filled"
        color="gray"
        onPress={open}
        ariaLabel={ariaLabel}
        pill={withPill}
      />

      <Popover
        referenceRef={triggerRef}
        visible={isOpen}
        onDismiss={close}
        verticalPlacement={verticalPlacement}
      >
        <View style={styles.container}>{children}</View>
      </Popover>
    </ContextMenuContext.Provider>
  );
};

type ContextMenuItemProps = {
  children: string;
  withPill?: boolean;
  onPress: () => void;
};

export const ContextMenuItem = ({ children, withPill = false, onPress }: ContextMenuItemProps) => {
  const { close } = useContext(ContextMenuContext);

  return (
    <Pressable
      style={styles.menuItem}
      onPress={() => {
        close();
        onPress();
      }}
    >
      <LakeText variant="regular" color={colors.gray[700]}>
        {children}
      </LakeText>

      {withPill ? (
        <>
          <Space width={8} />
          <View style={styles.dot} />
        </>
      ) : null}
    </Pressable>
  );
};
