import{S as P,a as E,j as t,L as y}from"./Space-f85095f8.js";import{R as l,M as k}from"./Boxed-885d7854.js";import{r as c}from"./index-b9a8c83f.js";import{B as W}from"./Box-f4fbfbba.js";import{L as S}from"./LakeCombobox-80a67fa7.js";import{S as B,a as e}from"./_StoriesComponents-d9c76764.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./typography-6ad07e3d.js";import"./colors-298625c7.js";import"./useMergeRefs-56399732.js";import"./array-a4405b3e.js";import"./LakeTextInput-221c8734.js";import"./commonStyles-d52fedae.js";import"./Fill-0c0bad9d.js";import"./index-4daf2301.js";import"./LoadingView-406d6625.js";import"./Popover-aa318d2f.js";import"./useResponsive-df79d868.js";import"./function-2aea345a.js";import"./BottomPanel-ac91961d.js";import"./useBodyClassName-4a67c631.js";import"./math-57176261.js";import"./FocusTrap-758e437a.js";import"./TransitionView-5833e7af.js";import"./index-71e0d995.js";import"./index-75f16835.js";import"./index-1a82f3cd.js";const L=P.create({footer:{paddingHorizontal:12}}),rt={title:"Forms/Combobox",component:S},g=a=>{const i=fetch(`https://dummyjson.com/products/search?limit=10&q=${a}`).then(r=>r.json()).then(r=>r.products);return k.fromPromise(i)},n=a=>{const[i,r]=c.useState(null),[p,s]=c.useState(()=>l.NotAsked()),[d,x]=c.useState(""),f=i?i.title:d;return c.useEffect(()=>{if(!d){s(l.NotAsked());return}s(l.Loading());const o=g(d);return o.onResolve(C=>{s(l.Done(C))}),()=>{o.cancel()}},[d]),t(S,{value:f,items:p,onValueChange:o=>{r(null),x(o)},onSelectItem:o=>{s(l.NotAsked()),r(o)},keyExtractor:o=>o.id.toString(),renderItem:o=>t(y,{children:o.title}),emptyResultText:"No result",...a})},m=({icon:a,disabled:i,error:r})=>E(B,{title:"Combobox",children:[t(e,{title:"By default",children:t(n,{icon:a,disabled:i,error:r})}),t(e,{title:"Is disabled",children:t(n,{disabled:!0})}),t(e,{title:"Is readOnly",children:t(n,{readOnly:!0})}),t(e,{title:"With icon",children:t(n,{icon:"add-circle-regular"})}),t(e,{title:"With placeholder",children:t(n,{placeholder:"Enter a product"})}),t(e,{title:"With error",children:t(n,{placeholder:"An error occurred"})}),t(e,{title:"With Footer Component",children:t(n,{ListFooterComponent:t(W,{direction:"row",justifyContent:"end",style:L.footer,children:t(y,{children:"With footer component"})})})})]});var u,b,h;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`({
  icon,
  disabled,
  error
}: StoryArgs) => {
  return <StoryBlock title="Combobox">
      <StoryPart title="By default">
        <EditableCombobox icon={icon} disabled={disabled} error={error} />
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
}`,...(h=(b=m.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const et=["Variations"];export{m as Variations,et as __namedExportsOrder,rt as default};
//# sourceMappingURL=Combobox.stories-1e57134e.js.map
