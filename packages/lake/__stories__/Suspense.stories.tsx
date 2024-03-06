import { Meta } from "@storybook/react";
import { AsyncData } from "@swan-io/boxed";
import { Suspense, useState } from "react";
import { LakeButton, LakeButtonGroup } from "../src/components/LakeButton";
import { SwanLogo } from "../src/components/SwanLogo";
import { useAsyncDataSuspense } from "../src/hooks/useAsyncDataSuspense";
import { StoryBlock } from "./_StoriesComponents";

export default {
  title: "Utils/useAsyncDataSuspense",
  component: SwanLogo,
} as Meta<typeof SwanLogo>;

const TestComponent = ({ asyncData }: { asyncData: AsyncData<string> }) => {
  useAsyncDataSuspense(asyncData);

  return asyncData.match({
    NotAsked: () => <h1>Component not asked</h1>,
    Loading: () => <h1>Component loading</h1>,
    Done: value => <h1>{value}</h1>,
  });
};

export const useAsyncDataSuspenseDemos = () => {
  const [refreshCount, setRefreshCount] = useState(0);
  const [state, setState] = useState<AsyncData<string>>(AsyncData.NotAsked());

  return (
    <StoryBlock title="SwanLogo">
      <LakeButtonGroup>
        <LakeButton onPress={() => setRefreshCount(x => x + 1)}>Reset</LakeButton>
        <LakeButton onPress={() => setState(AsyncData.NotAsked())}>NotAsked</LakeButton>
        <LakeButton onPress={() => setState(AsyncData.Loading())}>Loading</LakeButton>
        <LakeButton onPress={() => setState(AsyncData.Done("hello there"))}>Done</LakeButton>
      </LakeButtonGroup>

      <Suspense fallback={<h1>Suspense loading</h1>}>
        <TestComponent asyncData={state} key={refreshCount} />
      </Suspense>
    </StoryBlock>
  );
};
