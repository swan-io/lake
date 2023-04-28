import { Meta } from "@storybook/react";
import { LakeDownloadButton } from "../src/components/LakeDownloadButton";
import { StoryBlock } from "./_StoriesComponents";

export default {
  title: "Interactivity/DownloadButton",
  component: LakeDownloadButton,
} as Meta<typeof LakeDownloadButton>;

export const Default = () => {
  return (
    <StoryBlock title="DownloadButton">
      <LakeDownloadButton
        filename="account_statement.pdf"
        url="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        onError={() => alert("Failed to download file")}
      />
    </StoryBlock>
  );
};
