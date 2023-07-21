import{S as P,a as E,j as t,L as y}from"./Space-214db1c8.js";import{A as n,P as k}from"./Boxed-b75d14a5.js";import{r as d}from"./index-76fb7be0.js";import{B as W}from"./index-138dbb7e.js";import{L as S}from"./LakeCombobox-63b7fa01.js";import{S as B,a as r}from"./_StoriesComponents-33e68854.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./typography-6ad07e3d.js";import"./colors-298625c7.js";import"./useDisclosure-7f76af53.js";import"./useMergeRefs-40bc824f.js";import"./array-a4405b3e.js";import"./Icon-2e5bd8c7.js";import"./Svg-7c23e230.js";import"./LakeTextInput-e7db2422.js";import"./commonStyles-d52fedae.js";import"./Fill-849e8e0e.js";import"./index-0a0fd497.js";import"./LoadingView-58629142.js";import"./Popover-0de1602f.js";import"./useResponsive-9a79a8b7.js";import"./BottomPanel-0997d181.js";import"./useBodyClassName-ecbe623a.js";import"./math-51b9b065.js";import"./FocusTrap-560da67b.js";import"./Portal-70b25019.js";import"./index-d3ea75b5.js";import"./WithCurrentColor-f9ff4300.js";import"./TransitionView-616a182f.js";import"./index-d99cb566.js";import"./index-9d3f10b3.js";import"./index-c808a41c.js";const L=P.create({footer:{paddingHorizontal:12}}),lt={title:"Forms/Combobox",component:S},g=m=>{const a=fetch(`https://dummyjson.com/products/search?limit=10&q=${m}`).then(i=>i.json()).then(i=>i.products);return k.fromPromise(a)},e=m=>{const[a,i]=d.useState(null),[p,l]=d.useState(()=>n.NotAsked()),[s,x]=d.useState(""),f=a?a.title:s;return d.useEffect(()=>{if(!s){l(n.NotAsked());return}l(n.Loading());const o=g(s);return o.onResolve(C=>{l(n.Done(C))}),()=>{o.cancel()}},[s]),t(S,{value:f,items:p,onValueChange:o=>{i(null),x(o)},onSelectItem:o=>{l(n.NotAsked()),i(o)},keyExtractor:o=>o.id.toString(),renderItem:o=>t(y,{children:o.title}),emptyResultText:"No result",...m})},c=()=>E(B,{title:"Combobox",children:[t(r,{title:"By default",children:t(e,{})}),t(r,{title:"Is disabled",children:t(e,{disabled:!0})}),t(r,{title:"Is readOnly",children:t(e,{readOnly:!0})}),t(r,{title:"With icon",children:t(e,{icon:"add-circle-regular"})}),t(r,{title:"With placeholder",children:t(e,{placeholder:"Enter a product"})}),t(r,{title:"With error",children:t(e,{placeholder:"An error occurred"})}),t(r,{title:"With Footer Component",children:t(e,{ListFooterComponent:t(W,{direction:"row",justifyContent:"end",style:L.footer,children:t(y,{children:"With footer component"})})})})]});var u,b,h;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Combobox.stories-deb5f538.js.map
