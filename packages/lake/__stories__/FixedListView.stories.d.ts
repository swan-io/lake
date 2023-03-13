/// <reference types="react" />
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FixedListView, FixedListViewProps } from "../src/components/FixedListView";
declare const _default: ComponentMeta<(<T, ExtraInfo>({ data: originalData, mode, keyExtractor, highlightedRowId, rowHeight, rowVerticalSpacing, headerHeight, renderThreshold, stickedToStartColumns: initialStickedToStartColumns, columns: initialColumns, stickedToEndColumns: initialStickedToEndColumns, extraInfo, onEndReached, onEndReachedThresholdPx, getRowLink, renderEmptyList, loading, }: FixedListViewProps<T, ExtraInfo>) => JSX.Element)>;
export default _default;
export declare const Primary: ComponentStory<typeof FixedListView>;
export declare const WithoutBackground: ComponentStory<typeof FixedListView>;
export declare const Placeholder: ComponentStory<typeof FixedListView>;
