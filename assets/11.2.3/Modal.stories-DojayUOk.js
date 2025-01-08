import{j as t}from"./jsx-runtime-DT09rT5F.js";import{G as y}from"./Grid-DMGB9zy1.js";import{L as a}from"./LakeButton-r-Uybfm2.js";import{s as x,c as j,S as f,j as S,V as i}from"./ScrollView-C1yxRy16.js";import{r as b}from"./index-DXKZGL6g.js";import{L as m}from"./LakeModal-DUU5Nv-7.js";import{S as g,a as r}from"./_StoriesComponents-BSXeOJ1Z.js";import"./commonStyles-CWvHnKRn.js";import"./Pressable-to27AyJA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BpljNV4n.js";import"./extends-CF3RwP-h.js";import"./index-BeFrmAzh.js";import"./FocusTrap-Cq0HuauR.js";import"./array-BfAlyugE.js";import"./LakeHeading-CD0FHpfz.js";import"./Suspendable-CKuscA2L.js";import"./ResponsiveContainer-WxURT3St.js";import"./TransitionView-Cm_7ViIn.js";import"./useBodyClassName-CYzM7DM-.js";import"./i18n-DmAlgk2N.js";import"./rifm-BpdKztb4.js";import"./utc-BdCcOVEk.js";import"./Separator-DMQr2iVh.js";const o=x.create({block:{height:200,backgroundColor:j.gray[100],borderRadius:5},grid:{paddingBottom:20},button:{alignSelf:"flex-start"}}),H={title:"Layout/Modal",component:m},l=({withCloseCross:p=!1,...u})=>{const[h,s]=b.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(a,{color:"live",size:"small",onPress:()=>s(!0),style:o.button,children:"Open"}),t.jsxs(m,{...u,visible:h,onPressClose:p?()=>s(!1):void 0,children:[t.jsx(f,{height:8}),t.jsx(S,{children:t.jsxs(y,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:o.grid,children:[t.jsx(i,{style:o.block}),t.jsx(i,{style:o.block}),t.jsx(i,{style:o.block}),t.jsx(i,{style:o.block})]})}),t.jsx(a,{color:"live",size:"small",onPress:()=>s(!1),children:"Close"})]})]})},e=()=>t.jsxs(g,{title:"Modal",description:["This component creates a modal with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[t.jsx(r,{title:"Default",children:t.jsx(l,{})}),t.jsx(r,{title:"With title",children:t.jsx(l,{title:"A title"})}),t.jsx(r,{title:"With title and icon",children:t.jsx(l,{title:"Title and icon",icon:"add-circle-filled",color:"live"})}),t.jsx(r,{title:"Closable with click outside and top right cross",children:t.jsx(l,{title:"Title and icon",icon:"add-circle-filled",color:"live",withCloseCross:!0})})]});e.__docgenInfo={description:"",methods:[],displayName:"All"};var n,c,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Modal.stories-DojayUOk.js.map
