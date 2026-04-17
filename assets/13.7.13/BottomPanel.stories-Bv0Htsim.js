import{j as t,B as u,V as a,S as i,s as d,c as l}from"./ScrollView-zVh4d88f.js";import{r as p}from"./iframe-H61uKIWX.js";import{B as m}from"./BottomPanel-WYzaHv7u.js";import{a as h}from"./LakeButton-C7e788WY.js";import{L as y}from"./LakeTextInput-C-0utnC6.js";import{S as b}from"./_StoriesComponents-CwOIfSFd.js";import"./index-zB7QzWSh.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-BpYUnhDK.js";import"./FocusTrap-D-E23-Y2.js";import"./array-BfAlyugE.js";import"./Suspendable-aGUznrDh.js";import"./index-BQdD0umv.js";import"./extends-CF3RwP-h.js";import"./TransitionView-DheeUbrp.js";import"./index-D8QwUHvj.js";import"./Pressable-CtVaKPeK.js";import"./Fill-DqvPufhB.js";import"./LakeSelect-DaDEqVYQ.js";import"./useBoolean-CfFxvoVO.js";import"./useDisclosure-5aV_PU76.js";import"./FlatList-DSr7ez1T.js";import"./Popover-CDawTphe.js";import"./useResponsive-DZ8T-iHn.js";import"./function-CvoINTUH.js";import"./Separator-DZ-QQn4o.js";const e=d.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),J={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(u,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-Bv0Htsim.js.map
