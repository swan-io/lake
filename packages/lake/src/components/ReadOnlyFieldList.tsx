import { Separator } from "./Separator";
import { isNotNullish } from "../utils/nullish";
import { Children, ReactNode } from "react";
import { View } from "react-native";

type Props = {
  children: ReactNode;
};

export const ReadOnlyFieldList = ({ children }: Props) => (
  <>
    {Children.toArray(children)
      .filter(isNotNullish)
      .map((node, index) => (
        <View key={index}>
          {index !== 0 && <Separator horizontal={false} space={8} />}
          {node}
        </View>
      ))}
  </>
);
