import{S as N,f as R,t as j,l as B,c as u,a as e,V as b,F as o,j as r,L as d,i as m,b as p,R as C,u as F}from"./Space-6b47eb46.js";import{r as f}from"./index-1e572255.js";import{c as T}from"./commonStyles-d52fedae.js";import{B as y}from"./Box-0309892b.js";import{v as G}from"./v4-a960c1f4.js";const t=N.create({container:{paddingTop:R[4]},label:{...j.medium,fontFamily:B.primary,color:u.gray[700]},shrink:{flexShrink:1},optionalLabel:{fontStyle:"italic"}}),I=n=>F("label",n),O="formSmall",g=({label:n,optionalLabel:i,extra:v,readOnly:V=!1,color:L="current",readOnlyColor:h=u[L].primary,type:a=O,help:w,render:k,actions:S,style:q})=>{const[l]=f.useState(()=>G()),s=f.useRef(null),x=f.useCallback(_=>{if(_.preventDefault(),s.current!=null){const c=s.current.querySelector(`[id="${l}"]`);c==null||c.focus()}},[l]);return e(y,{style:[t.container,q],direction:"row",alignItems:"center",justifyContent:"spaceBetween",children:[e(b,{style:T.fill,ref:s,children:[e(y,{direction:"row",justifyContent:"spaceBetween",alignItems:"center",children:[e(y,{direction:"row",style:t.shrink,children:[a==="form"||a==="formSmall"||a==="radioGroup"?e(I,{onClick:x,htmlFor:l,style:[t.label,V&&{color:h}],children:[n,i!=null?e(o,{children:[" - ",r(d,{color:u.gray[400],style:t.optionalLabel,children:i})]}):null]}):e(d,{variant:"medium",color:h,id:l,children:[n,i!=null?e(o,{children:[" - ",r(d,{color:u.gray[400],style:t.optionalLabel,children:i})]}):null]}),m(v)&&v()]}),m(w)&&e(o,{children:[r(p,{width:16}),w]})]}),r(p,{height:C(a).returnType().with("formSmall","viewSmall",()=>4).with("form","view",()=>8).with("radioGroup",()=>12).exhaustive()}),r(b,{"aria-labelledby":a==="view"||a==="viewSmall"?l:void 0,children:k(l)})]}),m(S)&&e(o,{children:[r(p,{width:16}),S]})]})};try{g.displayName="LakeLabel",g.__docgenInfo={description:"",displayName:"LakeLabel",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},optionalLabel:{defaultValue:null,description:"",name:"optionalLabel",required:!1,type:{name:"string"}},readOnlyColor:{defaultValue:{value:"colors[color].primary"},description:"",name:"readOnlyColor",required:!1,type:{name:"string"}},color:{defaultValue:{value:"current"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"live"'},{value:'"sandbox"'},{value:'"positive"'},{value:'"warning"'},{value:'"negative"'},{value:'"current"'},{value:'"partner"'},{value:'"swan"'},{value:'"shakespear"'},{value:'"darkPink"'},{value:'"sunglow"'},{value:'"mediumSladeBlue"'}]}},type:{defaultValue:{value:"formSmall"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"form"'},{value:'"formSmall"'},{value:'"view"'},{value:'"viewSmall"'},{value:'"radioGroup"'}]}},extra:{defaultValue:null,description:"",name:"extra",required:!1,type:{name:"(() => ReactNode)"}},help:{defaultValue:null,description:"",name:"help",required:!1,type:{name:"ReactNode"}},render:{defaultValue:null,description:"",name:"render",required:!0,type:{name:"(id: string) => ReactNode"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode"}},readOnly:{defaultValue:{value:"false"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}}}}}catch{}export{g as L};
//# sourceMappingURL=LakeLabel-d7e855ec.js.map
