import{S,c as f,a,j as t,F as b,b as k,q as g,V as e}from"./Space-d12e3bfc.js";import{L as p}from"./LakeModal-8cae221d.js";import{r as P}from"./index-f1286426.js";import{G as v}from"./Grid-a831482c.js";import{a as n}from"./LakeButton-ae282e00.js";import{S as B,a as i}from"./_StoriesComponents-5f6e9af0.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./FocusTrap-e6187b75.js";import"./a11y-e7c88e69.js";import"./array-4dd4a51c.js";import"./LakeHeading-952d2ec3.js";import"./LoadingView-ebbf98a9.js";import"./colors-298625c7.js";import"./index-6c4b0b94.js";import"./Pressable-70de31df.js";import"./ResponsiveContainer-ef7448c7.js";import"./TransitionView-221dc567.js";import"./commonStyles-1ccbee26.js";import"./useBodyClassName-4b4df53c.js";import"./i18n-0c90801e.js";import"./rifm-9adedb30.js";import"./utc-b4568dc5.js";const o=S.create({block:{height:200,backgroundColor:f.gray[100],borderRadius:5},grid:{paddingBottom:20},button:{alignSelf:"flex-start"}}),K={title:"Layout/Modal",component:p},l=({withCloseCross:u=!1,...h})=>{const[y,s]=P.useState(!1);return a(b,{children:[t(n,{color:"live",size:"small",onPress:()=>s(!0),style:o.button,children:"Open"}),a(p,{...h,visible:y,onPressClose:u?()=>s(!1):void 0,children:[t(k,{height:8}),t(g,{children:a(v,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:o.grid,children:[t(e,{style:o.block}),t(e,{style:o.block}),t(e,{style:o.block}),t(e,{style:o.block})]})}),t(n,{color:"live",size:"small",onPress:()=>s(!1),children:"Close"})]})]})},r=()=>a(B,{title:"Modal",description:["This component creates a modal with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[t(i,{title:"Default",children:t(l,{})}),t(i,{title:"With title",children:t(l,{title:"A title"})}),t(i,{title:"With title and icon",children:t(l,{title:"Title and icon",icon:"add-circle-filled",color:"live"})}),t(i,{title:"Closable with click outside and top right cross",children:t(l,{title:"Title and icon",icon:"add-circle-filled",color:"live",withCloseCross:!0})})]});var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const N=["All"];export{r as All,N as __namedExportsOrder,K as default};
//# sourceMappingURL=Modal.stories-4385357d.js.map