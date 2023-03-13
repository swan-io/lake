import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { View } from "react-native";
import { FilterChooser } from "../src/components/FilterChooser";
import { FiltersStack, } from "../src/components/Filters";
import { Space } from "../src/components/Space";
import { WithCurrentColor } from "../src/components/WithCurrentColor";
import { getRifmProps } from "../src/utils/rifm";
import { StoryBlock } from "./_StoriesComponents";
const rifmDateProps = getRifmProps({
    accept: "numeric",
    charMap: { 2: "/", 4: "/" },
    maxLength: 8,
});
const mode = {
    type: "radio",
    label: "Mode",
    items: [
        { label: "QES", value: "QES" },
        { label: "Expert", value: "Expert" },
    ],
};
const status = {
    type: "checkbox",
    label: "Status",
    submitText: "Apply",
    items: [
        { label: "Accepted", value: "Accepted" },
        { label: "Canceled", value: "Canceled" },
        { label: "Failed", value: "Failed" },
        { label: "Expired", value: "Expired" },
        { label: "CustomerRefused", value: "CustomerRefused" },
    ],
};
const startDate = {
    type: "date",
    label: "Start Date",
    submitText: "Save",
    noValueText: "None",
    dateFormat: "DD/MM/YYYY",
    rifmProps: rifmDateProps,
};
const resourceId = {
    type: "input",
    label: "Resource ID",
    noValueText: "None",
    submitText: "Save",
    placeholder: "Placeholder...",
};
const definition = {
    mode,
    status,
    startDate,
    resourceId,
};
const availableFilters = [
    {
        name: "mode",
        label: "Mode",
    },
    {
        name: "status",
        label: "Status",
    },
    {
        name: "startDate",
        label: "Start date",
    },
    {
        name: "resourceId",
        label: "Ressource ID",
    },
];
export default {
    title: "Forms/Filter",
    component: FilterChooser,
};
export const All = () => {
    const [openFilters, setOpenFilters] = useState([]);
    const [filters, setFilters] = useState({
        mode: undefined,
        status: undefined,
        resourceId: undefined,
        startDate: undefined,
    });
    return (_jsx(StoryBlock, { title: "Filter", children: _jsx(WithCurrentColor, { variant: "live", children: _jsxs(View, { children: [_jsx(FilterChooser, { filters: filters, label: "Choose filters", title: "Filters", onAddFilter: filter => setOpenFilters(filters => [...filters, filter]), availableFilters: availableFilters, openFilters: openFilters }), _jsx(Space, { height: 8 }), _jsx(FiltersStack, { definition: definition, filters: filters, openedFilters: openFilters, onChangeFilters: setFilters, onChangeOpened: setOpenFilters })] }) }) }));
};
