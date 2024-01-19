import{s as S,c as f,j as a,a as t,F as b,S as k,d as g,V as e}from"./Space-81j79bTR.js";import{L as p}from"./LakeModal-lKO39zPx.js";import{r as P}from"./index-4g5l5LRQ.js";import{G as v}from"./Grid-FFuKw_AU.js";import{L as s}from"./LakeButton-Xa662RHe.js";import{S as B,a as i}from"./_StoriesComponents-NZImkeAe.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./FocusTrap-ynx_vS_H.js";import"./a11y-2bSo9Xxj.js";import"./array-_tkD71ox.js";import"./LakeHeading--0nquTTa.js";import"./LoadingView-e7OmvxdS.js";import"./index-9YMOBtO7.js";import"./Pressable-cQumq9y2.js";import"./ResponsiveContainer-C831Gtyx.js";import"./TransitionView-rB9AvC4k.js";import"./commonStyles-T5FzHT0x.js";import"./useBodyClassName-b5H8Q92H.js";import"./i18n-omA149uZ.js";import"./rifm-sD0tb7Hc.js";import"./utc-y0zBq2ZQ.js";const o=S.create({block:{height:200,backgroundColor:f.gray[100],borderRadius:5},grid:{paddingBottom:20},button:{alignSelf:"flex-start"}}),K={title:"Layout/Modal",component:p},l=({withCloseCross:u=!1,...h})=>{const[y,n]=P.useState(!1);return a(b,{children:[t(s,{color:"live",size:"small",onPress:()=>n(!0),style:o.button,children:"Open"}),a(p,{...h,visible:y,onPressClose:u?()=>n(!1):void 0,children:[t(k,{height:8}),t(g,{children:a(v,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:o.grid,children:[t(e,{style:o.block}),t(e,{style:o.block}),t(e,{style:o.block}),t(e,{style:o.block})]})}),t(s,{color:"live",size:"small",onPress:()=>n(!1),children:"Close"})]})]})},r=()=>a(B,{title:"Modal",description:["This component creates a modal with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[t(i,{title:"Default",children:t(l,{})}),t(i,{title:"With title",children:t(l,{title:"A title"})}),t(i,{title:"With title and icon",children:t(l,{title:"Title and icon",icon:"add-circle-filled",color:"live"})}),t(i,{title:"Closable with click outside and top right cross",children:t(l,{title:"Title and icon",icon:"add-circle-filled",color:"live",withCloseCross:!0})})]});var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Modal.stories-uVh-ymBL.js.map
