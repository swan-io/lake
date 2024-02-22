import { Meta } from "@storybook/react";
import {
  Document,
  SupportingDocument,
} from "@swan-io/shared-business/src/components/SupportingDocument";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  storyPart: {
    maxWidth: 600,
  },
});

export default {
  title: "Onboarding/SupportingDocument",
  component: SupportingDocument,
} as Meta<typeof SupportingDocument>;

export const Variations = () => {
  const [documents, setDocuments] = useState<Document<string>[]>([]);
  return (
    <StoryBlock title="SupportingDocument" description="Supporting document collection">
      <StoryPart title="Default" style={styles.storyPart}>
        <SupportingDocument
          getAwsUrl={() =>
            Promise.resolve({
              id: "",
              upload: {
                url: "https://localhost",
                fields: [{ key: "", value: "" }],
              },
            })
          }
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
