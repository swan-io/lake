import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AsyncData, Future } from "@swan-io/boxed";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Box } from "../src/components/Box";
import { LakeCombobox } from "../src/components/LakeCombobox";
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
};
// Load products placeholder from dummyjson.com
const loadFakeProducts = (search) => {
    const promise = fetch(`https://dummyjson.com/products/search?limit=10&q=${search}`)
        .then(response => response.json())
        .then(response => {
        const data = response;
        return data.products;
    });
    return Future.fromPromise(promise);
};
const EditableCombobox = (props) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [data, setData] = useState(() => AsyncData.NotAsked());
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
    return (_jsx(LakeCombobox, { value: displayedValue, items: data, onValueChange: value => {
            setSelectedProduct(null);
            setSearch(value);
        }, onSelectItem: product => {
            setData(AsyncData.NotAsked());
            setSelectedProduct(product);
        }, keyExtractor: product => product.id.toString(), renderItem: product => _jsx(LakeText, { children: product.title }), emptyResultText: "No result", ...props }));
};
export const Variations = () => {
    return (_jsxs(StoryBlock, { title: "Combobox", children: [_jsx(StoryPart, { title: "By default", children: _jsx(EditableCombobox, {}) }), _jsx(StoryPart, { title: "Is disabled", children: _jsx(EditableCombobox, { disabled: true }) }), _jsx(StoryPart, { title: "Is readOnly", children: _jsx(EditableCombobox, { readOnly: true }) }), _jsx(StoryPart, { title: "With icon", children: _jsx(EditableCombobox, { icon: "add-circle-regular" }) }), _jsx(StoryPart, { title: "With placeholder", children: _jsx(EditableCombobox, { placeholder: "Enter a product" }) }), _jsx(StoryPart, { title: "With error", children: _jsx(EditableCombobox, { placeholder: "An error occurred" }) }), _jsx(StoryPart, { title: "With Footer Component", children: _jsx(EditableCombobox, { ListFooterComponent: _jsx(Box, { direction: "row", justifyContent: "end", style: styles.footer, children: _jsx(LakeText, { children: "With footer component" }) }) }) })] }));
};
