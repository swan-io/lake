import{j as t,B as u,V as a,S as i,s as d,c as l}from"./ScrollView-MekbySN5.js";import{r as p}from"./iframe-DtSoNM3L.js";import{B as m}from"./BottomPanel-Cjsw0JBU.js";import{a as h}from"./LakeButton-D_3m2Hv8.js";import{L as y}from"./LakeTextInput-DS0hXeES.js";import{S as b}from"./_StoriesComponents-Bsw58G5f.js";import"./index-C7iaMPW0.js";import"./preload-helper-D1IIBeq1.js";import"./commonStyles-BBEkV6IC.js";import"./useBodyClassName-BhOqwFK2.js";import"./FocusTrap-ImEOf_5E.js";import"./array-BfAlyugE.js";import"./Suspendable-DgV3aU8o.js";import"./index-CtYBqWfq.js";import"./extends-CF3RwP-h.js";import"./TransitionView-CSY0ajHF.js";import"./index-Bt2BoDkB.js";import"./Pressable-DN1pHPdC.js";import"./Fill-B_-1SZH6.js";import"./LakeSelect-C8_YtGO2.js";import"./i18n-5PuG3vgA.js";import"./useBoolean-BfWIjLUt.js";import"./useDisclosure-BGSCSgpe.js";import"./FlatList-BHhLAUh8.js";import"./Popover-CrFlDy7V.js";import"./useResponsive-ByrXWIYR.js";import"./function-DUelx21e.js";import"./Separator-TZ8ihUJF.js";const e=d.create({button:{alignSelf:"flex-start"},panelContent:{padding:16},block1:{width:120,height:60,backgroundColor:l.gray[200],borderRadius:8},block2:{width:200,height:60,backgroundColor:l.gray[200],borderRadius:8},block3:{width:180,height:60,backgroundColor:l.gray[200],borderRadius:8}}),K={title:"Layout/BottomPanel",component:m},k=n=>{const[s,r]=p.useState(n.defaultValue??"");return t.jsx(y,{...n,value:s,onChange:c=>r(c.currentTarget.value)})},o=()=>{const[n,s]=p.useState(!1),r=()=>{s(!0)};return t.jsxs(b,{title:"BottomPanel",description:["BottomPanel is a component that allows you to render a panel on the bottom of the screen.","To make this component work, you need a root element with the id `full-page-layer-root` below your #root-app element","You can open it by clicking on the button below."],children:[t.jsx(h,{onPress:r,size:"small",style:e.button,children:"Open bottom panel"}),t.jsx(m,{visible:n,onPressClose:()=>s(!1),children:t.jsxs(u,{style:e.panelContent,children:[t.jsx(k,{}),t.jsx(a,{style:e.block1}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block2}),t.jsx(i,{height:16}),t.jsx(a,{style:e.block3})]})})]})};o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const M=["Default"];export{o as Default,M as __namedExportsOrder,K as default};
//# sourceMappingURL=BottomPanel.stories-DddWdpMq.js.map
