import{S as g,a as c,j as t,V as f}from"./Space-dba27b92.js";import{r as R}from"./index-f1286426.js";import{L as S,s as k}from"./LakeSlider-de001155.js";import{S as u,a as e}from"./_StoriesComponents-3cc488e2.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./commonStyles-42a4f97c.js";import"./LakeLabel-af31f9aa.js";import"./v4-4a60fe23.js";import"./LakeTextInput-bf88f81b.js";import"./Pressable-20b32eda.js";import"./Fill-e938b4c1.js";import"./LakeSelect-d9f7eed7.js";import"./useDisclosure-a0ce2208.js";import"./a11y-e7c88e69.js";import"./Popover-37204331.js";import"./useResponsive-c5d6bc67.js";import"./function-a81f264e.js";import"./Boxed-86465006.js";import"./BottomPanel-de831ede.js";import"./useBodyClassName-4b4df53c.js";import"./math-15178691.js";import"./FocusTrap-b85d66d4.js";import"./array-4dd4a51c.js";import"./LoadingView-935232a8.js";import"./colors-298625c7.js";import"./index-7f82ccac.js";import"./TransitionView-81a4e627.js";import"./index-35c6183c.js";import"./index-7af8ab58.js";import"./index-1e262cdd.js";import"./ResponsiveContainer-2d82c393.js";const n=g.create({desktop:{padding:10,maxWidth:800},mobile:{maxWidth:400}}),et={title:"Forms/Slider",component:S},r=({mobileSize:b=!1,...h})=>{const[y,x]=R.useState(0);return t(f,{style:b?n.mobile:n.desktop,children:t(S,{...h,value:y,onChange:x})})},i=()=>c(u,{title:"Ranges",children:[t(e,{title:"from 0 to 100",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$"})}),t(e,{title:"from -20 to 50",children:t(r,{label:"Range",min:-20,max:50,step:1,unit:"$"})}),t(e,{title:"with steps 10 by 10",children:t(r,{label:"Range",min:0,max:100,step:10,unit:"$"})})]}),o=()=>c(u,{title:"Slider sizes",description:`UI of slider depends on container width. If width is lower than ${k}, there is only a text input without slider`,children:[t(e,{title:"Mobile",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$",mobileSize:!0})}),t(e,{title:"Desktop",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$"})})]});var a,s,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(l=(s=i.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var m,p,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <StoryBlock title="Slider sizes" description={\`UI of slider depends on container width. If width is lower than \${sliderBreakpoint}, there is only a text input without slider\`}>
      <StoryPart title="Mobile">
        <EditableSlider label="Range" min={0} max={100} step={1} unit="$" mobileSize={true} />
      </StoryPart>

      <StoryPart title="Desktop">
        <EditableSlider label="Range" min={0} max={100} step={1} unit="$" />
      </StoryPart>
    </StoryBlock>;
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const rt=["Ranges","Sizes"];export{i as Ranges,o as Sizes,rt as __namedExportsOrder,et as default};
//# sourceMappingURL=Slider.stories-f1ed45af.js.map
