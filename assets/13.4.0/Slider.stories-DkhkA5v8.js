import{j as e,V as S,s as m,B as f,S as g,L as b}from"./ScrollView-Btb131BD.js";import{r as p}from"./iframe-e0esDdiE.js";import{c}from"./commonStyles-BBEkV6IC.js";import{S as h,a as n}from"./_StoriesComponents-BBhEzvA8.js";import"./index-Dxu7zdSy.js";import"./preload-helper-D1IIBeq1.js";import"./Separator-CMkGtmLY.js";const j=m.create({container:{paddingHorizontal:10,zIndex:1}}),o=({min:t,max:r,value:a,step:u,disabled:l=!1,style:y,onChange:d})=>e.jsx(S,{style:[j.container,y],children:e.jsx("input",{type:"range",min:t,max:r,value:a,step:u,disabled:l,onChange:p.useCallback(x=>d(Number(x.target.value)),[d]),style:{backgroundSize:`${(a-t)/(r-t)*100}% 100%`,...l?c.disabled:{}}})});o.__docgenInfo={description:"",methods:[],displayName:"LakeSlider",props:{min:{required:!0,tsType:{name:"number"},description:""},max:{required:!0,tsType:{name:"number"},description:""},value:{required:!0,tsType:{name:"number"},description:""},step:{required:!0,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:'ViewProps["style"]',raw:'ViewProps["style"]'},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""}}};const w=m.create({slider:{...c.fill,maxWidth:800}}),R={title:"Forms/Slider",component:o},i=t=>{const[r,a]=p.useState(0);return e.jsxs(f,{direction:"row",alignItems:"center",children:[e.jsx(o,{...t,value:r,onChange:a,style:w.slider}),e.jsx(g,{width:8}),e.jsx(b,{children:r})]})},s=()=>e.jsxs(h,{title:"Ranges",children:[e.jsx(n,{title:"from 0 to 100",children:e.jsx(i,{min:0,max:100,step:1})}),e.jsx(n,{title:"from -20 to 50",children:e.jsx(i,{min:-20,max:50,step:1})}),e.jsx(n,{title:"with steps 10 by 10",children:e.jsx(i,{min:0,max:100,step:10})})]});s.__docgenInfo={description:"",methods:[],displayName:"Ranges"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <StoryBlock title="Ranges">
    <StoryPart title="from 0 to 100">
      <EditableSlider min={0} max={100} step={1} />
    </StoryPart>

    <StoryPart title="from -20 to 50">
      <EditableSlider min={-20} max={50} step={1} />
    </StoryPart>

    <StoryPart title="with steps 10 by 10">
      <EditableSlider min={0} max={100} step={10} />
    </StoryPart>
  </StoryBlock>`,...s.parameters?.docs?.source}}};const V=["Ranges"];export{s as Ranges,V as __namedExportsOrder,R as default};
//# sourceMappingURL=Slider.stories-DkhkA5v8.js.map
