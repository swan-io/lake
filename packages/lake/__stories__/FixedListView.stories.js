import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useState } from "react";
import { v4 as uuid } from "uuid";
import { Box } from "../src/components/Box";
import { FixedListView, FixedListViewPlaceholder, } from "../src/components/FixedListView";
import { ColorPatchCell, SimpleHeaderCell, SimpleRegularTextCell, SimpleTitleCell, } from "../src/components/FixedListViewCells";
import { LakeButton } from "../src/components/LakeButton";
import { LakeLabelledCheckbox } from "../src/components/LakeCheckbox";
import { Space } from "../src/components/Space";
import { Tag } from "../src/components/Tag";
export default {
    title: "Layout/FixedListView",
    component: FixedListView,
};
const keyExtractor = ({ id }) => id;
const generateRandomName = () => {
    const names = [
        "Matthias",
        "John",
        "Jane",
        "Camille",
        "Charlotte",
        "Francis",
        "Émilie",
        "François",
        "Laura",
        "Marie",
        "Natasha",
        "Nicolas",
        "Pierre",
        "Thomas",
        "Valérie",
        "Yann",
        "Zoé",
        "Jérôme",
        "Thomas",
    ];
    return names[Math.floor(Math.random() * names.length)] ?? names[0];
};
const generateItem = () => {
    return {
        id: uuid(),
        name: generateRandomName(),
    };
};
const EditableFixedListView = (props) => {
    const [sort, setSort] = useState({ key: "name", order: "Desc" });
    const [endReachedTimes, setEndReachedTimes] = useState(0);
    const [withInfiniteScroll, setWithInfiniteScroll] = useState(false);
    const [showFakeLoader, setShowFakeLoader] = useState(false);
    const [data, setData] = useState(() => Array.from({ length: 100 }, _ => generateItem()));
    const onEndReached = useCallback(() => {
        setEndReachedTimes(v => v + 1);
        if (withInfiniteScroll) {
            setShowFakeLoader(true);
        }
    }, [withInfiniteScroll]);
    useEffect(() => {
        if (showFakeLoader) {
            const timeout = setTimeout(() => {
                setShowFakeLoader(false);
                setData(data => [...data, ...Array.from({ length: 100 }, _ => generateItem())]);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    });
    const { stickedToStartColumns, columns, stickedToEndColumns } = useMemo(() => {
        const stickedToStartColumns = [
            {
                width: 4,
                id: "color",
                title: "Color",
                renderTitle: () => null,
                renderCell: ({ isHovered }) => (_jsx(ColorPatchCell, { isHovered: isHovered, color: "live" })),
            },
            {
                width: 300,
                id: "name",
                title: "Name",
                renderTitle: ({ title, extraInfo, id }) => (_jsx(SimpleHeaderCell, { text: title, sort: extraInfo.key === id ? extraInfo.order : undefined, onPress: () => setSort({ key: id, order: extraInfo.order === "Desc" ? "Asc" : "Desc" }) })),
                renderCell: ({ item: { name } }) => (_jsx(SimpleTitleCell, { text: name })),
            },
        ];
        const columns = [
            {
                width: 500,
                id: "event_id",
                title: "Event ID",
                renderTitle: ({ title }) => _jsx(SimpleHeaderCell, { text: title }),
                renderCell: ({ item: { id } }) => (_jsx(SimpleRegularTextCell, { text: id })),
            },
            {
                width: 500,
                id: "onboarding_id",
                title: "Onboarding ID",
                renderTitle: ({ title }) => _jsx(SimpleHeaderCell, { text: title }),
                renderCell: ({ item: { id } }) => (_jsx(SimpleRegularTextCell, { text: id })),
            },
            {
                width: 500,
                id: "account_id",
                title: "Account ID",
                renderTitle: ({ title }) => _jsx(SimpleHeaderCell, { text: title }),
                renderCell: ({ item: { id } }) => (_jsx(SimpleRegularTextCell, { text: id })),
            },
        ];
        const stickedToEndColumns = [
            {
                width: 100,
                id: "dot",
                title: "Settings",
                renderTitle: () => _jsx(SimpleHeaderCell, { text: "End" }),
                renderCell: () => _jsx(SimpleRegularTextCell, { text: "..." }),
            },
        ];
        return { stickedToStartColumns, columns, stickedToEndColumns };
    }, []);
    return (_jsxs(_Fragment, { children: [_jsxs(Box, { direction: "row", alignItems: "center", children: [_jsx(LakeButton, { icon: "add-circle-filled", color: "live", onPress: () => setData(data => [generateItem(), ...data]), children: "Prepend" }), _jsx(Space, { width: 16 }), _jsx(LakeButton, { icon: "delete-filled", color: "negative", onPress: () => setData([]), children: "Clear" }), _jsx(Space, { width: 16 }), _jsxs(Tag, { label: "End reached", children: [endReachedTimes, " times"] }), _jsx(Space, { width: 16 }), _jsx(LakeLabelledCheckbox, { label: "With infinite scroll", value: withInfiniteScroll, onValueChange: setWithInfiniteScroll })] }), _jsx(Space, { height: 16 }), _jsx(FixedListView, { extraInfo: sort, keyExtractor: keyExtractor, data: data, stickedToStartColumns: stickedToStartColumns, columns: columns, stickedToEndColumns: stickedToEndColumns, rowHeight: 48, rowVerticalSpacing: 4, headerHeight: 48, onEndReached: onEndReached, onEndReachedThresholdPx: 300, loading: {
                    isLoading: showFakeLoader,
                    count: 5,
                }, ...props })] }));
};
export const Primary = () => {
    return _jsx(EditableFixedListView, {});
};
export const WithoutBackground = () => {
    return _jsx(EditableFixedListView, { mode: "plain" });
};
export const Placeholder = () => {
    return (_jsx(FixedListViewPlaceholder, { rowHeight: 48, rowVerticalSpacing: 4, headerHeight: 48, count: 3 }));
};
