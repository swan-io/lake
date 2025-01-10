import { Option, Result } from "@swan-io/boxed";
import { Icon, IconName } from "@swan-io/lake/src/components/Icon";
import { LakeButton } from "@swan-io/lake/src/components/LakeButton";
import { LakeHeading } from "@swan-io/lake/src/components/LakeHeading";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { Space } from "@swan-io/lake/src/components/Space";
import { commonStyles } from "@swan-io/lake/src/constants/commonStyles";
import {
  backgroundColor,
  colors,
  radii,
  shadows,
  spacings,
} from "@swan-io/lake/src/constants/design";
import { useBoolean } from "@swan-io/lake/src/hooks/useBoolean";
import { getIconNameFromFilename } from "@swan-io/lake/src/utils/file";
import { isNotNullish } from "@swan-io/lake/src/utils/nullish";
import { useMemo } from "react";
import { Accept, useDropzone } from "react-dropzone";
import { StyleSheet, Text, View } from "react-native";
import { P, match } from "ts-pattern";
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
});

type DistFile = { url: string; name?: string };

type Props = {
  accept: string[];
  value?: DistFile | File;
  disabled?: boolean;
  layout?: "vertical" | "horizontal";
  description?: string;
  error?: string;
  maxSize?: number;
  icon?: IconName;
  onFiles?: (files: File[]) => void;
  onError?: () => void;
  onPressRemove?: () => void;
};

export const FileInput = ({
  icon = "document-regular",
  accept,
  value,
  disabled = false,
  onPressRemove,
  onFiles,
  onError,
  layout = "vertical",
  description,
  error,
  maxSize,
}: Props) => {
  const [isHovered, setIsHovered] = useBoolean(false);

  // We use the `accept` field as a heuristic to know if we can display a preview
  // to avoid the cost of an extra fetch to extract the actual mimeType.
  const isImageOnly = useMemo(() => accept.every(value => value.startsWith("image/")), [accept]);

  const file = useMemo(() => {
    return match(value)
      .with(P.nullish, () => Option.None())
      .with({ url: P.string }, ({ url, name }) =>
        Option.Some({
          url,
          name: name ?? Result.fromExecution(() => new URL(url).pathname).getOr("untitled"),
        }),
      )
      .with(P.instanceOf(File), file =>
        Option.Some({
          name: file.name,
          url: URL.createObjectURL(file),
        }),
      )
      .exhaustive();
  }, [value]);

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    accept: accept.reduce<Accept>((acc, item) => {
      acc[item] = [];
      return acc;
    }, {}),
    onDropAccepted: onFiles,
    onDropRejected: onError,
    disabled,
    maxSize,
  });

  return (
    <View style={commonStyles.fill}>
      <div {...getRootProps()} onMouseEnter={setIsHovered.on} onMouseLeave={setIsHovered.off}>
        <View
          aria-errormessage={
            error ?? fileRejections[0]?.errors.map(error => error.message).join(", ")
          }
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

          {match({ file, isImageOnly })
            .with({ file: Option.Some(P.select()), isImageOnly: true }, ({ url }) => (
              <>
                <View style={[styles.preview, { backgroundImage: `url("${url}")` }]} />

                {onPressRemove != null ? (
                  <LakeButton
                    mode="tertiary"
                    size="small"
                    icon="delete-regular"
                    color="negative"
                    onPress={onPressRemove}
                    style={styles.deleteButton}
                    ariaLabel={t("common.remove")}
                  />
                ) : null}
              </>
            ))
            .with({ file: Option.Some(P.select()), isImageOnly: false }, ({ name }) => (
              <>
                <Icon
                  name={getIconNameFromFilename(name)}
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
                    {t("fileInput.clickToModify")}
                  </LakeHeading>

                  <Space height={4} />

                  <LakeText
                    variant="smallRegular"
                    color={colors.gray[200]}
                    align={layout === "horizontal" ? "left" : "center"}
                  >
                    {name}
                  </LakeText>
                </View>

                {onPressRemove != null ? (
                  <LakeButton
                    mode="tertiary"
                    size="small"
                    icon="delete-regular"
                    color="negative"
                    style={styles.deleteButton}
                    onPress={onPressRemove}
                    ariaLabel={t("common.remove")}
                  />
                ) : null}
              </>
            ))
            .otherwise(() => (
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
                      ? t("fileInput.noFile")
                      : formatNestedMessage("fileInput.dropFile", {
                          browse: <Text style={styles.browse}>{t("fileInput.browse")}</Text>,
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
            ))}
        </View>
      </div>
    </View>
  );
};
