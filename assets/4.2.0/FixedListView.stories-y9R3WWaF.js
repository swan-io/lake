import{a as e,j as p,F as O,b as s}from"./Space-ImkcMIim.js";import{r}from"./index-4g5l5LRQ.js";import{B as Y}from"./commonStyles-fDEJ_OM7.js";import{F as y,a as Z,C as q,S as a,b as z,c as n}from"./FixedListViewCells--dTrQin8.js";import{L as T}from"./LakeButton-EkDPTC4Q.js";import{a as G}from"./LakeCheckbox-jjc5XDTh.js";import{T as K}from"./Tag-UFOt6Sxr.js";import{v as Q}from"./v4-yQnnJER4.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./a11y-2bSo9Xxj.js";import"./array-_tkD71ox.js";import"./function-dZk570d0.js";import"./Boxed-X5xMwKRs.js";import"./BorderedIcon-ZFk26Hnq.js";import"./LakeHeading-dDGPUhaC.js";import"./Pressable-MDITAEu6.js";import"./index-sXb0hmHj.js";import"./index-0MnYVmN_.js";import"./index-udVSLJHo.js";const Te={title:"Layout/FixedListView",component:y},U=({id:o})=>o,X=()=>{const o=["Matthias","John","Jane","Camille","Charlotte","Francis","Émilie","François","Laura","Marie","Natasha","Nicolas","Pierre","Thomas","Valérie","Yann","Zoé","Jérôme","Thomas"];return o[Math.floor(Math.random()*o.length)]??o[0]},g=()=>({id:Q(),name:X()}),_=o=>{const[D,H]=r.useState({key:"name",order:"Desc"}),[I,R]=r.useState(0),[m,B]=r.useState(!1),[w,x]=r.useState(!1),[M,u]=r.useState(()=>Array.from({length:100},i=>g())),A=r.useCallback(()=>{R(i=>i+1),m&&x(!0)},[m]);r.useEffect(()=>{if(w){const i=setTimeout(()=>{x(!1),u(C=>[...C,...Array.from({length:100},J=>g())])},1e3);return()=>clearTimeout(i)}});const{stickedToStartColumns:N,columns:W,stickedToEndColumns:j}=r.useMemo(()=>({stickedToStartColumns:[{width:4,id:"color",title:"Color",renderTitle:()=>null,renderCell:({isHovered:t})=>e(q,{isHovered:t,color:"live"})},{width:300,id:"name",title:"Name",renderTitle:({title:t,extraInfo:h,id:S})=>e(a,{text:t,sort:h.key===S?h.order:void 0,onPress:()=>H({key:S,order:h.order==="Desc"?"Asc":"Desc"})}),renderCell:({item:{name:t}})=>e(z,{text:t})}],columns:[{width:500,id:"event_id",title:"Event ID",renderTitle:({title:t})=>e(a,{text:t}),renderCell:({item:{id:t}})=>e(n,{text:t})},{width:500,id:"onboarding_id",title:"Onboarding ID",renderTitle:({title:t})=>e(a,{text:t}),renderCell:({item:{id:t}})=>e(n,{text:t})},{width:500,id:"account_id",title:"Account ID",renderTitle:({title:t})=>e(a,{text:t}),renderCell:({item:{id:t}})=>e(n,{text:t})}],stickedToEndColumns:[{width:100,id:"dot",title:"Settings",renderTitle:()=>e(a,{text:"End"}),renderCell:()=>e(n,{text:"..."})}]}),[]);return p(O,{children:[p(Y,{direction:"row",alignItems:"center",children:[e(T,{icon:"add-circle-filled",color:"live",onPress:()=>u(i=>[g(),...i]),children:"Prepend"}),e(s,{width:16}),e(T,{icon:"delete-filled",color:"negative",onPress:()=>u([]),children:"Clear"}),e(s,{width:16}),p(K,{label:"End reached",children:[I," times"]}),e(s,{width:16}),e(G,{label:"With infinite scroll",value:m,onValueChange:B})]}),e(s,{height:16}),e(y,{extraInfo:D,keyExtractor:U,data:M,stickedToStartColumns:N,columns:W,stickedToEndColumns:j,rowHeight:48,rowVerticalSpacing:4,headerHeight:48,onEndReached:A,onEndReachedThresholdPx:300,loading:{isLoading:w,count:5},...o})]})},l=()=>e(_,{}),d=()=>e(_,{mode:"plain"}),c=()=>e(Z,{rowHeight:48,rowVerticalSpacing:4,headerHeight:48,count:3});var f,k,E;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <EditableFixedListView />;
}`,...(E=(k=l.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var L,F,P;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <EditableFixedListView mode="plain" />;
}`,...(P=(F=d.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var V,b,v;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <FixedListViewPlaceholder rowHeight={48} rowVerticalSpacing={4} headerHeight={48} count={3} />;
}`,...(v=(b=c.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const fe=["Primary","WithoutBackground","Placeholder"];export{c as Placeholder,l as Primary,d as WithoutBackground,fe as __namedExportsOrder,Te as default};
//# sourceMappingURL=FixedListView.stories-y9R3WWaF.js.map