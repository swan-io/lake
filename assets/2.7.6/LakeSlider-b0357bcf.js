import{S as h,j as e,F as c,a as x,V,x as S}from"./Space-699872b3.js";import{r as s}from"./index-b9a8c83f.js";import{B as k}from"./Box-2158a4c8.js";import{L}from"./LakeLabel-7518df7a.js";import{L as y}from"./LakeTextInput-80fb6eeb.js";import{R as _}from"./ResponsiveContainer-160b7dcc.js";const f=h.create({container:{zIndex:1},input:{maxWidth:120,zIndex:1,position:"relative"}}),q=S.tiny,b=({label:d,value:t,min:r,max:n,step:g,unit:p,onChange:u})=>{const[a,i]=s.useState(String(t));s.useEffect(()=>{i(String(t))},[t]);const m=s.useCallback(()=>{const l=Math.max(Math.min(Number(a),n),r);i(String(l)),u(l)},[r,n,a,u]);return e(_,{breakpoint:q,style:f.container,children:({large:l})=>e(c,{children:l?x(c,{children:[e(k,{direction:"row",justifyContent:"end",children:e(V,{children:e(y,{style:f.input,unit:p,value:a,onChangeText:i,onBlur:m,inputMode:"decimal"})})}),e("input",{type:"range",min:r,max:n,step:g,value:t,onChange:o=>u(Number(o.target.value)),style:{backgroundSize:`${(t-r)/(n-r)*100}% 100%`}})]}):e(L,{label:d,render:o=>e(y,{id:o,unit:p,value:a,onChangeText:i,onBlur:m,inputMode:"decimal"})})})})};try{b.displayName="LakeSlider",b.__docgenInfo={description:"",displayName:"LakeSlider",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"number"}},unit:{defaultValue:null,description:"",name:"unit",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: number) => void"}}}}}catch{}export{b as L,q as s};
//# sourceMappingURL=LakeSlider-b0357bcf.js.map
