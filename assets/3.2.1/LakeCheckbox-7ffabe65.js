import{S as b,c as a,a as f,V as m,j as r,x as h,y,A as k,b as g,L as x}from"./Space-357d3b43.js";import{r as u}from"./index-f1286426.js";import{P as _}from"./Pressable-babfcc78.js";const d=16,C=4,o=b.create({container:{width:d,height:d,borderRadius:C,borderWidth:1,borderColor:a.gray[500],alignItems:"center",justifyContent:"center"},mixed:{width:d-8,height:2},labelled:{flexDirection:"row",alignItems:"center"},disabled:{opacity:.5}}),c=({value:e,color:l="current",disabled:s=!1,isError:i=!1})=>{const t=u.useRef(!0),[n,v]=u.useState(!1);return u.useEffect(()=>{t.current||v(!0),t.current=!1},[e]),f(m,{role:"none",style:[o.container,s&&o.disabled,e!==!1&&{backgroundColor:a[l].primary,borderColor:a[l].primary},i&&{borderColor:a.negative[500]}],children:[e===!0&&r(h,{viewBox:"0 0 16 16",children:r(y,{d:"m3.5 7.5 2.8 3.4 5.6-6.7",stroke:a[l].contrast,strokeWidth:1.5,fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:"20",strokeDashoffset:n?"20":"0",children:n&&r(k,{attributeName:"stroke-dashoffset",values:"20;0",dur:"150ms",begin:"150ms",fill:"freeze"})})}),e==="mixed"&&r(m,{style:[o.mixed,{backgroundColor:a[l].contrast}]})]})},p=({value:e,color:l,label:s,onValueChange:i,disabled:t=!1,isError:n=!1})=>f(_,{role:"checkbox","aria-checked":e,style:o.labelled,onPress:()=>i(e!==!0),disabled:t,children:[r(c,{value:e,color:l,disabled:t,isError:n}),r(g,{width:8}),r(x,{color:a.gray[900],userSelect:"none",children:s})]});try{c.displayName="LakeCheckbox",c.__docgenInfo={description:"",displayName:"LakeCheckbox",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:'boolean | "mixed"'}},color:{defaultValue:{value:"current"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"live"'},{value:'"sandbox"'},{value:'"positive"'},{value:'"warning"'},{value:'"negative"'},{value:'"current"'},{value:'"partner"'},{value:'"swan"'},{value:'"shakespear"'},{value:'"darkPink"'},{value:'"sunglow"'},{value:'"mediumSladeBlue"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},isError:{defaultValue:{value:"false"},description:"",name:"isError",required:!1,type:{name:"boolean"}}}}}catch{}try{p.displayName="LakeLabelledCheckbox",p.__docgenInfo={description:"",displayName:"LakeLabelledCheckbox",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:'boolean | "mixed"'}},color:{defaultValue:{value:"current"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"gray"'},{value:'"live"'},{value:'"sandbox"'},{value:'"positive"'},{value:'"warning"'},{value:'"negative"'},{value:'"current"'},{value:'"partner"'},{value:'"swan"'},{value:'"shakespear"'},{value:'"darkPink"'},{value:'"sunglow"'},{value:'"mediumSladeBlue"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},isError:{defaultValue:{value:"false"},description:"",name:"isError",required:!1,type:{name:"boolean"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!0,type:{name:"(value: boolean) => void"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}}}catch{}export{p as L,c as a};
//# sourceMappingURL=LakeCheckbox-7ffabe65.js.map
