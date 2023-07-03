import{S,c as f,j as a,a as t,F as b,b as k,d as g,V as e}from"./Space-139dd191.js";import{r as P}from"./index-8db94870.js";import{G as v}from"./Grid-576a817d.js";import{L as n}from"./LakeButton-dba80506.js";import{L as p}from"./LakeModal-ceec576f.js";import{S as B,a as i}from"./_StoriesComponents-a1824435.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-44ab6a94.js";import"./Icon-3a58148e.js";import"./Svg-5d1f3349.js";import"./Pressable-079d2cd6.js";import"./useMergeRefs-93cd43f4.js";import"./index-2073318c.js";import"./commonStyles-d52fedae.js";import"./useBodyClassName-27d97f40.js";import"./FocusTrap-623b3daa.js";import"./array-b3630b94.js";import"./LakeHeading-f5d0e436.js";import"./LoadingView-5f81e27a.js";import"./colors-298625c7.js";import"./Portal-ef16c35e.js";import"./index-8ce4a492.js";import"./WithCurrentColor-a66e97f7.js";import"./ResponsiveContainer-cf7c36cf.js";import"./TransitionView-93720cea.js";const o=S.create({block:{height:200,backgroundColor:f.gray[100],borderRadius:5},grid:{paddingBottom:20},button:{alignSelf:"flex-start"}}),U={title:"Layout/Modal",component:p},r=({withCloseCross:u=!1,...h})=>{const[y,s]=P.useState(!1);return a(b,{children:[t(n,{color:"live",size:"small",onPress:()=>s(!0),style:o.button,children:"Open"}),a(p,{...h,visible:y,onPressClose:u?()=>s(!1):void 0,children:[t(k,{height:8}),t(g,{children:a(v,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:o.grid,children:[t(e,{style:o.block}),t(e,{style:o.block}),t(e,{style:o.block}),t(e,{style:o.block})]})}),t(n,{color:"live",size:"small",onPress:()=>s(!1),children:"Close"})]})]})},l=()=>a(B,{title:"Modal",description:["This component creates a modal with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[t(i,{title:"Default",children:t(r,{})}),t(i,{title:"With title",children:t(r,{title:"A title"})}),t(i,{title:"With title and icon",children:t(r,{title:"Title and icon",icon:"add-circle-filled",color:"live"})}),t(i,{title:"Closable with click outside and top right cross",children:t(r,{title:"Title and icon",icon:"add-circle-filled",color:"live",withCloseCross:!0})})]});var c,d,m;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(m=(d=l.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const X=["All"];export{l as All,X as __namedExportsOrder,U as default};
//# sourceMappingURL=Modal.stories-8afefd9d.js.map
