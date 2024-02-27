import{s as g,j as c,a as t,V as f}from"./Space-Bw3JTQS4.js";import{r as R}from"./index-CBqU2yxZ.js";import{L as S,s as k}from"./LakeSlider-BXTMwuwG.js";import{S as u,a as e}from"./_StoriesComponents-BPahNcEY.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./commonStyles-6js1GYly.js";import"./LakeLabel-D31gCovA.js";import"./v4-D8aEg3BZ.js";import"./LakeTextInput-WpGjd07B.js";import"./Pressable-xhx_qNT0.js";import"./Fill-Ztiseot6.js";import"./LakeSelect-BT3k6ZrL.js";import"./useDisclosure-CS9t68_Y.js";import"./a11y-DXvpDVrG.js";import"./Popover-dfvzBP5v.js";import"./useResponsive-BXyzHDcN.js";import"./function-CSrc7Gry.js";import"./Boxed-zu2eTygX.js";import"./BottomPanel-Bv_Zk1SA.js";import"./useBodyClassName-FAgY5CgW.js";import"./math-Ez__ivX_.js";import"./FocusTrap-CIpLwW1N.js";import"./array-rjEBP2Ry.js";import"./LoadingView-vVemBHdf.js";import"./index-Dhl-fKVw.js";import"./TransitionView-DUBLob_8.js";import"./index-GfvG-2oP.js";import"./index-oxTv2mbK.js";import"./index-B_kYf67F.js";import"./ResponsiveContainer-Bg6ux0g8.js";const n=g.create({desktop:{padding:10,maxWidth:800},mobile:{maxWidth:400}}),et={title:"Forms/Slider",component:S},r=({mobileSize:b=!1,...h})=>{const[y,x]=R.useState(0);return t(f,{style:b?n.mobile:n.desktop,children:t(S,{...h,value:y,onChange:x})})},i=()=>c(u,{title:"Ranges",children:[t(e,{title:"from 0 to 100",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$"})}),t(e,{title:"from -20 to 50",children:t(r,{label:"Range",min:-20,max:50,step:1,unit:"$"})}),t(e,{title:"with steps 10 by 10",children:t(r,{label:"Range",min:0,max:100,step:10,unit:"$"})})]}),o=()=>c(u,{title:"Slider sizes",description:`UI of slider depends on container width. If width is lower than ${k}, there is only a text input without slider`,children:[t(e,{title:"Mobile",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$",mobileSize:!0})}),t(e,{title:"Desktop",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$"})})]});var a,s,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Slider.stories-DY1ieO1t.js.map
