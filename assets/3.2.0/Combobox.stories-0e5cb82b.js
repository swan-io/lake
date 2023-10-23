import{S as P,a as E,j as t,L as y}from"./Space-dba27b92.js";import{R as i,A as k}from"./Boxed-86465006.js";import{r as d}from"./index-f1286426.js";import{B as W}from"./commonStyles-42a4f97c.js";import{L as S}from"./LakeCombobox-3a93c4ce.js";import{S as B,a as r}from"./_StoriesComponents-3cc488e2.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./typography-6ad07e3d.js";import"./colors-298625c7.js";import"./Pressable-20b32eda.js";import"./a11y-e7c88e69.js";import"./LakeTextInput-bf88f81b.js";import"./Fill-e938b4c1.js";import"./LakeSelect-d9f7eed7.js";import"./useDisclosure-a0ce2208.js";import"./Popover-37204331.js";import"./useResponsive-c5d6bc67.js";import"./function-a81f264e.js";import"./BottomPanel-de831ede.js";import"./useBodyClassName-4b4df53c.js";import"./math-15178691.js";import"./FocusTrap-b85d66d4.js";import"./array-4dd4a51c.js";import"./LoadingView-935232a8.js";import"./index-7f82ccac.js";import"./TransitionView-81a4e627.js";import"./index-35c6183c.js";import"./index-7af8ab58.js";import"./index-1e262cdd.js";const L=P.create({footer:{paddingHorizontal:12}}),nt={title:"Forms/Combobox",component:S},g=m=>{const a=fetch(`https://dummyjson.com/products/search?limit=10&q=${m}`).then(n=>n.json()).then(n=>n.products);return k.fromPromise(a)},e=m=>{const[a,n]=d.useState(null),[p,l]=d.useState(()=>i.NotAsked()),[s,x]=d.useState(""),f=a?a.title:s;return d.useEffect(()=>{if(!s){l(i.NotAsked());return}l(i.Loading());const o=g(s);return o.onResolve(C=>{l(i.Done(C))}),()=>{o.cancel()}},[s]),t(S,{value:f,items:p,onValueChange:o=>{n(null),x(o)},onSelectItem:o=>{l(i.NotAsked()),n(o)},keyExtractor:o=>o.id.toString(),renderItem:o=>t(y,{children:o.title}),emptyResultText:"No result",...m})},c=()=>E(B,{title:"Combobox",children:[t(r,{title:"By default",children:t(e,{})}),t(r,{title:"Is disabled",children:t(e,{disabled:!0})}),t(r,{title:"Is readOnly",children:t(e,{readOnly:!0})}),t(r,{title:"With icon",children:t(e,{icon:"add-circle-regular"})}),t(r,{title:"With placeholder",children:t(e,{placeholder:"Enter a product"})}),t(r,{title:"With error",children:t(e,{placeholder:"An error occurred"})}),t(r,{title:"With Footer Component",children:t(e,{ListFooterComponent:t(W,{direction:"row",justifyContent:"end",style:L.footer,children:t(y,{children:"With footer component"})})})})]});var u,b,h;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <StoryBlock title="Combobox">
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
        <EditableCombobox ListFooterComponent={<Box direction="row" justifyContent="end" style={styles.footer}>
              <LakeText>With footer component</LakeText>
            </Box>} />
      </StoryPart>
    </StoryBlock>;
}`,...(h=(b=c.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const it=["Variations"];export{c as Variations,it as __namedExportsOrder,nt as default};
//# sourceMappingURL=Combobox.stories-0e5cb82b.js.map
