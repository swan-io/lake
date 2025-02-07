import{j as t}from"./jsx-runtime-DT09rT5F.js";import{G as y}from"./Grid-CzaSRDpZ.js";import{L as a}from"./LakeButton-CVVSHUYx.js";import{s as x,S as j,j as f,V as i,c as S}from"./ScrollView-DmQfgLfc.js";import{r as b}from"./index-DXKZGL6g.js";import{L as m}from"./LakeModal-DAlslLff.js";import{S as g,a as r}from"./_StoriesComponents-B9HmSSEq.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-qr-VC_qH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BJTS7HPn.js";import"./extends-CF3RwP-h.js";import"./index-BlQSi2IU.js";import"./FocusTrap-DNHrld98.js";import"./array-BfAlyugE.js";import"./LakeHeading-D5hgUnge.js";import"./Suspendable-BjksFpPY.js";import"./ResponsiveContainer-CJ6uRWwm.js";import"./TransitionView-B8hXHfhO.js";import"./useBodyClassName-CYzM7DM-.js";import"./i18n-CSSfE9Sx.js";import"./rifm-O4oTxRTM.js";import"./utc-D_eSGhSe.js";import"./Separator-DsQMCOlS.js";const o=x.create({block:{height:200,backgroundColor:S.gray[100],borderRadius:5},grid:{paddingBottom:20},button:{alignSelf:"flex-start"}}),H={title:"Layout/Modal",component:m},l=({withCloseCross:p=!1,...u})=>{const[h,s]=b.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(a,{color:"live",size:"small",onPress:()=>s(!0),style:o.button,children:"Open"}),t.jsxs(m,{...u,visible:h,onPressClose:p?()=>s(!1):void 0,children:[t.jsx(j,{height:8}),t.jsx(f,{children:t.jsxs(y,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:o.grid,children:[t.jsx(i,{style:o.block}),t.jsx(i,{style:o.block}),t.jsx(i,{style:o.block}),t.jsx(i,{style:o.block})]})}),t.jsx(a,{color:"live",size:"small",onPress:()=>s(!1),children:"Close"})]})]})},e=()=>t.jsxs(g,{title:"Modal",description:["This component creates a modal with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[t.jsx(r,{title:"Default",children:t.jsx(l,{})}),t.jsx(r,{title:"With title",children:t.jsx(l,{title:"A title"})}),t.jsx(r,{title:"With title and icon",children:t.jsx(l,{title:"Title and icon",icon:"add-circle-filled",color:"live"})}),t.jsx(r,{title:"Closable with click outside and top right cross",children:t.jsx(l,{title:"Title and icon",icon:"add-circle-filled",color:"live",withCloseCross:!0})})]});e.__docgenInfo={description:"",methods:[],displayName:"All"};var n,c,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const J=["All"];export{e as All,J as __namedExportsOrder,H as default};
//# sourceMappingURL=Modal.stories-DkU0fE0h.js.map
