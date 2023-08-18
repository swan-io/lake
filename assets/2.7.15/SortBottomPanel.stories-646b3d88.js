import{S as B,f as h,a as o,j as e,V,I as S,c,b as l,L as p,F as k}from"./Space-f85095f8.js";import{r as y}from"./index-b9a8c83f.js";import{a as v}from"./LakeButton-e8594097.js";import{c as D}from"./commonStyles-d52fedae.js";import{B as _}from"./BottomPanel-ac91961d.js";import{L as T}from"./LakeHeading-8971a458.js";import{L as g}from"./LakeRadio-508896ba.js";import{P as b}from"./Pressable-7e9fd84c.js";import{b as A,S as O,a as q}from"./_StoriesComponents-d9c76764.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./index-4daf2301.js";import"./useBodyClassName-4a67c631.js";import"./math-57176261.js";import"./FocusTrap-758e437a.js";import"./array-a4405b3e.js";import"./LoadingView-406d6625.js";import"./colors-298625c7.js";import"./TransitionView-5833e7af.js";import"./index-71e0d995.js";import"./index-75f16835.js";import"./useMergeRefs-56399732.js";import"./Box-f4fbfbba.js";const n=B.create({head:{padding:24,paddingBottom:12},option:{display:"flex",flexDirection:"row",alignItems:"center",paddingHorizontal:h[24],paddingVertical:h[12]},arrowDown:{transform:"rotate(180deg)"},text:{...D.fill}}),u=({visible:d,title:f,value:t,fields:s,onChange:a,onClose:i})=>o(_,{visible:d,onPressClose:i,children:[e(V,{style:n.head,children:e(T,{level:3,variant:"h3",children:f})}),s.map((r,w)=>o(y.Fragment,{children:[o(b,{style:n.option,onPress:()=>{a({field:r.name,direction:"Asc"}),i()},children:[e(S,{name:"arrow-up-filled",size:12,color:c.gray[600],style:n.arrowDown}),e(l,{width:12}),e(p,{variant:"smallRegular",color:c.gray[600],style:n.text,children:r.ascLabel}),e(l,{width:16}),e(g,{value:(t==null?void 0:t.field)===r.name&&t.direction==="Asc"})]}),o(b,{style:n.option,onPress:()=>{a({field:r.name,direction:"Desc"}),i()},children:[e(S,{name:"arrow-up-filled",size:12,color:c.gray[600]}),e(l,{width:12}),e(p,{variant:"smallRegular",color:c.gray[600],style:n.text,children:r.descLabel}),e(l,{width:16}),e(g,{value:(t==null?void 0:t.field)===r.name&&t.direction==="Desc"})]}),w<s.length-1&&e(A,{})]},r.name)),e(l,{height:12})]});try{u.displayName="SortBottomPanel",u.__docgenInfo={description:"",displayName:"SortBottomPanel",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"SortField<T>[]"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"SortValue<T> | undefined"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: SortValue<T>) => void"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}const C=B.create({button:{alignSelf:"flex-start"}}),ne={title:"Forms/SortBottomPanel",component:u},F=[{name:"status",ascLabel:"Status: A-Z",descLabel:"Status: Z-A"},{name:"type",ascLabel:"Type: A-Z",descLabel:"Type: Z-A"},{name:"amount",ascLabel:"Amount: lowest to highest",descLabel:"Amount: highest to lowest"},{name:"executionDate",ascLabel:"Execution date: oldest to newest",descLabel:"Execution date: newest to oldest"}],m=({visible:d,title:f})=>{const[t,s]=y.useState(!1),[a,i]=y.useState();return e(O,{title:"SortBottomPanel",children:o(q,{title:"Default",children:[e(v,{style:C.button,onPress:()=>s(!0),children:"Open sort panel"}),e(l,{height:24}),a!=null&&o(k,{children:[o(p,{children:["Sort by: ",a.field]}),o(p,{children:["Direction: ",a.direction]})]}),e(u,{visible:d,title:f,fields:F,value:a,onChange:i,onClose:()=>s(!1)})]})})};var L,x,P;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`({
  visible,
  title
}: StoryArgs) => {
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState<SortValue<FieldName> | undefined>();
  return <StoryBlock title="SortBottomPanel">
      <StoryPart title="Default">
        <LakeButton style={styles.button} onPress={() => setOpened(true)}>
          Open sort panel
        </LakeButton>

        <Space height={24} />

        {value != null && <>
            <LakeText>Sort by: {value.field}</LakeText>
            <LakeText>Direction: {value.direction}</LakeText>
          </>}

        <SortBottomPanel visible={visible} title={title} fields={fields} value={value} onChange={setValue} onClose={() => setOpened(false)} />
      </StoryPart>
    </StoryBlock>;
}`,...(P=(x=m.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};const le=["Default"];export{m as Default,le as __namedExportsOrder,ne as default};
//# sourceMappingURL=SortBottomPanel.stories-646b3d88.js.map
