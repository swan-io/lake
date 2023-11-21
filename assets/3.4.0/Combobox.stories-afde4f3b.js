import{S as P,a as E,j as t,L as y}from"./Space-d12e3bfc.js";import{R as i,A as k}from"./Boxed-86465006.js";import{r as d}from"./index-f1286426.js";import{B as W}from"./commonStyles-1ccbee26.js";import{L as S}from"./LakeCombobox-b113e9ec.js";import{S as B,a as r}from"./_StoriesComponents-5f6e9af0.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./typography-6ad07e3d.js";import"./colors-298625c7.js";import"./Pressable-70de31df.js";import"./a11y-e7c88e69.js";import"./LakeTextInput-44f27c67.js";import"./Fill-d9c69daa.js";import"./LakeSelect-13d530db.js";import"./useDisclosure-a0ce2208.js";import"./Popover-78ab83ce.js";import"./useResponsive-2838783c.js";import"./function-a81f264e.js";import"./BottomPanel-16b05758.js";import"./useBodyClassName-4b4df53c.js";import"./math-b41862e6.js";import"./FocusTrap-e6187b75.js";import"./array-4dd4a51c.js";import"./LoadingView-ebbf98a9.js";import"./index-6c4b0b94.js";import"./TransitionView-221dc567.js";import"./index-9e829ad3.js";import"./index-e1411ff8.js";import"./index-6cbbe25a.js";const L=P.create({footer:{paddingHorizontal:12}}),nt={title:"Forms/Combobox",component:S},g=m=>{const a=fetch(`https://dummyjson.com/products/search?limit=10&q=${m}`).then(n=>n.json()).then(n=>n.products);return k.fromPromise(a)},e=m=>{const[a,n]=d.useState(null),[p,l]=d.useState(()=>i.NotAsked()),[s,x]=d.useState(""),f=a?a.title:s;return d.useEffect(()=>{if(!s){l(i.NotAsked());return}l(i.Loading());const o=g(s);return o.onResolve(C=>{l(i.Done(C))}),()=>{o.cancel()}},[s]),t(S,{value:f,items:p,onValueChange:o=>{n(null),x(o)},onSelectItem:o=>{l(i.NotAsked()),n(o)},keyExtractor:o=>o.id.toString(),renderItem:o=>t(y,{children:o.title}),emptyResultText:"No result",...m})},c=()=>E(B,{title:"Combobox",children:[t(r,{title:"By default",children:t(e,{})}),t(r,{title:"Is disabled",children:t(e,{disabled:!0})}),t(r,{title:"Is readOnly",children:t(e,{readOnly:!0})}),t(r,{title:"With icon",children:t(e,{icon:"add-circle-regular"})}),t(r,{title:"With placeholder",children:t(e,{placeholder:"Enter a product"})}),t(r,{title:"With error",children:t(e,{placeholder:"An error occurred"})}),t(r,{title:"With Footer Component",children:t(e,{ListFooterComponent:t(W,{direction:"row",justifyContent:"end",style:L.footer,children:t(y,{children:"With footer component"})})})})]});var u,b,h;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Combobox.stories-afde4f3b.js.map
