import{j as t,s as y,S as x,h as j,V as i,c as S}from"./ScrollView-BWUUuHHg.js";import{G as f}from"./Grid-BIw7z_bI.js";import{L as a}from"./LakeButton-hYwaHVUN.js";import{r as b}from"./iframe-6KjwW4oS.js";import{L as m}from"./LakeModal-DIvTTnQj.js";import{S as g,a as l}from"./_StoriesComponents-BohqnYIu.js";import"./index-CeW0J0_o.js";import"./commonStyles-BBEkV6IC.js";import"./Pressable-BAhFhj_Q.js";import"./index-CD3OAtV7.js";import"./extends-CF3RwP-h.js";import"./FocusTrap-D86cyOjk.js";import"./array-BfAlyugE.js";import"./LakeHeading-DANTOdFi.js";import"./Suspendable-hEmgo3ye.js";import"./ResponsiveContainer-C5WWt7K-.js";import"./TransitionView-B15kg-VR.js";import"./useBodyClassName-T8FUXfge.js";import"./i18n-fq6zpJzM.js";import"./rifm-DQ0TUjhy.js";import"./Separator-BhGW0iGR.js";const o=y.create({block:{height:200,backgroundColor:S.gray[100],borderRadius:5},grid:{paddingBottom:20},button:{alignSelf:"flex-start"}}),I={title:"Layout/Modal",component:m},r=({withCloseCross:p=!1,...h})=>{const[u,s]=b.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(a,{color:"live",size:"small",onPress:()=>s(!0),style:o.button,children:"Open"}),t.jsxs(m,{...h,visible:u,onPressClose:p?()=>s(!1):void 0,children:[t.jsx(x,{height:8}),t.jsx(j,{children:t.jsxs(f,{horizontalSpace:4,verticalSpace:4,numColumns:4,style:o.grid,children:[t.jsx(i,{style:o.block}),t.jsx(i,{style:o.block}),t.jsx(i,{style:o.block}),t.jsx(i,{style:o.block})]})}),t.jsx(a,{color:"live",size:"small",onPress:()=>s(!1),children:"Close"})]})]})},e=()=>t.jsxs(g,{title:"Modal",description:["This component creates a modal with enter and leave animation. ",'You can try it by clicking on "Open" button.'],children:[t.jsx(l,{title:"Default",children:t.jsx(r,{})}),t.jsx(l,{title:"With title",children:t.jsx(r,{title:"A title"})}),t.jsx(l,{title:"With title and icon",children:t.jsx(r,{title:"Title and icon",icon:"add-circle-filled",color:"live"})}),t.jsx(l,{title:"Closable with click outside and top right cross",children:t.jsx(r,{title:"Title and icon",icon:"add-circle-filled",color:"live",withCloseCross:!0})})]});e.__docgenInfo={description:"",methods:[],displayName:"All"};var n,c,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
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
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const N=["All"];export{e as All,N as __namedExportsOrder,I as default};
//# sourceMappingURL=Modal.stories-DD9Eel25.js.map
