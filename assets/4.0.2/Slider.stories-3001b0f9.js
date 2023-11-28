import{S as g,a as c,j as t,V as f}from"./Space-8ec20221.js";import{r as R}from"./index-f1286426.js";import{L as S,s as k}from"./LakeSlider-fa01ab6d.js";import{S as u,a as e}from"./_StoriesComponents-1ed2bb38.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./commonStyles-46fa1855.js";import"./LakeLabel-e425aa7c.js";import"./v4-4a60fe23.js";import"./LakeTextInput-71df9894.js";import"./Pressable-dbd81015.js";import"./Fill-33307717.js";import"./LakeSelect-382a7f75.js";import"./useDisclosure-a0ce2208.js";import"./a11y-e7c88e69.js";import"./Popover-71e98e36.js";import"./useResponsive-84457823.js";import"./function-a81f264e.js";import"./Boxed-86465006.js";import"./BottomPanel-bcf3c00c.js";import"./useBodyClassName-4b4df53c.js";import"./math-534c7348.js";import"./FocusTrap-ef098164.js";import"./array-4dd4a51c.js";import"./LoadingView-2056983b.js";import"./colors-298625c7.js";import"./index-88f32c52.js";import"./TransitionView-72f82458.js";import"./index-d01a13d5.js";import"./index-ff079f0e.js";import"./index-23a462bd.js";import"./ResponsiveContainer-9bdc8a30.js";const n=g.create({desktop:{padding:10,maxWidth:800},mobile:{maxWidth:400}}),et={title:"Forms/Slider",component:S},r=({mobileSize:b=!1,...h})=>{const[y,x]=R.useState(0);return t(f,{style:b?n.mobile:n.desktop,children:t(S,{...h,value:y,onChange:x})})},i=()=>c(u,{title:"Ranges",children:[t(e,{title:"from 0 to 100",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$"})}),t(e,{title:"from -20 to 50",children:t(r,{label:"Range",min:-20,max:50,step:1,unit:"$"})}),t(e,{title:"with steps 10 by 10",children:t(r,{label:"Range",min:0,max:100,step:10,unit:"$"})})]}),o=()=>c(u,{title:"Slider sizes",description:`UI of slider depends on container width. If width is lower than ${k}, there is only a text input without slider`,children:[t(e,{title:"Mobile",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$",mobileSize:!0})}),t(e,{title:"Desktop",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$"})})]});var a,s,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Slider.stories-3001b0f9.js.map
