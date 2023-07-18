import{S as P,j as E,a as t,L as y}from"./Space-6d26d64b.js";import{A as n,P as k}from"./Boxed-b75d14a5.js";import{r as d}from"./index-8db94870.js";import{B as W}from"./index-a023e010.js";import{L as S}from"./LakeCombobox-e275721a.js";import{S as B,a as r}from"./_StoriesComponents-d5642f21.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./typography-6ad07e3d.js";import"./colors-298625c7.js";import"./useDisclosure-d57b00aa.js";import"./useMergeRefs-02efd9e3.js";import"./array-b3630b94.js";import"./Icon-be3f4c28.js";import"./Svg-4d5f70b1.js";import"./LakeTextInput-98ba0e1d.js";import"./commonStyles-d52fedae.js";import"./Fill-d9784887.js";import"./index-722457b4.js";import"./LoadingView-5b83beba.js";import"./Popover-39937ec1.js";import"./useResponsive-3ce08de5.js";import"./BottomPanel-27f78f76.js";import"./useBodyClassName-27d97f40.js";import"./math-3b704d86.js";import"./FocusTrap-07f93621.js";import"./Portal-bfcf7103.js";import"./index-8ce4a492.js";import"./WithCurrentColor-ca19b7ee.js";import"./TransitionView-0846e0a5.js";import"./index-245684d0.js";import"./index-022bb208.js";import"./index-2bff1e3b.js";const L=P.create({footer:{paddingHorizontal:12}}),lt={title:"Forms/Combobox",component:S},g=m=>{const a=fetch(`https://dummyjson.com/products/search?limit=10&q=${m}`).then(i=>i.json()).then(i=>i.products);return k.fromPromise(a)},e=m=>{const[a,i]=d.useState(null),[p,l]=d.useState(()=>n.NotAsked()),[s,x]=d.useState(""),f=a?a.title:s;return d.useEffect(()=>{if(!s){l(n.NotAsked());return}l(n.Loading());const o=g(s);return o.onResolve(C=>{l(n.Done(C))}),()=>{o.cancel()}},[s]),t(S,{value:f,items:p,onValueChange:o=>{i(null),x(o)},onSelectItem:o=>{l(n.NotAsked()),i(o)},keyExtractor:o=>o.id.toString(),renderItem:o=>t(y,{children:o.title}),emptyResultText:"No result",...m})},c=()=>E(B,{title:"Combobox",children:[t(r,{title:"By default",children:t(e,{})}),t(r,{title:"Is disabled",children:t(e,{disabled:!0})}),t(r,{title:"Is readOnly",children:t(e,{readOnly:!0})}),t(r,{title:"With icon",children:t(e,{icon:"add-circle-regular"})}),t(r,{title:"With placeholder",children:t(e,{placeholder:"Enter a product"})}),t(r,{title:"With error",children:t(e,{placeholder:"An error occurred"})}),t(r,{title:"With Footer Component",children:t(e,{ListFooterComponent:t(W,{direction:"row",justifyContent:"end",style:L.footer,children:t(y,{children:"With footer component"})})})})]});var u,b,h;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Combobox.stories-17962cbf.js.map
