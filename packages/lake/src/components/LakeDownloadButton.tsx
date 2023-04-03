import { Text } from "react-native";
import { Icon } from "./Icon";

type Props = {
  url: string;
  filename: string;
  onError: () => void;
};

export const LakeDownloadButton = ({ url, filename }: Props) => {
  return (
    <Text
      href={url}
      hrefAttrs={{ download: filename as unknown as boolean, target: "blank" }}
      aria-label="download"
    >
      <Icon size={18} name="arrow-download-filled" />
    </Text>
  );
};
