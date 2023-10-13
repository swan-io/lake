import{S as g,a as c,j as t,V as f}from"./Space-86dc70b9.js";import{r as R}from"./index-1e572255.js";import{L as S,s as k}from"./LakeSlider-4a33db8d.js";import{S as u,a as e}from"./_StoriesComponents-4b87af3d.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./commonStyles-b86b347e.js";import"./LakeLabel-844632c2.js";import"./v4-4a60fe23.js";import"./LakeTextInput-0ba1925c.js";import"./Pressable-2d97f48a.js";import"./Fill-3dd8127d.js";import"./LakeSelect-22f51399.js";import"./useDisclosure-c07905bf.js";import"./a11y-e7c88e69.js";import"./Popover-794cc9bc.js";import"./useResponsive-c06b5117.js";import"./function-a81f264e.js";import"./Boxed-86465006.js";import"./BottomPanel-8f14a8c2.js";import"./useBodyClassName-915b7711.js";import"./math-ae6b0a6c.js";import"./FocusTrap-11cb8216.js";import"./array-4dd4a51c.js";import"./LoadingView-6718b3c9.js";import"./colors-298625c7.js";import"./index-81e26783.js";import"./TransitionView-dbe4df8a.js";import"./index-57dc3386.js";import"./index-2ef4961e.js";import"./index-48c62e51.js";import"./ResponsiveContainer-9b29f4d0.js";const n=g.create({desktop:{padding:10,maxWidth:800},mobile:{maxWidth:400}}),et={title:"Forms/Slider",component:S},r=({mobileSize:b=!1,...h})=>{const[y,x]=R.useState(0);return t(f,{style:b?n.mobile:n.desktop,children:t(S,{...h,value:y,onChange:x})})},i=()=>c(u,{title:"Ranges",children:[t(e,{title:"from 0 to 100",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$"})}),t(e,{title:"from -20 to 50",children:t(r,{label:"Range",min:-20,max:50,step:1,unit:"$"})}),t(e,{title:"with steps 10 by 10",children:t(r,{label:"Range",min:0,max:100,step:10,unit:"$"})})]}),o=()=>c(u,{title:"Slider sizes",description:`UI of slider depends on container width. If width is lower than ${k}, there is only a text input without slider`,children:[t(e,{title:"Mobile",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$",mobileSize:!0})}),t(e,{title:"Desktop",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$"})})]});var a,s,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Slider.stories-f2fcb5a1.js.map
