import{j as t,B as u,V as a,S as i,s as d,c as l}from"./ScrollView-Cb3FzIY4.js";import{r as p}from"./iframe-f7DV6EdO.js";import{B as m}from"./BottomPanel-Dk3ivvIv.js";import{a as h}from"./LakeButton-4x0Gwt1q.js";import{L as y}from"./LakeTextInput-Rczp1PWo.js";import{S as b}from"./_StoriesComponents-lrc9y12n.js";import"./index-lfHgBQzh.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-ugfRTf_D.js";import"./FocusTrap-EdrjPBdW.js";import"./array-BfAlyugE.js";import"./Suspendable-alLLsRyF.js";import"./index-CxbuG1Ml.js";import"./extends-CF3RwP-h.js";import"./TransitionView-WW2N4q6u.js";import"./index-CplNnxVW.js";import"./Pressable-BF_8ftX2.js";import"./Fill-QZWpGaOZ.js";import"./LakeSelect-BDHpmMaI.js";import"./useBoolean-CMR9xJRy.js";import"./useDisclosure-smVlq9X8.js";import"./Popover-BT5ldloc.js";import"./useResponsive-bPLL-moi.js";import"./function-C3aY6tS3.js";import"./Separator-D8CvsOV1.js";const e=d.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),H={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(u,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-IiULbSUf.js.map
