import { Meta } from "@storybook/react";
import { Future, Result } from "@swan-io/boxed";
import {
  Document,
  SupportingDocumentCollection,
  UploadOutput,
} from "@swan-io/shared-business/src/components/SupportingDocumentCollection";
import { UploadOutputWithId } from "@swan-io/shared-business/src/hooks/useFilesUploader";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  storyPart: {
    maxWidth: 600,
  },
});

export default {
  title: "Onboarding/SupportingDocumentCollection",
  component: SupportingDocumentCollection,
} as Meta<typeof SupportingDocumentCollection>;

let idCount = -1;

const generateUpload = () =>
  Future.make<Result<UploadOutputWithId<UploadOutput>, unknown>>(resolve => {
    setTimeout(() => {
      resolve(
        Result.Ok({
          id: String(++idCount),
          upload: {
            url: window.location.href,
            fields: [],
          },
        }),
      );
    }, 500);
  });

export const WaitingForDocument = () => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return (
    <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default" style={styles.storyPart}>
        <SupportingDocumentCollection
          status="WaitingForDocument"
          generateUpload={generateUpload}
          documents={documents}
          onChange={setDocuments}
          requiredDocumentPurposes={[
            "ProofOfIdentity",
            "SwornStatement",
            "PowerOfAttorney",
            "UnknownDocumentType",
          ]}
        />
      </StoryPart>
    </StoryBlock>
  );
};

export const WaitingForDocumentWithApprovedAndRejected = () => {
  const [documents, setDocuments] = useState<Document<string>[]>([
    {
      purpose: "ProofOfIdentity",
      file: {
        id: "id",
        name: "IdCard.pdf",
        statusInfo: { status: "Validated" },
      },
    },
    {
      purpose: "SwornStatement",
      file: {
        id: "sworn",
        name: "SwornStatement.pdf",
        statusInfo: { status: "Uploaded" },
      },
    },
    {
      purpose: "PowerOfAttorney",
      file: {
        id: "power",
        name: "power.pdf",
        url: "https://swan.io",
        statusInfo: { status: "Refused", reason: "Invalid document" },
      },
    },
  ]);
  return (
    <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default" style={styles.storyPart}>
        <SupportingDocumentCollection
          status="WaitingForDocument"
          generateUpload={generateUpload}
          documents={documents}
          onChange={setDocuments}
          requiredDocumentPurposes={[
            "ProofOfIdentity",
            "SwornStatement",
            "PowerOfAttorney",
            "UnknownDocumentType",
          ]}
          onRemoveFile={() =>
            Future.make(resolve => {
              setTimeout(() => {
                resolve(Result.Ok(undefined));
              }, 1_000);
            })
          }
        />
      </StoryPart>
    </StoryBlock>
  );
};

export const Pending = () => {
  return (
    <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default" style={styles.storyPart}>
        <SupportingDocumentCollection
          status="PendingReview"
          generateUpload={generateUpload}
          documents={[
            {
              purpose: "ProofOfIdentity",
              file: {
                id: "id",
                name: "IdCard.pdf",
                url: "https://swan.io",
                statusInfo: { status: "Pending" },
              },
            },
          ]}
          requiredDocumentPurposes={["ProofOfIdentity"]}
        />
      </StoryPart>
    </StoryBlock>
  );
};

export const Approved = () => {
  return (
    <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default" style={styles.storyPart}>
        <SupportingDocumentCollection
          status="Approved"
          generateUpload={generateUpload}
          documents={[
            {
              purpose: "ProofOfIdentity",
              file: {
                id: "id",
                name: "IdCard.pdf",
                url: "https://swan.io",
                statusInfo: { status: "Validated" },
              },
            },
          ]}
          requiredDocumentPurposes={["ProofOfIdentity"]}
        />
      </StoryPart>
    </StoryBlock>
  );
};

export const ApprovedWithoutDownload = () => {
  return (
    <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default" style={styles.storyPart}>
        <SupportingDocumentCollection
          status="Approved"
          generateUpload={generateUpload}
          documents={[
            {
              purpose: "ProofOfIdentity",
              file: {
                id: "id",
                name: "IdCard.pdf",
                statusInfo: { status: "Validated" },
              },
            },
          ]}
          requiredDocumentPurposes={["ProofOfIdentity"]}
        />
      </StoryPart>
    </StoryBlock>
  );
};

export const Rejected = () => {
  return (
    <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default" style={styles.storyPart}>
        <SupportingDocumentCollection
          status="Rejected"
          generateUpload={generateUpload}
          documents={[
            {
              purpose: "ProofOfIdentity",
              file: {
                id: "id",
                name: "IdCard.pdf",
                url: "https://swan.io",
                statusInfo: { status: "Refused", reason: "Invalid document" },
              },
            },
          ]}
          requiredDocumentPurposes={["ProofOfIdentity"]}
        />
      </StoryPart>
    </StoryBlock>
  );
};
