import { Array, Option } from "@swan-io/boxed";
import { Children, ReactNode, useMemo, useReducer, useRef } from "react";
import { AnimationStyles, StyleProp, View, ViewStyle } from "react-native";
import { P, match } from "ts-pattern";
import { usePreviousValue } from "../hooks/usePreviousValue";
import { TransitionView } from "./TransitionView";

type Props = {
  enter?: AnimationStyles;
  leave?: AnimationStyles;
  style?: StyleProp<ViewStyle>;
  childStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
};

export const TransitionGroupView = ({ children, enter, leave, style, childStyle }: Props) => {
  const leavingKeysAndIndicesRef = useRef<{ index: number; key: string }[]>([]);
  const [, forceUpdate] = useReducer(() => [], []);

  const onLeave = (key: string) => {
    leavingKeysAndIndicesRef.current = leavingKeysAndIndicesRef.current.filter(
      leavingKey => leavingKey.key !== key,
    );

    forceUpdate();
  };

  const cleanedUpChildren = useMemo(
    () =>
      Array.filterMap(Children.toArray(children), child =>
        match(child)
          .with({ key: P.string }, child => Option.Some({ key: child.key, child }))
          .otherwise(() => Option.None()),
      ),
    [children],
  );

  const previousChildren = usePreviousValue(cleanedUpChildren);

  const newKeys = new Set(cleanedUpChildren.map(item => item.key));
  leavingKeysAndIndicesRef.current = [
    ...leavingKeysAndIndicesRef.current,
    ...Array.filterMap(
      previousChildren.map((item, index) => ({ item, index })),
      ({ item, index }) =>
        newKeys.has(item.key) ||
        leavingKeysAndIndicesRef.current.find(prev => prev.key === item.key)
          ? Option.None()
          : Option.Some({ key: item.key, index }),
    ),
  ];

  const childrenToRender: { key: string; originalIndex: number; child: ReactNode }[] = [];
  cleanedUpChildren.forEach((item, index) => {
    childrenToRender.push({ key: item.key, originalIndex: index, child: item.child });
  });

  leavingKeysAndIndicesRef.current.forEach(({ index, key }) => {
    const closerIndex = childrenToRender.findIndex(item => item.originalIndex === index);
    if (closerIndex === -1) {
      childrenToRender.push({ key, originalIndex: index, child: null });
    } else {
      childrenToRender.splice(closerIndex, 0, { key, originalIndex: index, child: null });
    }
  });

  return (
    <View style={style}>
      {childrenToRender.map(({ key, child }) => {
        return (
          <TransitionView
            enter={enter}
            leave={leave}
            style={childStyle}
            onLeave={() => onLeave(key)}
            key={key}
          >
            {child}
          </TransitionView>
        );
      })}
    </View>
  );
};
