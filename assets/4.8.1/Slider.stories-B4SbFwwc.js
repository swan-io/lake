import{s as g,j as c,a as t,V as f}from"./Space-CK98gG-f.js";import{r as R}from"./index-CBqU2yxZ.js";import{L as S,s as k}from"./LakeSlider-iYV72xHn.js";import{S as u,a as e}from"./_StoriesComponents-BvwlosE-.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./commonStyles-BrGcwxhJ.js";import"./LakeLabel-BikiUs0j.js";import"./v4-D8aEg3BZ.js";import"./LakeTextInput-BR6tLb7H.js";import"./Pressable-bLRuTZAC.js";import"./Fill-Bpl4Uu83.js";import"./LakeSelect-DExqvqhX.js";import"./useDisclosure-CS9t68_Y.js";import"./a11y-DXvpDVrG.js";import"./Popover-BbsoUtfw.js";import"./useResponsive-CPIEZQbI.js";import"./function-DNthd_7Y.js";import"./Boxed-zu2eTygX.js";import"./BottomPanel-zCPzOVhV.js";import"./useBodyClassName-FAgY5CgW.js";import"./math-B0th0pVG.js";import"./FocusTrap-BK5m80NJ.js";import"./array-rjEBP2Ry.js";import"./LoadingView-B9DS3VXN.js";import"./index-B0NClWXB.js";import"./TransitionView-BJQSJfnh.js";import"./index-i7HVzN8C.js";import"./index-D-ld40uj.js";import"./index-BAzPmG_w.js";import"./ResponsiveContainer-B96jKmPm.js";const n=g.create({desktop:{padding:10,maxWidth:800},mobile:{maxWidth:400}}),et={title:"Forms/Slider",component:S},r=({mobileSize:b=!1,...h})=>{const[y,x]=R.useState(0);return t(f,{style:b?n.mobile:n.desktop,children:t(S,{...h,value:y,onChange:x})})},i=()=>c(u,{title:"Ranges",children:[t(e,{title:"from 0 to 100",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$"})}),t(e,{title:"from -20 to 50",children:t(r,{label:"Range",min:-20,max:50,step:1,unit:"$"})}),t(e,{title:"with steps 10 by 10",children:t(r,{label:"Range",min:0,max:100,step:10,unit:"$"})})]}),o=()=>c(u,{title:"Slider sizes",description:`UI of slider depends on container width. If width is lower than ${k}, there is only a text input without slider`,children:[t(e,{title:"Mobile",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$",mobileSize:!0})}),t(e,{title:"Desktop",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$"})})]});var a,s,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Slider.stories-B4SbFwwc.js.map
