import{S,c as f,a,j as t,F as b,b as k,q as g,V as e}from"./Space-e959b53a.js";import{L as p}from"./LakeModal-928a4541.js";import{r as P}from"./index-1e572255.js";import{G as v}from"./Grid-fdd5079e.js";import{a as n}from"./LakeButton-aa77bfb0.js";import{S as B,a as i}from"./_StoriesComponents-01416687.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./FocusTrap-1ffc5bc3.js";import"./a11y-e7c88e69.js";import"./array-4dd4a51c.js";import"./LakeHeading-2e75f4d8.js";import"./LoadingView-b90b071b.js";import"./colors-298625c7.js";import"./index-bb6c8686.js";import"./Pressable-326c0718.js";import"./useMergeRefs-fcd37fdc.js";import"./ResponsiveContainer-89e1dbf3.js";import"./TransitionView-9ff0ecf0.js";import"./commonStyles-0dfecebf.js";import"./useBodyClassName-915b7711.js";import"./i18n-ef5ae441.js";import"./rifm-d650ed48.js";import"./utc-b4568dc5.js";const o=S.create({block:{height:200,backgroundColor:f.gray[100],borderRadius:5},grid:{paddingBottom:20},button:{alignSelf:"flex-start"}}),N={title:"Layout/Modal",component:p},r=({withCloseCross:u=!1,...h})=>{const[y,s]=P.useState(!1);return a(b,{children:[t(n,{color:"live",size:"small",onPress:()=>s(!0),style:o.button,children:"Open"}),a(p,{...h,visible:y,onPressClose:u?()=>s(!1):void 0,children:[t(k,{height:8}),t(g,{children:a(v,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:o.grid,children:[t(e,{style:o.block}),t(e,{style:o.block}),t(e,{style:o.block}),t(e,{style:o.block})]})}),t(n,{color:"live",size:"small",onPress:()=>s(!1),children:"Close"})]})]})},l=()=>a(B,{title:"Modal",description:["This component creates a modal with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[t(i,{title:"Default",children:t(r,{})}),t(i,{title:"With title",children:t(r,{title:"A title"})}),t(i,{title:"With title and icon",children:t(r,{title:"Title and icon",icon:"add-circle-filled",color:"live"})}),t(i,{title:"Closable with click outside and top right cross",children:t(r,{title:"Title and icon",icon:"add-circle-filled",color:"live",withCloseCross:!0})})]});var c,d,m;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(m=(d=l.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const Q=["All"];export{l as All,Q as __namedExportsOrder,N as default};
//# sourceMappingURL=Modal.stories-31c259c2.js.map
