import { ComponentMeta } from "@storybook/react";
import { AsyncData, Future, Result } from "@swan-io/boxed";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Except } from "type-fest";
import { Box } from "../src/components/Box";
import { LakeCombobox, LakeComboboxProps } from "../src/components/LakeCombobox";
import { LakeText } from "../src/components/LakeText";
import { StoryBlock, StoryPart } from "./_StoriesComponents";

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: 12,
  },
});

export default {
  title: "Forms/Combobox",
  component: LakeCombobox,
} as ComponentMeta<typeof LakeCombobox>;

type ApiResponse = {
  products: ApiProduct[];
  limit: number;
  skip: number;
  total: number;
};

type ApiProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
};

// Load products placeholder from dummyjson.com
const loadFakeProducts = (search: string): Future<Result<ApiProduct[], unknown>> => {
  const promise = fetch(`https://dummyjson.com/products/search?limit=10&q=${search}`)
    .then(response => response.json())
    .then(response => {
      const data = response as ApiResponse;
      return data.products;
    });

  return Future.fromPromise(promise);
};

type EditableComboboxProps = Except<
  LakeComboboxProps<ApiProduct>,
  | "value"
  | "items"
  | "onValueChange"
  | "onSelectItem"
  | "renderItem"
  | "keyExtractor"
  | "emptyResultText"
>;

const EditableCombobox = (props: EditableComboboxProps) => {
  const [selectedProduct, setSelectedProduct] = useState<ApiProduct | null>(null);
  const [data, setData] = useState(() => AsyncData.NotAsked<Result<ApiProduct[], unknown>>());
  const [search, setSearch] = useState("");

  const displayedValue = selectedProduct ? selectedProduct.title : search;

  useEffect(() => {
    if (!search) {
      setData(AsyncData.NotAsked());
      return;
    }
    setData(AsyncData.Loading());
    const products = loadFakeProducts(search);
    products.onResolve(result => {
      setData(AsyncData.Done(result));
    });

    return () => {
      products.cancel();
    };
  }, [search]);

  return (
    <LakeCombobox
      value={displayedValue}
      items={data}
      onValueChange={value => {
        setSelectedProduct(null);
        setSearch(value);
      }}
      onSelectItem={product => {
        setData(AsyncData.NotAsked());
        setSelectedProduct(product);
      }}
      keyExtractor={product => product.id.toString()}
      renderItem={product => <LakeText>{product.title}</LakeText>}
      emptyResultText={"No result"}
      {...props}
    />
  );
};

export const Variations = () => {
  return (
    <StoryBlock title="Combobox">
      <StoryPart title="By default">
        <EditableCombobox />
      </StoryPart>

      <StoryPart title="Is disabled">
        <EditableCombobox disabled={true} />
      </StoryPart>

      <StoryPart title="Is readOnly">
        <EditableCombobox readOnly={true} />
      </StoryPart>

      <StoryPart title="With icon">
        <EditableCombobox icon={"add-circle-regular"} />
      </StoryPart>

      <StoryPart title="With placeholder">
        <EditableCombobox placeholder={"Enter a product"} />
      </StoryPart>

      <StoryPart title="With error">
        <EditableCombobox placeholder={"An error occurred"} />
      </StoryPart>

      <StoryPart title="With Footer Component">
        <EditableCombobox
          ListFooterComponent={
            <Box direction="row" justifyContent="end" style={styles.footer}>
              <LakeText>With footer component</LakeText>
            </Box>
          }
        />
      </StoryPart>
    </StoryBlock>
  );
};
