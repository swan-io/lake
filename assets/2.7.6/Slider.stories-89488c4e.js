import{S as g,a as c,j as t,V as f}from"./Space-06e7e043.js";import{r as R}from"./index-b9a8c83f.js";import{L as S,s as k}from"./LakeSlider-2ab63fab.js";import{S as u,a as e}from"./_StoriesComponents-1983cd60.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Box-e5f686b9.js";import"./LakeLabel-1a106a6e.js";import"./commonStyles-d52fedae.js";import"./v4-a960c1f4.js";import"./LakeTextInput-4c56a3d2.js";import"./useMergeRefs-a3120ab8.js";import"./Fill-137fa6ab.js";import"./index-91e11a11.js";import"./ResponsiveContainer-4e6a7213.js";const o=g.create({desktop:{padding:10,maxWidth:800},mobile:{maxWidth:400}}),v={title:"Forms/Slider",component:S},r=({mobileSize:b=!1,...h})=>{const[y,x]=R.useState(0);return t(f,{style:b?o.mobile:o.desktop,children:t(S,{...h,value:y,onChange:x})})},i=()=>c(u,{title:"Ranges",children:[t(e,{title:"from 0 to 100",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$"})}),t(e,{title:"from -20 to 50",children:t(r,{label:"Range",min:-20,max:50,step:1,unit:"$"})}),t(e,{title:"with steps 10 by 10",children:t(r,{label:"Range",min:0,max:100,step:10,unit:"$"})})]}),n=()=>c(u,{title:"Slider sizes",description:`UI of slider depends on container width. If width is lower than ${k}, there is only a text input without slider`,children:[t(e,{title:"Mobile",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$",mobileSize:!0})}),t(e,{title:"Desktop",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$"})})]});var a,s,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const C=["Ranges","Sizes"];export{i as Ranges,n as Sizes,C as __namedExportsOrder,v as default};
//# sourceMappingURL=Slider.stories-89488c4e.js.map
