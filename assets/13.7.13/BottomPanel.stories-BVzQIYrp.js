import{j as t,B as u,V as a,S as i,s as d,c as l}from"./ScrollView-Bxrf-30M.js";import{r as p}from"./iframe-DTBgiC1o.js";import{B as m}from"./BottomPanel-CTW02Gb6.js";import{a as h}from"./LakeButton-CKzCwoKZ.js";import{L as y}from"./LakeTextInput-AvHDkT0u.js";import{S as b}from"./_StoriesComponents-MB8JrupC.js";import"./index-CZ9ukVoV.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-C1QF75g8.js";import"./FocusTrap-BuvtimWe.js";import"./array-BfAlyugE.js";import"./Suspendable-zGEF7wCH.js";import"./index-DFw7WX7U.js";import"./extends-CF3RwP-h.js";import"./TransitionView-d5l2Wg06.js";import"./index-DOKVmtuT.js";import"./Pressable-DzaIteOc.js";import"./Fill-CDWifB2v.js";import"./LakeSelect-LN0wH1on.js";import"./useBoolean-DFVEAMqr.js";import"./useDisclosure-ClmsxoMv.js";import"./FlatList-CTR5rwKq.js";import"./Popover-C-BajB5D.js";import"./useResponsive-hSoRUQXu.js";import"./function-Cd461UgH.js";import"./Separator-B8QXwaOs.js";const e=d.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),J={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(u,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-BVzQIYrp.js.map
