import{c as e,i as t}from"./preload-helper-BnfVW-Vi.js";import{o as n}from"./iframe-CN2n4yQ0.js";import{M as r,N as i,St as a,U as o,bt as s,g as c,h as l,ht as u,i as d,it as f,m as p,o as m,p as h,r as g,s as _,st as v}from"./ScrollView-D9CewmA1.js";import{n as y,t as b}from"./BorderedIcon-C9s2R9mw.js";import{n as x,r as S,t as C}from"./_StoriesComponents-CKvv5mvo.js";var w,T,E,D,O,k,A,j,M,N=t((()=>{w=e(n()),u(),i(),v(),y(),c(),_(),d(),T=o(),E=100,D=2,O=40,k=24,A=2,j=a.create({container:{width:`100%`},textContainer:{width:E+O},lastTextContainer:{width:E},desktopBarContainer:{flex:1,paddingRight:40,height:E},desktopBar:{width:`100%`,height:D,borderRadius:D/2,backgroundColor:f.gray[100]},mobileNumber:{width:24,height:24,borderRadius:12,borderColor:f.current[100],borderWidth:1,backgroundColor:f.current[50]},mobileNumberActive:{borderColor:f.current[500]},mobileNumberText:{position:`relative`},mobileBarContainer:{width:k,paddingVertical:4},mobileBar:{width:A,height:12,borderRadius:A/2,backgroundColor:f.gray[100]},completeMobileBar:{backgroundColor:f.current[500]}}),M=({steps:e,mode:t})=>r(t).with(`desktop`,()=>(0,T.jsx)(l,{direction:`row`,style:j.container,children:e.map(({label:t,icon:n},r)=>{let i=r===e.length-1;return(0,T.jsxs)(w.Fragment,{children:[(0,T.jsxs)(l,{children:[(0,T.jsx)(b,{name:n,size:100,padding:16}),(0,T.jsx)(g,{height:32}),(0,T.jsx)(s,{style:i?j.lastTextContainer:j.textContainer,children:(0,T.jsxs)(m,{color:f.gray[900],variant:`medium`,children:[r+1,`. `,t]})})]}),!i&&(0,T.jsx)(l,{direction:`row`,alignItems:`center`,style:j.desktopBarContainer,children:(0,T.jsx)(s,{style:j.desktopBar})})]},r)})})).with(`mobile`,()=>(0,T.jsx)(l,{direction:`column`,children:e.map(({label:e,isComplete:t},n)=>(0,T.jsxs)(w.Fragment,{children:[n>0&&(0,T.jsx)(l,{alignItems:`center`,style:j.mobileBarContainer,children:(0,T.jsx)(s,{style:[j.mobileBar,t===!0?j.completeMobileBar:null]})}),(0,T.jsxs)(l,{direction:`row`,alignItems:`center`,children:[(0,T.jsx)(l,{alignItems:`center`,justifyContent:`center`,style:[j.mobileNumber,t===!0?j.mobileNumberActive:null],children:(0,T.jsx)(m,{color:f.current.primary,variant:`smallMedium`,style:j.mobileNumberText,children:n+1})}),(0,T.jsx)(g,{width:12}),(0,T.jsx)(m,{color:f.gray[700],variant:`smallMedium`,children:e})]})]},n))})).exhaustive()})),P,F,I,L;t((()=>{N(),d(),p(),S(),P=o(),F={title:`Informations/FlowPresentation`,component:M},I=()=>(0,P.jsx)(h,{variant:`live`,children:(0,P.jsxs)(C,{title:`FlowPresentation`,children:[(0,P.jsxs)(x,{title:`Desktop`,children:[(0,P.jsx)(M,{steps:[{label:`Enter your e-mail`,icon:`mail-regular`},{label:`Fill in the form`,icon:`building-multiple-regular`},{label:`Add an owner`,icon:`person-add-regular`},{label:`Attach the documents`,icon:`document-regular`},{label:`Finalize`,icon:`desktop-regular`}],mode:`desktop`}),(0,P.jsx)(g,{height:32})]}),(0,P.jsxs)(x,{title:`Mobile`,children:[(0,P.jsx)(M,{steps:[{label:`Enter your e-mail`,icon:`mail-regular`},{label:`Fill in the form`,icon:`building-multiple-regular`},{label:`Add an owner`,icon:`person-add-regular`},{label:`Attach the documents`,icon:`document-regular`},{label:`Finalize`,icon:`desktop-regular`}],mode:`mobile`}),(0,P.jsx)(g,{height:32})]}),(0,P.jsxs)(x,{title:`Mobile (with completion)`,children:[(0,P.jsx)(M,{steps:[{label:`Enter your e-mail`,icon:`mail-regular`,isComplete:!0},{label:`Fill in the form`,icon:`building-multiple-regular`,isComplete:!0},{label:`Add an owner`,icon:`person-add-regular`,isComplete:!0},{label:`Attach the documents`,icon:`document-regular`},{label:`Finalize`,icon:`desktop-regular`}],mode:`mobile`}),(0,P.jsx)(g,{height:32})]})]})}),I.__docgenInfo={description:``,methods:[],displayName:`Default`},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}},L=[`Default`]}))();export{I as Default,L as __namedExportsOrder,F as default};
//# sourceMappingURL=FlowPresentation.stories-6zTOtWt3.js.map