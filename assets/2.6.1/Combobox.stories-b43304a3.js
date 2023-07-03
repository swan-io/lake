import{S as P,j as E,a as t,L as y}from"./Space-6f0c4dd5.js";import{A as n,P as k}from"./Boxed-b75d14a5.js";import{r as d}from"./index-8db94870.js";import{B as W}from"./index-7bb7e74f.js";import{L as S}from"./LakeCombobox-f07f1a9c.js";import{S as B,a as r}from"./_StoriesComponents-86b8487a.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./typography-6ad07e3d.js";import"./colors-298625c7.js";import"./useDisclosure-d57b00aa.js";import"./useMergeRefs-bb611a37.js";import"./array-b3630b94.js";import"./Icon-720e3365.js";import"./Svg-1fea6763.js";import"./LakeTextInput-f6a81bcf.js";import"./commonStyles-d52fedae.js";import"./Fill-792a82d2.js";import"./index-5f63a2ad.js";import"./LoadingView-4d4a8385.js";import"./Popover-35298467.js";import"./useResponsive-40e9d90b.js";import"./BottomPanel-1bdf57e9.js";import"./useBodyClassName-27d97f40.js";import"./math-9e02f97c.js";import"./FocusTrap-65df7164.js";import"./Portal-21a784c3.js";import"./index-8ce4a492.js";import"./WithCurrentColor-5e30f7fd.js";import"./TransitionView-c438684e.js";import"./index-677ce573.js";import"./index-ab02c4a4.js";import"./index-e30a15ba.js";const L=P.create({footer:{paddingHorizontal:12}}),lt={title:"Forms/Combobox",component:S},g=m=>{const a=fetch(`https://dummyjson.com/products/search?limit=10&q=${m}`).then(i=>i.json()).then(i=>i.products);return k.fromPromise(a)},e=m=>{const[a,i]=d.useState(null),[p,l]=d.useState(()=>n.NotAsked()),[s,x]=d.useState(""),f=a?a.title:s;return d.useEffect(()=>{if(!s){l(n.NotAsked());return}l(n.Loading());const o=g(s);return o.onResolve(C=>{l(n.Done(C))}),()=>{o.cancel()}},[s]),t(S,{value:f,items:p,onValueChange:o=>{i(null),x(o)},onSelectItem:o=>{l(n.NotAsked()),i(o)},keyExtractor:o=>o.id.toString(),renderItem:o=>t(y,{children:o.title}),emptyResultText:"No result",...m})},c=()=>E(B,{title:"Combobox",children:[t(r,{title:"By default",children:t(e,{})}),t(r,{title:"Is disabled",children:t(e,{disabled:!0})}),t(r,{title:"Is readOnly",children:t(e,{readOnly:!0})}),t(r,{title:"With icon",children:t(e,{icon:"add-circle-regular"})}),t(r,{title:"With placeholder",children:t(e,{placeholder:"Enter a product"})}),t(r,{title:"With error",children:t(e,{placeholder:"An error occurred"})}),t(r,{title:"With Footer Component",children:t(e,{ListFooterComponent:t(W,{direction:"row",justifyContent:"end",style:L.footer,children:t(y,{children:"With footer component"})})})})]});var u,b,h;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Combobox.stories-b43304a3.js.map
