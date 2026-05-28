import { Array, Future, Option, Result } from "@swan-io/boxed";
import { Box } from "@swan-io/lake/src/components/Box";
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
import { badStatusToError, NetworkError, Request, Response, TimeoutError } from "@swan-io/request";
import { Fragment, Ref, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { match, P } from "ts-pattern";
import { CountryCCA3 } from "../constants/countries";
import { UploadFileInput, UploadOutputWithId } from "../hooks/useFilesUploader";
import { SwanFile } from "../utils/SwanFile";
import { isTranslationKey, locale, t } from "../utils/i18n";
import { FilesUploader, FilesUploaderRef } from "./FilesUploader";
import { LakeModal } from "./LakeModal";

const ACCEPTED_FORMATS = ["application/pdf", "image/png", "image/jpeg", "image/heic"];

export type Document<Purpose extends string> = { purpose: Purpose; file: SwanFile };

export type DocumentPurposeInfo = {
  label: string;
  description: string;
  purposeDetails?: string;
  required: boolean;
};

type SupportingDocumentPurposeInput<Purpose extends string> = {
  name: Purpose;
  label: string;
  description: string;
  purposeDetails?: string | null;
};

export const toDocumentPurposes = <Purpose extends string>(
  requiredPurposes: SupportingDocumentPurposeInput<Purpose>[],
): Record<Purpose, DocumentPurposeInfo> => {
  const entries = new Map<Purpose, DocumentPurposeInfo>();

  requiredPurposes.forEach(({ name, label, description, purposeDetails }) => {
    entries.set(name, {
      label,
      description,
      purposeDetails: purposeDetails ?? undefined,
      required: true,
    });
  });

  return Object.fromEntries(entries) as Record<Purpose, DocumentPurposeInfo>;
};

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
  generateUpload: (input: {
    fileName: string;
    purpose: Purpose;
  }) => Future<Result<UploadOutputWithId<UploadOutput>, unknown>>;
  documents: Document<Purpose>[];
  documentPurposes: Record<Purpose, DocumentPurposeInfo | undefined>;
  uploadFile?: (
    config: UploadFileInput<UploadOutput>,
  ) => Future<Result<Response<string>, NetworkError | TimeoutError>>;
  onChange?: (documents: Document<Purpose>[]) => void;
  onRemoveFile?: (file: SwanFile) => Future<Result<unknown, unknown>>;
  templateLanguage?: string;
  companyCountry?: CountryCCA3;
  showIds?: boolean;
  readOnly?: boolean;
  getPurposeMetadata?: (purose: Purpose) => PurposeMetadata | undefined;
  readonlyDocumentPurposes?: Purpose[];
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
        mode="secondary"
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
const getSupportLink = (
  language: "en" | "es" | "de" | "fr" | "it" | "nl" | "pt" | "fi",
  country?: CountryCCA3,
) =>
  match({ language, country })
    .with(
      P.union({ country: "FRA" }, { country: P.nullish, language: "fr" }),
      () => `https://support.swan.io/hc/${language}/articles/22502977563933`,
    )
    .with(
      P.union({ country: "ITA" }, { country: P.nullish, language: "it" }),
      () => `https://support.swan.io/hc/${language}/articles/22537604831005`,
    )
    .with(
      P.union({ country: "DEU" }, { country: P.nullish, language: "de" }),
      () => `https://support.swan.io/hc/${language}/articles/22535023588509`,
    )
    .with(
      P.union({ country: "ESP" }, { country: P.nullish, language: "es" }),
      () => `https://support.swan.io/hc/${language}/articles/22544703221021`,
    )
    .with(
      P.union({ country: "NLD" }, { country: P.nullish, language: "nl" }),
      () => `https://support.swan.io/hc/${language}/articles/22543228421277`,
    )
    .with(
      P.union({ country: "BEL" }),
      () => `https://support.swan.io/hc/${language}/articles/31233251462173`,
    )
    .otherwise(
      () =>
        "https://support.swan.io/hc/en-150/articles/22620756787869-Proof-of-company-registration",
    );

// Fallback helpers kept temporarily as a safety net
// Remove after ~1 month if backend reliably returns translated label/description for every purpose.
const getSupportingDocumentPurposeLabel = (purpose: string) => {
  const key = `supportingDocuments.purpose.${purpose}`;
  return isTranslationKey(key) ? t(key) : purpose;
};

const getSupportingDocumentPurposeDescriptionLabel = (purpose: string) => {
  const key = `supportingDocuments.purpose.${purpose}.description`;
  return isTranslationKey(key) ? t(key) : "";
};

export const SupportingDocumentCollection = <Purpose extends string>({
  ref,
  documents,
  generateUpload,
  uploadFile,
  documentPurposes,
  templateLanguage = locale.language,
  status,
  onChange,
  onRemoveFile,
  showIds = false,
  readOnly = false,
  getPurposeMetadata,
  companyCountry,
  readonlyDocumentPurposes = [],
}: Props<Purpose>) => {
  const [showPowerOfAttorneyModal, setShowPowerOfAttorneyModal] = useState(false);
  const [showSwornStatementModal, setShowSwornStatementModal] = useState(false);
  const [currentMetadata, setCurrentMetadata] = useState<PurposeMetadata | undefined>(undefined);

  const [addedDocuments, setAddedDocuments] = useState<Document<Purpose>[]>([]);

  const orderedDocumentPurposes = useMemo(() => {
    const allPurposes = new Set(Object.keys(documentPurposes) as Purpose[]);
    const allDocuments = [...addedDocuments, ...documents];

    // Compute, for each purpose, everything needed for rendering and sorting in one pass.
    // Priority drives the display order (lower comes first):
    //   0 = has documents and all are validated
    //   1 = purpose is required
    //   2 = otherwise
    const entries = [...allPurposes].map(purpose => {
      const purposeDocuments = allDocuments.filter(document => document.purpose === purpose);
      const areAllDocumentsValidated =
        purposeDocuments.length > 0 &&
        purposeDocuments.every(document => document.file.statusInfo.status === "Validated");
      const info = documentPurposes[purpose];
      const isRequired = info?.required === true;
      const priority = areAllDocumentsValidated ? 0 : isRequired ? 1 : 2;

      return {
        purpose,
        files: purposeDocuments.map(item => item.file),
        isRequired,
        areAllDocumentsValidated,
        priority,
        label: info?.label ?? getSupportingDocumentPurposeLabel(purpose),
        description: info?.description ?? getSupportingDocumentPurposeDescriptionLabel(purpose),
        purposeDetails: info?.purposeDetails,
      };
    });

    return entries.sort((a, b) => (b.priority > a.priority ? -1 : 1));
  }, [documentPurposes, documents, addedDocuments]);

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
      {showableDocumentPurposes.map(
        ({
          purpose,
          files,
          areAllDocumentsValidated,
          isRequired,
          label,
          description,
          purposeDetails,
        }) => {
          const metadata = getPurposeMetadata?.(purpose);

          return (
            <Fragment key={purpose}>
              <LakeLabel
                label={label}
                description={purposeDetails ?? description}
                render={() => (
                  <>
                    <Box direction="row">
                      <Box direction="row">
                        {isNotNullish(metadata) ? (
                          purpose === "CompanyRegistration" ? (
                            <>
                              <LakeButton
                                size="small"
                                mode="secondary"
                                icon="question-circle-regular"
                                onPress={() =>
                                  window.open(getSupportLink(locale.language, companyCountry))
                                }
                                ariaLabel={t("supportingDocuments.help.howToSendAGoodDocument")}
                              >
                                {t("supportingDocuments.help.howToSendAGoodDocument")}
                              </LakeButton>

                              <Space width={8} />
                            </>
                          ) : (
                            <>
                              <Help
                                type="button"
                                label={metadata.title}
                                onPress={() => setCurrentMetadata(metadata)}
                              />

                              <Space width={8} />
                            </>
                          )
                        ) : (
                          match(purpose as string)
                            .with("CompanyRegistration", () => (
                              <LakeButton
                                size="small"
                                mode="secondary"
                                icon="question-circle-regular"
                                onPress={() =>
                                  window.open(getSupportLink(locale.language, companyCountry))
                                }
                                ariaLabel={t("supportingDocuments.help.howToSendAGoodDocument")}
                              >
                                {t("supportingDocuments.help.howToSendAGoodDocument")}
                              </LakeButton>
                            ))
                            .otherwise(() => null)
                        )}
                      </Box>

                      {match(purpose as string)
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
                        .otherwise(() => null)}
                    </Box>
                    <Space height={16} />

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
                          const documents: Document<Purpose>[] = filesByRequiredPurpose.current
                            .entries()
                            .reduce<Document<Purpose>[]>((acc, [purpose, files]) => {
                              const purposeDocuments = files.map(file => ({ purpose, file }));
                              acc.push(...purposeDocuments);
                              return acc;
                            }, []);
                          onChange?.(documents);
                        }
                      }}
                      showIds={showIds}
                    />
                  </>
                )}
              />

              <Space height={24} />
            </Fragment>
          );
        },
      )}

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
                  .with("it", () => "it")
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
            onPress={() => {
              window.open(
                `/sworn-statement-template/${match(templateLanguage)
                  .with("nl", () => "nl")
                  .with("es", () => "es")
                  .with("it", () => "it")
                  .otherwise(() => "en")}.pdf`,
              );
            }}
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
