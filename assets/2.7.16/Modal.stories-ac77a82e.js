import{S,c as f,a,j as t,F as b,b as k,q as g,V as e}from"./Space-6f4fd9a8.js";import{r as P}from"./index-b9a8c83f.js";import{G as v}from"./Grid-de42569f.js";import{a as n}from"./LakeButton-6d235d72.js";import{L as p}from"./LakeModal-5b9e92ce.js";import{S as B,a as i}from"./_StoriesComponents-894316fe.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-180608bf.js";import"./useMergeRefs-b265f72b.js";import"./index-f7a90e68.js";import"./commonStyles-d52fedae.js";import"./useBodyClassName-4a67c631.js";import"./FocusTrap-21b11a5a.js";import"./array-a4405b3e.js";import"./LakeHeading-bc50b026.js";import"./LoadingView-d08e568b.js";import"./colors-298625c7.js";import"./ResponsiveContainer-e3d8360c.js";import"./TransitionView-f8f8750c.js";import"./Box-822dece8.js";const o=S.create({block:{height:200,backgroundColor:f.gray[100],borderRadius:5},grid:{paddingBottom:20},button:{alignSelf:"flex-start"}}),I={title:"Layout/Modal",component:p},l=({withCloseCross:u=!1,...h})=>{const[y,s]=P.useState(!1);return a(b,{children:[t(n,{color:"live",size:"small",onPress:()=>s(!0),style:o.button,children:"Open"}),a(p,{...h,visible:y,onPressClose:u?()=>s(!1):void 0,children:[t(k,{height:8}),t(g,{children:a(v,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:o.grid,children:[t(e,{style:o.block}),t(e,{style:o.block}),t(e,{style:o.block}),t(e,{style:o.block})]})}),t(n,{color:"live",size:"small",onPress:()=>s(!1),children:"Close"})]})]})},r=()=>a(B,{title:"Modal",description:["This component creates a modal with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[t(i,{title:"Default",children:t(l,{})}),t(i,{title:"With title",children:t(l,{title:"A title"})}),t(i,{title:"With title and icon",children:t(l,{title:"Title and icon",icon:"add-circle-filled",color:"live"})}),t(i,{title:"Closable with click outside and top right cross",children:t(l,{title:"Title and icon",icon:"add-circle-filled",color:"live",withCloseCross:!0})})]});var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const J=["All"];export{r as All,J as __namedExportsOrder,I as default};
//# sourceMappingURL=Modal.stories-ac77a82e.js.map
