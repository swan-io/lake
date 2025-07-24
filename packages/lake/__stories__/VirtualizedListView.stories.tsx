import { Meta, StoryFn } from "@storybook/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { v4 as uuid } from "uuid";
import { Box } from "../src/components/Box";
import { Cell, HeaderCell, LinkCell, TextCell } from "../src/components/Cells";
import { EmptyView } from "../src/components/EmptyView";
import { LakeButton } from "../src/components/LakeButton";
import { LakeLabelledCheckbox } from "../src/components/LakeCheckbox";
import { Pressable } from "../src/components/Pressable";
import { Space } from "../src/components/Space";
import { Tag } from "../src/components/Tag";
import {
  ColumnCellConfig,
  ColumnTitleConfig,
  VirtualizedList,
  VirtualizedListPlaceholder,
} from "../src/components/VirtualizedList";

export default {
  title: "Layout/VirtualizedList",
  component: VirtualizedList,
} as Meta<typeof VirtualizedList>;

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

const EditableVirtualizedList = ({ few = false }: { few?: boolean }) => {
  const [sort, setSort] = useState<SortInfo>({ key: "name", order: "Desc" });
  const [endReachedTimes, setEndReachedTimes] = useState(0);
  const [withInfiniteScroll, setWithInfiniteScroll] = useState(false);
  const [showFakeLoader, setShowFakeLoader] = useState(false);
  const [forceIsLoading, setForceIsLoading] = useState(false);

  const [data, setData] = useState(() => Array.from({ length: 20 }, _ => generateItem()));

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
        setData(data => [...data, ...Array.from({ length: 20 }, _ => generateItem())]);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  });

  const [columnSizes, setColumnSizes] = useState<Record<string, number>>({});

  const { stickedToStartColumns, columns, stickedToEndColumns } = useMemo(() => {
    const stickedToStartColumns = [
      {
        width: columnSizes.name ?? 300,
        id: "name",
        title: "Name",
        renderTitle: ({ title, extraInfo, id }: ColumnTitleConfig<SortInfo>) => (
          <HeaderCell
            text={title}
            sort={extraInfo.key === id ? extraInfo.order : undefined}
            onPress={() => setSort({ key: id, order: extraInfo.order === "Desc" ? "Asc" : "Desc" })}
          />
        ),
        renderCell: ({ item: { name } }: ColumnCellConfig<TestRow, SortInfo>) => (
          <TextCell variant="medium" text={name} />
        ),
      },
    ];

    const columns = [
      {
        width: columnSizes.event_id ?? (few ? 300 : 500),
        grow: few,
        id: "event_id",
        title: "Event ID",
        renderTitle: ({ title }: ColumnTitleConfig<SortInfo>) => <HeaderCell text={title} />,
        renderCell: ({ item: { id } }: ColumnCellConfig<TestRow, SortInfo>) => (
          <TextCell text={id} />
        ),
      },
      ...(few
        ? []
        : [
            {
              width: columnSizes.link_before ?? 150,
              id: "link_before",
              title: "Link before",
              renderTitle: ({ title }: ColumnTitleConfig<SortInfo>) => <HeaderCell text={title} />,
              renderCell: () => (
                <LinkCell onPress={() => {}} buttonPosition="start">
                  <Tag color="shakespear">Demo link</Tag>
                </LinkCell>
              ),
            },
            {
              width: columnSizes.onboarding_id ?? 500,
              id: "onboarding_id",
              title: "Onboarding ID",
              renderTitle: ({ title }: ColumnTitleConfig<SortInfo>) => <HeaderCell text={title} />,
              renderCell: ({ item: { id } }: ColumnCellConfig<TestRow, SortInfo>) => (
                <TextCell text={id} />
              ),
            },
            {
              width: columnSizes.link_after ?? 150,
              id: "link_after",
              title: "Link after",
              renderTitle: ({ title }: ColumnTitleConfig<SortInfo>) => <HeaderCell text={title} />,
              renderCell: () => (
                <LinkCell onPress={() => {}} buttonPosition="end">
                  <Tag color="shakespear">Demo link</Tag>
                </LinkCell>
              ),
            },
            {
              width: columnSizes.account_id ?? 500,
              id: "account_id",
              title: "Account ID",
              renderTitle: ({ title }: ColumnTitleConfig<SortInfo>) => <HeaderCell text={title} />,
              renderCell: ({ item: { id } }: ColumnCellConfig<TestRow, SortInfo>) => (
                <TextCell text={id} />
              ),
            },
          ]),
    ];

    const stickedToEndColumns = [
      {
        width: columnSizes.dot ?? 72,
        id: "dot",
        title: "Settings",
        renderTitle: () => <HeaderCell text={"End"} align="right" />,
        renderCell: () => (
          <Cell align="right">
            <LakeButton mode="tertiary" icon="chevron-right-filled" ariaLabel="test" size="small" />
          </Cell>
        ),
      },
    ];

    return { stickedToStartColumns, columns, stickedToEndColumns };
  }, [few, columnSizes]);

  return (
    <>
      <Box direction="row" alignItems="center">
        <LakeButton
          icon="add-circle-filled"
          color="live"
          size="small"
          onPress={() => setData(data => [generateItem(), ...data])}
        >
          Prepend
        </LakeButton>

        <Space width={16} />

        <LakeButton
          icon="add-circle-filled"
          color="live"
          size="small"
          onPress={() => setData(data => [...data.slice(0, 1), generateItem(), ...data.slice(1)])}
        >
          Insert in 2nd
        </LakeButton>

        <Space width={16} />

        <LakeButton
          icon="add-circle-filled"
          color="live"
          size="small"
          onPress={() => setData(data => [...data, generateItem()])}
        >
          Append
        </LakeButton>

        <Space width={16} />

        <LakeButton icon="delete-filled" color="negative" size="small" onPress={() => setData([])}>
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

        <Space width={16} />

        <LakeLabelledCheckbox
          label="Force loading state"
          value={forceIsLoading}
          onValueChange={setForceIsLoading}
        />
      </Box>

      <Space height={16} />

      <VirtualizedList
        variant="default"
        extraInfo={sort}
        onColumnResize={config =>
          setColumnSizes(values => ({ ...values, [config.id]: config.width }))
        }
        keyExtractor={keyExtractor}
        data={data}
        stickedToStartColumns={stickedToStartColumns}
        columns={columns}
        stickedToEndColumns={stickedToEndColumns}
        rowHeight={48}
        headerHeight={48}
        onEndReached={onEndReached}
        onEndReachedThreshold={300}
        renderEmptyList={() => <EmptyView icon="lake-inbox-empty" title="Nothing to see here" />}
        getRowLink={item => <Pressable onPress={() => console.log(item.item)} />}
        loading={{
          isLoading: forceIsLoading || showFakeLoader,
          count: 20,
        }}
      />
    </>
  );
};

export const Primary: StoryFn<typeof VirtualizedList> = () => {
  return <EditableVirtualizedList />;
};

export const WithoutBackground: StoryFn<typeof VirtualizedList> = () => {
  return <EditableVirtualizedList />;
};

export const FewColumn: StoryFn<typeof VirtualizedList> = () => {
  return <EditableVirtualizedList few={true} />;
};

export const Placeholder: StoryFn<typeof VirtualizedList> = () => {
  return <VirtualizedListPlaceholder rowHeight={48} headerHeight={48} count={3} />;
};
