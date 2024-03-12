import{s as B,c as o,N as P,a as e,B as n,j as t,S as c,V as u,L as h,W as v}from"./Space-CO5JyqEy.js";import{r as b}from"./index-CBqU2yxZ.js";import{B as x}from"./BorderedIcon-BIYZp3vT.js";import{S as _,a as y}from"./_StoriesComponents-qADnHaId.js";import"./extends-CCbyfPlC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./commonStyles-t4XfA7cz.js";const p=100,w=2,A=40,I=24,k=4,r=B.create({container:{width:"100%"},textContainer:{width:p+A},lastTextContainer:{width:p},desktopBarContainer:{flex:1,paddingRight:40,height:p},desktopBar:{width:"100%",height:w,borderRadius:w/2,backgroundColor:o.gray[100]},mobileNumber:{width:24,height:24,borderRadius:12,borderColor:o.current[100],borderWidth:1,backgroundColor:o.current[50]},mobileNumberText:{position:"relative",top:1},mobileBarContainer:{width:I,paddingVertical:4},mobileBar:{width:k,height:12,borderRadius:k/2,backgroundColor:o.gray[100]}}),s=({steps:i,mode:S})=>P(S).with("desktop",()=>e(n,{direction:"row",style:r.container,children:i.map(({label:m,icon:l},a)=>{const g=a===i.length-1;return t(b.Fragment,{children:[t(n,{children:[e(x,{name:l,size:100,padding:16}),e(c,{height:32}),e(u,{style:g?r.lastTextContainer:r.textContainer,children:t(h,{color:o.gray[900],variant:"medium",children:[a+1,". ",m]})})]}),!g&&e(n,{direction:"row",alignItems:"center",style:r.desktopBarContainer,children:e(u,{style:r.desktopBar})})]},a)})})).with("mobile",()=>e(n,{direction:"column",children:i.map(({label:m},l)=>{const a=l===i.length-1;return t(b.Fragment,{children:[t(n,{direction:"row",alignItems:"center",children:[e(n,{alignItems:"center",justifyContent:"center",style:r.mobileNumber,children:e(h,{color:o.current.primary,variant:"medium",style:r.mobileNumberText,children:l+1})}),e(c,{width:12}),e(h,{color:o.gray[400],variant:"smallRegular",children:m})]}),!a&&e(n,{alignItems:"center",style:r.mobileBarContainer,children:e(u,{style:r.mobileBar})})]},l)})})).exhaustive();try{s.displayName="FlowPresentation",s.__docgenInfo={description:"",displayName:"FlowPresentation",props:{steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"FlowStep[]"}},mode:{defaultValue:null,description:"",name:"mode",required:!0,type:{name:"enum",value:[{value:'"desktop"'},{value:'"mobile"'}]}}}}}catch{}const D={title:"Informations/FlowPresentation",component:s},d=()=>e(v,{variant:"live",children:t(_,{title:"FlowPresentation",children:[t(y,{title:"Desktop",children:[e(s,{steps:[{label:"Enter your e-mail",icon:"mail-regular"},{label:"Fill in the form",icon:"building-multiple-regular"},{label:"Add an owner",icon:"person-add-regular"},{label:"Attach the documents",icon:"document-regular"},{label:"Finalize",icon:"desktop-regular"}],mode:"desktop"}),e(c,{height:32})]}),t(y,{title:"Mobile",children:[e(s,{steps:[{label:"Enter your e-mail",icon:"mail-regular"},{label:"Fill in the form",icon:"building-multiple-regular"},{label:"Add an owner",icon:"person-add-regular"},{label:"Attach the documents",icon:"document-regular"},{label:"Finalize",icon:"desktop-regular"}],mode:"mobile"}),e(c,{height:32})]})]})});var F,C,f;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
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
}`,...(f=(C=d.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const L=["Default"];export{d as Default,L as __namedExportsOrder,D as default};
//# sourceMappingURL=FlowPresentation.stories-C0Uo81s8.js.map