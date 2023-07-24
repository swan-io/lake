import{S,c as f,a,j as t,F as b,b as k,n as g,V as e}from"./Space-cf4dfeb4.js";import{r as P}from"./index-76fb7be0.js";import{G as v}from"./Grid-92e0d3ee.js";import{a as n}from"./LakeButton-f988ae88.js";import{L as p}from"./LakeModal-c5ebd10b.js";import{S as B,a as i}from"./_StoriesComponents-2a4b9755.js";import"./extends-98964cd2.js";import"./_commonjsHelpers-de833af9.js";import"./index-5b9f7f54.js";import"./Icon-6f7a1461.js";import"./Svg-b1e67ad2.js";import"./Pressable-ed362142.js";import"./useMergeRefs-b61c1307.js";import"./index-f3e36406.js";import"./commonStyles-d52fedae.js";import"./useBodyClassName-ecbe623a.js";import"./FocusTrap-066f48d6.js";import"./array-a4405b3e.js";import"./LakeHeading-a6130733.js";import"./LoadingView-636ddb66.js";import"./colors-298625c7.js";import"./Portal-e0be6b33.js";import"./index-d3ea75b5.js";import"./WithCurrentColor-992ec9cb.js";import"./ResponsiveContainer-5db25790.js";import"./TransitionView-07eac98a.js";const o=S.create({block:{height:200,backgroundColor:f.gray[100],borderRadius:5},grid:{paddingBottom:20},button:{alignSelf:"flex-start"}}),U={title:"Layout/Modal",component:p},r=({withCloseCross:u=!1,...h})=>{const[y,s]=P.useState(!1);return a(b,{children:[t(n,{color:"live",size:"small",onPress:()=>s(!0),style:o.button,children:"Open"}),a(p,{...h,visible:y,onPressClose:u?()=>s(!1):void 0,children:[t(k,{height:8}),t(g,{children:a(v,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:o.grid,children:[t(e,{style:o.block}),t(e,{style:o.block}),t(e,{style:o.block}),t(e,{style:o.block})]})}),t(n,{color:"live",size:"small",onPress:()=>s(!1),children:"Close"})]})]})},l=()=>a(B,{title:"Modal",description:["This component creates a modal with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[t(i,{title:"Default",children:t(r,{})}),t(i,{title:"With title",children:t(r,{title:"A title"})}),t(i,{title:"With title and icon",children:t(r,{title:"Title and icon",icon:"add-circle-filled",color:"live"})}),t(i,{title:"Closable with click outside and top right cross",children:t(r,{title:"Title and icon",icon:"add-circle-filled",color:"live",withCloseCross:!0})})]});var c,d,m;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Modal.stories-14425739.js.map
