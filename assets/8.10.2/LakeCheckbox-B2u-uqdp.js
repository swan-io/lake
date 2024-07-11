import{s as f,c as l,j as e,V as m,q as v,u as b,A as h,S as y,L as x}from"./ScrollView-B9F7HTm3.js";import{r as u}from"./index-uCp2LrAq.js";import{P as k}from"./Pressable-CFOT_yy9.js";const d=16,g=4,s=f.create({container:{width:d,height:d,borderRadius:g,borderWidth:1,borderColor:l.gray[500],alignItems:"center",justifyContent:"center"},mixed:{width:d-8,height:2},labelled:{flexDirection:"row",alignItems:"center"},disabled:{opacity:.5}}),c=({value:a,color:r="current",disabled:i=!1,isError:o=!1})=>{const t=u.useRef(!0),[n,p]=u.useState(!1);return u.useEffect(()=>{t.current||p(!0),t.current=!1},[a]),e.jsxs(m,{role:"none",style:[s.container,i&&s.disabled,a!==!1&&{backgroundColor:l[r].primary,borderColor:l[r].primary},o&&{borderColor:l.negative[500]}],children:[a===!0&&e.jsx(v,{viewBox:"0 0 16 16",children:e.jsx(b,{d:"m3.5 7.5 2.8 3.4 5.6-6.7",stroke:l[r].contrast,strokeWidth:1.5,fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:"20",strokeDashoffset:n?"20":"0",children:n&&e.jsx(h,{attributeName:"stroke-dashoffset",values:"20;0",dur:"150ms",begin:"150ms",fill:"freeze"})})}),a==="mixed"&&e.jsx(m,{style:[s.mixed,{backgroundColor:l[r].contrast}]})]})},w=({value:a,color:r,label:i,onValueChange:o,disabled:t=!1,isError:n=!1})=>e.jsxs(k,{role:"checkbox","aria-checked":a,style:s.labelled,onPress:()=>o(a!==!0),disabled:t,children:[e.jsx(c,{value:a,color:r,disabled:t,isError:n}),e.jsx(y,{width:8}),e.jsx(x,{color:l.gray[900],userSelect:"none",children:i})]});c.__docgenInfo={description:"",methods:[],displayName:"LakeCheckbox",props:{value:{required:!0,tsType:{name:"union",raw:'boolean | "mixed"',elements:[{name:"boolean"},{name:"literal",value:'"mixed"'}]},description:""},color:{required:!1,tsType:{name:"union",raw:"keyof typeof colors",elements:[{name:"literal",value:"gray"},{name:"literal",value:"live"},{name:"literal",value:"sandbox"},{name:"literal",value:"positive"},{name:"literal",value:"warning"},{name:"literal",value:"negative"},{name:"literal",value:"current"},{name:"literal",value:"partner"},{name:"literal",value:"swan"},{name:"literal",value:"shakespear"},{name:"literal",value:"darkPink"},{name:"literal",value:"sunglow"},{name:"literal",value:"mediumSladeBlue"}]},description:"",defaultValue:{value:'"current"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isError:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};w.__docgenInfo={description:"",methods:[],displayName:"LakeLabelledCheckbox",props:{value:{required:!0,tsType:{name:"union",raw:'boolean | "mixed"',elements:[{name:"boolean"},{name:"literal",value:'"mixed"'}]},description:""},color:{required:!1,tsType:{name:"union",raw:"keyof typeof colors",elements:[{name:"literal",value:"gray"},{name:"literal",value:"live"},{name:"literal",value:"sandbox"},{name:"literal",value:"positive"},{name:"literal",value:"warning"},{name:"literal",value:"negative"},{name:"literal",value:"current"},{name:"literal",value:"partner"},{name:"literal",value:"swan"},{name:"literal",value:"shakespear"},{name:"literal",value:"darkPink"},{name:"literal",value:"sunglow"},{name:"literal",value:"mediumSladeBlue"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isError:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},label:{required:!0,tsType:{name:"string"},description:""}}};export{c as L,w as a};
//# sourceMappingURL=LakeCheckbox-B2u-uqdp.js.map