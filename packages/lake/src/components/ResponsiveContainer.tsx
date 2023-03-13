import { ReactNode, useCallback, useLayoutEffect, useRef, useState } from "react";
import { LayoutChangeEvent, StyleSheet, View, ViewProps } from "react-native";

const styles = StyleSheet.create({
  hidden: {
    opacity: 0,
  },
});

export type Context = { small: boolean; large: boolean };
type Props = {
  children: (context: Context) => ReactNode;
  style?: ViewProps["style"];
  breakpoint?: number;
};

export const ResponsiveContainer = ({ children, style, breakpoint = 1000 }: Props) => {
  const [isSmall, setIsSmall] = useState<boolean | null>(null);
  const containerRef = useRef<View | null>(null);

  const onLayout = useCallback(
    ({
      nativeEvent: {
        layout: { width },
      },
    }: LayoutChangeEvent) => {
      setIsSmall(() => width < breakpoint);
    },
    [breakpoint],
  );

  useLayoutEffect(() => {
    if (containerRef.current != null) {
      const element = containerRef.current as unknown as HTMLElement;
      setIsSmall(() => element.offsetWidth < breakpoint);
    }
  }, [breakpoint]);

  const isSmallWithDefault = isSmall ?? false;

  return (
    <View
      ref={containerRef}
      onLayout={onLayout}
      style={[style, isSmall == null ? styles.hidden : null]}
    >
      {children({ small: isSmallWithDefault, large: !isSmallWithDefault })}
    </View>
  );
};
