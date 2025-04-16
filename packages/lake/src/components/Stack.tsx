import { Children, Fragment, Ref } from "react";
import { View } from "react-native";
import { isNullish } from "../utils/nullish";
import { Box, BoxProps } from "./Box";
import { Space, SpacingValue } from "./Space";

type Props = BoxProps & {
  ref?: Ref<View>;
  space?: SpacingValue;
};

// Default <View /> styles https://github.com/necolas/react-native-web/blob/0.20.0/packages/react-native-web/src/exports/View/index.js#L149
export const Stack = ({ ref, children, space, ...props }: Props) => {
  const { direction = "column" } = props;
  const horizontal = direction === "row" || direction === "rowReverse";

  return (
    <Box ref={ref} {...props}>
      {Children.map(children, (child, index) => {
        // null, undefined, true and false are valid children. They simply don’t render
        if (isNullish(child) || typeof child === "boolean") {
          return child;
        }

        return (
          <Fragment>
            {index !== 0 && (horizontal ? <Space width={space} /> : <Space height={space} />)}
            {child}
          </Fragment>
        );
      })}
    </Box>
  );
};
