import { Separator } from "@swan-io/lake/src/components/Separator";
import { isNotNullish } from "@swan-io/lake/src/utils/nullish";
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
