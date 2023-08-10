import{S,c as f,a,j as t,F as b,b as k,q as g,V as e}from"./Space-c4a4a345.js";import{r as P}from"./index-b9a8c83f.js";import{G as v}from"./Grid-f6b808a1.js";import{a as n}from"./LakeButton-cdfbd4c7.js";import{L as p}from"./LakeModal-d8cc6029.js";import{S as B,a as i}from"./_StoriesComponents-11863cb7.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./Pressable-7ec8640d.js";import"./useMergeRefs-741761f2.js";import"./index-d8fa1b07.js";import"./commonStyles-d52fedae.js";import"./useBodyClassName-4a67c631.js";import"./FocusTrap-1160c51b.js";import"./array-a4405b3e.js";import"./LakeHeading-a642f7a7.js";import"./LoadingView-e06a906c.js";import"./colors-298625c7.js";import"./ResponsiveContainer-9b4befa3.js";import"./TransitionView-8ce7d533.js";import"./Box-c22c248b.js";const o=S.create({block:{height:200,backgroundColor:f.gray[100],borderRadius:5},grid:{paddingBottom:20},button:{alignSelf:"flex-start"}}),I={title:"Layout/Modal",component:p},l=({withCloseCross:u=!1,...h})=>{const[y,s]=P.useState(!1);return a(b,{children:[t(n,{color:"live",size:"small",onPress:()=>s(!0),style:o.button,children:"Open"}),a(p,{...h,visible:y,onPressClose:u?()=>s(!1):void 0,children:[t(k,{height:8}),t(g,{children:a(v,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:o.grid,children:[t(e,{style:o.block}),t(e,{style:o.block}),t(e,{style:o.block}),t(e,{style:o.block})]})}),t(n,{color:"live",size:"small",onPress:()=>s(!1),children:"Close"})]})]})},r=()=>a(B,{title:"Modal",description:["This component creates a modal with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[t(i,{title:"Default",children:t(l,{})}),t(i,{title:"With title",children:t(l,{title:"A title"})}),t(i,{title:"With title and icon",children:t(l,{title:"Title and icon",icon:"add-circle-filled",color:"live"})}),t(i,{title:"Closable with click outside and top right cross",children:t(l,{title:"Title and icon",icon:"add-circle-filled",color:"live",withCloseCross:!0})})]});var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Modal.stories-c3e87c28.js.map
