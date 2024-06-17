import{s as q,b as L,t as R,n as N,c as u,j as e,B as i,V as x,L as s,S as o,i as d,$ as V,o as F}from"./Space-B4Qk6WP7.js";import{r as p}from"./index-uCp2LrAq.js";import{c as B}from"./commonStyles-t4XfA7cz.js";import{v as C}from"./v4-CQkTLCs1.js";const r=q.create({container:{paddingTop:L[4]},label:{...R.medium,fontFamily:N.primary,color:u.gray[700],display:"flex"},shrink:{flexShrink:1},optionalLabel:{fontStyle:"italic"}}),G=t=>F("label",t),E="formSmall",I=({label:t,optionalLabel:n,description:f,extra:y,readOnly:w=!1,color:j="current",readOnlyColor:v=u[j].primary,type:a=E,help:h,render:S,actions:g,style:T})=>{const[l]=p.useState(()=>C()),m=p.useRef(null),b=p.useCallback(k=>{if(k.preventDefault(),m.current!=null){const c=m.current.querySelector(`[id="${l}"]`);c==null||c.focus()}},[l]);return e.jsxs(i,{style:[r.container,T],direction:"row",alignItems:"center",justifyContent:"spaceBetween",children:[e.jsxs(x,{style:B.fill,ref:m,children:[e.jsxs(i,{direction:"row",justifyContent:"spaceBetween",alignItems:"center",children:[e.jsxs(i,{direction:"row",style:r.shrink,children:[a==="form"||a==="formSmall"||a==="radioGroup"?e.jsxs(i,{style:r.shrink,children:[e.jsxs(G,{onClick:b,htmlFor:l,style:[r.label,w&&{color:v}],children:[t,n!=null?e.jsxs(e.Fragment,{children:[" - ",e.jsx(s,{color:u.gray[400],style:r.optionalLabel,children:n})]}):null]}),f!=null?e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"smallRegular",children:f}),e.jsx(o,{height:8})]}):null]}):e.jsxs(s,{variant:"medium",color:v,id:l,children:[t,n!=null?e.jsxs(e.Fragment,{children:[" - ",e.jsx(s,{color:u.gray[400],style:r.optionalLabel,children:n})]}):null]}),d(y)&&y()]}),d(h)&&e.jsxs(e.Fragment,{children:[e.jsx(o,{width:16}),h]})]}),e.jsx(o,{height:V(a).returnType().with("formSmall","viewSmall",()=>4).with("form","view",()=>8).with("radioGroup",()=>12).exhaustive()}),e.jsx(x,{"aria-labelledby":a==="view"||a==="viewSmall"?l:void 0,children:S(l)})]}),d(g)&&e.jsxs(e.Fragment,{children:[e.jsx(o,{width:16}),g]})]})};I.__docgenInfo={description:"",methods:[],displayName:"LakeLabel",props:{label:{required:!0,tsType:{name:"string"},description:""},optionalLabel:{required:!1,tsType:{name:"string"},description:""},readOnlyColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colors[color].primary",computed:!0}},color:{required:!1,tsType:{name:"union",raw:"keyof typeof colors",elements:[{name:"literal",value:"gray"},{name:"literal",value:"live"},{name:"literal",value:"sandbox"},{name:"literal",value:"positive"},{name:"literal",value:"warning"},{name:"literal",value:"negative"},{name:"literal",value:"current"},{name:"literal",value:"partner"},{name:"literal",value:"swan"},{name:"literal",value:"shakespear"},{name:"literal",value:"darkPink"},{name:"literal",value:"sunglow"},{name:"literal",value:"mediumSladeBlue"}]},description:"",defaultValue:{value:'"current"',computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"form" | "formSmall" | "view" | "viewSmall" | "radioGroup"',elements:[{name:"literal",value:'"form"'},{name:"literal",value:'"formSmall"'},{name:"literal",value:'"view"'},{name:"literal",value:'"viewSmall"'},{name:"literal",value:'"radioGroup"'}]},description:"",defaultValue:{value:'"formSmall"',computed:!1}},extra:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:""},help:{required:!1,tsType:{name:"ReactNode"},description:""},render:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => ReactNode",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"ReactNode"}}},description:""},actions:{required:!1,tsType:{name:"ReactNode"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},description:{required:!1,tsType:{name:"string"},description:""}}};export{I as L};
//# sourceMappingURL=LakeLabel-DXRCChlV.js.map
