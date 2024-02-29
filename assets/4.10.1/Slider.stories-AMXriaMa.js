import{s as g,j as c,a as t,V as f}from"./Space-BCOR-PRq.js";import{r as R}from"./index-CBqU2yxZ.js";import{L as S,s as k}from"./LakeSlider-BFPdVRuB.js";import{S as u,a as e}from"./_StoriesComponents-E0TAbubu.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./commonStyles-wPDjD-CA.js";import"./LakeLabel-BjLv92ym.js";import"./v4-D8aEg3BZ.js";import"./LakeTextInput-ObgZ7vAz.js";import"./Pressable-Dalm2Hp_.js";import"./Fill-oisGpS5z.js";import"./LakeSelect-O5KCInn0.js";import"./useDisclosure-CS9t68_Y.js";import"./a11y-DXvpDVrG.js";import"./Popover-DcJrvaFj.js";import"./useResponsive-DNpd5joz.js";import"./function-BPhm5LGN.js";import"./Boxed-xcydBHmC.js";import"./BottomPanel-D-L5D6Ue.js";import"./useBodyClassName-FAgY5CgW.js";import"./math-BJEnDdtw.js";import"./FocusTrap-CDYVCjOK.js";import"./array-rjEBP2Ry.js";import"./LoadingView-CAHOGKsa.js";import"./index-DzI5fSBQ.js";import"./TransitionView-D9FlI13W.js";import"./index-DKOL5M3v.js";import"./index-jgs6be1Q.js";import"./index-DibHI9_U.js";import"./ResponsiveContainer-DJRt4yNR.js";const n=g.create({desktop:{padding:10,maxWidth:800},mobile:{maxWidth:400}}),et={title:"Forms/Slider",component:S},r=({mobileSize:b=!1,...h})=>{const[y,x]=R.useState(0);return t(f,{style:b?n.mobile:n.desktop,children:t(S,{...h,value:y,onChange:x})})},i=()=>c(u,{title:"Ranges",children:[t(e,{title:"from 0 to 100",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$"})}),t(e,{title:"from -20 to 50",children:t(r,{label:"Range",min:-20,max:50,step:1,unit:"$"})}),t(e,{title:"with steps 10 by 10",children:t(r,{label:"Range",min:0,max:100,step:10,unit:"$"})})]}),o=()=>c(u,{title:"Slider sizes",description:`UI of slider depends on container width. If width is lower than ${k}, there is only a text input without slider`,children:[t(e,{title:"Mobile",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$",mobileSize:!0})}),t(e,{title:"Desktop",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$"})})]});var a,s,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Slider.stories-AMXriaMa.js.map