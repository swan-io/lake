import { Children, forwardRef, Fragment } from "react";
import { StyleSheet, View } from "react-native";
import { isNullish } from "../utils/nullish";
import { Box, BoxProps } from "./Box";
import { Space, SpacingValue } from "./Space";

type Props = BoxProps & {
  space?: SpacingValue;
  wrap?: boolean;
};

const styles = StyleSheet.create({
  wrap: {
    flexWrap: "wrap",
  },
});

export const Stack = forwardRef<View, Props>(
  // Default <View /> styles https://github.com/necolas/react-native-web/blob/0.17.5/packages/react-native-web/src/exports/View/index.js#L133
  ({ children, space, wrap = false, ...props }, forwardedRef) => {
    const { direction = "column" } = props;
    const horizontal = direction === "row" || direction === "rowReverse";

    return (
      <Box style={wrap && styles.wrap} ref={forwardedRef} {...props}>
        {Children.map(children, (child, index) => {
          if (isNullish(child)) {
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
