import { Array, Future, Option, Result } from "@swan-io/boxed";
import { Form } from "@swan-io/lake/src/components/Form";
import { IconName } from "@swan-io/lake/src/components/Icon";
import { LakeButton, LakeButtonGroup } from "@swan-io/lake/src/components/LakeButton";
import { LakeCopyButton } from "@swan-io/lake/src/components/LakeCopyButton";
import { LakeLabel } from "@swan-io/lake/src/components/LakeLabel";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { LakeTooltip } from "@swan-io/lake/src/components/LakeTooltip";
import { ReadOnlyFieldList } from "@swan-io/lake/src/components/ReadOnlyFieldList";
import { Space } from "@swan-io/lake/src/components/Space";
import { colors } from "@swan-io/lake/src/constants/design";
import { isNotNullish } from "@swan-io/lake/src/utils/nullish";
import { NetworkError, Request, Response, TimeoutError, badStatusToError } from "@swan-io/request";
import { Fragment, Ref, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { match } from "ts-pattern";
import { UploadFileInput, UploadOutputWithId } from "../hooks/useFilesUploader";
import { SwanFile } from "../utils/SwanFile";
import { isTranslationKey, locale, t } from "../utils/i18n";
import { FilesUploader, FilesUploaderRef } from "./FilesUploader";
import { LakeModal } from "./LakeModal";

const ACCEPTED_FORMATS = ["application/pdf", "image/png", "image/jpeg", "image/heic"];

export type Document<Purpose extends string> = { purpose: Purpose; file: SwanFile };

type UploadInput<Purpose extends string> = { fileName: string; purpose: Purpose };
export type UploadOutput = { url: string; fields: { key: string; value: string }[] };

type SupportingDocumentCollectionStatus =
  | "WaitingForDocument"
  | "PendingReview"
  | "Approved"
  | "Canceled"
  | "Rejected";

type PurposeMetadata = {
  title: string;
  values: { type?: "text" | "copy"; title: string; value: string }[];
};

export type SupportingDocumentCollectionRef<Purpose extends string> = {
  areAllRequiredDocumentsFilled: () => boolean;
  addDocument: (document: Document<Purpose>) => void;
};

type Props<Purpose extends string> = {
  ref?: Ref<SupportingDocumentCollectionRef<Purpose>>;
  status: SupportingDocumentCollectionStatus;
  generateUpload: (
    input: UploadInput<Purpose>,
  ) => Future<Result<UploadOutputWithId<UploadOutput>, unknown>>;
  documents: Document<Purpose>[];
  requiredDocumentPurposes: Purpose[];
  uploadFile?: (
    config: UploadFileInput<UploadOutput>,
  ) => Future<Result<Response<string>, NetworkError | TimeoutError>>;
  onChange?: (documents: Document<Purpose>[]) => void;
  onRemoveFile?: (file: SwanFile) => Future<Result<unknown, unknown>>;
  templateLanguage?: string;
  showIds?: boolean;
  readOnly?: boolean;
  getPurposeMetadata?: (purose: Purpose) => PurposeMetadata | undefined;
  readonlyDocumentPurposes?: Purpose[];
  purposeLabelOverrides?: Partial<Record<Purpose, string>>;
  purposeDescriptionLabelOverrides?: Partial<Record<Purpose, string>>;
};

const styles = StyleSheet.create({
  button: { opacity: 1 },
  buttonWithDefaultCursor: { opacity: 1, cursor: "default" },
});

type HelpProps =
  | { type: "tooltip"; text: string; icon?: IconName; width?: number }
  | { type: "button"; label: string; icon?: IconName; onPress: () => void };

const Help = (props: HelpProps) => {
  return match(props)
    .with({ type: "tooltip" }, ({ text, width }) => (
      <LakeTooltip
        content={text}
        width={width}
        togglableOnFocus={true}
        placement="right"
        maxWidth={400}
      >
        <LakeButton
          mode="tertiary"
          size="small"
          color="gray"
          icon={props.icon ?? "question-circle-regular"}
          disabled={true}
          style={[styles.button, styles.buttonWithDefaultCursor]}
          ariaLabel={t("supportingDocuments.help.whatIsThis")}
        />
      </LakeTooltip>
    ))
    .with({ type: "button" }, ({ label, onPress }) => (
      <LakeButton
        mode="tertiary"
        size="small"
        color="gray"
        icon={props.icon ?? "question-circle-regular"}
        onPress={onPress}
        style={styles.button}
        ariaLabel={t("supportingDocuments.help.whatIsThis")}
      >
        {label}
      </LakeButton>
    ))
    .exhaustive();
};

export const getSupportingDocumentPurposeLabel = (purpose: string) => {
  const key = `supportingDocuments.purpose.${purpose}`;
  return isTranslationKey(key) ? t(key) : purpose;
};

export const getSupportingDocumentPurposeDescriptionLabel = (purpose: string) => {
  const key = `supportingDocuments.purpose.${purpose}.description`;
  return isTranslationKey(key) ? t(key) : "";
};

export const SupportingDocumentCollection = <Purpose extends string>({
  ref,
  documents,
  generateUpload,
  uploadFile,
  requiredDocumentPurposes,
  templateLanguage = locale.language,
  status,
  onRemoveFile,
  showIds = false,
  readOnly = false,
  getPurposeMetadata,
  readonlyDocumentPurposes = [],
  purposeLabelOverrides,
  purposeDescriptionLabelOverrides,
}: Props<Purpose>) => {
  const [showPowerOfAttorneyModal, setShowPowerOfAttorneyModal] = useState(false);
  const [showSwornStatementModal, setShowSwornStatementModal] = useState(false);
  const [currentMetadata, setCurrentMetadata] = useState<PurposeMetadata | undefined>(undefined);

  const [addedDocuments, setAddedDocuments] = useState<Document<Purpose>[]>([]);

  const orderedDocumentPurposes = useMemo(() => {
    // Get all purposes to display: the required ones and the ones that have at least a document
    const allPurposes = new Set(requiredDocumentPurposes);
    const allDocuments = [...addedDocuments, ...documents];
    allDocuments.forEach(document => allPurposes.add(document.purpose));

    const documentsByPurpose = new Map(
      [...allPurposes].map(purpose => {
        const purposeDocuments = allDocuments.filter(document => document.purpose === purpose);
        return [purpose, purposeDocuments];
      }),
    );

    // Map purposes to their priorities (lower priority comes first)
    // We precompute it to avoid running on each `sort` callback call
    const allRequiredPurposes = new Set(requiredDocumentPurposes);
    // Indices:
    // -> 0: documents aren't empty and all validated
    // -> 1: purpose is required
    // -> 2: purpose isn't required
    const priorityByPurpose = new Map(
      [...allPurposes].map(purpose => {
        const purposeDocuments = documentsByPurpose.get(purpose) ?? [];
        const areAllPurposeDocumentsValidated =
          purposeDocuments.length > 0 &&
          purposeDocuments.every(document => document.file.statusInfo.status === "Validated");

        const priority = areAllPurposeDocumentsValidated
          ? 0
          : allRequiredPurposes.has(purpose)
            ? 1
            : 2;

        return [purpose, priority];
      }),
    );

    return [...allPurposes]
      .sort((purposeA, purposeB) => {
        const purposeAPriority = priorityByPurpose.get(purposeA) ?? 2;
        const purposeBPriority = priorityByPurpose.get(purposeB) ?? 2;

        return purposeBPriority > purposeAPriority ? -1 : 1;
      })
      .map(purpose => {
        const documents = documentsByPurpose.get(purpose) ?? [];
        return {
          purpose,
          files: documents.map(item => item.file),
          isRequired: allRequiredPurposes.has(purpose),
          areAllDocumentsValidated: priorityByPurpose.get(purpose) === 0,
        };
      });
  }, [requiredDocumentPurposes, documents, addedDocuments]);

  const filesByRequiredPurpose = useRef(
    new Map(
      Array.filterMap(orderedDocumentPurposes, ({ isRequired, purpose, files }) =>
        isRequired ? Option.Some([purpose, files]) : Option.None(),
      ),
    ),
  );

  const filesUploaderRefByPurpose = useRef<Partial<Record<Purpose, FilesUploaderRef | null>>>({});

  useImperativeHandle(ref, () => ({
    areAllRequiredDocumentsFilled: () => {
      const filesByPurposes = [...filesByRequiredPurpose.current.values()];
      return filesByPurposes.every(files => files.length > 0);
    },
    addDocument: document => {
      setAddedDocuments(documents => [...documents, document]);
    },
  }));

  useEffect(() => {
    const lastAddedDocument = addedDocuments[addedDocuments.length - 1];
    if (lastAddedDocument != null) {
      const ref = filesUploaderRefByPurpose.current[lastAddedDocument?.purpose];
      if (ref != null) {
        ref.add(lastAddedDocument.file);
      }
    }
  }, [addedDocuments]);

  const showableDocumentPurposes = orderedDocumentPurposes.filter(({ files }) => {
    // Completely hide the purpose section if empty and no action is available
    if (readOnly && files.length === 0) {
      return false;
    }
    return true;
  });

  return (
    <Form>
      {showableDocumentPurposes.map(({ purpose, files, areAllDocumentsValidated, isRequired }) => {
        const metadata = getPurposeMetadata?.(purpose);

        const label =
          purposeDescriptionLabelOverrides?.[purpose] ??
          getSupportingDocumentPurposeDescriptionLabel(purpose);

        return (
          <Fragment key={purpose}>
            <LakeLabel
              label={purposeLabelOverrides?.[purpose] ?? getSupportingDocumentPurposeLabel(purpose)}
              description={label}
              help={
                isNotNullish(metadata) ? (
                  <Help
                    type="button"
                    label={metadata.title}
                    onPress={() => setCurrentMetadata(metadata)}
                  />
                ) : (
                  match(purpose as string)
                    .with("PowerOfAttorney", () => (
                      <Help
                        type="button"
                        icon="arrow-down-filled"
                        label={t("supportingDocuments.help.downloadTemplate")}
                        onPress={() => setShowPowerOfAttorneyModal(true)}
                      />
                    ))
                    .with("SwornStatement", () => (
                      <Help
                        type="button"
                        icon="arrow-down-filled"
                        label={t("supportingDocuments.help.downloadTemplate")}
                        onPress={() => setShowSwornStatementModal(true)}
                      />
                    ))
                    .otherwise(() => null)
                )
              }
              render={() => (
                <FilesUploader
                  ref={ref => {
                    filesUploaderRefByPurpose.current[purpose] = ref;
                  }}
                  // Only allow uploading is the Supporting Document Collection awaits for docs
                  // and that the specific purpose isn't already fully validated
                  canUpload={
                    !readonlyDocumentPurposes.includes(purpose) &&
                    !readOnly &&
                    status === "WaitingForDocument" &&
                    !areAllDocumentsValidated
                  }
                  accept={ACCEPTED_FORMATS}
                  maxSize={20_000_000}
                  icon="document-regular"
                  initialFiles={files}
                  generateUpload={generateUpload}
                  getUploadConfig={file => ({ fileName: file.name, purpose })}
                  uploadFile={
                    isNotNullish(uploadFile)
                      ? uploadFile
                      : ({ upload, file, onProgress }) => {
                          const body = new FormData();
                          upload.fields.forEach(({ key, value }) => body.append(key, value));
                          body.append("file", file);
                          setTimeout(() => onProgress(0.8), 100);
                          return Request.make({
                            url: upload.url,
                            method: "POST",
                            body,
                            type: "text",
                          }).mapOkToResult(badStatusToError);
                        }
                  }
                  formatAndSizeDescription={t("supportingDocuments.documentTypes", {
                    maxSizeMB: 20_000_000 / 1_000_000,
                  })}
                  onRemoveFile={readOnly ? undefined : onRemoveFile}
                  onChange={files => {
                    if (isRequired) {
                      filesByRequiredPurpose.current.set(purpose, files);
                    }
                  }}
                  showIds={showIds}
                />
              )}
            />

            <Space height={24} />
          </Fragment>
        );
      })}

      {showableDocumentPurposes.length === 0 ? (
        <>
          <Space height={24} />
          <LakeText align="center">{t("supportingDocuments.noDocuments")}</LakeText>
          <Space height={24} />
        </>
      ) : null}

      <LakeModal
        visible={showPowerOfAttorneyModal}
        title={t("supportingDocuments.powerOfAttorneyModal.title")}
        icon="document-regular"
        onPressClose={() => setShowPowerOfAttorneyModal(false)}
      >
        <LakeText>{t("supportingDocuments.powerOfAttorneyModal.description")}</LakeText>
        <Space height={16} />

        <LakeButtonGroup paddingBottom={0}>
          <LakeButton
            grow={true}
            color="current"
            onPress={() =>
              window.open(
                `/power-of-attorney-template/${match(templateLanguage)
                  .with("fr", () => "fr")
                  .with("de", () => "de")
                  .with("es", () => "es")
                  .otherwise(() => "en")}.pdf`,
              )
            }
          >
            {t("supportingDocuments.downloadTemplate")}
          </LakeButton>
        </LakeButtonGroup>
      </LakeModal>

      <LakeModal
        visible={showSwornStatementModal}
        title={t("supportingDocuments.purpose.SwornStatement")}
        icon="document-regular"
        onPressClose={() => setShowSwornStatementModal(false)}
      >
        <LakeText>{t("supportingDocuments.purpose.SwornStatement.description")}</LakeText>
        <Space height={16} />

        <LakeButtonGroup paddingBottom={0}>
          <LakeButton
            grow={true}
            color="current"
            onPress={() => window.open("/sworn-statement-template/es.pdf")}
          >
            {t("supportingDocuments.downloadTemplate")}
          </LakeButton>
        </LakeButtonGroup>
      </LakeModal>

      <LakeModal
        visible={isNotNullish(currentMetadata)}
        title={t("supportingDocuments.informations")}
        icon="document-regular"
        onPressClose={() => setCurrentMetadata(undefined)}
      >
        <ReadOnlyFieldList>
          {currentMetadata?.values.map(({ title, value, type }, index) => (
            <LakeLabel
              key={`metadata-${index}`}
              type="viewSmall"
              label={title}
              actions={
                type === "copy" && (
                  <LakeCopyButton
                    valueToCopy={value}
                    copiedText={t("copyButton.copiedTooltip")}
                    copyText={t("copyButton.copyTooltip")}
                  />
                )
              }
              render={() => (
                <LakeText variant="regular" color={colors.gray[900]}>
                  {value}
                </LakeText>
              )}
            />
          ))}
        </ReadOnlyFieldList>
      </LakeModal>
    </Form>
  );
};
