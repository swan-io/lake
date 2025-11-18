import{z as w,j as e,B as l,s as C,S as i,V as m,L as u,c as t,W as k}from"./ScrollView-CkaScuSL.js";import{r as g}from"./iframe-BVid4p0P.js";import{B as F}from"./BorderedIcon-dHA-YgpS.js";import{S,a as h}from"./_StoriesComponents-D8iEtBe1.js";import"./index-BLHSWTxF.js";import"./preload-helper-D1IIBeq1.js";import"./Separator-gHFv-a7y.js";import"./commonStyles-BBEkV6IC.js";const b=100,x=2,f=40,B=24,y=2,r=C.create({container:{width:"100%"},textContainer:{width:b+f},lastTextContainer:{width:b},desktopBarContainer:{flex:1,paddingRight:40,height:b},desktopBar:{width:"100%",height:x,borderRadius:x/2,backgroundColor:t.gray[100]},mobileNumber:{width:24,height:24,borderRadius:12,borderColor:t.current[100],borderWidth:1,backgroundColor:t.current[50]},mobileNumberActive:{borderColor:t.current[500]},mobileNumberText:{position:"relative"},mobileBarContainer:{width:B,paddingVertical:4},mobileBar:{width:y,height:12,borderRadius:y/2,backgroundColor:t.gray[100]},completeMobileBar:{backgroundColor:t.current[500]}}),s=({steps:c,mode:j})=>w(j).with("desktop",()=>e.jsx(l,{direction:"row",style:r.container,children:c.map(({label:d,icon:a},n)=>{const p=n===c.length-1;return e.jsxs(g.Fragment,{children:[e.jsxs(l,{children:[e.jsx(F,{name:a,size:100,padding:16}),e.jsx(i,{height:32}),e.jsx(m,{style:p?r.lastTextContainer:r.textContainer,children:e.jsxs(u,{color:t.gray[900],variant:"medium",children:[n+1,". ",d]})})]}),!p&&e.jsx(l,{direction:"row",alignItems:"center",style:r.desktopBarContainer,children:e.jsx(m,{style:r.desktopBar})})]},n)})})).with("mobile",()=>e.jsx(l,{direction:"column",children:c.map(({label:d,isComplete:a},n)=>e.jsxs(g.Fragment,{children:[n>0&&e.jsx(l,{alignItems:"center",style:r.mobileBarContainer,children:e.jsx(m,{style:[r.mobileBar,a===!0?r.completeMobileBar:null]})}),e.jsxs(l,{direction:"row",alignItems:"center",children:[e.jsx(l,{alignItems:"center",justifyContent:"center",style:[r.mobileNumber,a===!0?r.mobileNumberActive:null],children:e.jsx(u,{color:t.current.primary,variant:"smallMedium",style:r.mobileNumberText,children:n+1})}),e.jsx(i,{width:12}),e.jsx(u,{color:t.gray[700],variant:"smallMedium",children:d})]})]},n))})).exhaustive(),W={title:"Informations/FlowPresentation",component:s},o=()=>e.jsx(k,{variant:"live",children:e.jsxs(S,{title:"FlowPresentation",children:[e.jsxs(h,{title:"Desktop",children:[e.jsx(s,{steps:[{label:"Enter your e-mail",icon:"mail-regular"},{label:"Fill in the form",icon:"building-multiple-regular"},{label:"Add an owner",icon:"person-add-regular"},{label:"Attach the documents",icon:"document-regular"},{label:"Finalize",icon:"desktop-regular"}],mode:"desktop"}),e.jsx(i,{height:32})]}),e.jsxs(h,{title:"Mobile",children:[e.jsx(s,{steps:[{label:"Enter your e-mail",icon:"mail-regular"},{label:"Fill in the form",icon:"building-multiple-regular"},{label:"Add an owner",icon:"person-add-regular"},{label:"Attach the documents",icon:"document-regular"},{label:"Finalize",icon:"desktop-regular"}],mode:"mobile"}),e.jsx(i,{height:32})]}),e.jsxs(h,{title:"Mobile (with completion)",children:[e.jsx(s,{steps:[{label:"Enter your e-mail",icon:"mail-regular",isComplete:!0},{label:"Fill in the form",icon:"building-multiple-regular",isComplete:!0},{label:"Add an owner",icon:"person-add-regular",isComplete:!0},{label:"Attach the documents",icon:"document-regular"},{label:"Finalize",icon:"desktop-regular"}],mode:"mobile"}),e.jsx(i,{height:32})]})]})});o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const D=["Default"];export{o as Default,D as __namedExportsOrder,W as default};
//# sourceMappingURL=FlowPresentation.stories-CZYQDLTK.js.map
