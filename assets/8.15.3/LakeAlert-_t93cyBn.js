import{s as y,k as w,j as r,V as o,B as x,I as b,S as m,L as c,l as k,i as p,c as e,m as j}from"./ScrollView-CnkSV7w6.js";import{c as v}from"./commonStyles-t4XfA7cz.js";import{u as T}from"./useResponsive-CzIqCC5v.js";const i=y.create({base:{paddingVertical:20,paddingHorizontal:24,borderRadius:4,borderWidth:.5,borderLeftWidth:4,boxShadow:w.tile},anchored:{borderTopLeftRadius:0,borderTopRightRadius:0,borderLeftWidth:.5,marginHorizontal:-1,marginBottom:-1,boxShadow:"none"},content:{marginLeft:40},callToAction:{marginTop:-12,marginBottom:-12,marginRight:-12,flexShrink:0}}),L={info:"info-regular",warning:"warning-regular",error:"dismiss-circle-regular",success:"checkmark-circle-regular",neutral:void 0},R={info:e.shakespear[700],warning:e.warning[700],error:e.negative[700],success:e.positive[700],neutral:e.gray[700]},S={info:e.shakespear[0],warning:e.warning[0],error:e.negative[0],success:e.positive[0],neutral:e.gray[0]},N={info:e.shakespear[200],warning:e.warning[200],error:e.negative[200],success:e.positive[200],neutral:e.gray[200]},q={info:e.shakespear[500],warning:e.warning[500],error:e.negative[500],success:e.positive[500],neutral:e.gray[500]},B=a=>typeof a=="string"||typeof a=="number",V=({anchored:a=!1,variant:s,title:g,subtitle:d,children:n,style:f,callToAction:u})=>{const l=R[s],t=L[s],{desktop:h}=T(j.medium);return r.jsxs(o,{style:[i.base,{backgroundColor:S[s],borderColor:N[s]},a?i.anchored:{borderLeftColor:q[s]},f],children:[r.jsxs(x,{direction:"row",alignItems:"center",children:[t!=null?r.jsxs(r.Fragment,{children:[r.jsx(b,{name:t,color:l,size:20}),r.jsx(m,{width:20})]}):null,r.jsxs(o,{style:v.fill,children:[r.jsx(c,{color:l,variant:t!=null?"regular":"medium",children:g}),k(d)&&r.jsx(c,{color:l,children:d})]}),p(u)&&r.jsx(o,{style:i.callToAction,children:u})]}),p(n)&&r.jsxs(o,{style:h&&t!=null&&i.content,children:[r.jsx(m,{height:12}),B(n)?r.jsx(c,{children:n}):n]})]})};V.__docgenInfo={description:"",methods:[],displayName:"LakeAlert",props:{anchored:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!0,tsType:{name:"union",raw:'"info" | "warning" | "error" | "success" | "neutral"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'},{name:"literal",value:'"neutral"'}]},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},callToAction:{required:!1,tsType:{name:"ReactNode"},description:""},title:{required:!0,tsType:{name:"ReactNode"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""}}};export{V as L};
//# sourceMappingURL=LakeAlert-_t93cyBn.js.map
