import { StyleSheet } from "react-native";
import { match } from "ts-pattern";
import { commonStyles } from "../constants/commonStyles";
import { backgroundColor, colors, shadows, spacings } from "../constants/design";
import { getIconNameFromFilename } from "../utils/file";
import { isNotNullish, isNotNullishOrEmpty } from "../utils/nullish";
import { Box } from "./Box";
import { LakeAlert } from "./LakeAlert";
import { LakeButton } from "./LakeButton";
import { LakeText } from "./LakeText";
import { Space } from "./Space";
import { Tag } from "./Tag";

const styles = StyleSheet.create({
  base: {
    backgroundColor: backgroundColor.accented,
    borderRadius: 8,
    boxShadow: shadows.tile,
    overflow: "hidden",
  },
  content: {
    height: 56,
    paddingLeft: spacings[20],
    paddingRight: spacings[8],
  },
});

type Props = {
  variant?: "none" | "pending" | "verified" | "refused";
  name: string;
  url?: string;
  onRemove?: () => void;
  title?: string;
  description?: string;
};

export const FileTile = ({ variant = "none", name, url, onRemove, title, description }: Props) => (
  <Box style={styles.base}>
    <Box alignItems="center" direction="row" style={styles.content}>
      <Tag
        icon={getIconNameFromFilename(name)}
        iconSize={20}
        color={match(variant)
          .with("none", "pending", () => "shakespear" as const)
          .with("verified", () => "positive" as const)
          .with("refused", () => "negative" as const)
          .exhaustive()}
      />

      <Space width={16} />

      <LakeText numberOfLines={1} color={colors.gray[700]} style={commonStyles.fill}>
        {name}
      </LakeText>

      <Space width={12} />

      {isNotNullishOrEmpty(url) && (
        <LakeButton
          mode="tertiary"
          size="small"
          icon="open-filled"
          onPress={() => {
            window.open(url, "_blank");
          }}
        />
      )}

      {isNotNullish(onRemove) && (
        <LakeButton
          mode="tertiary"
          size="small"
          icon="delete-regular"
          color="negative"
          onPress={onRemove}
        />
      )}
    </Box>

    {variant !== "none" && (
      <LakeAlert
        anchored={true}
        title={title}
        variant={match(variant)
          .with("pending", () => "info" as const)
          .with("verified", () => "success" as const)
          .with("refused", () => "error" as const)
          .exhaustive()}
      >
        {description}
      </LakeAlert>
    )}
  </Box>
);
