import{S,c as f,j as a,a as t,F as b,b as k,k as g,V as e}from"./Space-6eed0d88.js";import{r as P}from"./index-f1f749bf.js";import{G as v}from"./Grid-bc61d76e.js";import{L as n}from"./LakeButton-50f6b80f.js";import{L as p}from"./LakeModal-b5bc6228.js";import{S as B,a as i}from"./_StoriesComponents-558fd616.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-042e6b4d.js";import"./index.module-735e9c16.js";import"./Icon-87c31cb3.js";import"./Svg-abde2ed6.js";import"./Pressable-3d82c94f.js";import"./useMergeRefs-5a80edc1.js";import"./index-ebd39054.js";import"./commonStyles-d52fedae.js";import"./useBodyClassName-bd00433d.js";import"./FocusTrap-40c1a745.js";import"./array-b3630b94.js";import"./LakeHeading-20eef319.js";import"./LoadingView-754ee381.js";import"./colors-298625c7.js";import"./Portal-c73dcbcb.js";import"./index-96c5f47c.js";import"./WithCurrentColor-01df0f6e.js";import"./ResponsiveContainer-e6191ffc.js";import"./TransitionView-d82da6f9.js";const o=S.create({block:{height:200,backgroundColor:f.gray[100],borderRadius:5},grid:{paddingBottom:20},button:{alignSelf:"flex-start"}}),U={title:"Layout/Modal",component:p},r=({withCloseCross:u=!1,...h})=>{const[y,s]=P.useState(!1);return a(b,{children:[t(n,{color:"live",size:"small",onPress:()=>s(!0),style:o.button,children:"Open"}),a(p,{...h,visible:y,onPressClose:u?()=>s(!1):void 0,children:[t(k,{height:8}),t(g,{children:a(v,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:o.grid,children:[t(e,{style:o.block}),t(e,{style:o.block}),t(e,{style:o.block}),t(e,{style:o.block})]})}),t(n,{color:"live",size:"small",onPress:()=>s(!1),children:"Close"})]})]})},l=()=>a(B,{title:"Modal",description:["This component creates a modal with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[t(i,{title:"Default",children:t(r,{})}),t(i,{title:"With title",children:t(r,{title:"A title"})}),t(i,{title:"With title and icon",children:t(r,{title:"Title and icon",icon:"add-circle-filled",color:"live"})}),t(i,{title:"Closable with click outside and top right cross",children:t(r,{title:"Title and icon",icon:"add-circle-filled",color:"live",withCloseCross:!0})})]});var c,d,m;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Modal.stories-349f7aac.js.map
