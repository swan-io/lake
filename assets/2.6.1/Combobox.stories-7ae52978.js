import{S as P,j as E,a as t,L as y}from"./Space-16642e3d.js";import{A as n,P as k}from"./Boxed-b75d14a5.js";import{r as d}from"./index-8db94870.js";import{B as W}from"./index-2e2d325e.js";import{L as S}from"./LakeCombobox-977a8432.js";import{S as B,a as r}from"./_StoriesComponents-ac2eaa00.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./typography-6ad07e3d.js";import"./colors-298625c7.js";import"./useDisclosure-d57b00aa.js";import"./useMergeRefs-a289fe19.js";import"./array-b3630b94.js";import"./Icon-6ca5810a.js";import"./Svg-f5282984.js";import"./LakeTextInput-5aac4905.js";import"./commonStyles-d52fedae.js";import"./Fill-c5fafcfe.js";import"./index-f5419325.js";import"./LoadingView-ccca7632.js";import"./Popover-17fc5f8c.js";import"./useResponsive-771440ea.js";import"./BottomPanel-25a7dea8.js";import"./useBodyClassName-27d97f40.js";import"./math-9e90ab0e.js";import"./FocusTrap-66f24bc0.js";import"./Portal-013c468c.js";import"./index-8ce4a492.js";import"./WithCurrentColor-fdb3671e.js";import"./TransitionView-838d7681.js";import"./index-d9cb5ab3.js";import"./index-bd4a99ad.js";import"./index-a276dfe9.js";const L=P.create({footer:{paddingHorizontal:12}}),lt={title:"Forms/Combobox",component:S},g=m=>{const a=fetch(`https://dummyjson.com/products/search?limit=10&q=${m}`).then(i=>i.json()).then(i=>i.products);return k.fromPromise(a)},e=m=>{const[a,i]=d.useState(null),[p,l]=d.useState(()=>n.NotAsked()),[s,x]=d.useState(""),f=a?a.title:s;return d.useEffect(()=>{if(!s){l(n.NotAsked());return}l(n.Loading());const o=g(s);return o.onResolve(C=>{l(n.Done(C))}),()=>{o.cancel()}},[s]),t(S,{value:f,items:p,onValueChange:o=>{i(null),x(o)},onSelectItem:o=>{l(n.NotAsked()),i(o)},keyExtractor:o=>o.id.toString(),renderItem:o=>t(y,{children:o.title}),emptyResultText:"No result",...m})},c=()=>E(B,{title:"Combobox",children:[t(r,{title:"By default",children:t(e,{})}),t(r,{title:"Is disabled",children:t(e,{disabled:!0})}),t(r,{title:"Is readOnly",children:t(e,{readOnly:!0})}),t(r,{title:"With icon",children:t(e,{icon:"add-circle-regular"})}),t(r,{title:"With placeholder",children:t(e,{placeholder:"Enter a product"})}),t(r,{title:"With error",children:t(e,{placeholder:"An error occurred"})}),t(r,{title:"With Footer Component",children:t(e,{ListFooterComponent:t(W,{direction:"row",justifyContent:"end",style:L.footer,children:t(y,{children:"With footer component"})})})})]});var u,b,h;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Combobox.stories-7ae52978.js.map
