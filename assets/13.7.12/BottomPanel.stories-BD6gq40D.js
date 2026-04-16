import{j as t,B as u,V as a,S as i,s as d,c as l}from"./ScrollView-CiN_b_nh.js";import{r as p}from"./iframe-Ba6wAGIo.js";import{B as m}from"./BottomPanel-CTxVFcrm.js";import{a as h}from"./LakeButton-8-LSCsTy.js";import{L as y}from"./LakeTextInput-Cs6Vzvvt.js";import{S as b}from"./_StoriesComponents-vlHcLd2N.js";import"./index-BQw_B8t5.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-B2YOnrHZ.js";import"./FocusTrap-BW2o1HQh.js";import"./array-BfAlyugE.js";import"./Suspendable-CJBdRuQY.js";import"./index-BfD3niIO.js";import"./extends-CF3RwP-h.js";import"./TransitionView-BAKqVxwZ.js";import"./index-CdBXNUb7.js";import"./Pressable-B2E80Jww.js";import"./Fill-Y_1-n4AR.js";import"./LakeSelect-C1TF_zxI.js";import"./useBoolean-CA3Mu1qv.js";import"./useDisclosure-CvTRPX4U.js";import"./FlatList-C5KiGOYI.js";import"./Popover-BxShYfus.js";import"./useResponsive-C3xVUhwa.js";import"./function-CqCJzgDJ.js";import"./Separator-B-QfdRVf.js";const e=d.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),J={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(u,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-BD6gq40D.js.map
