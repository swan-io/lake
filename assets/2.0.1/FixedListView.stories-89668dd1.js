import{a as e,j as p,F as O,b as s}from"./Space-65f9bfa9.js";import{r}from"./index-8db94870.js";import{B as Y}from"./index-5dcf0b89.js";import{F as y,a as Z,C as q,S as a,b as z,c as n}from"./FixedListViewCells-591d0cd0.js";import{L as T}from"./LakeButton-bed23784.js";import{a as G}from"./LakeCheckbox-848c664c.js";import{T as K}from"./Tag-9937c443.js";import{v as Q}from"./v4-a960c1f4.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./useMergeRefs-5d4c6491.js";import"./array-b3630b94.js";import"./function-841632b4.js";import"./Boxed-b55f7b9d.js";import"./BorderedIcon-f2c539ce.js";import"./Icon-4e86e06c.js";import"./Svg-7871e2fb.js";import"./LakeHeading-627b7829.js";import"./commonStyles-d52fedae.js";import"./LakeTooltip-39a56b60.js";import"./index-8ce4a492.js";import"./Portal-e966a77e.js";import"./WithCurrentColor-41bea5ae.js";import"./Pressable-2163c0dc.js";import"./index-ca925b5c.js";import"./index-2930334e.js";import"./index-da7d3046.js";const Pe={title:"Layout/FixedListView",component:y},U=({id:o})=>o,X=()=>{const o=["Matthias","John","Jane","Camille","Charlotte","Francis","Émilie","François","Laura","Marie","Natasha","Nicolas","Pierre","Thomas","Valérie","Yann","Zoé","Jérôme","Thomas"];return o[Math.floor(Math.random()*o.length)]??o[0]},g=()=>({id:Q(),name:X()}),_=o=>{const[D,H]=r.useState({key:"name",order:"Desc"}),[I,R]=r.useState(0),[m,B]=r.useState(!1),[w,x]=r.useState(!1),[M,u]=r.useState(()=>Array.from({length:100},i=>g())),A=r.useCallback(()=>{R(i=>i+1),m&&x(!0)},[m]);r.useEffect(()=>{if(w){const i=setTimeout(()=>{x(!1),u(C=>[...C,...Array.from({length:100},J=>g())])},1e3);return()=>clearTimeout(i)}});const{stickedToStartColumns:N,columns:W,stickedToEndColumns:j}=r.useMemo(()=>({stickedToStartColumns:[{width:4,id:"color",title:"Color",renderTitle:()=>null,renderCell:({isHovered:t})=>e(q,{isHovered:t,color:"live"})},{width:300,id:"name",title:"Name",renderTitle:({title:t,extraInfo:h,id:S})=>e(a,{text:t,sort:h.key===S?h.order:void 0,onPress:()=>H({key:S,order:h.order==="Desc"?"Asc":"Desc"})}),renderCell:({item:{name:t}})=>e(z,{text:t})}],columns:[{width:500,id:"event_id",title:"Event ID",renderTitle:({title:t})=>e(a,{text:t}),renderCell:({item:{id:t}})=>e(n,{text:t})},{width:500,id:"onboarding_id",title:"Onboarding ID",renderTitle:({title:t})=>e(a,{text:t}),renderCell:({item:{id:t}})=>e(n,{text:t})},{width:500,id:"account_id",title:"Account ID",renderTitle:({title:t})=>e(a,{text:t}),renderCell:({item:{id:t}})=>e(n,{text:t})}],stickedToEndColumns:[{width:100,id:"dot",title:"Settings",renderTitle:()=>e(a,{text:"End"}),renderCell:()=>e(n,{text:"..."})}]}),[]);return p(O,{children:[p(Y,{direction:"row",alignItems:"center",children:[e(T,{icon:"add-circle-filled",color:"live",onPress:()=>u(i=>[g(),...i]),children:"Prepend"}),e(s,{width:16}),e(T,{icon:"delete-filled",color:"negative",onPress:()=>u([]),children:"Clear"}),e(s,{width:16}),p(K,{label:"End reached",children:[I," times"]}),e(s,{width:16}),e(G,{label:"With infinite scroll",value:m,onValueChange:B})]}),e(s,{height:16}),e(y,{extraInfo:D,keyExtractor:U,data:M,stickedToStartColumns:N,columns:W,stickedToEndColumns:j,rowHeight:48,rowVerticalSpacing:4,headerHeight:48,onEndReached:A,onEndReachedThresholdPx:300,loading:{isLoading:w,count:5},...o})]})},l=()=>e(_,{}),d=()=>e(_,{mode:"plain"}),c=()=>e(Z,{rowHeight:48,rowVerticalSpacing:4,headerHeight:48,count:3});var f,k,E;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <EditableFixedListView />;
}`,...(E=(k=l.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var L,F,P;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <EditableFixedListView mode="plain" />;
}`,...(P=(F=d.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var V,b,v;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <FixedListViewPlaceholder rowHeight={48} rowVerticalSpacing={4} headerHeight={48} count={3} />;
}`,...(v=(b=c.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const Ve=["Primary","WithoutBackground","Placeholder"];export{c as Placeholder,l as Primary,d as WithoutBackground,Ve as __namedExportsOrder,Pe as default};
//# sourceMappingURL=FixedListView.stories-89668dd1.js.map
