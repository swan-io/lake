import { AsyncData } from "@swan-io/boxed";
import { Box } from "@swan-io/lake/src/components/Box";
import { Icon, IconName } from "@swan-io/lake/src/components/Icon";
import { LakeHeading } from "@swan-io/lake/src/components/LakeHeading";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { LoadingView } from "@swan-io/lake/src/components/LoadingView";
import { Space } from "@swan-io/lake/src/components/Space";
import { commonStyles } from "@swan-io/lake/src/constants/commonStyles";
import {
  backgroundColor,
  colors,
  gray75,
  radii,
  shadows,
  spacings,
} from "@swan-io/lake/src/constants/design";
import { useBoolean } from "@swan-io/lake/src/hooks/useBoolean";
import { getIconNameFromFilename } from "@swan-io/lake/src/utils/file";
import { isNotNullish } from "@swan-io/lake/src/utils/nullish";
import { FileTile } from "@swan-io/shared-business/src/components/FileTile";
import { Fragment, useMemo } from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { match } from "ts-pattern";
import { formatNestedMessage, t } from "../utils/i18n";

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor.accented,
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderStyle: "dashed",
    borderRadius: radii[8],
    padding: spacings[32],
    cursor: "pointer",
    alignItems: "center",
  },
  disabled: {
    cursor: "default",
    backgroundColor: backgroundColor.default,
  },
  horizontalContainer: {
    flexDirection: "row",
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
  },
  hoveredContainer: {
    boxShadow: shadows.tile,
  },
  activeContainer: {
    borderColor: colors.current[500],
    boxShadow: shadows.tile,
  },
  browse: {
    color: colors.current[500],
  },
  browseBlock: {
    flex: 1,
  },
  decorativeIconLeft: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    opacity: 0,
    transform: "translateX(-50%) scale(0.6)",
    transitionProperty: "opacity, transform",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-in-out",
  },
  decorativeIconLeftHovered: {
    opacity: 0.3,
    transform: "translateX(-50%) translateX(-24px) scale(0.6) rotate(-5deg)",
  },
  decorativeIconRight: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    opacity: 0,
    transform: "translateX(-50%) scale(0.6)",
    transitionProperty: "opacity, transform",
    transitionDuration: "300ms",
    transitionTimingFunction: "ease-in-out",
  },
  decorativeIconRightHovered: {
    opacity: 0.3,
    transform: "translateX(-50%) translateX(24px) scale(0.6) rotate(5deg)",
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
  item: {
    backgroundColor: backgroundColor.accented,
    borderRadius: 8,
    boxShadow: shadows.tile,
    height: 56,
    paddingHorizontal: spacings[20],
  },
  errorContainer: {
    borderColor: colors.negative[500],
  },
  preview: {
    aspectRatio: 16 / 5,
    width: "50%",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
  deleteButton: {
    position: "absolute",
    right: spacings[20],
    top: spacings[20],
  },
  deleteButtonHovered: {
    opacity: 0.8,
  },
});

export type UploadFileStatus = (
  | { status: "uploading"; progress: number }
  | { status: "finished" }
  | { status: "failed"; error: string }
) & {
  fileUrl?: string;
  id: string;
  name?: string;
};

type Props = {
  icon: IconName;
  documents?: UploadFileStatus[];
  onRemoveDocument?: (fileId: string) => void;
  onRemoveFile?: () => void;
  accept: string[];
  value?: AsyncData<File>;
  disabled?: boolean;
  onDropAccepted?: DropzoneOptions["onDropAccepted"];
  onDropRejected?: DropzoneOptions["onDropRejected"];
  layout?: "vertical" | "horizontal";
  description?: string;
  error?: string;
  maxSize?: number;
};

const UploadAreaPreview = ({ file }: { file: File }) => {
  const url = useMemo(() => URL.createObjectURL(file), [file]);

  return <View style={[styles.preview, { backgroundImage: `url("${url}")` }]} />;
};

export const UploadArea = ({
  icon,
  accept,
  value,
  documents = [],
  disabled = false,
  onRemoveFile,
  onRemoveDocument,
  onDropAccepted,
  onDropRejected,
  layout = "vertical",
  description,
  error,
  maxSize,
}: Props) => {
  const [isHovered, setIsHovered] = useBoolean(false);

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    accept: accept.reduce((acc, item) => ({ ...acc, [item]: [] }), {}),
    onDropAccepted,
    onDropRejected,
    disabled,
    maxSize,
  });

  return (
    <View style={commonStyles.fill}>
      <div {...getRootProps()} onMouseEnter={setIsHovered.on} onMouseLeave={setIsHovered.off}>
        <View
          aria-errormessage={error ?? fileRejections[0]?.errors.join(", ")}
          style={[
            styles.container,
            disabled && styles.disabled,
            layout === "horizontal" && styles.horizontalContainer,
            !disabled && isHovered && styles.hoveredContainer,
            isDragActive && styles.activeContainer,
            (error != null || fileRejections.length > 0) && styles.errorContainer,
          ]}
        >
          <input {...getInputProps()} />

          {isNotNullish(value) ? (
            value.match({
              NotAsked: () => null,
              Loading: () => <LoadingView />,
              Done: value =>
                value.type.startsWith("image/") ? (
                  <>
                    <UploadAreaPreview file={value} />

                    {onRemoveFile != null ? (
                      <Pressable
                        role="button"
                        onPress={() => onRemoveFile()}
                        style={({ hovered }) => [
                          styles.deleteButton,
                          hovered && styles.deleteButtonHovered,
                        ]}
                      >
                        <Icon name={"delete-regular"} size={20} color={colors.negative[500]} />
                      </Pressable>
                    ) : null}
                  </>
                ) : (
                  <>
                    <Icon
                      name={getIconNameFromFilename(value.name)}
                      size={48}
                      color={disabled ? colors.gray[200] : colors.current[500]}
                    />

                    <Space
                      width={layout === "horizontal" ? 48 : 16}
                      height={layout === "horizontal" ? 48 : 16}
                    />

                    <View style={styles.browseBlock}>
                      <LakeHeading
                        level={5}
                        variant="h5"
                        align={layout === "horizontal" ? "left" : "center"}
                      >
                        {t("uploadArea.droppedFile")}
                      </LakeHeading>

                      <Space height={4} />

                      <LakeText variant="smallRegular" color={colors.gray[200]}>
                        {value.name}
                      </LakeText>
                    </View>

                    {onRemoveFile != null ? (
                      <Pressable
                        role="button"
                        onPress={() => onRemoveFile()}
                        style={({ hovered }) => [
                          styles.deleteButton,
                          hovered && styles.deleteButtonHovered,
                        ]}
                      >
                        <Icon name={"delete-regular"} size={20} color={colors.negative[500]} />
                      </Pressable>
                    ) : null}
                  </>
                ),
            })
          ) : (
            <>
              <View style={styles.icon}>
                <Icon
                  name={icon}
                  size={48}
                  color={disabled ? colors.gray[200] : colors.current[500]}
                  style={[
                    styles.decorativeIconLeft,
                    (isDragActive || isHovered) && styles.decorativeIconLeftHovered,
                  ]}
                />

                <Icon
                  name={icon}
                  size={48}
                  color={disabled ? colors.gray[200] : colors.current[500]}
                  style={[
                    styles.decorativeIconRight,
                    (isDragActive || isHovered) && styles.decorativeIconRightHovered,
                  ]}
                />

                <Icon
                  name={icon}
                  size={48}
                  color={disabled ? colors.gray[200] : colors.current[500]}
                />
              </View>

              <Space
                width={layout === "horizontal" ? 48 : 16}
                height={layout === "horizontal" ? 48 : 16}
              />

              <View style={styles.browseBlock}>
                <LakeHeading
                  level={5}
                  variant="h5"
                  align={layout === "horizontal" ? "left" : "center"}
                  color={disabled ? colors.gray[200] : undefined}
                >
                  {disabled
                    ? t("uploadArea.noValue")
                    : formatNestedMessage("uploadArea.dropFile", {
                        browse: <Text style={styles.browse}>{t("uploadArea.browse")}</Text>,
                      })}
                </LakeHeading>

                {isNotNullish(error) ? (
                  <>
                    <Space height={4} />

                    <LakeText
                      color={colors.negative[400]}
                      align={layout === "horizontal" ? "left" : "center"}
                    >
                      {error}
                    </LakeText>
                  </>
                ) : (
                  !disabled &&
                  isNotNullish(description) && (
                    <>
                      <Space height={4} />

                      <LakeText align={layout === "horizontal" ? "left" : "center"}>
                        {description}
                      </LakeText>
                    </>
                  )
                )}
              </View>
            </>
          )}
        </View>
      </div>

      {documents.map(({ ...document }, index) => {
        return (
          <Fragment key={document.id}>
            <Space height={index === 0 ? 8 : 4} />

            {match(document)
              .with({ status: "finished" }, () => (
                <FileTile
                  name={document.name ?? t("uploadArea.unknownFileName")}
                  url={document.fileUrl}
                  onRemove={onRemoveDocument ? () => onRemoveDocument(document.id) : undefined}
                />
              ))
              .with({ status: "failed" }, ({ error }) => (
                <FileTile
                  name={document.name ?? t("uploadArea.unknownFileName")}
                  url={document.fileUrl}
                  onRemove={() => (onRemoveDocument ? onRemoveDocument(document.id) : undefined)}
                  variant="refused"
                  title={error}
                />
              ))
              .with({ status: "uploading" }, ({ progress }) => (
                <Box direction="row" alignItems="center" style={styles.item}>
                  <LakeText numberOfLines={1} color={colors.gray[700]}>
                    {t("uploadArea.uploading")}
                  </LakeText>

                  <Space width={20} />

                  <View role="progressbar" style={styles.progressBar}>
                    <View style={[styles.progress, { width: `${progress}%` }]} />
                  </View>
                </Box>
              ))
              .exhaustive()}
          </Fragment>
        );
      })}
    </View>
  );
};
