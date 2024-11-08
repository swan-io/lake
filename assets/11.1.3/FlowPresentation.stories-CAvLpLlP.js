import{j as e}from"./jsx-runtime-BlAj40OV.js";import{r as g}from"./index-Cs7sjTYM.js";import{s as F,c as t,z as f,B as o,S as i,V as m,L as u,W as S}from"./ScrollView-DAMcnhPN.js";import{B}from"./BorderedIcon-SIIVRc23.js";import{S as P,a as h}from"./_StoriesComponents-R7TyOnfD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DJFdew98.js";import"./Separator-BRzJNy8g.js";import"./commonStyles-CWvHnKRn.js";const b=100,x=2,A=40,v=24,y=2,r=F.create({container:{width:"100%"},textContainer:{width:b+A},lastTextContainer:{width:b},desktopBarContainer:{flex:1,paddingRight:40,height:b},desktopBar:{width:"100%",height:x,borderRadius:x/2,backgroundColor:t.gray[100]},mobileNumber:{width:24,height:24,borderRadius:12,borderColor:t.current[100],borderWidth:1,backgroundColor:t.current[50]},mobileNumberActive:{borderColor:t.current[500]},mobileNumberText:{position:"relative"},mobileBarContainer:{width:v,paddingVertical:4},mobileBar:{width:y,height:12,borderRadius:y/2,backgroundColor:t.gray[100]},completeMobileBar:{backgroundColor:t.current[500]}}),s=({steps:c,mode:k})=>f(k).with("desktop",()=>e.jsx(o,{direction:"row",style:r.container,children:c.map(({label:d,icon:a},n)=>{const p=n===c.length-1;return e.jsxs(g.Fragment,{children:[e.jsxs(o,{children:[e.jsx(B,{name:a,size:100,padding:16}),e.jsx(i,{height:32}),e.jsx(m,{style:p?r.lastTextContainer:r.textContainer,children:e.jsxs(u,{color:t.gray[900],variant:"medium",children:[n+1,". ",d]})})]}),!p&&e.jsx(o,{direction:"row",alignItems:"center",style:r.desktopBarContainer,children:e.jsx(m,{style:r.desktopBar})})]},n)})})).with("mobile",()=>e.jsx(o,{direction:"column",children:c.map(({label:d,isComplete:a},n)=>e.jsxs(g.Fragment,{children:[n>0&&e.jsx(o,{alignItems:"center",style:r.mobileBarContainer,children:e.jsx(m,{style:[r.mobileBar,a===!0?r.completeMobileBar:null]})}),e.jsxs(o,{direction:"row",alignItems:"center",children:[e.jsx(o,{alignItems:"center",justifyContent:"center",style:[r.mobileNumber,a===!0?r.mobileNumberActive:null],children:e.jsx(u,{color:t.current.primary,variant:"smallMedium",style:r.mobileNumberText,children:n+1})}),e.jsx(i,{width:12}),e.jsx(u,{color:t.gray[700],variant:"smallMedium",children:d})]})]},n))})).exhaustive(),_={title:"Informations/FlowPresentation",component:s},l=()=>e.jsx(S,{variant:"live",children:e.jsxs(P,{title:"FlowPresentation",children:[e.jsxs(h,{title:"Desktop",children:[e.jsx(s,{steps:[{label:"Enter your e-mail",icon:"mail-regular"},{label:"Fill in the form",icon:"building-multiple-regular"},{label:"Add an owner",icon:"person-add-regular"},{label:"Attach the documents",icon:"document-regular"},{label:"Finalize",icon:"desktop-regular"}],mode:"desktop"}),e.jsx(i,{height:32})]}),e.jsxs(h,{title:"Mobile",children:[e.jsx(s,{steps:[{label:"Enter your e-mail",icon:"mail-regular"},{label:"Fill in the form",icon:"building-multiple-regular"},{label:"Add an owner",icon:"person-add-regular"},{label:"Attach the documents",icon:"document-regular"},{label:"Finalize",icon:"desktop-regular"}],mode:"mobile"}),e.jsx(i,{height:32})]}),e.jsxs(h,{title:"Mobile (with completion)",children:[e.jsx(s,{steps:[{label:"Enter your e-mail",icon:"mail-regular",isComplete:!0},{label:"Fill in the form",icon:"building-multiple-regular",isComplete:!0},{label:"Add an owner",icon:"person-add-regular",isComplete:!0},{label:"Attach the documents",icon:"document-regular"},{label:"Finalize",icon:"desktop-regular"}],mode:"mobile"}),e.jsx(i,{height:32})]})]})});l.__docgenInfo={description:"",methods:[],displayName:"Default"};var j,w,C;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
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

        <StoryPart title="Mobile (with completion)">
          <FlowPresentation steps={[{
          label: "Enter your e-mail",
          icon: "mail-regular",
          isComplete: true
        }, {
          label: "Fill in the form",
          icon: "building-multiple-regular",
          isComplete: true
        }, {
          label: "Add an owner",
          icon: "person-add-regular",
          isComplete: true
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
}`,...(C=(w=l.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const L=["Default"];export{l as Default,L as __namedExportsOrder,_ as default};
//# sourceMappingURL=FlowPresentation.stories-CAvLpLlP.js.map
