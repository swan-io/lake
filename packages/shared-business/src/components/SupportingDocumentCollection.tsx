import { Array, Future, Option, Result } from "@swan-io/boxed";
import { Form } from "@swan-io/lake/src/components/Form";
import { LakeButton, LakeButtonGroup } from "@swan-io/lake/src/components/LakeButton";
import { LakeLabel } from "@swan-io/lake/src/components/LakeLabel";
import { LakeText } from "@swan-io/lake/src/components/LakeText";
import { LakeTooltip } from "@swan-io/lake/src/components/LakeTooltip";
import { Space } from "@swan-io/lake/src/components/Space";
import { isNotNullishOrEmpty } from "@swan-io/lake/src/utils/nullish";
import { Request, badStatusToError } from "@swan-io/request";
import {
  ForwardedRef,
  Fragment,
  Ref,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { StyleSheet } from "react-native";
import { match } from "ts-pattern";
import { UploadOutputWithId } from "../hooks/useFilesUploader";
import { SwanFile } from "../utils/SwanFile";
import { isTranslationKey, locale, t } from "../utils/i18n";
import { FilesUploader, FilesUploaderRef } from "./FilesUploader";
import { LakeModal } from "./LakeModal";

const ACCEPTED_FORMATS = ["application/pdf", "image/png", "image/jpeg"];

export type Document<Purpose extends string> = {
  purpose: Purpose;
  file: SwanFile;
};

type UploadInput<Purpose extends string> = { fileName: string; purpose: Purpose };
export type UploadOutput = { url: string; fields: { key: string; value: string }[] };

type SupportingDocumentCollectionStatus =
  | "WaitingForDocument"
  | "PendingReview"
  | "Approved"
  | "Canceled"
  | "Rejected";

type Props<Purpose extends string> = {
  status: SupportingDocumentCollectionStatus;
  generateUpload: (
    input: UploadInput<Purpose>,
  ) => Future<Result<UploadOutputWithId<UploadOutput>, unknown>>;
  documents: Document<Purpose>[];
  requiredDocumentPurposes: Purpose[];
  onChange?: (documents: Document<Purpose>[]) => void;
  onRemoveFile?: (file: SwanFile) => Future<Result<unknown, unknown>>;
  templateLanguage?: string;
  showIds?: boolean;
};

const styles = StyleSheet.create({
  button: {
    opacity: 1,
  },
  buttonWithDefaultCursor: {
    opacity: 1,
    cursor: "default",
  },
});

type HelpProps =
  | {
      type: "tooltip";
      text: string;
      width?: number;
    }
  | {
      type: "button";
      label: string;
      onPress: () => void;
    };

const Help = (props: HelpProps) => {
  return match(props)
    .with({ type: "tooltip" }, ({ text, width }) => (
      <LakeTooltip content={text} width={width} togglableOnFocus={true} placement="right">
        <LakeButton
          mode="tertiary"
          size="small"
          color="gray"
          icon="question-circle-regular"
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
        icon="question-circle-regular"
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
  if (isTranslationKey(key)) {
    return t(key);
  } else {
    return purpose;
  }
};

export const getSupportingDocumentPurposeDescriptionLabel = (purpose: string) => {
  const key = `supportingDocuments.purpose.${purpose}.description`;
  if (isTranslationKey(key)) {
    return t(key);
  } else {
    return "";
  }
};

export type SupportingDocumentCollectionRef<Purpose extends string> = {
  areAllRequiredDocumentsFilled: () => boolean;
  addDocument: (document: Document<Purpose>) => void;
};

export const SupportingDocumentCollectionWithRef = <Purpose extends string>(
  {
    documents,
    generateUpload,
    requiredDocumentPurposes,
    templateLanguage = locale.language,
    status,
    onRemoveFile,
    showIds = false,
  }: Props<Purpose>,
  ref: Ref<SupportingDocumentCollectionRef<Purpose>>,
) => {
  const [showPowerOfAttorneyModal, setShowPowerOfAttorneyModal] = useState(false);
  const [showSwornStatementModal, setShowSwornStatementModal] = useState(false);

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

  return (
    <Form>
      {orderedDocumentPurposes.map(({ purpose, files, areAllDocumentsValidated, isRequired }) => {
        return (
          <Fragment key={purpose}>
            <LakeLabel
              label={getSupportingDocumentPurposeLabel(purpose)}
              help={match(purpose as string)
                .with("PowerOfAttorney", () => (
                  <Help
                    type="button"
                    label={t("supportingDocuments.help.whatIsThis")}
                    onPress={() => setShowPowerOfAttorneyModal(true)}
                  />
                ))
                .with("SwornStatement", () => (
                  <Help
                    type="button"
                    label={t("supportingDocuments.help.whatIsThis")}
                    onPress={() => setShowSwornStatementModal(true)}
                  />
                ))
                .otherwise(() => {
                  const label = getSupportingDocumentPurposeDescriptionLabel(purpose);
                  return isNotNullishOrEmpty(label) ? <Help type="tooltip" text={label} /> : null;
                })}
              render={() => (
                <FilesUploader
                  ref={ref => (filesUploaderRefByPurpose.current[purpose] = ref)}
                  // Only allow uploading is the Supporting Document Collection awaits for docs
                  // and that the specific purpose isn't already fully validated
                  canUpload={status === "WaitingForDocument" && !areAllDocumentsValidated}
                  accept={ACCEPTED_FORMATS}
                  maxSize={20_000_000}
                  icon="document-regular"
                  initialFiles={files}
                  generateUpload={generateUpload}
                  getUploadConfig={file => ({ fileName: file.name, purpose })}
                  uploadFile={({ upload, file, onLoadStart, onProgress }) => {
                    const body = new FormData();
                    upload.fields.forEach(({ key, value }) => body.append(key, value));
                    body.append("file", file);
                    return Request.make({
                      url: upload.url,
                      method: "POST",
                      onLoadStart,
                      onProgress,
                      body,
                    }).mapOkToResult(badStatusToError);
                  }}
                  formatAndSizeDescription={t("supportingDocuments.documentTypes", {
                    maxSizeMB: 20_000_000 / 1_000_000,
                  })}
                  onRemoveFile={onRemoveFile}
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

      {requiredDocumentPurposes.length === 0 ? (
        <>
          <Space height={24} />
          <LakeText>{t("supportingDocuments.noRequiredDocuments")}</LakeText>
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
    </Form>
  );
};

export const SupportingDocumentCollection = forwardRef(SupportingDocumentCollectionWithRef) as <
  I extends string,
>(
  props: Props<I> & { ref?: ForwardedRef<SupportingDocumentCollectionRef<I>> },
) => ReturnType<typeof SupportingDocumentCollectionWithRef>;
