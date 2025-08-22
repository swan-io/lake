import{j as e,V as b,s as u,B as h,S as j,L as w}from"./ScrollView-GM8Gq7qp.js";import{r as y}from"./iframe-CpU9Pg84.js";import{c as x}from"./commonStyles-BBEkV6IC.js";import{S as P,a as n}from"./_StoriesComponents-ClYJhgt9.js";import"./index-BvTzscPj.js";import"./preload-helper-DrfBMU97.js";import"./Separator-5A0J5hHC.js";const k=u.create({container:{paddingHorizontal:10,zIndex:1}}),o=({min:t,max:r,value:a,step:S,disabled:l=!1,style:f,onChange:d})=>e.jsx(b,{style:[k.container,f],children:e.jsx("input",{type:"range",min:t,max:r,value:a,step:S,disabled:l,onChange:y.useCallback(g=>d(Number(g.target.value)),[d]),style:{backgroundSize:`${(a-t)/(r-t)*100}% 100%`,...l?x.disabled:{}}})});o.__docgenInfo={description:"",methods:[],displayName:"LakeSlider",props:{min:{required:!0,tsType:{name:"number"},description:""},max:{required:!0,tsType:{name:"number"},description:""},value:{required:!0,tsType:{name:"number"},description:""},step:{required:!0,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:'ViewProps["style"]',raw:'ViewProps["style"]'},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""}}};const T=u.create({slider:{...x.fill,maxWidth:800}}),I={title:"Forms/Slider",component:o},i=t=>{const[r,a]=y.useState(0);return e.jsxs(h,{direction:"row",alignItems:"center",children:[e.jsx(o,{...t,value:r,onChange:a,style:T.slider}),e.jsx(j,{width:8}),e.jsx(w,{children:r})]})},s=()=>e.jsxs(P,{title:"Ranges",children:[e.jsx(n,{title:"from 0 to 100",children:e.jsx(i,{min:0,max:100,step:1})}),e.jsx(n,{title:"from -20 to 50",children:e.jsx(i,{min:-20,max:50,step:1})}),e.jsx(n,{title:"with steps 10 by 10",children:e.jsx(i,{min:0,max:100,step:10})})]});s.__docgenInfo={description:"",methods:[],displayName:"Ranges"};var m,p,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => <StoryBlock title="Ranges">
    <StoryPart title="from 0 to 100">
      <EditableSlider min={0} max={100} step={1} />
    </StoryPart>

    <StoryPart title="from -20 to 50">
      <EditableSlider min={-20} max={50} step={1} />
    </StoryPart>

    <StoryPart title="with steps 10 by 10">
      <EditableSlider min={0} max={100} step={10} />
    </StoryPart>
  </StoryBlock>`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const L=["Ranges"];export{s as Ranges,L as __namedExportsOrder,I as default};
//# sourceMappingURL=Slider.stories-MrLnhcf5.js.map
