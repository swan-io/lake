import{j as e}from"./jsx-runtime-8P-18mTY.js";import{r as u}from"./index-Cs7sjTYM.js";import{L as v}from"./LakeButton-7R4HcWD2.js";import{V as T,s as L,I as g,c as l,S as a,L as d,h as x}from"./ScrollView-OW9YrWpj.js";import{c as k}from"./commonStyles-BBEkV6IC.js";import{B as D}from"./BottomPanel-CqQOq5mm.js";import{L as P}from"./LakeHeading-BsH-k9DS.js";import{L as f}from"./LakeRadio-CAGWjfhp.js";import{P as h}from"./Pressable-BgkE3IIw.js";import{S as B}from"./Separator-B2blNt6N.js";import{S as q,a as A}from"./_StoriesComponents-BzsKLpLG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-NvW6Cuj0.js";import"./extends-CF3RwP-h.js";import"./index-BKZjgRaT.js";import"./useBodyClassName-DMoYUPTW.js";import"./FocusTrap-Bi-z6_0r.js";import"./array-BfAlyugE.js";import"./Suspendable-Ch58a_mV.js";import"./TransitionView-CixVm079.js";import"./index-BcBU-lwX.js";const n=L.create({head:{padding:24,paddingBottom:12},option:{display:"flex",flexDirection:"row",alignItems:"center",paddingHorizontal:x[24],paddingVertical:x[12]},arrowDown:{transform:"rotate(180deg)"},text:{...k.fill}}),p=({visible:c,title:o,value:t,fields:i,onChange:y,onClose:m})=>e.jsxs(D,{visible:c,onPressClose:m,children:[e.jsx(T,{style:n.head,children:e.jsx(P,{level:3,variant:"h3",children:o})}),i.map((r,w)=>e.jsxs(u.Fragment,{children:[e.jsxs(h,{style:n.option,onPress:()=>{y({field:r.name,direction:"Asc"}),m()},children:[e.jsx(g,{name:"arrow-up-filled",size:12,color:l.gray[600],style:n.arrowDown}),e.jsx(a,{width:12}),e.jsx(d,{variant:"smallRegular",color:l.gray[600],style:n.text,children:r.ascLabel}),e.jsx(a,{width:16}),e.jsx(f,{value:(t==null?void 0:t.field)===r.name&&t.direction==="Asc"})]}),e.jsxs(h,{style:n.option,onPress:()=>{y({field:r.name,direction:"Desc"}),m()},children:[e.jsx(g,{name:"arrow-up-filled",size:12,color:l.gray[600]}),e.jsx(a,{width:12}),e.jsx(d,{variant:"smallRegular",color:l.gray[600],style:n.text,children:r.descLabel}),e.jsx(a,{width:16}),e.jsx(f,{value:(t==null?void 0:t.field)===r.name&&t.direction==="Desc"})]}),w<i.length-1&&e.jsx(B,{})]},r.name)),e.jsx(a,{height:12})]});p.__docgenInfo={description:"",methods:[],displayName:"SortBottomPanel",props:{visible:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"string"},description:""},fields:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: T;
  ascLabel: string;
  descLabel: string;
}`,signature:{properties:[{key:"name",value:{name:"T",required:!0}},{key:"ascLabel",value:{name:"string",required:!0}},{key:"descLabel",value:{name:"string",required:!0}}]}}],raw:"SortField<T>[]"},description:""},value:{required:!0,tsType:{name:"union",raw:"SortValue<T> | undefined",elements:[{name:"signature",type:"object",raw:`{
  field: T;
  direction: SortDirection;
}`,signature:{properties:[{key:"field",value:{name:"T",required:!0}},{key:"direction",value:{name:"union",raw:'"Asc" | "Desc"',elements:[{name:"literal",value:'"Asc"'},{name:"literal",value:'"Desc"'}],required:!0}}]}},{name:"undefined"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: SortValue<T>) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  field: T;
  direction: SortDirection;
}`,signature:{properties:[{key:"field",value:{name:"T",required:!0}},{key:"direction",value:{name:"union",raw:'"Asc" | "Desc"',elements:[{name:"literal",value:'"Asc"'},{name:"literal",value:'"Desc"'}],required:!0}}]}},name:"value"}],return:{name:"void"}}},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const V=L.create({button:{alignSelf:"flex-start"}}),te={title:"Forms/SortBottomPanel",component:p},O=[{name:"status",ascLabel:"Status: A-Z",descLabel:"Status: Z-A"},{name:"type",ascLabel:"Type: A-Z",descLabel:"Type: Z-A"},{name:"amount",ascLabel:"Amount: lowest to highest",descLabel:"Amount: highest to lowest"},{name:"executionDate",ascLabel:"Execution date: oldest to newest",descLabel:"Execution date: newest to oldest"}],s=()=>{const[c,o]=u.useState(!1),[t,i]=u.useState();return e.jsx(q,{title:"SortBottomPanel",children:e.jsxs(A,{title:"Default",children:[e.jsx(v,{style:V.button,onPress:()=>o(!0),children:"Open sort panel"}),e.jsx(a,{height:24}),t!=null&&e.jsxs(e.Fragment,{children:[e.jsxs(d,{children:["Sort by: ",t.field]}),e.jsxs(d,{children:["Direction: ",t.direction]})]}),e.jsx(p,{visible:c,title:"Sort by",fields:O,value:t,onChange:i,onClose:()=>o(!1)})]})})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};var S,j,b;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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

        <SortBottomPanel visible={opened} title="Sort by" fields={fields} value={value} onChange={setValue} onClose={() => setOpened(false)} />
      </StoryPart>
    </StoryBlock>;
}`,...(b=(j=s.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const re=["Default"];export{s as Default,re as __namedExportsOrder,te as default};
//# sourceMappingURL=SortBottomPanel.stories-DkJ6zFZa.js.map
