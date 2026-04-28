import{j as t,B as u,V as a,S as i,s as d,c as l}from"./ScrollView-043YSePJ.js";import{r as p}from"./iframe-BN3BVKX8.js";import{B as m}from"./BottomPanel-D860CveQ.js";import{a as h}from"./LakeButton-BeYGalsG.js";import{L as y}from"./LakeTextInput-CkqDn3M7.js";import{S as b}from"./_StoriesComponents-CeyrHVJO.js";import"./index-Dlpirge6.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-Cpl99UgS.js";import"./FocusTrap-9tfiqDPy.js";import"./array-BfAlyugE.js";import"./Suspendable-C9wvjYmr.js";import"./index-P1yuoy8V.js";import"./extends-CF3RwP-h.js";import"./TransitionView-BtVON78z.js";import"./index-CEeJu2lx.js";import"./Pressable-DzhiLFyl.js";import"./Fill-CI0y9lir.js";import"./LakeSelect-BysjrbIM.js";import"./useBoolean-Bk_yQopR.js";import"./useDisclosure-BCjiHsol.js";import"./FlatList-BToDh8jL.js";import"./Popover-BRPPsjd3.js";import"./useResponsive-C6P0SBx2.js";import"./function-C9uJWYY7.js";import"./Separator-CcCQ9Zfp.js";const e=d.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),J={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(u,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const K=["Default"];export{o as Default,K as __namedExportsOrder,J as default};
//# sourceMappingURL=BottomPanel.stories-C86O9O9L.js.map
