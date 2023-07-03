import{S as P,j as E,a as t,L as y}from"./Space-aa12f50f.js";import{A as n,P as k}from"./Boxed-b75d14a5.js";import{r as d}from"./index-8db94870.js";import{B as W}from"./index-16e654d9.js";import{L as S}from"./LakeCombobox-f88a014b.js";import{S as B,a as r}from"./_StoriesComponents-9e7a188c.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./typography-6ad07e3d.js";import"./colors-298625c7.js";import"./useDisclosure-d57b00aa.js";import"./useMergeRefs-d36e775e.js";import"./array-b3630b94.js";import"./Icon-ac26427e.js";import"./Svg-9d68b501.js";import"./LakeTextInput-5628e3bf.js";import"./commonStyles-d52fedae.js";import"./Fill-d7db11d3.js";import"./index-05836526.js";import"./LoadingView-dcf4cc30.js";import"./Popover-036e8039.js";import"./useResponsive-c1c1e814.js";import"./BottomPanel-2de94b2b.js";import"./useBodyClassName-27d97f40.js";import"./math-f412cddb.js";import"./FocusTrap-5aa1af2d.js";import"./Portal-d34e01ab.js";import"./index-8ce4a492.js";import"./WithCurrentColor-14d3a0e7.js";import"./TransitionView-e2f237a9.js";import"./index-cac754e4.js";import"./index-3994843c.js";import"./index-aa55e596.js";const L=P.create({footer:{paddingHorizontal:12}}),lt={title:"Forms/Combobox",component:S},g=m=>{const a=fetch(`https://dummyjson.com/products/search?limit=10&q=${m}`).then(i=>i.json()).then(i=>i.products);return k.fromPromise(a)},e=m=>{const[a,i]=d.useState(null),[p,l]=d.useState(()=>n.NotAsked()),[s,x]=d.useState(""),f=a?a.title:s;return d.useEffect(()=>{if(!s){l(n.NotAsked());return}l(n.Loading());const o=g(s);return o.onResolve(C=>{l(n.Done(C))}),()=>{o.cancel()}},[s]),t(S,{value:f,items:p,onValueChange:o=>{i(null),x(o)},onSelectItem:o=>{l(n.NotAsked()),i(o)},keyExtractor:o=>o.id.toString(),renderItem:o=>t(y,{children:o.title}),emptyResultText:"No result",...m})},c=()=>E(B,{title:"Combobox",children:[t(r,{title:"By default",children:t(e,{})}),t(r,{title:"Is disabled",children:t(e,{disabled:!0})}),t(r,{title:"Is readOnly",children:t(e,{readOnly:!0})}),t(r,{title:"With icon",children:t(e,{icon:"add-circle-regular"})}),t(r,{title:"With placeholder",children:t(e,{placeholder:"Enter a product"})}),t(r,{title:"With error",children:t(e,{placeholder:"An error occurred"})}),t(r,{title:"With Footer Component",children:t(e,{ListFooterComponent:t(W,{direction:"row",justifyContent:"end",style:L.footer,children:t(y,{children:"With footer component"})})})})]});var u,b,h;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(h=(b=c.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const st=["Variations"];export{c as Variations,st as __namedExportsOrder,lt as default};
//# sourceMappingURL=Combobox.stories-31bc4640.js.map
