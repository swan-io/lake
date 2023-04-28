import { Meta, StoryFn } from "@storybook/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { v4 as uuid } from "uuid";
import { Box } from "../src/components/Box";
import { ColumnCellConfig, ColumnTitleConfig } from "../src/components/FixedListView";
import { SimpleHeaderCell, SimpleTitleCell } from "../src/components/FixedListViewCells";
import { LakeButton } from "../src/components/LakeButton";
import { LakeLabelledCheckbox } from "../src/components/LakeCheckbox";
import { PlainListView } from "../src/components/PlainListView";
import { Space } from "../src/components/Space";
import { Tag } from "../src/components/Tag";

export default {
  title: "Layout/PlainListView",
  component: PlainListView,
} as Meta<typeof PlainListView>;

type TestRow = {
  id: string;
  name: string;
  modulo: string;
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

const generateItem = (index: number): TestRow => {
  return {
    id: uuid(),
    name: generateRandomName(),
    modulo: String(index % 10),
  };
};

export const Primary: StoryFn<typeof PlainListView> = () => {
  const [sort, setSort] = useState<SortInfo>({ key: "name", order: "Desc" });
  const [endReachedTimes, setEndReachedTimes] = useState(0);
  const [withInfiniteScroll, setWithInfiniteScroll] = useState(false);
  const [showFakeLoader, setShowFakeLoader] = useState(false);

  const [data, setData] = useState(() =>
    Array.from({ length: 100 }, (_, index) => generateItem(index)),
  );

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
        width: "grow" as const,
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
  }, []);

  return (
    <>
      <Box direction="row" alignItems="center">
        <LakeButton icon="add-circle-filled" color="live" onPress={prependItem}>
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

      <PlainListView
        groupBy={item => item.modulo}
        extraInfo={sort}
        keyExtractor={keyExtractor}
        data={data}
        columns={columns}
        rowHeight={48}
        headerHeight={48}
        groupHeaderHeight={48}
        onEndReached={onEndReached}
        onEndReachedThresholdPx={300}
        loading={{
          isLoading: showFakeLoader,
          count: 5,
        }}
      />
    </>
  );
};
