import{j as t,s as p,S as h,h as u,V as i,c as y}from"./ScrollView-B3LxNPW3.js";import{G as x}from"./Grid-OVXE63TG.js";import{L as a}from"./LakeButton-BzIn8fD3.js";import{r as j}from"./iframe-CGx-dyke.js";import{L as n}from"./LakeModal-Cz8xHNNb.js";import{S,a as l}from"./_StoriesComponents-RjtM_G4e.js";import"./index-DKTvhl2O.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-BlbFV7Nx.js";import"./index-BmR4-j6U.js";import"./extends-CF3RwP-h.js";import"./preload-helper-D1IIBeq1.js";import"./FocusTrap-DVX9rcey.js";import"./array-BfAlyugE.js";import"./LakeHeading-Chc-qbsZ.js";import"./Suspendable-BsX3Psna.js";import"./ResponsiveContainer-C0G3Llkv.js";import"./TransitionView-C5c0jw-M.js";import"./useBodyClassName-CHGzPXXe.js";import"./i18n-DLQYY8ZN.js";import"./rifm-DUDTP51M.js";import"./Separator-LwAMQvlh.js";const o=p.create({block:{height:200,backgroundColor:y.gray[100],borderRadius:5},grid:{paddingBottom:20},button:{alignSelf:"flex-start"}}),Y={title:"Layout/Modal",component:n},r=({withCloseCross:c=!1,...d})=>{const[m,s]=j.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(a,{color:"live",size:"small",onPress:()=>s(!0),style:o.button,children:"Open"}),t.jsxs(n,{...d,visible:m,onPressClose:c?()=>s(!1):void 0,children:[t.jsx(h,{height:8}),t.jsx(u,{children:t.jsxs(x,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:o.grid,children:[t.jsx(i,{style:o.block}),t.jsx(i,{style:o.block}),t.jsx(i,{style:o.block}),t.jsx(i,{style:o.block})]})}),t.jsx(a,{color:"live",size:"small",onPress:()=>s(!1),children:"Close"})]})]})},e=()=>t.jsxs(S,{title:"Modal",description:["This component creates a modal with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[t.jsx(l,{title:"Default",children:t.jsx(r,{})}),t.jsx(l,{title:"With title",children:t.jsx(r,{title:"A title"})}),t.jsx(l,{title:"With title and icon",children:t.jsx(r,{title:"Title and icon",icon:"add-circle-filled",color:"live"})}),t.jsx(l,{title:"Closable with click outside and top right cross",children:t.jsx(r,{title:"Title and icon",icon:"add-circle-filled",color:"live",withCloseCross:!0})})]});e.__docgenInfo={description:"",methods:[],displayName:"All"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...e.parameters?.docs?.source}}};const F=["All"];export{e as All,F as __namedExportsOrder,Y as default};
//# sourceMappingURL=Modal.stories-Betfu-oH.js.map
