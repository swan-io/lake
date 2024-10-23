import{j as t}from"./jsx-runtime-BlAj40OV.js";import{L as m}from"./LakeModal-Cmn2R1W6.js";import{r as y}from"./index-Cs7sjTYM.js";import{G as x}from"./Grid-8lfRVum1.js";import{L as a}from"./LakeButton-92bu12CU.js";import{s as j,c as f,S,m as b,V as i}from"./ScrollView-C9Sl8l-9.js";import{S as g,a as l}from"./_StoriesComponents--LS6DWDz.js";import"./FocusTrap-B09dygKp.js";import"./array-BfAlyugE.js";import"./LakeHeading-CR6cMtqT.js";import"./Suspendable-DMtC6jeg.js";import"./index-D9GDMxJ-.js";import"./extends-CF3RwP-h.js";import"./Pressable-B-ndY5ns.js";import"./_commonjsHelpers-BosuxZz1.js";import"./ResponsiveContainer-CZKIyyuy.js";import"./TransitionView-BaZ6uvKi.js";import"./commonStyles-t4XfA7cz.js";import"./useBodyClassName-DMoYUPTW.js";import"./i18n-wa0w1hPY.js";import"./rifm-Kh7ohp2j.js";import"./utc-Bb9NEY8r.js";import"./index-DJFdew98.js";const o=j.create({block:{height:200,backgroundColor:f.gray[100],borderRadius:5},grid:{paddingBottom:20},button:{alignSelf:"flex-start"}}),q={title:"Layout/Modal",component:m},r=({withCloseCross:p=!1,...u})=>{const[h,s]=y.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(a,{color:"live",size:"small",onPress:()=>s(!0),style:o.button,children:"Open"}),t.jsxs(m,{...u,visible:h,onPressClose:p?()=>s(!1):void 0,children:[t.jsx(S,{height:8}),t.jsx(b,{children:t.jsxs(x,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:o.grid,children:[t.jsx(i,{style:o.block}),t.jsx(i,{style:o.block}),t.jsx(i,{style:o.block}),t.jsx(i,{style:o.block})]})}),t.jsx(a,{color:"live",size:"small",onPress:()=>s(!1),children:"Close"})]})]})},e=()=>t.jsxs(g,{title:"Modal",description:["This component creates a modal with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[t.jsx(l,{title:"Default",children:t.jsx(r,{})}),t.jsx(l,{title:"With title",children:t.jsx(r,{title:"A title"})}),t.jsx(l,{title:"With title and icon",children:t.jsx(r,{title:"Title and icon",icon:"add-circle-filled",color:"live"})}),t.jsx(l,{title:"Closable with click outside and top right cross",children:t.jsx(r,{title:"Title and icon",icon:"add-circle-filled",color:"live",withCloseCross:!0})})]});e.__docgenInfo={description:"",methods:[],displayName:"All"};var n,c,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const H=["All"];export{e as All,H as __namedExportsOrder,q as default};
//# sourceMappingURL=Modal.stories-Cqhfy04g.js.map
