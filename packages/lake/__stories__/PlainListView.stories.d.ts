/// <reference types="react" />
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PlainListView } from "../src/components/PlainListView";
declare const _default: ComponentMeta<(<T, ExtraInfo>({ data: originalData, keyExtractor, rowHeight, groupHeaderHeight, headerHeight, columns, smallColumns, extraInfo, onEndReached, onEndReachedThresholdPx, getRowLink, activeRowId, renderEmptyList, onActiveRowChange, groupBy, loading, }: {
    data: T[];
    keyExtractor: (item: T, index: number) => string;
    highlightedRowId?: string | undefined;
    headerHeight: number;
    rowHeight: number;
    groupHeaderHeight: number;
    extraInfo: ExtraInfo;
    columns: import("../src/components/PlainListView").ColumnConfig<T, ExtraInfo>[];
    smallColumns?: import("../src/components/PlainListView").ColumnConfig<T, ExtraInfo>[] | undefined;
    onEndReached?: (() => void) | undefined;
    onEndReachedThresholdPx?: number | undefined;
    getRowLink?: ((config: import("../src/components/FixedListView").LinkConfig<T, ExtraInfo>) => import("react").ReactElement<{
        children: (state: import("react-native").PressableStateCallbackType) => import("react").ReactNode;
    }, string | import("react").JSXElementConstructor<any>>) | undefined;
    renderEmptyList?: (() => import("react").ReactNode) | undefined;
    groupBy?: ((item: T) => string) | undefined;
    onActiveRowChange?: ((element: HTMLElement) => void) | undefined;
    activeRowId?: string | undefined;
    loading?: {
        isLoading: boolean;
        count: number;
    } | undefined;
}) => JSX.Element)>;
export default _default;
export declare const Primary: ComponentStory<typeof PlainListView>;
