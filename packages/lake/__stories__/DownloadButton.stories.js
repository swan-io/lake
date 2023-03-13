import { jsx as _jsx } from "react/jsx-runtime";
import { LakeDownloadButton } from "../src/components/LakeDownloadButton";
import { StoryBlock } from "./_StoriesComponents";
export default {
    title: "Interactivity/DownloadButton",
    component: LakeDownloadButton,
};
export const Default = () => {
    return (_jsx(StoryBlock, { title: "DownloadButton", children: _jsx(LakeDownloadButton, { filename: "account_statement.pdf", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", onError: () => alert("Failed to download file") }) }));
};
