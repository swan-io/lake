import{j as t,s as u,B as d,V as a,S as i,c as l}from"./ScrollView-QVMNzpGz.js";import{r as p}from"./iframe-BNivJNQQ.js";import{B as m}from"./BottomPanel-C0X9Y4gd.js";import{L as h}from"./LakeButton-DLISmzZM.js";import{L as y}from"./LakeTextInput-BHL5-qCR.js";import{S as b}from"./_StoriesComponents-DPAA8g2r.js";import"./index-Bn-lSEWq.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-hagpN1HU.js";import"./FocusTrap-DuG3XQkL.js";import"./array-BfAlyugE.js";import"./Suspendable-CAaB37ga.js";import"./index-BbK1RUvt.js";import"./extends-CF3RwP-h.js";import"./TransitionView-CaUaB7Pu.js";import"./index-CfV73qWe.js";import"./Pressable-BYy8PL0j.js";import"./Fill-Cv46ZCpQ.js";import"./LakeSelect-CRzVuRbp.js";import"./useDisclosure-B4uvSx_Y.js";import"./Popover-BKBefO_J.js";import"./useResponsive-BIua4cws.js";import"./function-34H2RetB.js";import"./Separator-DQvT4H8s.js";import"./index-ZQPdN10u.js";const e=u.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),H={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(d,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const J=["Default"];export{o as Default,J as __namedExportsOrder,H as default};
//# sourceMappingURL=BottomPanel.stories-BmIF2m1n.js.map
