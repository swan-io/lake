import{S as P,a as E,j as t,L as y}from"./Space-fea61dc1.js";import{R as i,A as k}from"./Boxed-86465006.js";import{r as d}from"./index-1e572255.js";import{B as W}from"./Box-18e4d182.js";import{L as S}from"./LakeCombobox-68d96ead.js";import{S as B,a as e}from"./_StoriesComponents-c61ff156.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./typography-6ad07e3d.js";import"./colors-298625c7.js";import"./useMergeRefs-2cb962ce.js";import"./array-a4405b3e.js";import"./LakeTextInput-f7f8beb0.js";import"./commonStyles-d52fedae.js";import"./Fill-f1f8d87f.js";import"./index-846fab6f.js";import"./LoadingView-8cf70725.js";import"./Popover-f5262452.js";import"./useResponsive-3b90ff42.js";import"./function-a81f264e.js";import"./BottomPanel-f2941d70.js";import"./useBodyClassName-915b7711.js";import"./math-3ec39c9c.js";import"./FocusTrap-3a947a24.js";import"./TransitionView-399ac58e.js";import"./index-e2dfbcbc.js";import"./index-8725f9cc.js";import"./index-435d577d.js";const L=P.create({footer:{paddingHorizontal:12}}),et={title:"Forms/Combobox",component:S},g=m=>{const a=fetch(`https://dummyjson.com/products/search?limit=10&q=${m}`).then(n=>n.json()).then(n=>n.products);return k.fromPromise(a)},r=m=>{const[a,n]=d.useState(null),[p,l]=d.useState(()=>i.NotAsked()),[s,x]=d.useState(""),f=a?a.title:s;return d.useEffect(()=>{if(!s){l(i.NotAsked());return}l(i.Loading());const o=g(s);return o.onResolve(C=>{l(i.Done(C))}),()=>{o.cancel()}},[s]),t(S,{value:f,items:p,onValueChange:o=>{n(null),x(o)},onSelectItem:o=>{l(i.NotAsked()),n(o)},keyExtractor:o=>o.id.toString(),renderItem:o=>t(y,{children:o.title}),emptyResultText:"No result",...m})},c=()=>E(B,{title:"Combobox",children:[t(e,{title:"By default",children:t(r,{})}),t(e,{title:"Is disabled",children:t(r,{disabled:!0})}),t(e,{title:"Is readOnly",children:t(r,{readOnly:!0})}),t(e,{title:"With icon",children:t(r,{icon:"add-circle-regular"})}),t(e,{title:"With placeholder",children:t(r,{placeholder:"Enter a product"})}),t(e,{title:"With error",children:t(r,{placeholder:"An error occurred"})}),t(e,{title:"With Footer Component",children:t(r,{ListFooterComponent:t(W,{direction:"row",justifyContent:"end",style:L.footer,children:t(y,{children:"With footer component"})})})})]});var u,b,h;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(h=(b=c.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const rt=["Variations"];export{c as Variations,rt as __namedExportsOrder,et as default};
//# sourceMappingURL=Combobox.stories-8edcfb74.js.map
