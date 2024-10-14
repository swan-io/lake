import{s as y,c as x,j as t,S as j,n as S,V as i}from"./ScrollView-DWjQ00nM.js";import{L as m}from"./LakeModal-Cq3qJJ5A.js";import{r as f}from"./index-Cs7sjTYM.js";import{G as b}from"./Grid-Dm3gHPGa.js";import{L as a}from"./LakeButton-B6sbG4pD.js";import{S as g,a as l}from"./_StoriesComponents-_jmnnGUR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BU4L-DQy.js";import"./FocusTrap-BmeT9-In.js";import"./array-BfAlyugE.js";import"./LakeHeading-Devxa2jE.js";import"./Suspendable-Di1_g3U1.js";import"./index-BJ6ZNIxC.js";import"./extends-CF3RwP-h.js";import"./Pressable-CMe_F2_9.js";import"./ResponsiveContainer-BdaVvCuB.js";import"./TransitionView-cETjUupd.js";import"./commonStyles-t4XfA7cz.js";import"./useBodyClassName-DMoYUPTW.js";import"./i18n-B4KUJV-9.js";import"./rifm-CFTOlIhk.js";import"./utc-DJvBpWoA.js";const o=y.create({block:{height:200,backgroundColor:x.gray[100],borderRadius:5},grid:{paddingBottom:20},button:{alignSelf:"flex-start"}}),N={title:"Layout/Modal",component:m},r=({withCloseCross:p=!1,...u})=>{const[h,s]=f.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(a,{color:"live",size:"small",onPress:()=>s(!0),style:o.button,children:"Open"}),t.jsxs(m,{...u,visible:h,onPressClose:p?()=>s(!1):void 0,children:[t.jsx(j,{height:8}),t.jsx(S,{children:t.jsxs(b,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:o.grid,children:[t.jsx(i,{style:o.block}),t.jsx(i,{style:o.block}),t.jsx(i,{style:o.block}),t.jsx(i,{style:o.block})]})}),t.jsx(a,{color:"live",size:"small",onPress:()=>s(!1),children:"Close"})]})]})},e=()=>t.jsxs(g,{title:"Modal",description:["This component creates a modal with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[t.jsx(l,{title:"Default",children:t.jsx(r,{})}),t.jsx(l,{title:"With title",children:t.jsx(r,{title:"A title"})}),t.jsx(l,{title:"With title and icon",children:t.jsx(r,{title:"Title and icon",icon:"add-circle-filled",color:"live"})}),t.jsx(l,{title:"Closable with click outside and top right cross",children:t.jsx(r,{title:"Title and icon",icon:"add-circle-filled",color:"live",withCloseCross:!0})})]});e.__docgenInfo={description:"",methods:[],displayName:"All"};var n,c,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const q=["All"];export{e as All,q as __namedExportsOrder,N as default};
//# sourceMappingURL=Modal.stories-CJCooOA9.js.map