import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{o as n}from"./iframe-DXgxru2-.js";import{M as r,N as i,U as a,g as o,h as s,ht as c,i as l,it as u,kt as d,m as f,o as p,p as m,r as h,s as g,st as _,wt as v}from"./ScrollView-BvY3QTy9.js";import{n as y,t as b}from"./BorderedIcon-HyBoiQYj.js";import{n as x,r as S,t as C}from"./_StoriesComponents-BL60qKlF.js";var w,T,E,D,O,k,A,j,M=t((()=>{w=e(n()),c(),i(),_(),y(),o(),g(),l(),T=a(),E=100,D=2,O=24,k=2,A=d.create({container:{width:`100%`},textContainer:{width:140},lastTextContainer:{width:E},desktopBarContainer:{flex:1,paddingRight:40,height:E},desktopBar:{width:`100%`,height:D,borderRadius:D/2,backgroundColor:u.gray[100]},mobileNumber:{width:24,height:24,borderRadius:12,borderColor:u.current[100],borderWidth:1,backgroundColor:u.current[50]},mobileNumberActive:{borderColor:u.current[500]},mobileNumberText:{position:`relative`},mobileBarContainer:{width:O,paddingVertical:4},mobileBar:{width:k,height:12,borderRadius:k/2,backgroundColor:u.gray[100]},completeMobileBar:{backgroundColor:u.current[500]}}),j=({steps:e,mode:t})=>r(t).with(`desktop`,()=>(0,T.jsx)(s,{direction:`row`,style:A.container,children:e.map(({label:t,icon:n},r)=>{let i=r===e.length-1;return(0,T.jsxs)(w.Fragment,{children:[(0,T.jsxs)(s,{children:[(0,T.jsx)(b,{name:n,size:100,padding:16}),(0,T.jsx)(h,{height:32}),(0,T.jsx)(v,{style:i?A.lastTextContainer:A.textContainer,children:(0,T.jsxs)(p,{color:u.gray[900],variant:`medium`,children:[r+1,`. `,t]})})]}),!i&&(0,T.jsx)(s,{direction:`row`,alignItems:`center`,style:A.desktopBarContainer,children:(0,T.jsx)(v,{style:A.desktopBar})})]},r)})})).with(`mobile`,()=>(0,T.jsx)(s,{direction:`column`,children:e.map(({label:e,isComplete:t},n)=>(0,T.jsxs)(w.Fragment,{children:[n>0&&(0,T.jsx)(s,{alignItems:`center`,style:A.mobileBarContainer,children:(0,T.jsx)(v,{style:[A.mobileBar,t===!0?A.completeMobileBar:null]})}),(0,T.jsxs)(s,{direction:`row`,alignItems:`center`,children:[(0,T.jsx)(s,{alignItems:`center`,justifyContent:`center`,style:[A.mobileNumber,t===!0?A.mobileNumberActive:null],children:(0,T.jsx)(p,{color:u.current.primary,variant:`smallMedium`,style:A.mobileNumberText,children:n+1})}),(0,T.jsx)(h,{width:12}),(0,T.jsx)(p,{color:u.gray[700],variant:`smallMedium`,children:e})]})]},n))})).exhaustive()})),N,P,F,I;t((()=>{M(),l(),f(),S(),N=a(),P={title:`Informations/FlowPresentation`,component:j},F=()=>(0,N.jsx)(m,{variant:`live`,children:(0,N.jsxs)(C,{title:`FlowPresentation`,children:[(0,N.jsxs)(x,{title:`Desktop`,children:[(0,N.jsx)(j,{steps:[{label:`Enter your e-mail`,icon:`mail-regular`},{label:`Fill in the form`,icon:`building-multiple-regular`},{label:`Add an owner`,icon:`person-add-regular`},{label:`Attach the documents`,icon:`document-regular`},{label:`Finalize`,icon:`desktop-regular`}],mode:`desktop`}),(0,N.jsx)(h,{height:32})]}),(0,N.jsxs)(x,{title:`Mobile`,children:[(0,N.jsx)(j,{steps:[{label:`Enter your e-mail`,icon:`mail-regular`},{label:`Fill in the form`,icon:`building-multiple-regular`},{label:`Add an owner`,icon:`person-add-regular`},{label:`Attach the documents`,icon:`document-regular`},{label:`Finalize`,icon:`desktop-regular`}],mode:`mobile`}),(0,N.jsx)(h,{height:32})]}),(0,N.jsxs)(x,{title:`Mobile (with completion)`,children:[(0,N.jsx)(j,{steps:[{label:`Enter your e-mail`,icon:`mail-regular`,isComplete:!0},{label:`Fill in the form`,icon:`building-multiple-regular`,isComplete:!0},{label:`Add an owner`,icon:`person-add-regular`,isComplete:!0},{label:`Attach the documents`,icon:`document-regular`},{label:`Finalize`,icon:`desktop-regular`}],mode:`mobile`}),(0,N.jsx)(h,{height:32})]})]})}),F.__docgenInfo={description:``,methods:[],displayName:`Default`},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source}}},I=[`Default`]}))();export{F as Default,I as __namedExportsOrder,P as default};
//# sourceMappingURL=FlowPresentation.stories-B8pBS0hG.js.map