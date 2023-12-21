import{S as g,j as c,a as t,V as f}from"./Space-vGYTwzdp.js";import{r as R}from"./index-4g5l5LRQ.js";import{L as S,s as k}from"./LakeSlider-VmzPhD6A.js";import{S as u,a as e}from"./_StoriesComponents-sJGtUUNe.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./commonStyles-66j-Zwa4.js";import"./LakeLabel-A87ATVj7.js";import"./v4-yQnnJER4.js";import"./LakeTextInput-Ti94YhlK.js";import"./Pressable-anKNl9-q.js";import"./Fill-5In0vdit.js";import"./LakeSelect-acbE3W2Y.js";import"./useDisclosure-Cnlvt24p.js";import"./a11y-2bSo9Xxj.js";import"./Popover-2JEoqGxo.js";import"./useResponsive-O-XtOQDs.js";import"./function-dZk570d0.js";import"./Boxed-X5xMwKRs.js";import"./BottomPanel--adWzDTS.js";import"./useBodyClassName-b5H8Q92H.js";import"./math-usntJexj.js";import"./FocusTrap-OPSShKHl.js";import"./array-_tkD71ox.js";import"./LoadingView-eVRaIpY1.js";import"./colors-34oHE9gw.js";import"./index-egSEiFFR.js";import"./TransitionView-MuHEYEAE.js";import"./index-xidplq-l.js";import"./index-3c8vLbCC.js";import"./index-7xP2ImVD.js";import"./ResponsiveContainer-TXN8rUit.js";const n=g.create({desktop:{padding:10,maxWidth:800},mobile:{maxWidth:400}}),rt={title:"Forms/Slider",component:S},r=({mobileSize:b=!1,...h})=>{const[y,x]=R.useState(0);return t(f,{style:b?n.mobile:n.desktop,children:t(S,{...h,value:y,onChange:x})})},i=()=>c(u,{title:"Ranges",children:[t(e,{title:"from 0 to 100",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$"})}),t(e,{title:"from -20 to 50",children:t(r,{label:"Range",min:-20,max:50,step:1,unit:"$"})}),t(e,{title:"with steps 10 by 10",children:t(r,{label:"Range",min:0,max:100,step:10,unit:"$"})})]}),o=()=>c(u,{title:"Slider sizes",description:`UI of slider depends on container width. If width is lower than ${k}, there is only a text input without slider`,children:[t(e,{title:"Mobile",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$",mobileSize:!0})}),t(e,{title:"Desktop",children:t(r,{label:"Range",min:0,max:100,step:1,unit:"$"})})]});var a,s,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const it=["Ranges","Sizes"];export{i as Ranges,o as Sizes,it as __namedExportsOrder,rt as default};
//# sourceMappingURL=Slider.stories-Db06chIb.js.map
