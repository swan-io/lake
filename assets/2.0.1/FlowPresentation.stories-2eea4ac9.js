import{S as B,c as o,a as e,j as t,b as c,V as u,L as h}from"./Space-65f9bfa9.js";import{r as b}from"./index-8db94870.js";import{K as P,B as n}from"./index-5dcf0b89.js";import{B as v}from"./BorderedIcon-f2c539ce.js";import{W as x}from"./WithCurrentColor-41bea5ae.js";import{S as _,a as y}from"./_StoriesComponents-9f567819.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./Icon-4e86e06c.js";import"./Svg-7871e2fb.js";const p=100,w=2,A=40,I=24,k=4,r=B.create({container:{width:"100%"},textContainer:{width:p+A},lastTextContainer:{width:p},desktopBarContainer:{flex:1,paddingRight:40,height:p},desktopBar:{width:"100%",height:w,borderRadius:w/2,backgroundColor:o.gray[100]},mobileNumber:{width:24,height:24,borderRadius:12,borderColor:o.current[100],borderWidth:1,backgroundColor:o.current[50]},mobileNumberText:{position:"relative",top:1},mobileBarContainer:{width:I,paddingVertical:4},mobileBar:{width:k,height:12,borderRadius:k/2,backgroundColor:o.gray[100]}}),d=({steps:i,mode:S})=>P(S).with("desktop",()=>e(n,{direction:"row",style:r.container,children:i.map(({label:m,icon:l},a)=>{const g=a===i.length-1;return t(b.Fragment,{children:[t(n,{children:[e(v,{name:l,size:100,padding:16}),e(c,{height:32}),e(u,{style:g?r.lastTextContainer:r.textContainer,children:t(h,{color:o.gray[900],variant:"medium",children:[a+1,". ",m]})})]}),!g&&e(n,{direction:"row",alignItems:"center",style:r.desktopBarContainer,children:e(u,{style:r.desktopBar})})]},a)})})).with("mobile",()=>e(n,{direction:"column",children:i.map(({label:m},l)=>{const a=l===i.length-1;return t(b.Fragment,{children:[t(n,{direction:"row",alignItems:"center",children:[e(n,{alignItems:"center",justifyContent:"center",style:r.mobileNumber,children:e(h,{color:o.current.primary,variant:"medium",style:r.mobileNumberText,children:l+1})}),e(c,{width:12}),e(h,{color:o.gray[400],variant:"smallRegular",children:m})]}),!a&&e(n,{alignItems:"center",style:r.mobileBarContainer,children:e(u,{style:r.mobileBar})})]},l)})})).exhaustive();try{d.displayName="FlowPresentation",d.__docgenInfo={description:"",displayName:"FlowPresentation",props:{steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"FlowStep[]"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"desktop"'},{value:'"mobile"'}]}}}}}catch{}const q={title:"Informations/FlowPresentation",component:d},s=()=>e(x,{variant:"live",children:t(_,{title:"FlowPresentation",children:[t(y,{title:"Desktop",children:[e(d,{steps:[{label:"Enter your e-mail",icon:"mail-regular"},{label:"Fill in the form",icon:"building-multiple-regular"},{label:"Add an owner",icon:"person-add-regular"},{label:"Attach the documents",icon:"document-regular"},{label:"Finalize",icon:"desktop-regular"}],mode:"desktop"}),e(c,{height:32})]}),t(y,{title:"Mobile",children:[e(d,{steps:[{label:"Enter your e-mail",icon:"mail-regular"},{label:"Fill in the form",icon:"building-multiple-regular"},{label:"Add an owner",icon:"person-add-regular"},{label:"Attach the documents",icon:"document-regular"},{label:"Finalize",icon:"desktop-regular"}],mode:"mobile"}),e(c,{height:32})]})]})});var F,f,C;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  return <WithCurrentColor variant="live">
      <StoryBlock title="FlowPresentation">
        <StoryPart title="Desktop">
          <FlowPresentation steps={[{
          label: "Enter your e-mail",
          icon: "mail-regular"
        }, {
          label: "Fill in the form",
          icon: "building-multiple-regular"
        }, {
          label: "Add an owner",
          icon: "person-add-regular"
        }, {
          label: "Attach the documents",
          icon: "document-regular"
        }, {
          label: "Finalize",
          icon: "desktop-regular"
        }]} mode="desktop" />

          <Space height={32} />
        </StoryPart>

        <StoryPart title="Mobile">
          <FlowPresentation steps={[{
          label: "Enter your e-mail",
          icon: "mail-regular"
        }, {
          label: "Fill in the form",
          icon: "building-multiple-regular"
        }, {
          label: "Add an owner",
          icon: "person-add-regular"
        }, {
          label: "Attach the documents",
          icon: "document-regular"
        }, {
          label: "Finalize",
          icon: "desktop-regular"
        }]} mode="mobile" />

          <Space height={32} />
        </StoryPart>
      </StoryBlock>
    </WithCurrentColor>;
}`,...(C=(f=s.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const M=["Default"];export{s as Default,M as __namedExportsOrder,q as default};
//# sourceMappingURL=FlowPresentation.stories-2eea4ac9.js.map
