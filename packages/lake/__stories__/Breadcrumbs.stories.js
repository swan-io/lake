import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Box } from "../src/components/Box";
import { Breadcrumbs, BreadcrumbsRoot, useCrumb } from "../src/components/Breadcrumbs";
import { LakeButton } from "../src/components/LakeButton";
import { LakeLabel } from "../src/components/LakeLabel";
import { LakeTextInput } from "../src/components/LakeTextInput";
import { Space } from "../src/components/Space";
import { StoryBlock, StoryPart } from "./_StoriesComponents";
export default {
    title: "Interactivity/Breadcrumbs",
    component: BreadcrumbsRoot,
};
export const Variations = () => {
    return (_jsxs(StoryBlock, { title: "Breadcrumbs", children: [_jsx(StoryPart, { title: "With 1 element", children: _jsx(BreadcrumbsRoot, { rootLevelCrumbs: [
                        {
                            label: "All simulator events",
                            link: "/simulator",
                        },
                    ], children: _jsx(Breadcrumbs, {}) }) }), _jsx(StoryPart, { title: "With 2 elements", children: _jsx(BreadcrumbsRoot, { rootLevelCrumbs: [
                        {
                            label: "All simulator events",
                            link: "/simulator",
                        },
                        {
                            label: "SEPA Credit Transfers",
                            link: "/simulator/sct",
                        },
                    ], children: _jsx(Breadcrumbs, {}) }) }), _jsx(StoryPart, { title: "With siblings", children: _jsx(BreadcrumbsRoot, { rootLevelCrumbs: [
                        {
                            label: "All simulator events",
                            link: "/simulator",
                        },
                        {
                            label: "SEPA Credit Transfers",
                            link: "/simulator/sct",
                            siblings: [
                                {
                                    label: "SEPA Credit Transfers",
                                    url: "/simulator/sct",
                                    isMatching: true,
                                },
                                {
                                    label: "SEPA Direct Debits",
                                    url: "/simulator/sdd",
                                    isMatching: false,
                                },
                                {
                                    label: "Cards",
                                    url: "/simulator/cards",
                                    isMatching: false,
                                },
                                {
                                    label: "Apple Pay/Google Pay",
                                    url: "/simulator/apple-pay-google-pay",
                                    isMatching: false,
                                },
                                {
                                    label: "Account holders",
                                    url: "/simulator/account-holders",
                                    isMatching: false,
                                },
                                {
                                    label: "Merchant acquiring",
                                    url: "/simulator/merchant-acquiring",
                                    isMatching: false,
                                },
                            ],
                        },
                    ], children: _jsx(Breadcrumbs, {}) }) })] }));
};
// We use this component to trigger breadcrumbs animations when we add/remove crumbs
// Because updating `rootLevelCrumbs` on `BreadcrumbsRoot` doesn't trigger animations
const InteractiveCrumb = ({ crumb }) => {
    useCrumb(crumb);
    return null;
};
export const Interactive = () => {
    const [newCrumbLabel, setNewCrumbLabel] = useState("");
    const [crumbs, setCrumbs] = useState([]);
    const addCrumb = () => {
        const crumb = {
            label: newCrumbLabel,
            link: newCrumbLabel,
        };
        setCrumbs(crumbs => [...crumbs, crumb]);
        setNewCrumbLabel("");
    };
    const addSibling = () => {
        const sibling = {
            label: newCrumbLabel,
            url: newCrumbLabel,
            isMatching: false,
        };
        setCrumbs(crumbs => {
            const lastCrumb = crumbs[crumbs.length - 1];
            if (!lastCrumb) {
                return crumbs;
            }
            const lastCrumbSiblings = lastCrumb?.siblings ?? [];
            const newLastCrumb = { ...lastCrumb, siblings: [...lastCrumbSiblings, sibling] };
            return [...crumbs.slice(0, -1), newLastCrumb];
        });
        setNewCrumbLabel("");
    };
    const removeLastCrumb = () => {
        setCrumbs(crumbs => crumbs.slice(0, -1));
    };
    return (_jsxs(StoryBlock, { title: "Interactive", description: "You can add/remove crumbs to see breadcrumbs animations during navigation in apps", children: [_jsx(Box, { direction: "row", children: _jsx(LakeLabel, { label: "New crumb label", actions: _jsxs(_Fragment, { children: [_jsx(Space, { width: 8 }), _jsx(LakeButton, { size: "small", color: "positive", onPress: addCrumb, disabled: !newCrumbLabel, children: "Add crumb" }), _jsx(Space, { width: 8 }), _jsx(LakeButton, { size: "small", color: "gray", onPress: addSibling, disabled: !newCrumbLabel || crumbs.length === 0, children: "Add sibling" }), _jsx(Space, { width: 8 }), _jsx(LakeButton, { size: "small", color: "negative", onPress: removeLastCrumb, disabled: crumbs.length === 0, children: "Remove last crumb" })] }), render: id => (_jsx(LakeTextInput, { nativeID: id, value: newCrumbLabel, onChange: event => setNewCrumbLabel(event.currentTarget.value) })) }) }), _jsx(Space, { height: 16 }), _jsxs(BreadcrumbsRoot, { children: [crumbs.map(crumb => (_jsx(InteractiveCrumb, { crumb: crumb }))), _jsx(Breadcrumbs, {})] })] }));
};
