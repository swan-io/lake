import{j as e,B as z,S as n}from"./Space-B3r5-oVe.js";import{r}from"./index-CBqU2yxZ.js";import{F as v,a as G,b as K,C as Q,S as s,c as U,d as c,L as C}from"./FixedListViewCells-B1uqi-N8.js";import{L as S}from"./LakeButton-DGcntlYI.js";import{a as T}from"./LakeCheckbox-BzSqmm9Y.js";import{T as x}from"./Tag-DYlKOtCq.js";import{v as X}from"./v4-D8aEg3BZ.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./a11y-DXvpDVrG.js";import"./array-rjEBP2Ry.js";import"./function-CeKWsOk8.js";import"./BorderedIcon-Byv6x9wK.js";import"./LakeHeading-m6ascaUo.js";import"./commonStyles-t4XfA7cz.js";import"./Pressable-xe9FSwv7.js";import"./index-Cve1gofG.js";import"./index-C5ELWu3X.js";const we={title:"Layout/FixedListView",component:v},$=({id:o})=>o,ee=()=>{const o=["Matthias","John","Jane","Camille","Charlotte","Francis","Émilie","François","Laura","Marie","Natasha","Nicolas","Pierre","Thomas","Valérie","Yann","Zoé","Jérôme","Thomas"];return o[Math.floor(Math.random()*o.length)]??o[0]},p=()=>({id:X(),name:ee()}),D=o=>{const[N,H]=r.useState({key:"name",order:"Desc"}),[R,B]=r.useState(0),[m,M]=r.useState(!1),[g,j]=r.useState(!1),[f,W]=r.useState(!1),[A,h]=r.useState(()=>Array.from({length:100},i=>p())),J=r.useCallback(()=>{B(i=>i+1),m&&j(!0)},[m]);r.useEffect(()=>{if(g){const i=setTimeout(()=>{j(!1),h(k=>[...k,...Array.from({length:100},q=>p())])},1e3);return()=>clearTimeout(i)}});const{stickedToStartColumns:O,columns:Y,stickedToEndColumns:Z}=r.useMemo(()=>({stickedToStartColumns:[{width:4,id:"color",title:"Color",renderTitle:()=>null,renderCell:({isHovered:t})=>e.jsx(Q,{isHovered:t,color:"live"})},{width:300,id:"name",title:"Name",renderTitle:({title:t,extraInfo:u,id:w})=>e.jsx(s,{text:t,sort:u.key===w?u.order:void 0,onPress:()=>H({key:w,order:u.order==="Desc"?"Asc":"Desc"})}),renderCell:({item:{name:t}})=>e.jsx(U,{text:t})}],columns:[{width:500,id:"event_id",title:"Event ID",renderTitle:({title:t})=>e.jsx(s,{text:t}),renderCell:({item:{id:t}})=>e.jsx(c,{text:t})},{width:150,id:"link_before",title:"Link before",renderTitle:({title:t})=>e.jsx(s,{text:t}),renderCell:()=>e.jsx(C,{onPress:()=>{},buttonPosition:"start",children:e.jsx(x,{color:"shakespear",children:"Demo link"})})},{width:500,id:"onboarding_id",title:"Onboarding ID",renderTitle:({title:t})=>e.jsx(s,{text:t}),renderCell:({item:{id:t}})=>e.jsx(c,{text:t})},{width:150,id:"link_after",title:"Link after",renderTitle:({title:t})=>e.jsx(s,{text:t}),renderCell:()=>e.jsx(C,{onPress:()=>{},buttonPosition:"end",children:e.jsx(x,{color:"shakespear",children:"Demo link"})})},{width:500,id:"account_id",title:"Account ID",renderTitle:({title:t})=>e.jsx(s,{text:t}),renderCell:({item:{id:t}})=>e.jsx(c,{text:t})}],stickedToEndColumns:[{width:100,id:"dot",title:"Settings",renderTitle:()=>e.jsx(s,{text:"End"}),renderCell:()=>e.jsx(c,{text:"..."})}]}),[]);return e.jsxs(e.Fragment,{children:[e.jsxs(z,{direction:"row",alignItems:"center",children:[e.jsx(S,{icon:"add-circle-filled",color:"live",onPress:()=>h(i=>[p(),...i]),children:"Prepend"}),e.jsx(n,{width:16}),e.jsx(S,{icon:"delete-filled",color:"negative",onPress:()=>h([]),children:"Clear"}),e.jsx(n,{width:16}),e.jsxs(x,{label:"End reached",children:[R," times"]}),e.jsx(n,{width:16}),e.jsx(T,{label:"With infinite scroll",value:m,onValueChange:M}),e.jsx(n,{width:16}),e.jsx(T,{label:"Force loading state",value:f,onValueChange:W})]}),e.jsx(n,{height:16}),e.jsx(v,{extraInfo:N,keyExtractor:$,data:A,stickedToStartColumns:O,columns:Y,stickedToEndColumns:Z,rowHeight:48,rowVerticalSpacing:4,headerHeight:48,onEndReached:J,onEndReachedThresholdPx:300,renderEmptyList:()=>e.jsx(K,{icon:"lake-inbox-empty",title:"Nothing to see here"}),loading:{isLoading:f||g,count:5},...o})]})},a=()=>e.jsx(D,{}),l=()=>e.jsx(D,{mode:"plain"}),d=()=>e.jsx(G,{rowHeight:48,rowVerticalSpacing:4,headerHeight:48,count:3});a.__docgenInfo={description:"",methods:[],displayName:"Primary"};l.__docgenInfo={description:"",methods:[],displayName:"WithoutBackground"};d.__docgenInfo={description:"",methods:[],displayName:"Placeholder"};var L,E,P;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <EditableFixedListView />;
}`,...(P=(E=a.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var b,F,y;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <EditableFixedListView mode="plain" />;
}`,...(y=(F=l.parameters)==null?void 0:F.docs)==null?void 0:y.source}}};var _,V,I;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <FixedListViewPlaceholder rowHeight={48} rowVerticalSpacing={4} headerHeight={48} count={3} />;
}`,...(I=(V=d.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};const Ce=["Primary","WithoutBackground","Placeholder"];export{d as Placeholder,a as Primary,l as WithoutBackground,Ce as __namedExportsOrder,we as default};
//# sourceMappingURL=FixedListView.stories-BSFNlUFN.js.map
