import{S as g,j as c,a as t,V as f}from"./Space-aa12f50f.js";import{r as R}from"./index-8db94870.js";import{L as S,s as k}from"./LakeSlider-19ecbc8a.js";import{S as u,a as e}from"./_StoriesComponents-9e7a188c.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-16e654d9.js";import"./LakeLabel-68174a0d.js";import"./commonStyles-d52fedae.js";import"./v4-a960c1f4.js";import"./LakeTextInput-dabd7714.js";import"./useMergeRefs-d36e775e.js";import"./Fill-d7db11d3.js";import"./Icon-ac26427e.js";import"./Svg-9d68b501.js";import"./index-05836526.js";import"./ResponsiveContainer-67c9aa76.js";const n=g.create({desktop:{padding:10,maxWidth:800},mobile:{maxWidth:400}}),F={title:"Forms/Slider",component:S},r=({mobileSize:b=!1,...h})=>{const[y,x]=R.useState(0);return t(f,{style:b?n.mobile:n.desktop,children:t(S,{...h,value:y,onChange:x})})},i=()=>c(u,{title:"Ranges",children:[t(e,{title:"from 0 to 100",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$"})}),t(e,{title:"from -20 to 50",children:t(r,{label:"Range",min:-20,max:50,step:1,unit:"$"})}),t(e,{title:"with steps 10 by 10",children:t(r,{label:"Range",min:0,max:100,step:10,unit:"$"})})]}),o=()=>c(u,{title:"Slider sizes",description:`UI of slider depends on container width. If width is lower than ${k}, there is only a text input without slider`,children:[t(e,{title:"Mobile",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$",mobileSize:!0})}),t(e,{title:"Desktop",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$"})})]});var a,s,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(l=(s=i.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var m,d,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <StoryBlock title="Slider sizes" description={\`UI of slider depends on container width. If width is lower than \${sliderBreakpoint}, there is only a text input without slider\`}>
      <StoryPart title="Mobile">
        <EditableSlider label="Range" min={0} max={100} step={1} unit="$" mobileSize={true} />
      </StoryPart>

      <StoryPart title="Desktop">
        <EditableSlider label="Range" min={0} max={100} step={1} unit="$" />
      </StoryPart>
    </StoryBlock>;
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const O=["Ranges","Sizes"];export{i as Ranges,o as Sizes,O as __namedExportsOrder,F as default};
//# sourceMappingURL=Slider.stories-4d876877.js.map
