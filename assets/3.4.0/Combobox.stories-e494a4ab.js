import{S as P,a as E,j as t,L as y}from"./Space-357d3b43.js";import{R as i,A as k}from"./Boxed-86465006.js";import{r as d}from"./index-f1286426.js";import{B as W}from"./commonStyles-e9d52da3.js";import{L as S}from"./LakeCombobox-70281482.js";import{S as B,a as r}from"./_StoriesComponents-9af3c44d.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./typography-6ad07e3d.js";import"./colors-298625c7.js";import"./Pressable-8f5b28c6.js";import"./a11y-e7c88e69.js";import"./LakeTextInput-087b62aa.js";import"./Fill-7b19a408.js";import"./LakeSelect-351f291b.js";import"./useDisclosure-a0ce2208.js";import"./Popover-1019fbef.js";import"./useResponsive-eb215816.js";import"./function-a81f264e.js";import"./BottomPanel-7be47794.js";import"./useBodyClassName-4b4df53c.js";import"./math-676778f1.js";import"./FocusTrap-7beabc5d.js";import"./array-4dd4a51c.js";import"./LoadingView-944473ae.js";import"./index-eaebc258.js";import"./TransitionView-5abd3e7b.js";import"./index-cd35186b.js";import"./index-d5ea1730.js";import"./index-e1a7af4f.js";const L=P.create({footer:{paddingHorizontal:12}}),nt={title:"Forms/Combobox",component:S},g=m=>{const a=fetch(`https://dummyjson.com/products/search?limit=10&q=${m}`).then(n=>n.json()).then(n=>n.products);return k.fromPromise(a)},e=m=>{const[a,n]=d.useState(null),[p,l]=d.useState(()=>i.NotAsked()),[s,x]=d.useState(""),f=a?a.title:s;return d.useEffect(()=>{if(!s){l(i.NotAsked());return}l(i.Loading());const o=g(s);return o.onResolve(C=>{l(i.Done(C))}),()=>{o.cancel()}},[s]),t(S,{value:f,items:p,onValueChange:o=>{n(null),x(o)},onSelectItem:o=>{l(i.NotAsked()),n(o)},keyExtractor:o=>o.id.toString(),renderItem:o=>t(y,{children:o.title}),emptyResultText:"No result",...m})},c=()=>E(B,{title:"Combobox",children:[t(r,{title:"By default",children:t(e,{})}),t(r,{title:"Is disabled",children:t(e,{disabled:!0})}),t(r,{title:"Is readOnly",children:t(e,{readOnly:!0})}),t(r,{title:"With icon",children:t(e,{icon:"add-circle-regular"})}),t(r,{title:"With placeholder",children:t(e,{placeholder:"Enter a product"})}),t(r,{title:"With error",children:t(e,{placeholder:"An error occurred"})}),t(r,{title:"With Footer Component",children:t(e,{ListFooterComponent:t(W,{direction:"row",justifyContent:"end",style:L.footer,children:t(y,{children:"With footer component"})})})})]});var u,b,h;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Combobox.stories-e494a4ab.js.map
