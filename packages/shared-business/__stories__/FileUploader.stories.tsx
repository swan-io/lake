import { Meta } from "@storybook/react";
import { Future, Result } from "@swan-io/boxed";
import { StyleSheet } from "react-native";
import { FilesUploader } from "../src/components/FilesUploader";
import { SwanFile } from "../src/utils/SwanFile";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  storyPart: {
    maxWidth: 600,
  },
});

const ACCEPTED_FORMATS = ["application/pdf", "image/png", "image/jpeg", "image/svg+xml"];

export default {
  title: "Forms/FilesUploader",
  component: FilesUploader,
} as Meta<typeof FilesUploader>;

const documents: SwanFile[] = [
  {
    id: crypto.randomUUID(),
    name: "first-document.pdf",
    url: "https://swan.io",
    statusInfo: { status: "Validated" },
  },
  {
    id: crypto.randomUUID(),
    name: "second-document.png",
    statusInfo: { status: "Pending" },
  },
  {
    id: crypto.randomUUID(),
    name: "third-document.jpg",
    statusInfo: { status: "Refused", reason: "Quality of the document was too low" },
  },
  {
    id: crypto.randomUUID(),
    name: "fourth-document.xls",
    statusInfo: { status: "Uploaded" },
  },
  {
    id: crypto.randomUUID(),
    name: "last-document.png",
    statusInfo: { status: "Uploaded" },
  },
];

export const WithSeveralDocuments = () => {
  return (
    <StoryBlock title="UploadArea with several documents">
      <StoryPart title="" style={styles.storyPart}>
        <FilesUploader
          maxSize={20_000_000}
          icon="document-regular"
          accept={ACCEPTED_FORMATS}
          initialFiles={documents}
          getUploadConfig={() => {}}
          generateUpload={() => Future.value(Result.Ok({ id: crypto.randomUUID(), upload: {} }))}
          onRemoveFile={() =>
            Future.make<Result<unknown, unknown>>(resolve => {
              setTimeout(() => resolve(Result.Ok(undefined)), 1_000);
            })
          }
          uploadFile={({ onLoadStart, onProgress }) => {
            return Future.make<Result<unknown, unknown>>(resolve => {
              onLoadStart({
                loaded: 0,
                total: 1000,
              } as ProgressEvent<XMLHttpRequestEventTarget>);
              setTimeout(
                () =>
                  onProgress({
                    loaded: 100,
                    total: 1000,
                  } as ProgressEvent<XMLHttpRequestEventTarget>),
                100,
              );
              setTimeout(
                () =>
                  onProgress({
                    loaded: 600,
                    total: 1000,
                  } as ProgressEvent<XMLHttpRequestEventTarget>),
                500,
              );
              setTimeout(() => {
                resolve(Result.Ok(undefined));
              }, 1_000);
            });
          }}
          formatAndSizeDescription={"20MB max"}
        />
      </StoryPart>
    </StoryBlock>
  );
};
