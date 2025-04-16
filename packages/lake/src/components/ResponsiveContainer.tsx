import { ReactNode, useCallback, useLayoutEffect, useRef, useState } from "react";
import { LayoutChangeEvent, StyleSheet, View, ViewProps } from "react-native";
import { Merge } from "type-fest";

const styles = StyleSheet.create({
  hidden: {
    opacity: 0,
  },
});

export type Context = {
  small: boolean;
  large: boolean;
};

type Props = Merge<
  ViewProps,
  {
    breakpoint?: number;
    children: (context: Context) => ReactNode;
  }
>;

export const ResponsiveContainer = ({ breakpoint = 1000, children, style, ...props }: Props) => {
  const containerRef = useRef<View>(null);
  const [small, setSmall] = useState<boolean | null>(null);

  const onLayout = useCallback(
    ({
      nativeEvent: {
        layout: { width },
      },
    }: LayoutChangeEvent) => {
      setSmall(width < breakpoint);
    },
    [breakpoint],
  );

  useLayoutEffect(() => {
    const element = containerRef.current as HTMLElement | null;

    if (element != null) {
      setSmall(element.offsetWidth < breakpoint);
    }
  }, [breakpoint]);

  const isSmallWithDefault = small ?? false;

  return (
    <View
      ref={containerRef}
      onLayout={onLayout}
      style={[style, small == null ? styles.hidden : null]}
      {...props}
    >
      {children({ small: isSmallWithDefault, large: !isSmallWithDefault })}
    </View>
  );
};
