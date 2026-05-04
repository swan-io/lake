import{j as t,B as u,V as a,S as i,s as d,c as l}from"./ScrollView-CdHujGCN.js";import{r as p}from"./iframe-Bn10qkjQ.js";import{B as m}from"./BottomPanel-BDpQiopz.js";import{a as h}from"./LakeButton-CHerjbt1.js";import{L as y}from"./LakeTextInput-DHKxjkfS.js";import{S as b}from"./_StoriesComponents-4wD3BEJK.js";import"./index-P7K2u9-7.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-5vg3V0wN.js";import"./FocusTrap-TP055Q0t.js";import"./array-BfAlyugE.js";import"./Suspendable-71IjA37W.js";import"./index-FfHvclKN.js";import"./extends-CF3RwP-h.js";import"./TransitionView-ChN8q-Qm.js";import"./index-B0ya5THr.js";import"./Pressable-BiyuqNto.js";import"./Fill-DocjPPil.js";import"./LakeSelect-BUMNbnWb.js";import"./useBoolean-Dze_Y4HW.js";import"./useDisclosure-Bv2_Fdd9.js";import"./FlatList-1L0-V8fx.js";import"./Popover-CkSa4q2M.js";import"./useResponsive-B3o3qCTj.js";import"./function-BixSqIMc.js";import"./Separator-DxUjSylu.js";const e=d.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),J={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(u,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-Chx8sTKp.js.map
