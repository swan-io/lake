import{j as t,S as p,a as u,V as i,s as h,c as y}from"./ScrollView-Q9GFQRiB.js";import{G as x}from"./Grid-Bru1pZbW.js";import{a}from"./LakeButton-LaZNFxJh.js";import{r as j}from"./iframe-C2Zcgyff.js";import{L as n}from"./LakeModal-DYB47GdD.js";import{S,a as l}from"./_StoriesComponents-DmDthpUV.js";import"./index-DomKN1r3.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-D0LLCX_O.js";import"./index-A4roKQVn.js";import"./extends-CF3RwP-h.js";import"./preload-helper-D1IIBeq1.js";import"./FocusTrap-BOl1qvhJ.js";import"./array-BfAlyugE.js";import"./LakeHeading-JWhb2e6D.js";import"./Suspendable-Bl1OcQz-.js";import"./ResponsiveContainer-D0k4iLGs.js";import"./TransitionView-CAnXmr_N.js";import"./useBodyClassName-C48FDLrh.js";import"./i18n-Cc_FVLAI.js";import"./Separator-CfXdNjVo.js";const o=h.create({block:{height:200,backgroundColor:y.gray[100],borderRadius:5},grid:{paddingBottom:20},button:{alignSelf:"flex-start"}}),R={title:"Layout/Modal",component:n},r=({withCloseCross:c=!1,...d})=>{const[m,s]=j.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(a,{color:"live",size:"small",onPress:()=>s(!0),style:o.button,children:"Open"}),t.jsxs(n,{...d,visible:m,onPressClose:c?()=>s(!1):void 0,children:[t.jsx(p,{height:8}),t.jsx(u,{children:t.jsxs(x,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:o.grid,children:[t.jsx(i,{style:o.block}),t.jsx(i,{style:o.block}),t.jsx(i,{style:o.block}),t.jsx(i,{style:o.block})]})}),t.jsx(a,{color:"live",size:"small",onPress:()=>s(!1),children:"Close"})]})]})},e=()=>t.jsxs(S,{title:"Modal",description:["This component creates a modal with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[t.jsx(l,{title:"Default",children:t.jsx(r,{})}),t.jsx(l,{title:"With title",children:t.jsx(r,{title:"A title"})}),t.jsx(l,{title:"With title and icon",children:t.jsx(r,{title:"Title and icon",icon:"add-circle-filled",color:"live"})}),t.jsx(l,{title:"Closable with click outside and top right cross",children:t.jsx(r,{title:"Title and icon",icon:"add-circle-filled",color:"live",withCloseCross:!0})})]});e.__docgenInfo={description:"",methods:[],displayName:"All"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};const Y=["All"];export{e as All,Y as __namedExportsOrder,R as default};
//# sourceMappingURL=Modal.stories-ddqFf2AG.js.map
