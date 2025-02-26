import { Meta } from "@storybook/react";
import { Box } from "@swan-io/lake/src/components/Box";
import { FilterChooser } from "@swan-io/lake/src/components/FilterChooser";
import { Space } from "@swan-io/lake/src/components/Space";
import { WithCurrentColor } from "@swan-io/lake/src/components/WithCurrentColor";
import { useState } from "react";
import { filter, FiltersStack, FiltersState, useFiltersProps } from "../src/components/Filters";
import { StoryBlock } from "./_StoriesComponents";

const filtersDefinition = {
  mode: filter.radio({
    label: "Mode",
    items: [
      { label: "QES", value: "QES" },
      { label: "Expert", value: "Expert" },
    ],
  }),

  status: filter.checkbox({
    label: "Status",
    items: [
      { label: "Accepted", value: "Accepted" },
      { label: "Canceled", value: "Canceled" },
      { label: "Failed", value: "Failed" },
      { label: "Expired", value: "Expired" },
      { label: "CustomerRefused", value: "CustomerRefused" },
    ],
  }),

  startDate: filter.date({
    label: "Start Date",
  }),

  resourceId: filter.input({
    label: "Resource ID",
    placeholder: "Placeholder...",
    validate: value => {
      if (value.length < 3) {
        return "Not long enough";
      }
    },
  }),
};

type State = FiltersState<typeof filtersDefinition>;

export default {
  title: "Forms/Filters",
  component: FilterChooser,
} as Meta<typeof FilterChooser>;

export const All = () => {
  const [filters, setFilters] = useState<State>({
    mode: undefined,
    status: undefined,
    resourceId: undefined,
    startDate: undefined,
  });

  const filtersProps = useFiltersProps({ filtersDefinition, filters });

  return (
    <StoryBlock title="Filters">
      <WithCurrentColor variant="live">
        <Box alignItems="start">
          <FilterChooser {...filtersProps.chooser} />
          <Space height={8} />
          <FiltersStack {...filtersProps.stack} onChangeFilters={setFilters} />
        </Box>
      </WithCurrentColor>
    </StoryBlock>
  );
};
