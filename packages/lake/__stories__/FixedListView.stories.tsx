import { Meta, StoryFn } from "@storybook/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { v4 as uuid } from "uuid";
import { Box } from "../src/components/Box";
import {
  ColumnCellConfig,
  ColumnTitleConfig,
  FixedListView,
  FixedListViewPlaceholder,
  FixedListViewProps,
} from "../src/components/FixedListView";
import {
  ColorPatchCell,
  SimpleHeaderCell,
  SimpleRegularTextCell,
  SimpleTitleCell,
} from "../src/components/FixedListViewCells";
import { LakeButton } from "../src/components/LakeButton";
import { LakeLabelledCheckbox } from "../src/components/LakeCheckbox";
import { Space } from "../src/components/Space";
import { Tag } from "../src/components/Tag";

export default {
  title: "Layout/FixedListView",
  component: FixedListView,
} as Meta<typeof FixedListView>;

type TestRow = {
  id: string;
  name: string;
};

const keyExtractor = ({ id }: TestRow) => id;

type SortInfo = {
  key: string;
  order: "Asc" | "Desc";
};

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
  ] as const;

  return names[Math.floor(Math.random() * names.length)] ?? names[0];
};

const generateItem = (): TestRow => {
  return {
    id: uuid(),
    name: generateRandomName(),
  };
};

const EditableFixedListView = (props: Pick<FixedListViewProps<TestRow, SortInfo>, "mode">) => {
  const [sort, setSort] = useState<SortInfo>({ key: "name", order: "Desc" });
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
        renderCell: ({ isHovered }: ColumnCellConfig<TestRow, SortInfo>) => (
          <ColorPatchCell isHovered={isHovered} color="live" />
        ),
      },
      {
        width: 300,
        id: "name",
        title: "Name",
        renderTitle: ({ title, extraInfo, id }: ColumnTitleConfig<SortInfo>) => (
          <SimpleHeaderCell
            text={title}
            sort={extraInfo.key === id ? extraInfo.order : undefined}
            onPress={() => setSort({ key: id, order: extraInfo.order === "Desc" ? "Asc" : "Desc" })}
          />
        ),
        renderCell: ({ item: { name } }: ColumnCellConfig<TestRow, SortInfo>) => (
          <SimpleTitleCell text={name} />
        ),
      },
    ];

    const columns = [
      {
        width: 500,
        id: "event_id",
        title: "Event ID",
        renderTitle: ({ title }: ColumnTitleConfig<SortInfo>) => <SimpleHeaderCell text={title} />,
        renderCell: ({ item: { id } }: ColumnCellConfig<TestRow, SortInfo>) => (
          <SimpleRegularTextCell text={id} />
        ),
      },
      {
        width: 500,
        id: "onboarding_id",
        title: "Onboarding ID",
        renderTitle: ({ title }: ColumnTitleConfig<SortInfo>) => <SimpleHeaderCell text={title} />,
        renderCell: ({ item: { id } }: ColumnCellConfig<TestRow, SortInfo>) => (
          <SimpleRegularTextCell text={id} />
        ),
      },
      {
        width: 500,
        id: "account_id",
        title: "Account ID",
        renderTitle: ({ title }: ColumnTitleConfig<SortInfo>) => <SimpleHeaderCell text={title} />,
        renderCell: ({ item: { id } }: ColumnCellConfig<TestRow, SortInfo>) => (
          <SimpleRegularTextCell text={id} />
        ),
      },
    ];

    const stickedToEndColumns = [
      {
        width: 100,
        id: "dot",
        title: "Settings",
        renderTitle: () => <SimpleHeaderCell text={"End"} />,
        renderCell: () => <SimpleRegularTextCell text="..." />,
      },
    ];

    return { stickedToStartColumns, columns, stickedToEndColumns };
  }, []);

  return (
    <>
      <Box direction="row" alignItems="center">
        <LakeButton
          icon="add-circle-filled"
          color="live"
          onPress={() => setData(data => [generateItem(), ...data])}
        >
          Prepend
        </LakeButton>

        <Space width={16} />

        <LakeButton icon="delete-filled" color="negative" onPress={() => setData([])}>
          Clear
        </LakeButton>

        <Space width={16} />
        <Tag label="End reached">{endReachedTimes} times</Tag>
        <Space width={16} />

        <LakeLabelledCheckbox
          label="With infinite scroll"
          value={withInfiniteScroll}
          onValueChange={setWithInfiniteScroll}
        />
      </Box>

      <Space height={16} />

      <FixedListView
        extraInfo={sort}
        keyExtractor={keyExtractor}
        data={data}
        stickedToStartColumns={stickedToStartColumns}
        columns={columns}
        stickedToEndColumns={stickedToEndColumns}
        rowHeight={48}
        rowVerticalSpacing={4}
        headerHeight={48}
        onEndReached={onEndReached}
        onEndReachedThresholdPx={300}
        loading={{
          isLoading: showFakeLoader,
          count: 5,
        }}
        {...props}
      />
    </>
  );
};

export const Primary: StoryFn<typeof FixedListView> = () => {
  return <EditableFixedListView />;
};

export const WithoutBackground: StoryFn<typeof FixedListView> = () => {
  return <EditableFixedListView mode="plain" />;
};

export const Placeholder: StoryFn<typeof FixedListView> = () => {
  return (
    <FixedListViewPlaceholder rowHeight={48} rowVerticalSpacing={4} headerHeight={48} count={3} />
  );
};
