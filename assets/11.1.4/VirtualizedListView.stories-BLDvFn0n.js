import{j as e}from"./jsx-runtime-BlAj40OV.js";import{r as i}from"./index-Cs7sjTYM.js";import{s as X,V as $,I as ee,c as te,S as o,L as re,B as se}from"./ScrollView-DAMcnhPN.js";import{a as M,V as ie,H as n,T as f,L as S,C as oe}from"./VirtualizedList-7OR1j5Eb.js";import{B as ne}from"./BorderedIcon-SIIVRc23.js";import{L as ae}from"./LakeHeading-XXdKUg9r.js";import{L as d}from"./LakeButton-BsRwrvH_.js";import{a as V}from"./LakeCheckbox-NWcPwlVL.js";import{P as le}from"./Pressable-8N6ahZPW.js";import{T as w}from"./Tag-BsNIDiwk.js";import{v as de}from"./v4-DvF23Exx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DJFdew98.js";import"./commonStyles-CWvHnKRn.js";import"./index-CJghV6hQ.js";import"./extends-CF3RwP-h.js";import"./index-Cp2lnEJT.js";const ce=X.create({emptyList:{flexDirection:"column",alignItems:"center",justifyContent:"center"}}),W=({icon:s,borderedIcon:j=!1,borderedIconPadding:k,title:x,subtitle:g,children:a})=>e.jsxs($,{style:ce.emptyList,children:[j?e.jsx(ne,{name:s,padding:k}):e.jsx(ee,{name:s,size:96,color:te.current.primary}),e.jsx(o,{height:24}),x!=null?e.jsxs(e.Fragment,{children:[e.jsx(ae,{align:"center",level:3,variant:"h5",children:x}),e.jsx(o,{height:8})]}):null,g!=null&&e.jsx(re,{align:"center",children:g}),a]});W.__docgenInfo={description:"",methods:[],displayName:"EmptyView",props:{icon:{required:!0,tsType:{name:"unknown"},description:""},borderedIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},borderedIconPadding:{required:!1,tsType:{name:"union",raw:"SpacingValue | 0",elements:[{name:"unknown[number]",raw:"(typeof spacingValues)[number]"},{name:"literal",value:"0"}]},description:""},title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const Ie={title:"Layout/VirtualizedList",component:M},me=({id:s})=>s,ue=()=>{const s=["Matthias","John","Jane","Camille","Charlotte","Francis","Émilie","François","Laura","Marie","Natasha","Nicolas","Pierre","Thomas","Valérie","Yann","Zoé","Jérôme","Thomas"];return s[Math.floor(Math.random()*s.length)]??s[0]},c=()=>({id:de(),name:ue()}),T=({few:s=!1})=>{const[j,k]=i.useState({key:"name",order:"Desc"}),[x,g]=i.useState(0),[a,J]=i.useState(!1),[C,b]=i.useState(!1),[P,O]=i.useState(!1),[Y,l]=i.useState(()=>Array.from({length:20},r=>c())),Z=i.useCallback(()=>{g(r=>r+1),a&&b(!0)},[a]);i.useEffect(()=>{if(C){const r=setTimeout(()=>{b(!1),l(y=>[...y,...Array.from({length:20},U=>c())])},1e3);return()=>clearTimeout(r)}});const{stickedToStartColumns:G,columns:K,stickedToEndColumns:Q}=i.useMemo(()=>{const r=[{width:300,id:"name",title:"Name",renderTitle:({title:t,extraInfo:L,id:E})=>e.jsx(n,{text:t,sort:L.key===E?L.order:void 0,onPress:()=>k({key:E,order:L.order==="Desc"?"Asc":"Desc"})}),renderCell:({item:{name:t}})=>e.jsx(f,{variant:"medium",text:t})}],y=[{width:s?300:500,id:"event_id",title:"Event ID",renderTitle:({title:t})=>e.jsx(n,{text:t}),renderCell:({item:{id:t}})=>e.jsx(f,{text:t})},...s?[]:[{width:150,id:"link_before",title:"Link before",renderTitle:({title:t})=>e.jsx(n,{text:t}),renderCell:()=>e.jsx(S,{onPress:()=>{},buttonPosition:"start",children:e.jsx(w,{color:"shakespear",children:"Demo link"})})},{width:500,id:"onboarding_id",title:"Onboarding ID",renderTitle:({title:t})=>e.jsx(n,{text:t}),renderCell:({item:{id:t}})=>e.jsx(f,{text:t})},{width:150,id:"link_after",title:"Link after",renderTitle:({title:t})=>e.jsx(n,{text:t}),renderCell:()=>e.jsx(S,{onPress:()=>{},buttonPosition:"end",children:e.jsx(w,{color:"shakespear",children:"Demo link"})})},{width:500,id:"account_id",title:"Account ID",renderTitle:({title:t})=>e.jsx(n,{text:t}),renderCell:({item:{id:t}})=>e.jsx(f,{text:t})}]];return{stickedToStartColumns:r,columns:y,stickedToEndColumns:[{width:72,id:"dot",title:"Settings",renderTitle:()=>e.jsx(n,{text:"End",align:"right"}),renderCell:()=>e.jsx(oe,{align:"right",children:e.jsx(d,{mode:"tertiary",icon:"chevron-right-filled",ariaLabel:"test",size:"small"})})}]}},[s]);return e.jsxs(e.Fragment,{children:[e.jsxs(se,{direction:"row",alignItems:"center",children:[e.jsx(d,{icon:"add-circle-filled",color:"live",size:"small",onPress:()=>l(r=>[c(),...r]),children:"Prepend"}),e.jsx(o,{width:16}),e.jsx(d,{icon:"add-circle-filled",color:"live",size:"small",onPress:()=>l(r=>[...r.slice(0,1),c(),...r.slice(1)]),children:"Insert in 2nd"}),e.jsx(o,{width:16}),e.jsx(d,{icon:"add-circle-filled",color:"live",size:"small",onPress:()=>l(r=>[...r,c()]),children:"Append"}),e.jsx(o,{width:16}),e.jsx(d,{icon:"delete-filled",color:"negative",size:"small",onPress:()=>l([]),children:"Clear"}),e.jsx(o,{width:16}),e.jsxs(w,{label:"End reached",children:[x," times"]}),e.jsx(o,{width:16}),e.jsx(V,{label:"With infinite scroll",value:a,onValueChange:J}),e.jsx(o,{width:16}),e.jsx(V,{label:"Force loading state",value:P,onValueChange:O})]}),e.jsx(o,{height:16}),e.jsx(M,{variant:"default",extraInfo:j,keyExtractor:me,data:Y,stickedToStartColumns:G,columns:K,stickedToEndColumns:Q,rowHeight:48,headerHeight:48,onEndReached:Z,onEndReachedThreshold:300,renderEmptyList:()=>e.jsx(W,{icon:"lake-inbox-empty",title:"Nothing to see here"}),getRowLink:r=>e.jsx(le,{onPress:()=>console.log(r.item)}),loading:{isLoading:P||C,count:20}})]})},m=()=>e.jsx(T,{}),u=()=>e.jsx(T,{}),h=()=>e.jsx(T,{few:!0}),p=()=>e.jsx(ie,{rowHeight:48,headerHeight:48,count:3});m.__docgenInfo={description:"",methods:[],displayName:"Primary"};u.__docgenInfo={description:"",methods:[],displayName:"WithoutBackground"};h.__docgenInfo={description:"",methods:[],displayName:"FewColumn"};p.__docgenInfo={description:"",methods:[],displayName:"Placeholder"};var I,_,v;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <EditableVirtualizedList />;
}`,...(v=(_=m.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var z,N,F;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <EditableVirtualizedList />;
}`,...(F=(N=u.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var D,H,R;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <EditableVirtualizedList few={true} />;
}`,...(R=(H=h.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var B,q,A;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <VirtualizedListPlaceholder rowHeight={48} headerHeight={48} count={3} />;
}`,...(A=(q=p.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const _e=["Primary","WithoutBackground","FewColumn","Placeholder"];export{h as FewColumn,p as Placeholder,m as Primary,u as WithoutBackground,_e as __namedExportsOrder,Ie as default};
//# sourceMappingURL=VirtualizedListView.stories-BLDvFn0n.js.map
