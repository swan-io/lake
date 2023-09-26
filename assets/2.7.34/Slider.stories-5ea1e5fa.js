import{S as g,a as c,j as t,V as f}from"./Space-e959b53a.js";import{r as R}from"./index-1e572255.js";import{L as S,s as k}from"./LakeSlider-fa954535.js";import{S as u,a as e}from"./_StoriesComponents-7ea45be6.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./commonStyles-850b5c5b.js";import"./LakeLabel-457dc96a.js";import"./v4-4a60fe23.js";import"./LakeTextInput-79340866.js";import"./useMergeRefs-fcd37fdc.js";import"./Fill-a555fe1c.js";import"./index-bb6c8686.js";import"./ResponsiveContainer-89e1dbf3.js";const a=g.create({desktop:{padding:10,maxWidth:800},mobile:{maxWidth:400}}),W={title:"Forms/Slider",component:S},r=({mobileSize:b=!1,...h})=>{const[y,x]=R.useState(0);return t(f,{style:b?a.mobile:a.desktop,children:t(S,{...h,value:y,onChange:x})})},i=()=>c(u,{title:"Ranges",children:[t(e,{title:"from 0 to 100",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$"})}),t(e,{title:"from -20 to 50",children:t(r,{label:"Range",min:-20,max:50,step:1,unit:"$"})}),t(e,{title:"with steps 10 by 10",children:t(r,{label:"Range",min:0,max:100,step:10,unit:"$"})})]}),n=()=>c(u,{title:"Slider sizes",description:`UI of slider depends on container width. If width is lower than ${k}, there is only a text input without slider`,children:[t(e,{title:"Mobile",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$",mobileSize:!0})}),t(e,{title:"Desktop",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$"})})]});var o,s,l;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(l=(s=i.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var m,d,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <StoryBlock title="Slider sizes" description={\`UI of slider depends on container width. If width is lower than \${sliderBreakpoint}, there is only a text input without slider\`}>
      <StoryPart title="Mobile">
        <EditableSlider label="Range" min={0} max={100} step={1} unit="$" mobileSize={true} />
      </StoryPart>

      <StoryPart title="Desktop">
        <EditableSlider label="Range" min={0} max={100} step={1} unit="$" />
      </StoryPart>
    </StoryBlock>;
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const v=["Ranges","Sizes"];export{i as Ranges,n as Sizes,v as __namedExportsOrder,W as default};
//# sourceMappingURL=Slider.stories-5ea1e5fa.js.map
