import{s as p,j as l,a as t,S,L as y}from"./Space-CM4sCNzH.js";import{r as x}from"./index-CBqU2yxZ.js";import{c as h,B as f}from"./commonStyles-CeCmb7xk.js";import{L as m}from"./LakeSlider-CyNgT7AJ.js";import{S as u,a as r}from"./_StoriesComponents-De9zcq7V.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";const g=p.create({slider:{...h.fill,maxWidth:800}}),j={title:"Forms/Slider",component:m},s=c=>{const[o,d]=x.useState(0);return l(f,{direction:"row",alignItems:"center",children:[t(m,{...c,value:o,onChange:d,style:g.slider}),t(S,{width:8}),t(y,{children:o})]})},e=()=>l(u,{title:"Ranges",children:[t(r,{title:"from 0 to 100",children:t(s,{min:0,max:100,step:1})}),t(r,{title:"from -20 to 50",children:t(s,{min:-20,max:50,step:1})}),t(r,{title:"with steps 10 by 10",children:t(s,{min:0,max:100,step:10})})]});var a,i,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => <StoryBlock title="Ranges">
    <StoryPart title="from 0 to 100">
      <EditableSlider min={0} max={100} step={1} />
    </StoryPart>

    <StoryPart title="from -20 to 50">
      <EditableSlider min={-20} max={50} step={1} />
    </StoryPart>

    <StoryPart title="with steps 10 by 10">
      <EditableSlider min={0} max={100} step={10} />
    </StoryPart>
  </StoryBlock>`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const _=["Ranges"];export{e as Ranges,_ as __namedExportsOrder,j as default};
//# sourceMappingURL=Slider.stories-aMOBtJP_.js.map
