import { Children, forwardRef, Fragment } from "react";
import { View } from "react-native";
import { isNullish } from "../utils/nullish";
import { Box, BoxProps } from "./Box";
import { Space, SpacingValue } from "./Space";

type Props = BoxProps & {
  space?: SpacingValue;
};

export const Stack = forwardRef<View, Props>(
  // Default <View /> styles https://github.com/necolas/react-native-web/blob/0.19.10/packages/react-native-web/src/exports/View/index.js#L146
  ({ children, space, ...props }, forwardedRef) => {
    const { direction = "column" } = props;
    const horizontal = direction === "row" || direction === "rowReverse";

    return (
      <Box ref={forwardedRef} {...props}>
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
  },
);
