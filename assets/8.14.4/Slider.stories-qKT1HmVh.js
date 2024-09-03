import{s as c,j as t,B as p,S as x,L as S}from"./ScrollView-8Hl1h1Us.js";import{r as y}from"./index-Cs7sjTYM.js";import{L as l}from"./LakeSlider-Dp6OhIqo.js";import{c as h}from"./commonStyles-t4XfA7cz.js";import{S as j,a as r}from"./_StoriesComponents-DckyEGzw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BU4L-DQy.js";const f=c.create({slider:{...h.fill,maxWidth:800}}),B={title:"Forms/Slider",component:l},s=m=>{const[o,d]=y.useState(0);return t.jsxs(p,{direction:"row",alignItems:"center",children:[t.jsx(l,{...m,value:o,onChange:d,style:f.slider}),t.jsx(x,{width:8}),t.jsx(S,{children:o})]})},e=()=>t.jsxs(j,{title:"Ranges",children:[t.jsx(r,{title:"from 0 to 100",children:t.jsx(s,{min:0,max:100,step:1})}),t.jsx(r,{title:"from -20 to 50",children:t.jsx(s,{min:-20,max:50,step:1})}),t.jsx(r,{title:"with steps 10 by 10",children:t.jsx(s,{min:0,max:100,step:10})})]});e.__docgenInfo={description:"",methods:[],displayName:"Ranges"};var a,i,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => <StoryBlock title="Ranges">
    <StoryPart title="from 0 to 100">
      <EditableSlider min={0} max={100} step={1} />
    </StoryPart>

    <StoryPart title="from -20 to 50">
      <EditableSlider min={-20} max={50} step={1} />
    </StoryPart>

    <StoryPart title="with steps 10 by 10">
      <EditableSlider min={0} max={100} step={10} />
    </StoryPart>
  </StoryBlock>`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const _=["Ranges"];export{e as Ranges,_ as __namedExportsOrder,B as default};
//# sourceMappingURL=Slider.stories-qKT1HmVh.js.map
