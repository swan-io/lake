import{s as k,b as q,t as L,k as N,c as i,j as e,B as m,V as w,L as u,i as c,S as d,N as R,m as V}from"./Space-Bfex_hJx.js";import{r as p}from"./index-CBqU2yxZ.js";import{c as F}from"./commonStyles-t4XfA7cz.js";import{v as B}from"./v4-D8aEg3BZ.js";const l=k.create({container:{paddingTop:q[4]},label:{...L.medium,fontFamily:N.primary,color:i.gray[700]},shrink:{flexShrink:1},optionalLabel:{fontStyle:"italic"}}),C=t=>V("label",t),G="formSmall",E=({label:t,optionalLabel:n,extra:f,readOnly:g=!1,color:x="current",readOnlyColor:y=i[x].primary,type:a=G,help:v,render:S,actions:h,style:j})=>{const[r]=p.useState(()=>B()),s=p.useRef(null),T=p.useCallback(b=>{if(b.preventDefault(),s.current!=null){const o=s.current.querySelector(`[id="${r}"]`);o==null||o.focus()}},[r]);return e.jsxs(m,{style:[l.container,j],direction:"row",alignItems:"center",justifyContent:"spaceBetween",children:[e.jsxs(w,{style:F.fill,ref:s,children:[e.jsxs(m,{direction:"row",justifyContent:"spaceBetween",alignItems:"center",children:[e.jsxs(m,{direction:"row",style:l.shrink,children:[a==="form"||a==="formSmall"||a==="radioGroup"?e.jsxs(C,{onClick:T,htmlFor:r,style:[l.label,g&&{color:y}],children:[t,n!=null?e.jsxs(e.Fragment,{children:[" - ",e.jsx(u,{color:i.gray[400],style:l.optionalLabel,children:n})]}):null]}):e.jsxs(u,{variant:"medium",color:y,id:r,children:[t,n!=null?e.jsxs(e.Fragment,{children:[" - ",e.jsx(u,{color:i.gray[400],style:l.optionalLabel,children:n})]}):null]}),c(f)&&f()]}),c(v)&&e.jsxs(e.Fragment,{children:[e.jsx(d,{width:16}),v]})]}),e.jsx(d,{height:R(a).returnType().with("formSmall","viewSmall",()=>4).with("form","view",()=>8).with("radioGroup",()=>12).exhaustive()}),e.jsx(w,{"aria-labelledby":a==="view"||a==="viewSmall"?r:void 0,children:S(r)})]}),c(h)&&e.jsxs(e.Fragment,{children:[e.jsx(d,{width:16}),h]})]})};E.__docgenInfo={description:"",methods:[],displayName:"LakeLabel",props:{label:{required:!0,tsType:{name:"string"},description:""},optionalLabel:{required:!1,tsType:{name:"string"},description:""},readOnlyColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colors[color].primary",computed:!0}},color:{required:!1,tsType:{name:"union",raw:"keyof typeof colors",elements:[{name:"literal",value:"gray"},{name:"literal",value:"live"},{name:"literal",value:"sandbox"},{name:"literal",value:"positive"},{name:"literal",value:"warning"},{name:"literal",value:"negative"},{name:"literal",value:"current"},{name:"literal",value:"partner"},{name:"literal",value:"swan"},{name:"literal",value:"shakespear"},{name:"literal",value:"darkPink"},{name:"literal",value:"sunglow"},{name:"literal",value:"mediumSladeBlue"}]},description:"",defaultValue:{value:'"current"',computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"form" | "formSmall" | "view" | "viewSmall" | "radioGroup"',elements:[{name:"literal",value:'"form"'},{name:"literal",value:'"formSmall"'},{name:"literal",value:'"view"'},{name:"literal",value:'"viewSmall"'},{name:"literal",value:'"radioGroup"'}]},description:"",defaultValue:{value:'"formSmall"',computed:!1}},extra:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:""},help:{required:!1,tsType:{name:"ReactNode"},description:""},render:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => ReactNode",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"ReactNode"}}},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""}}};export{E as L};
//# sourceMappingURL=LakeLabel-DH4-TAU9.js.map
