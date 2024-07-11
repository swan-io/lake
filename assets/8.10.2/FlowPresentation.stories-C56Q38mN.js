import{s as F,c as n,$ as f,j as e,B as t,S as s,V as c,L as m,W as B}from"./ScrollView-B9F7HTm3.js";import{r as b}from"./index-uCp2LrAq.js";import{B as S}from"./BorderedIcon-BXgruroC.js";import{S as P,a as p}from"./_StoriesComponents-Cq_5NJ0H.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BOkhicXD.js";import"./commonStyles-t4XfA7cz.js";const u=100,x=2,v=40,A=24,j=4,r=F.create({container:{width:"100%"},textContainer:{width:u+v},lastTextContainer:{width:u},desktopBarContainer:{flex:1,paddingRight:40,height:u},desktopBar:{width:"100%",height:x,borderRadius:x/2,backgroundColor:n.gray[100]},mobileNumber:{width:24,height:24,borderRadius:12,borderColor:n.current[100],borderWidth:1,backgroundColor:n.current[50]},mobileNumberText:{position:"relative",top:1},mobileBarContainer:{width:A,paddingVertical:4},mobileBar:{width:j,height:12,borderRadius:j/2,backgroundColor:n.gray[100]}}),h=({steps:a,mode:C})=>f(C).with("desktop",()=>e.jsx(t,{direction:"row",style:r.container,children:a.map(({label:d,icon:o},i)=>{const g=i===a.length-1;return e.jsxs(b.Fragment,{children:[e.jsxs(t,{children:[e.jsx(S,{name:o,size:100,padding:16}),e.jsx(s,{height:32}),e.jsx(c,{style:g?r.lastTextContainer:r.textContainer,children:e.jsxs(m,{color:n.gray[900],variant:"medium",children:[i+1,". ",d]})})]}),!g&&e.jsx(t,{direction:"row",alignItems:"center",style:r.desktopBarContainer,children:e.jsx(c,{style:r.desktopBar})})]},i)})})).with("mobile",()=>e.jsx(t,{direction:"column",children:a.map(({label:d},o)=>{const i=o===a.length-1;return e.jsxs(b.Fragment,{children:[e.jsxs(t,{direction:"row",alignItems:"center",children:[e.jsx(t,{alignItems:"center",justifyContent:"center",style:r.mobileNumber,children:e.jsx(m,{color:n.current.primary,variant:"medium",style:r.mobileNumberText,children:o+1})}),e.jsx(s,{width:12}),e.jsx(m,{color:n.gray[400],variant:"smallRegular",children:d})]}),!i&&e.jsx(t,{alignItems:"center",style:r.mobileBarContainer,children:e.jsx(c,{style:r.mobileBar})})]},o)})})).exhaustive(),T={title:"Informations/FlowPresentation",component:h},l=()=>e.jsx(B,{variant:"live",children:e.jsxs(P,{title:"FlowPresentation",children:[e.jsxs(p,{title:"Desktop",children:[e.jsx(h,{steps:[{label:"Enter your e-mail",icon:"mail-regular"},{label:"Fill in the form",icon:"building-multiple-regular"},{label:"Add an owner",icon:"person-add-regular"},{label:"Attach the documents",icon:"document-regular"},{label:"Finalize",icon:"desktop-regular"}],mode:"desktop"}),e.jsx(s,{height:32})]}),e.jsxs(p,{title:"Mobile",children:[e.jsx(h,{steps:[{label:"Enter your e-mail",icon:"mail-regular"},{label:"Fill in the form",icon:"building-multiple-regular"},{label:"Add an owner",icon:"person-add-regular"},{label:"Attach the documents",icon:"document-regular"},{label:"Finalize",icon:"desktop-regular"}],mode:"mobile"}),e.jsx(s,{height:32})]})]})});l.__docgenInfo={description:"",methods:[],displayName:"Default"};var y,w,k;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
}`,...(k=(w=l.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const _=["Default"];export{l as Default,_ as __namedExportsOrder,T as default};
//# sourceMappingURL=FlowPresentation.stories-C56Q38mN.js.map