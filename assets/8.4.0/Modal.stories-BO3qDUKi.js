import{s as y,c as x,j as t,S as j,F as S,V as i}from"./Space-DjFStC5v.js";import{L as m}from"./LakeModal-ZdyKYIuo.js";import{r as f}from"./index-uCp2LrAq.js";import{G as b}from"./Grid-fMAvWfEZ.js";import{L as n}from"./LakeButton-BuQRBlrG.js";import{S as g,a as r}from"./_StoriesComponents-FDn_Q32N.js";import"./extends-CF3RwP-h.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BOkhicXD.js";import"./FocusTrap-B3bzkbaY.js";import"./a11y-DXvpDVrG.js";import"./array-rjEBP2Ry.js";import"./LakeHeading-BnJzjsD1.js";import"./Suspendable-D2xEaey0.js";import"./index-hpX_VHwZ.js";import"./Pressable-1yZVgXYk.js";import"./ResponsiveContainer-DarcN9ng.js";import"./TransitionView-CC46l0LJ.js";import"./commonStyles-t4XfA7cz.js";import"./useBodyClassName-CiTylq2A.js";import"./i18n-CVXZqXyy.js";import"./rifm-Bay7mXpM.js";import"./utc-DJvBpWoA.js";import"./tslib.es6-UMXCHJY6.js";const o=y.create({block:{height:200,backgroundColor:x.gray[100],borderRadius:5},grid:{paddingBottom:20},button:{alignSelf:"flex-start"}}),H={title:"Layout/Modal",component:m},l=({withCloseCross:p=!1,...u})=>{const[h,s]=f.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(n,{color:"live",size:"small",onPress:()=>s(!0),style:o.button,children:"Open"}),t.jsxs(m,{...u,visible:h,onPressClose:p?()=>s(!1):void 0,children:[t.jsx(j,{height:8}),t.jsx(S,{children:t.jsxs(b,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:o.grid,children:[t.jsx(i,{style:o.block}),t.jsx(i,{style:o.block}),t.jsx(i,{style:o.block}),t.jsx(i,{style:o.block})]})}),t.jsx(n,{color:"live",size:"small",onPress:()=>s(!1),children:"Close"})]})]})},e=()=>t.jsxs(g,{title:"Modal",description:["This component creates a modal with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[t.jsx(r,{title:"Default",children:t.jsx(l,{})}),t.jsx(r,{title:"With title",children:t.jsx(l,{title:"A title"})}),t.jsx(r,{title:"With title and icon",children:t.jsx(l,{title:"Title and icon",icon:"add-circle-filled",color:"live"})}),t.jsx(r,{title:"Closable with click outside and top right cross",children:t.jsx(l,{title:"Title and icon",icon:"add-circle-filled",color:"live",withCloseCross:!0})})]});e.__docgenInfo={description:"",methods:[],displayName:"All"};var a,c,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Modal.stories-BO3qDUKi.js.map
