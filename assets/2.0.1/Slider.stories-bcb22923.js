import{S as z,a as e,F as f,j as b,V as E,l as C}from"./Space-65f9bfa9.js";import{r as p}from"./index-8db94870.js";import{B as v}from"./index-5dcf0b89.js";import{L as M}from"./LakeLabel-6151c738.js";import{L as x}from"./LakeTextInput-494abc41.js";import{R as j}from"./ResponsiveContainer-eb20e0c2.js";import{S as I,a as i}from"./_StoriesComponents-9f567819.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./commonStyles-d52fedae.js";import"./v4-a960c1f4.js";import"./useMergeRefs-5d4c6491.js";import"./Fill-24da9952.js";import"./Icon-4e86e06c.js";import"./Svg-7871e2fb.js";import"./index-2930334e.js";const k=z.create({container:{zIndex:1},input:{maxWidth:120,zIndex:1,position:"relative"}}),L=C.tiny,c=({label:l,value:t,min:r,max:n,step:q,unit:h,onChange:S})=>{const[o,s]=p.useState(String(t));p.useEffect(()=>{s(String(t))},[t]);const g=p.useCallback(()=>{const d=Math.max(Math.min(Number(o),n),r);s(String(d)),S(d)},[r,n,o,S]);return e(j,{breakpoint:L,style:k.container,children:({large:d})=>e(f,{children:d?b(f,{children:[e(v,{direction:"row",justifyContent:"end",children:e(E,{children:e(x,{style:k.input,unit:h,value:o,onChangeText:s,onBlur:g,inputMode:"decimal"})})}),e("input",{type:"range",min:r,max:n,step:q,value:t,onChange:y=>S(Number(y.target.value)),style:{backgroundSize:`${(t-r)/(n-r)*100}% 100%`}})]}):e(M,{label:l,render:y=>e(x,{id:y,unit:h,value:o,onChangeText:s,onBlur:g,inputMode:"decimal"})})})})};try{c.displayName="LakeSlider",c.__docgenInfo={description:"",displayName:"LakeSlider",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!0,type:{name:"number"}},unit:{defaultValue:null,description:"",name:"unit",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: number) => void"}}}}}catch{}const R=z.create({desktop:{padding:10,maxWidth:800},mobile:{maxWidth:400}}),ee={title:"Forms/Slider",component:c},a=({mobileSize:l=!1,...t})=>{const[r,n]=p.useState(0);return e(E,{style:l?R.mobile:R.desktop,children:e(c,{...t,value:r,onChange:n})})},u=()=>b(I,{title:"Ranges",children:[e(i,{title:"from 0 to 100",children:e(a,{label:"Range",min:0,max:100,step:1,unit:"$"})}),e(i,{title:"from -20 to 50",children:e(a,{label:"Range",min:-20,max:50,step:1,unit:"$"})}),e(i,{title:"with steps 10 by 10",children:e(a,{label:"Range",min:0,max:100,step:10,unit:"$"})})]}),m=()=>b(I,{title:"Slider sizes",description:`UI of slider depends on container width. If width is lower than ${L}, there is only a text input without slider`,children:[e(i,{title:"Mobile",children:e(a,{label:"Range",min:0,max:100,step:1,unit:"$",mobileSize:!0})}),e(i,{title:"Desktop",children:e(a,{label:"Range",min:0,max:100,step:1,unit:"$"})})]});var $,V,w;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <StoryBlock title="Ranges">
      <StoryPart title="from 0 to 100">
        <EditableSlider label="Range" min={0} max={100} step={1} unit="$" />
      </StoryPart>

      <StoryPart title="from -20 to 50">
        <EditableSlider label="Range" min={-20} max={50} step={1} unit="$" />
      </StoryPart>

      <StoryPart title="with steps 10 by 10">
        <EditableSlider label="Range" min={0} max={100} step={10} unit="$" />
      </StoryPart>
    </StoryBlock>;
}`,...(w=(V=u.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var B,P,_;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <StoryBlock title="Slider sizes" description={\`UI of slider depends on container width. If width is lower than \${sliderBreakpoint}, there is only a text input without slider\`}>
      <StoryPart title="Mobile">
        <EditableSlider label="Range" min={0} max={100} step={1} unit="$" mobileSize={true} />
      </StoryPart>

      <StoryPart title="Desktop">
        <EditableSlider label="Range" min={0} max={100} step={1} unit="$" />
      </StoryPart>
    </StoryBlock>;
}`,...(_=(P=m.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const te=["Ranges","Sizes"];export{u as Ranges,m as Sizes,te as __namedExportsOrder,ee as default};
//# sourceMappingURL=Slider.stories-bcb22923.js.map
