import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useState } from "react";
import { v4 as uuid } from "uuid";
import { Box } from "../src/components/Box";
import { SimpleHeaderCell, SimpleTitleCell } from "../src/components/FixedListViewCells";
import { LakeButton } from "../src/components/LakeButton";
import { LakeLabelledCheckbox } from "../src/components/LakeCheckbox";
import { PlainListView } from "../src/components/PlainListView";
import { Space } from "../src/components/Space";
import { Tag } from "../src/components/Tag";
export default {
    title: "Layout/PlainListView",
    component: PlainListView,
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
const generateItem = (index) => {
    return {
        id: uuid(),
        name: generateRandomName(),
        modulo: String(index % 10),
    };
};
export const Primary = () => {
    const [sort, setSort] = useState({ key: "name", order: "Desc" });
    const [endReachedTimes, setEndReachedTimes] = useState(0);
    const [withInfiniteScroll, setWithInfiniteScroll] = useState(false);
    const [showFakeLoader, setShowFakeLoader] = useState(false);
    const [data, setData] = useState(() => Array.from({ length: 100 }, (_, index) => generateItem(index)));
    const prependItem = () => {
        setData(data => [generateItem(data.length), ...data]);
    };
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
                setData(data => [
                    ...data,
                    ...Array.from({ length: 100 }, (_, index) => generateItem(index + data.length)),
                ]);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    });
    const columns = useMemo(() => {
        return [
            {
                id: "name",
                width: "grow",
                title: "Name",
                renderTitle: ({ title, extraInfo, id }) => (_jsx(SimpleHeaderCell, { text: title, sort: extraInfo.key === id ? extraInfo.order : undefined, onPress: () => setSort({ key: id, order: extraInfo.order === "Desc" ? "Asc" : "Desc" }) })),
                renderCell: ({ item: { name } }) => (_jsx(SimpleTitleCell, { text: name })),
            },
        ];
    }, []);
    return (_jsxs(_Fragment, { children: [_jsxs(Box, { direction: "row", alignItems: "center", children: [_jsx(LakeButton, { icon: "add-circle-filled", color: "live", onPress: prependItem, children: "Prepend" }), _jsx(Space, { width: 16 }), _jsx(LakeButton, { icon: "delete-filled", color: "negative", onPress: () => setData([]), children: "Clear" }), _jsx(Space, { width: 16 }), _jsxs(Tag, { label: "End reached", children: [endReachedTimes, " times"] }), _jsx(Space, { width: 16 }), _jsx(LakeLabelledCheckbox, { label: "With infinite scroll", value: withInfiniteScroll, onValueChange: setWithInfiniteScroll })] }), _jsx(Space, { height: 16 }), _jsx(PlainListView, { groupBy: item => item.modulo, extraInfo: sort, keyExtractor: keyExtractor, data: data, columns: columns, rowHeight: 48, headerHeight: 48, groupHeaderHeight: 48, onEndReached: onEndReached, onEndReachedThresholdPx: 300, loading: {
                    isLoading: showFakeLoader,
                    count: 5,
                } })] }));
};
