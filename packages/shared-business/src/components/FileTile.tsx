import { Future } from "@swan-io/boxed";
import { Box } from "@swan-io/lake/src/components/Box";
import { Icon } from "@swan-io/lake/src/components/Icon";
import { LakeAlert } from "@swan-io/lake/src/components/LakeAlert";
import { LakeButton, LakeButtonGroup } from "@swan-io/lake/src/components/LakeButton";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { LakeTooltip } from "@swan-io/lake/src/components/LakeTooltip";
import { Pressable } from "@swan-io/lake/src/components/Pressable";
import { Space } from "@swan-io/lake/src/components/Space";
import { Tag } from "@swan-io/lake/src/components/Tag";
import { commonStyles } from "@swan-io/lake/src/constants/commonStyles";
import { backgroundColor, colors, gray75, spacings } from "@swan-io/lake/src/constants/design";
import { setClipboardText } from "@swan-io/lake/src/utils/clipboard";
import { getIconNameFromFilename } from "@swan-io/lake/src/utils/file";
import { isNotNullish, isNotNullishOrEmpty } from "@swan-io/lake/src/utils/nullish";
import { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { P, match } from "ts-pattern";
import { SwanFile } from "../utils/SwanFile";
import { t } from "../utils/i18n";
import { LakeModal } from "./LakeModal";

const styles = StyleSheet.create({
  base: {
    backgroundColor: backgroundColor.accented,
    borderRadius: 8,
    borderWidth: 1,
    overflow: "hidden",
  },
  content: {
    height: 56,
    paddingLeft: spacings[20],
    paddingRight: spacings[8],
  },
  progressBar: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: gray75,
  },
  progress: {
    height: 4,
    transitionProperty: "width",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-in-out",
    borderRadius: 2,
    backgroundColor: colors.current[500],
  },
  id: {
    alignSelf: "flex-start",
  },
});

type Props = {
  file: SwanFile;
  showId?: boolean;
  onRemove?: () => Future<unknown>;
};

export const FileTile = ({
  file: { id, statusInfo, name, url },
  showId = false,
  onRemove,
}: Props) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const onPressRemove = useCallback(() => {
    if (onRemove != undefined) {
      setIsDeleting(true);
      onRemove().tap(() => {
        setIsDeleting(false);
        setIsDeleteModalVisible(false);
      });
    }
  }, [onRemove]);

  const [visibleState, setVisibleState] = useState<"copy" | "copied">("copy");

  return (
    <Box
      style={[
        styles.base,
        {
          borderColor: match(statusInfo.status)
            .with("Uploaded", "Uploading", () => colors.gray[100])
            .with("Pending", () => colors.shakespear[100])
            .with("Validated", () => colors.positive[500])
            .with("Refused", () => colors.negative[100])
            .exhaustive(),
        },
      ]}
    >
      <Box alignItems="center" direction="row" style={styles.content}>
        {statusInfo.status === "Uploading" ? (
          <>
            <LakeText numberOfLines={1} color={colors.gray[700]}>
              {t("fileTile.uploading")}
            </LakeText>

            <Space width={20} />

            <View role="progressbar" style={styles.progressBar}>
              <View style={[styles.progress, { width: `${statusInfo.progress * 100}%` }]} />
            </View>
          </>
        ) : (
          <>
            {statusInfo.status === "Validated" ? (
              <Icon size={24} color={colors.positive[500]} name="checkmark-circle-regular" />
            ) : (
              <Tag
                icon={getIconNameFromFilename(name)}
                iconSize={20}
                color={match(statusInfo)
                  .with({ status: P.union("Uploaded", "Pending") }, () => "shakespear" as const)
                  .with({ status: "Refused" }, () => "negative" as const)
                  .exhaustive()}
              />
            )}

            <Space width={16} />

            <Box grow={1}>
              <LakeText numberOfLines={1} color={colors.gray[700]} style={commonStyles.fill}>
                {name}
              </LakeText>

              {showId ? (
                <View style={styles.id}>
                  <LakeTooltip
                    describedBy="copy"
                    onHide={() => setVisibleState("copy")}
                    togglableOnFocus={true}
                    content={
                      visibleState === "copy"
                        ? t("copyButton.copyTooltip")
                        : t("copyButton.copiedTooltip")
                    }
                  >
                    <Pressable
                      onPress={event => {
                        event.stopPropagation();
                        event.preventDefault();
                        setClipboardText(id);
                        setVisibleState("copied");
                      }}
                    >
                      <Box direction="row" alignItems="center">
                        <LakeText numberOfLines={1} variant="smallRegular">
                          {t("fileTile.id", { id })}
                        </LakeText>

                        <Space width={4} />
                        <Icon size={14} name="copy-regular" />
                      </Box>
                    </Pressable>
                  </LakeTooltip>
                </View>
              ) : null}
            </Box>

            <Space width={12} />

            {isNotNullishOrEmpty(url) && (
              <LakeButton
                mode="tertiary"
                size="small"
                icon="open-filled"
                onPress={() => {
                  window.open(url, "_blank");
                }}
                ariaLabel={t("common.open")}
              />
            )}

            {isNotNullish(onRemove) && (
              <LakeButton
                mode="tertiary"
                size="small"
                icon="delete-regular"
                color="negative"
                onPress={() => setIsDeleteModalVisible(true)}
                ariaLabel={t("common.remove")}
              />
            )}

            <LakeModal
              title={t("fileTile.deleteModal.title")}
              icon="subtract-circle-regular"
              visible={isDeleteModalVisible}
              onPressClose={() => setIsDeleteModalVisible(false)}
              color="negative"
            >
              <LakeButtonGroup paddingBottom={0}>
                <LakeButton
                  loading={isDeleting}
                  grow={true}
                  color="negative"
                  onPress={onPressRemove}
                >
                  {t("fileTile.deleteModal.delete")}
                </LakeButton>
              </LakeButtonGroup>
            </LakeModal>
          </>
        )}
      </Box>

      {match(statusInfo)
        .with({ status: "Pending" }, () => (
          <LakeAlert anchored={true} title={t("fileTile.status.Pending")} variant="info" />
        ))
        .with({ status: "Refused" }, ({ reason }) => (
          <LakeAlert anchored={true} title={t("fileTile.status.Refused")} variant="error">
            {reason}
          </LakeAlert>
        ))
        .otherwise(() => null)}
    </Box>
  );
};
