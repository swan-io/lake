import { useState } from "react";
import { Clipboard } from "react-native";
import { Icon } from "./Icon";
import { LakeTooltip } from "./LakeTooltip";
import { Pressable } from "./Pressable";

type Props = {
  color?: string;
  copiedText: string;
  copyText: string;
  size?: number;
  valueToCopy: string;
};

export const copyButtondefaultSize = 21;

export const LakeCopyButton = ({
  color,
  copiedText,
  copyText,
  size = copyButtondefaultSize,
  valueToCopy,
}: Props) => {
  const [visibleState, setVisibleState] = useState<"copy" | "copied">("copy");

  return (
    <LakeTooltip
      describedBy="copy"
      onHide={() => setVisibleState("copy")}
      togglableOnFocus={true}
      content={visibleState === "copy" ? copyText : copiedText}
    >
      <Pressable
        onPress={event => {
          event.stopPropagation();
          event.preventDefault();
          Clipboard.setString(valueToCopy);
          setVisibleState("copied");
        }}
      >
        <Icon color={color} size={size} name="copy-regular" />
      </Pressable>
    </LakeTooltip>
  );
};
