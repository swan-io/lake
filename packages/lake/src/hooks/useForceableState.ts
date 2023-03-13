// https://github.com/necolas/react-native-web/blob/0.17.5/packages/react-native-web/src/exports/Pressable/index.js#L220

import { useState } from "react";

export const useForceableState = (forced: boolean): [boolean, (value: boolean) => void] => {
  const [value, setValue] = useState(false);
  return [value || forced, setValue];
};
