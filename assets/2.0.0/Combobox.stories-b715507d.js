import{S as P,j as E,a as t,L as y}from"./Space-131d2659.js";import{S as i,R as k}from"./Boxed-504eec90.js";import{r as d}from"./index-f1f749bf.js";import{B as W}from"./index.module-1db6bb3b.js";import{L as S}from"./LakeCombobox-0f4b5ae1.js";import{S as B,a as r}from"./_StoriesComponents-4317655e.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./typography-6ad07e3d.js";import"./colors-298625c7.js";import"./Popover-b5bbefb8.js";import"./useResponsive-3673dcf0.js";import"./BottomPanel-fcd63f37.js";import"./commonStyles-d52fedae.js";import"./useBodyClassName-bd00433d.js";import"./math-28929e20.js";import"./FocusTrap-074e2df6.js";import"./array-ac607f66.js";import"./LoadingView-68568d8b.js";import"./index-6257b084.js";import"./Portal-73206726.js";import"./index-96c5f47c.js";import"./WithCurrentColor-109acf67.js";import"./TransitionView-0a62a35b.js";import"./index-fdb8b60f.js";import"./index-e53aaaa4.js";import"./useMergeRefs-66f03dce.js";import"./Icon-73a40682.js";import"./Svg-2acfd8ba.js";import"./LakeTextInput-9de5dca3.js";import"./Fill-d3a29646.js";import"./index-8ede57ec.js";const L=P.create({footer:{paddingHorizontal:12}}),at={title:"Forms/Combobox",component:S},g=m=>{const a=fetch(`https://dummyjson.com/products/search?limit=10&q=${m}`).then(n=>n.json()).then(n=>n.products);return k.fromPromise(a)},e=m=>{const[a,n]=d.useState(null),[p,l]=d.useState(()=>i.NotAsked()),[s,x]=d.useState(""),f=a?a.title:s;return d.useEffect(()=>{if(!s){l(i.NotAsked());return}l(i.Loading());const o=g(s);return o.onResolve(C=>{l(i.Done(C))}),()=>{o.cancel()}},[s]),t(S,{value:f,items:p,onValueChange:o=>{n(null),x(o)},onSelectItem:o=>{l(i.NotAsked()),n(o)},keyExtractor:o=>o.id.toString(),renderItem:o=>t(y,{children:o.title}),emptyResultText:"No result",...m})},c=()=>E(B,{title:"Combobox",children:[t(r,{title:"By default",children:t(e,{})}),t(r,{title:"Is disabled",children:t(e,{disabled:!0})}),t(r,{title:"Is readOnly",children:t(e,{readOnly:!0})}),t(r,{title:"With icon",children:t(e,{icon:"add-circle-regular"})}),t(r,{title:"With placeholder",children:t(e,{placeholder:"Enter a product"})}),t(r,{title:"With error",children:t(e,{placeholder:"An error occurred"})}),t(r,{title:"With Footer Component",children:t(e,{ListFooterComponent:t(W,{direction:"row",justifyContent:"end",style:L.footer,children:t(y,{children:"With footer component"})})})})]});var u,b,h;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(h=(b=c.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const lt=["Variations"];export{c as Variations,lt as __namedExportsOrder,at as default};
//# sourceMappingURL=Combobox.stories-b715507d.js.map
