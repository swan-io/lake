import{c as e,i as t}from"./preload-helper-CCSz8wUY.js";import{o as n}from"./iframe-CtGZpw-r.js";import{Bt as r,Et as i,Ft as a,et as o,ht as s,i as c,n as l,r as u,t as d,vt as f}from"./ScrollView-zy8UEe-Q.js";import{r as p,t as m}from"./LakeButton-lVs-Lb3-.js";import{n as h,t as g}from"./Grid-DIMMTXm-.js";import{n as _,r as v,t as y}from"./_StoriesComponents-BN8shzDO.js";import{n as b,t as x}from"./LakeModal-DxdRoTpY.js";var S,C,w,T,E,D,O;t((()=>{h(),p(),l(),c(),f(),S=e(n()),i(),b(),v(),C=o(),w=r.create({block:{height:200,backgroundColor:s.gray[100],borderRadius:5},grid:{paddingBottom:20},button:{alignSelf:`flex-start`}}),T={title:`Layout/Modal`,component:x},E=({withCloseCross:e=!1,...t})=>{let[n,r]=(0,S.useState)(!1);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(m,{color:`live`,size:`small`,onPress:()=>r(!0),style:w.button,children:`Open`}),(0,C.jsxs)(x,{...t,visible:n,onPressClose:e?()=>r(!1):void 0,children:[(0,C.jsx)(u,{height:8}),(0,C.jsx)(d,{children:(0,C.jsxs)(g,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:w.grid,children:[(0,C.jsx)(a,{style:w.block}),(0,C.jsx)(a,{style:w.block}),(0,C.jsx)(a,{style:w.block}),(0,C.jsx)(a,{style:w.block})]})}),(0,C.jsx)(m,{color:`live`,size:`small`,onPress:()=>r(!1),children:`Close`})]})]})},D=()=>(0,C.jsxs)(y,{title:`Modal`,description:[`This component creates a modal with enter and leave animation. `,`You can try it by clicking on "Open" button.`],children:[(0,C.jsx)(_,{title:`Default`,children:(0,C.jsx)(E,{})}),(0,C.jsx)(_,{title:`With title`,children:(0,C.jsx)(E,{title:`A title`})}),(0,C.jsx)(_,{title:`With title and icon`,children:(0,C.jsx)(E,{title:`Title and icon`,icon:`add-circle-filled`,color:`live`})}),(0,C.jsx)(_,{title:`Closable with click outside and top right cross`,children:(0,C.jsx)(E,{title:`Title and icon`,icon:`add-circle-filled`,color:`live`,withCloseCross:!0})})]}),D.__docgenInfo={description:``,methods:[],displayName:`All`},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  return <StoryBlock title="Modal" description={["This component creates a modal with enter and leave animation. ", 'You can try it by clicking on "Open" button.']}>
      <StoryPart title="Default">
        <ButtonModal />
      </StoryPart>

      <StoryPart title="With title">
        <ButtonModal title="A title" />
      </StoryPart>

      <StoryPart title="With title and icon">
        <ButtonModal title="Title and icon" icon="add-circle-filled" color="live" />
      </StoryPart>

      <StoryPart title="Closable with click outside and top right cross">
        <ButtonModal title="Title and icon" icon="add-circle-filled" color="live" withCloseCross={true} />
      </StoryPart>
    </StoryBlock>;
}`,...D.parameters?.docs?.source}}},O=[`All`]}))();export{D as All,O as __namedExportsOrder,T as default};
//# sourceMappingURL=Modal.stories-D4nGls_y.js.map