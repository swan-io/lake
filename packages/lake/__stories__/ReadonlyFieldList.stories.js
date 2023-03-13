import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LakeCopyButton } from "../src/components/LakeCopyButton";
import { LakeLabel } from "../src/components/LakeLabel";
import { LakeText } from "../src/components/LakeText";
import { ReadOnlyFieldList } from "../src/components/ReadOnlyFieldList";
import { Tag } from "../src/components/Tag";
import { colors } from "../src/constants/design";
import { StoryBlock } from "./_StoriesComponents";
export default {
    title: "Forms/ReadOnlyFieldList",
    component: ReadOnlyFieldList,
};
export const Default = () => {
    return (_jsx(StoryBlock, { title: "Readonly field list", children: _jsxs(ReadOnlyFieldList, { children: [_jsx(LakeLabel, { label: "Card holder", type: "view", render: () => _jsx(LakeText, { color: colors.gray[900], children: "John Doe" }) }), _jsx(LakeLabel, { label: "Account", type: "view", render: () => _jsx(LakeText, { color: colors.gray[900], children: "Compte courant" }) }), _jsx(LakeLabel, { label: "Account holder", type: "view", render: () => _jsx(LakeText, { color: colors.gray[900], children: "John Doe" }) }), _jsx(LakeLabel, { label: "Type", type: "view", render: () => _jsx(LakeText, { color: colors.gray[900], children: "Single use" }) }), _jsx(LakeLabel, { label: "Name", type: "view", render: () => _jsx(LakeText, { color: colors.gray[900], children: "John Doe" }) }), _jsx(LakeLabel, { label: "Status", type: "view", render: () => (_jsx(LakeText, { color: colors.gray[900], children: _jsx(Tag, { color: "positive", children: "Enabled" }) })) }), _jsx(LakeLabel, { label: "Contract expiry date", type: "view", render: () => (_jsx(LakeText, { color: colors.gray[900], children: _jsx(Tag, { color: "gray", children: "Unlimited" }) })) }), _jsx(LakeLabel, { label: "ID", type: "view", render: () => _jsx(LakeText, { color: colors.gray[900], children: "123456789" }), actions: _jsx(LakeCopyButton, { valueToCopy: "123456789", copyText: "Click to copy", copiedText: "Copied to clipboard!" }) }), _jsx(LakeLabel, { label: "Created", type: "view", render: () => _jsx(LakeText, { color: colors.gray[900], children: "16-01-2023" }) }), _jsx(LakeLabel, { label: "Updated", type: "view", render: () => _jsx(LakeText, { color: colors.gray[900], children: "17-01-2023" }) })] }) }));
};
