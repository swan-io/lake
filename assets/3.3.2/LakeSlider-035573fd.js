import{S as V,j as e,F as y,a as S,V as x,z as k}from"./Space-357d3b43.js";import{r as d}from"./index-f1286426.js";import{B as L,c as q}from"./commonStyles-e9d52da3.js";import{L as _}from"./LakeLabel-6475fcb1.js";import{L as f}from"./LakeTextInput-bdeb6dd0.js";import{R as v}from"./ResponsiveContainer-0b47a67a.js";const b=V.create({container:{zIndex:1},input:{maxWidth:120,zIndex:1,position:"relative"}}),C=k.tiny,g=({label:p,value:t,min:r,max:a,step:h,unit:m,disabled:n=!1,onChange:s})=>{const[i,l]=d.useState(String(t));d.useEffect(()=>{l(String(t))},[t]);const c=d.useCallback(()=>{const u=Math.max(Math.min(Number(i),a),r);l(String(u)),s(u)},[r,a,i,s]);return e(v,{breakpoint:C,style:b.container,children:({large:u})=>e(y,{children:u?S(y,{children:[e(L,{direction:"row",justifyContent:"end",children:e(x,{children:e(f,{style:b.input,unit:m,value:i,onChangeText:l,onBlur:c,inputMode:"decimal",disabled:n})})}),e("input",{type:"range",min:r,max:a,step:h,value:t,disabled:n,onChange:o=>s(Number(o.target.value)),style:{backgroundSize:`${(t-r)/(a-r)*100}% 100%`,...n?q.disabled:{}}})]}):e(_,{label:p,render:o=>e(f,{id:o,unit:m,value:i,onChangeText:l,onBlur:c,inputMode:"decimal",disabled:n})})})})};try{g.displayName="LakeSlider",g.__docgenInfo={description:"",displayName:"LakeSlider",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"number"}},unit:{defaultValue:null,description:"",name:"unit",required:!0,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: number) => void"}}}}}catch{}export{g as L,C as s};
//# sourceMappingURL=LakeSlider-035573fd.js.map