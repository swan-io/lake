import { Meta } from "@storybook/react";
import { useState } from "react";
import { View } from "react-native";
import { FilterChooser } from "../src/components/FilterChooser";
import {
  FilterCheckboxDef,
  FilterDateDef,
  FilterInputDef,
  FilterRadioDef,
  FiltersStack,
  FiltersState,
} from "../src/components/Filters";
import { Space } from "../src/components/Space";
import { WithCurrentColor } from "../src/components/WithCurrentColor";
import { StoryBlock } from "./_StoriesComponents";

const mode: FilterRadioDef<"QES" | "Expert"> = {
  type: "radio",
  label: "Mode",
  items: [
    { label: "QES", value: "QES" },
    { label: "Expert", value: "Expert" },
  ],
};

const status: FilterCheckboxDef<
  "Accepted" | "Canceled" | "Failed" | "Expired" | "CustomerRefused"
> = {
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

const startDate: FilterDateDef = {
  type: "date",
  label: "Start Date",
  cancelText: "Cancel",
  submitText: "Save",
  noValueText: "None",
  dateFormat: "DD/MM/YYYY",
};

const resourceId: FilterInputDef = {
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

type State = FiltersState<typeof definition>;

const availableFilters: { name: keyof State; label: string }[] = [
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
} as Meta<typeof FilterChooser>;

export const All = () => {
  const [openFilters, setOpenFilters] = useState<(keyof State)[]>([]);

  const [filters, setFilters] = useState<State>({
    mode: undefined,
    status: undefined,
    resourceId: undefined,
    startDate: undefined,
  });

  return (
    <StoryBlock title="Filter">
      <WithCurrentColor variant="live">
        <View>
          <FilterChooser
            filters={filters}
            label="Choose filters"
            title="Filters"
            onAddFilter={filter => setOpenFilters(filters => [...filters, filter])}
            availableFilters={availableFilters}
            openFilters={openFilters}
          />

          <Space height={8} />

          <FiltersStack
            definition={definition}
            filters={filters}
            openedFilters={openFilters}
            onChangeFilters={setFilters}
            onChangeOpened={setOpenFilters}
          />
        </View>
      </WithCurrentColor>
    </StoryBlock>
  );
};
