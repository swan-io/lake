import { useState } from "react";
import { Clipboard } from "react-native";
import { Icon } from "./Icon";
import { LakeTooltip } from "./LakeTooltip";
import { Pressable } from "./Pressable";

type Props = {
  valueToCopy: string;
  copyText: string;
  copiedText: string;
  size?: number;
};

export const copyButtondefaultSize = 21;

export const LakeCopyButton = ({
  valueToCopy,
  size = copyButtondefaultSize,
  copyText,
  copiedText,
}: Props) => {
  const [visibleState, setVisibleState] = useState<"copy" | "copied">("copy");

  return (
    <LakeTooltip
      describedBy="copy"
      placement="top"
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
        <Icon size={size} name="copy-regular" />
      </Pressable>
    </LakeTooltip>
  );
};
