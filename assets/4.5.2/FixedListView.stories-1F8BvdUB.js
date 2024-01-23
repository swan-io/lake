import{a as e,j as p,F as q,S as a}from"./Space-uQ7XGMll.js";import{r}from"./index-4g5l5LRQ.js";import{B as z}from"./commonStyles-pW6vastH.js";import{F as _,a as G,b as K,C as Q,S as s,c as U,d as n}from"./FixedListViewCells-j0HANip1.js";import{L as T}from"./LakeButton-FmYwD84y.js";import{a as k}from"./LakeCheckbox-Jz6eZQv6.js";import{T as X}from"./Tag-Dq_qrkPn.js";import{v as $}from"./v4-yQnnJER4.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./a11y-2bSo9Xxj.js";import"./array-_tkD71ox.js";import"./function-dZk570d0.js";import"./Boxed-X5xMwKRs.js";import"./BorderedIcon-Ux0b0Af9.js";import"./LakeHeading-S1sqWfvH.js";import"./Pressable-b7puY5tS.js";import"./index-sXb0hmHj.js";import"./index-Q1MvWVDv.js";import"./index-f-KD75sE.js";const Le={title:"Layout/FixedListView",component:_},ee=({id:o})=>o,te=()=>{const o=["Matthias","John","Jane","Camille","Charlotte","Francis","Émilie","François","Laura","Marie","Natasha","Nicolas","Pierre","Thomas","Valérie","Yann","Zoé","Jérôme","Thomas"];return o[Math.floor(Math.random()*o.length)]??o[0]},g=()=>({id:$(),name:te()}),D=o=>{const[H,R]=r.useState({key:"name",order:"Desc"}),[B,M]=r.useState(0),[m,N]=r.useState(!1),[w,x]=r.useState(!1),[C,A]=r.useState(!1),[W,u]=r.useState(()=>Array.from({length:100},i=>g())),j=r.useCallback(()=>{M(i=>i+1),m&&x(!0)},[m]);r.useEffect(()=>{if(w){const i=setTimeout(()=>{x(!1),u(S=>[...S,...Array.from({length:100},Z=>g())])},1e3);return()=>clearTimeout(i)}});const{stickedToStartColumns:J,columns:O,stickedToEndColumns:Y}=r.useMemo(()=>({stickedToStartColumns:[{width:4,id:"color",title:"Color",renderTitle:()=>null,renderCell:({isHovered:t})=>e(Q,{isHovered:t,color:"live"})},{width:300,id:"name",title:"Name",renderTitle:({title:t,extraInfo:h,id:f})=>e(s,{text:t,sort:h.key===f?h.order:void 0,onPress:()=>R({key:f,order:h.order==="Desc"?"Asc":"Desc"})}),renderCell:({item:{name:t}})=>e(U,{text:t})}],columns:[{width:500,id:"event_id",title:"Event ID",renderTitle:({title:t})=>e(s,{text:t}),renderCell:({item:{id:t}})=>e(n,{text:t})},{width:500,id:"onboarding_id",title:"Onboarding ID",renderTitle:({title:t})=>e(s,{text:t}),renderCell:({item:{id:t}})=>e(n,{text:t})},{width:500,id:"account_id",title:"Account ID",renderTitle:({title:t})=>e(s,{text:t}),renderCell:({item:{id:t}})=>e(n,{text:t})}],stickedToEndColumns:[{width:100,id:"dot",title:"Settings",renderTitle:()=>e(s,{text:"End"}),renderCell:()=>e(n,{text:"..."})}]}),[]);return p(q,{children:[p(z,{direction:"row",alignItems:"center",children:[e(T,{icon:"add-circle-filled",color:"live",onPress:()=>u(i=>[g(),...i]),children:"Prepend"}),e(a,{width:16}),e(T,{icon:"delete-filled",color:"negative",onPress:()=>u([]),children:"Clear"}),e(a,{width:16}),p(X,{label:"End reached",children:[B," times"]}),e(a,{width:16}),e(k,{label:"With infinite scroll",value:m,onValueChange:N}),e(a,{width:16}),e(k,{label:"Force loading state",value:C,onValueChange:A})]}),e(a,{height:16}),e(_,{extraInfo:H,keyExtractor:ee,data:W,stickedToStartColumns:J,columns:O,stickedToEndColumns:Y,rowHeight:48,rowVerticalSpacing:4,headerHeight:48,onEndReached:j,onEndReachedThresholdPx:300,renderEmptyList:()=>e(K,{icon:"lake-inbox-empty",title:"Nothing to see here"}),loading:{isLoading:C||w,count:5},...o})]})},l=()=>e(D,{}),d=()=>e(D,{mode:"plain"}),c=()=>e(G,{rowHeight:48,rowVerticalSpacing:4,headerHeight:48,count:3});var L,E,F;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <EditableFixedListView />;
}`,...(F=(E=l.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var V,b,P;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <EditableFixedListView mode="plain" />;
}`,...(P=(b=d.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var y,v,I;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <FixedListViewPlaceholder rowHeight={48} rowVerticalSpacing={4} headerHeight={48} count={3} />;
}`,...(I=(v=c.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};const Ee=["Primary","WithoutBackground","Placeholder"];export{c as Placeholder,l as Primary,d as WithoutBackground,Ee as __namedExportsOrder,Le as default};
//# sourceMappingURL=FixedListView.stories-1F8BvdUB.js.map
