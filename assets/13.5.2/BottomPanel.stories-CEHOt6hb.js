import{j as t,B as u,V as a,S as i,s as d,c as l}from"./ScrollView-BCLqv96g.js";import{r as p}from"./iframe-edXrO8F_.js";import{B as m}from"./BottomPanel-D5mhgQyq.js";import{a as h}from"./LakeButton-CLhumrL5.js";import{L as y}from"./LakeTextInput-C8el5XJ4.js";import{S as b}from"./_StoriesComponents-ChnHEAWG.js";import"./index-Djf2DNB8.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-wS_RvF-o.js";import"./FocusTrap-DFR0ewV1.js";import"./array-BfAlyugE.js";import"./Suspendable-BIOytuAd.js";import"./index-Bu4H-ZeP.js";import"./extends-CF3RwP-h.js";import"./TransitionView-BX46r4tW.js";import"./index-Ainu085I.js";import"./Pressable-Cf-f7nQp.js";import"./Fill-DCyQJkZH.js";import"./LakeSelect-DBJVFTBq.js";import"./useDisclosure-C_UFhmwQ.js";import"./Popover-8DSMuw73.js";import"./useResponsive-chPjo5io.js";import"./function-04YWL6tz.js";import"./Separator-CD9GLBkF.js";import"./index-DeNsV6Hg.js";const e=d.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),H={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(u,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=BottomPanel.stories-CEHOt6hb.js.map
