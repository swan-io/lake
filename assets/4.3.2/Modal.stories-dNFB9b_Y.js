import{S,c as f,j as a,a as t,F as b,b as k,e as g,V as e}from"./Space-vGYTwzdp.js";import{L as p}from"./LakeModal-djrUBN-x.js";import{r as P}from"./index-4g5l5LRQ.js";import{G as v}from"./Grid-0yrS2VWL.js";import{L as n}from"./LakeButton-KoCebhZ2.js";import{S as B,a as i}from"./_StoriesComponents-sJGtUUNe.js";import"./extends-dGVwEr9R.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jmm5gWkb.js";import"./FocusTrap-OPSShKHl.js";import"./a11y-2bSo9Xxj.js";import"./array-_tkD71ox.js";import"./LakeHeading-mZTRqhSd.js";import"./LoadingView-eVRaIpY1.js";import"./colors-34oHE9gw.js";import"./index-egSEiFFR.js";import"./Pressable-anKNl9-q.js";import"./ResponsiveContainer-TXN8rUit.js";import"./TransitionView-MuHEYEAE.js";import"./commonStyles-66j-Zwa4.js";import"./useBodyClassName-b5H8Q92H.js";import"./i18n-5FgaNk-L.js";import"./rifm-v0gYZJ4j.js";import"./utc-y0zBq2ZQ.js";const o=S.create({block:{height:200,backgroundColor:f.gray[100],borderRadius:5},grid:{paddingBottom:20},button:{alignSelf:"flex-start"}}),N={title:"Layout/Modal",component:p},r=({withCloseCross:u=!1,...h})=>{const[y,s]=P.useState(!1);return a(b,{children:[t(n,{color:"live",size:"small",onPress:()=>s(!0),style:o.button,children:"Open"}),a(p,{...h,visible:y,onPressClose:u?()=>s(!1):void 0,children:[t(k,{height:8}),t(g,{children:a(v,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:o.grid,children:[t(e,{style:o.block}),t(e,{style:o.block}),t(e,{style:o.block}),t(e,{style:o.block})]})}),t(n,{color:"live",size:"small",onPress:()=>s(!1),children:"Close"})]})]})},l=()=>a(B,{title:"Modal",description:["This component creates a modal with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[t(i,{title:"Default",children:t(r,{})}),t(i,{title:"With title",children:t(r,{title:"A title"})}),t(i,{title:"With title and icon",children:t(r,{title:"Title and icon",icon:"add-circle-filled",color:"live"})}),t(i,{title:"Closable with click outside and top right cross",children:t(r,{title:"Title and icon",icon:"add-circle-filled",color:"live",withCloseCross:!0})})]});var c,d,m;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Modal.stories-dNFB9b_Y.js.map
