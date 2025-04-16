// https://github.com/necolas/react-native-web/blob/0.20.0/packages/react-native-web/src/modules/useMergeRefs/index.js

import { Ref } from "react";
// @ts-expect-error
import originalUseMergeRefs from "react-native-web/dist/cjs/modules/useMergeRefs";

export const useMergeRefs = originalUseMergeRefs as <T>(...refs: (Ref<T> | undefined)[]) => Ref<T>;
