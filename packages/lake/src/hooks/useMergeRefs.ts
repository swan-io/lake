// https://github.com/necolas/react-native-web/blob/0.19.1/packages/react-native-web/src/modules/useMergeRefs/index.js
// https://github.com/theKashey/use-callback-ref (for typing)

import { MutableRefObject, Ref } from "react";
// @ts-expect-error
import originalUseMergeRefs from "react-native-web/dist/cjs/modules/useMergeRefs";

export const useMergeRefs = originalUseMergeRefs as <T>(
  ...refs: Ref<T>[]
) => MutableRefObject<T | null>;
