import{j as t}from"./jsx-runtime-BlAj40OV.js";import{r as u}from"./index-Cs7sjTYM.js";import{B as d}from"./BottomPanel-CoFv0YFr.js";import{s as y,c as a,B as b,V as l,S as i}from"./ScrollView-C9Sl8l-9.js";import{L as k}from"./LakeButton-92bu12CU.js";import{L as f}from"./LakeTextInput-DJ5dStww.js";import{S as g}from"./_StoriesComponents--LS6DWDz.js";import"./_commonjsHelpers-BosuxZz1.js";import"./commonStyles-t4XfA7cz.js";import"./useBodyClassName-DMoYUPTW.js";import"./FocusTrap-B09dygKp.js";import"./array-BfAlyugE.js";import"./Suspendable-DMtC6jeg.js";import"./index-D9GDMxJ-.js";import"./extends-CF3RwP-h.js";import"./TransitionView-BaZ6uvKi.js";import"./index-HmJNsiCB.js";import"./index-DJFdew98.js";import"./Pressable-B-ndY5ns.js";import"./Fill-ICVCYpoF.js";import"./LakeSelect-ROSCWCgY.js";import"./useDisclosure-DLkMFUa4.js";import"./Popover-DUphcz07.js";import"./useResponsive-CzIqCC5v.js";import"./function-BvcByoDa.js";const e=y.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:a.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:a.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:a.gray[200],borderRadius:8}}),K={title:"Layout/BottomPanel",component:d},x=n=>{const[s,r]=u.useState(n.defaultValue??"");return t.jsx(f,{...n,value:s,onChange:h=>r(h.currentTarget.value)})},o=()=>{const[n,s]=u.useState(!1),r=()=>{s(!0)};return t.jsxs(g,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(k,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(d,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(b,{style:e.panelContent,children:[t.jsx(x,{}),t.jsx(l,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(l,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(l,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,m,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  return <StoryBlock title="BottomPanel" description={["BottomPanel is a component that allows you to render a panel on the bottom of the screen.", "To make this component work, you need a root element with the id \`full-page-layer-root\` below your #root-app element", "You can open it by clicking on the button below."]}>
      <LakeButton onPress={open} size="small" style={styles.button}>
        Open bottom panel
      </LakeButton>

      <BottomPanel visible={isOpen} onPressClose={() => setIsOpen(false)}>
        <Box style={styles.panelContent}>
          <EditableInputText />
          <View style={styles.block1} />
          <Space height={16} />
          <View style={styles.block2} />
          <Space height={16} />
          <View style={styles.block3} />
        </Box>
      </BottomPanel>
    </StoryBlock>;
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const M=["Default"];export{o as Default,M as __namedExportsOrder,K as default};
//# sourceMappingURL=BottomPanel.stories-DmZmuBCh.js.map
